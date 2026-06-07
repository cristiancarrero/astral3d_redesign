"use client";
import { FaCogs, FaRocket, FaSmile } from 'react-icons/fa';

export default function ServicesSection() {
  return (
    <section className="relative z-30 bg-[#18122B] py-20 px-4 md:px-0">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">¿Por qué elegirnos?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center">
            <FaCogs className="text-5xl text-[#ffe066] mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-2">Tecnología avanzada</h3>
            <p className="text-white/80">Impresoras 3D de última generación para resultados perfectos.</p>
          </div>
          <div className="flex flex-col items-center">
            <FaRocket className="text-5xl text-[#8e2de2] mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-2">Entrega rápida</h3>
            <p className="text-white/80">Tus modelos listos en tiempo récord y con seguimiento online.</p>
          </div>
          <div className="flex flex-col items-center">
            <FaSmile className="text-5xl text-[#6c63ff] mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-2">Atención personalizada</h3>
            <p className="text-white/80">Te asesoramos en cada paso para que tu idea sea un éxito.</p>
          </div>
        </div>
      </div>
    </section>
  );
} 