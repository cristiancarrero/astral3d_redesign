"use client";
import { FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#f6f3ff] dark:bg-[#18122B] py-10 px-4 mt-10 border-t border-[#8e2de2]/30 transition-colors duration-300">
      <div className="max-w-5xl mx-auto flex flex-col gap-6 text-center md:text-left">
        <p className="text-[#232046]/80 dark:text-white/80 text-lg mb-4">¿Tienes dudas? Escríbenos y te responderemos lo antes posible.</p>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <img src="/logo.png" alt="Astral3D Logo" className="w-14 h-14 mb-2 mx-auto md:mx-0" />
            <p className="text-[#232046]/80 dark:text-white/80">&copy; {new Date().getFullYear()} Astral3D. Todos los derechos reservados.</p>
          </div>
          <div className="flex flex-col gap-2">
            <a href="mailto:info@astral3d.com" className="text-[#8e2de2] font-semibold hover:underline flex items-center gap-2 justify-center md:justify-start dark:text-[#ffe066] dark:hover:text-[#8e2de2]"> <FaEnvelope /> info@astral3d.com</a>
            <div className="flex gap-4 justify-center md:justify-start mt-2">
              <a href="#" className="text-[#ffe066] text-2xl hover:text-[#8e2de2] dark:text-[#8e2de2] dark:hover:text-[#ffe066]"><FaInstagram /></a>
              <a href="#" className="text-[#6c63ff] text-2xl hover:text-[#8e2de2] dark:text-[#ffe066] dark:hover:text-[#8e2de2]"><FaTwitter /></a>
            </div>
          </div>
          <div className="text-[#232046]/60 dark:text-white/60 text-xs flex flex-col gap-1 mt-4 md:mt-0">
            <a href="#" className="hover:underline">Aviso legal</a>
            <a href="#" className="hover:underline">Política de privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
} 
