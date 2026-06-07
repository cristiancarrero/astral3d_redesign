"use client";
import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  alpha: number;
}

const CyberpunkParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Ajustar tamaño del canvas al contenedor padre
    const resizeCanvas = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight * 0.7;
      }
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Crear partículas
    const createParticles = () => {
      const particles: Particle[] = [];
      const colors = ['#ff00ff', '#00ffff', '#ff0066', '#00ff00'];
      
      for (let i = 0; i < 20; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          speedX: (Math.random() - 0.5) * 1,
          speedY: (Math.random() - 0.5) * 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: Math.random() * 0.3 + 0.1
        });
      }
      return particles;
    };

    particlesRef.current = createParticles();

    // Animar partículas
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Rebote en los bordes
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        // Dibujar partícula
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `${particle.color}${Math.floor(particle.alpha * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();

        // Efecto de estela más sutil
        ctx.beginPath();
        ctx.moveTo(particle.x, particle.y);
        ctx.lineTo(
          particle.x - particle.speedX * 3,
          particle.y - particle.speedY * 3
        );
        ctx.strokeStyle = `${particle.color}${Math.floor(particle.alpha * 64).toString(16).padStart(2, '0')}`;
        ctx.lineWidth = particle.size / 3;
        ctx.stroke();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-20"
      style={{ mixBlendMode: 'screen', width: '100%', height: '100%' }}
    />
  );
};

export default CyberpunkParticles; 