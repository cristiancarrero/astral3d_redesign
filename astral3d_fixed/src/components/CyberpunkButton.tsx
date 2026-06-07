"use client";
import React, { useState } from 'react';

interface CyberpunkButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const CyberpunkButton: React.FC<CyberpunkButtonProps> = ({ 
  children, 
  onClick,
  className = ''
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsPressed(false);
      }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      className={`
        relative px-8 py-4 rounded-full 
        bg-[#6c63ff] hover:bg-[#ffe066] 
        text-white hover:text-[#18122B] 
        text-lg font-semibold 
        shadow-lg transition-all duration-300 
        hover:scale-110 
        animate-fade-in delay-400 
        overflow-hidden
        ${className}
      `}
    >
      {/* Efecto de brillo */}
      <div
        className={`
          absolute inset-0 
          bg-gradient-to-r from-transparent via-white/20 to-transparent 
          transform -translate-x-full
          transition-transform duration-1000
          ${isHovered ? 'translate-x-full' : ''}
        `}
      />
      
      {/* Efecto de borde */}
      <div
        className={`
          absolute inset-0 
          border-2 border-white/30 
          rounded-full
          transition-all duration-300
          ${isHovered ? 'border-[#ffe066] scale-105' : ''}
          ${isPressed ? 'scale-95' : ''}
        `}
      />

      {/* Efecto de glitch */}
      <div
        className={`
          absolute inset-0 
          bg-gradient-to-r from-[#ff00ff]/20 via-[#00ffff]/20 to-[#ff0066]/20
          opacity-0
          transition-opacity duration-300
          ${isHovered ? 'opacity-100' : ''}
        `}
      />

      {/* Contenido del botón */}
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default CyberpunkButton; 