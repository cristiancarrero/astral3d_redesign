"use client";

import React, { useRef, useEffect, useState } from 'react';

const newsExamples = [
  {
    title: '¡Nuevo modelo: Dragón Cyberpunk!',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
    description: 'Descubre nuestro último diseño inspirado en la fantasía futurista.'
  },
  {
    title: 'Colaboración con Artistas Locales',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    description: 'Lanzamos una colección exclusiva junto a creadores de la ciudad.'
  },
  {
    title: 'Impresión 3D ecológica',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    description: 'Ahora usamos materiales reciclados en nuestras figuras.'
  },
  {
    title: 'Taller gratuito de modelado 3D',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80',
    description: 'Apúntate a nuestro próximo evento presencial.'
  },
  {
    title: '¡Personaliza tu figura!',
    image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80',
    description: 'Envíanos tu idea y la hacemos realidad.'
  },
];

const AUTO_SCROLL_INTERVAL = 5000;

const NewsCarousel: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const next = () => {
    setCurrentIdx((prev) => (prev + 1) % newsExamples.length);
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(next, AUTO_SCROLL_INTERVAL);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIdx]);

  const news = newsExamples[currentIdx];

  return (
    <section className="relative bg-[#232046] py-16 px-4 md:px-0 overflow-hidden">
      <div className="w-full max-w-5xl mx-auto">
        <h2 className="text-center mb-12">
          <span className="cyberpunk-clean-title">NOVEDADES</span>
        </h2>
        <div className="bg-[#18122B] rounded-3xl shadow-2xl p-12 flex flex-col items-center w-full max-w-4xl min-h-[32rem] transition-transform duration-500 hover:scale-105 mx-auto">
          <img src={news.image} alt={news.title} className="w-full h-80 object-cover rounded-2xl mb-8 shadow-lg" style={{minHeight: '20rem'}} />
          <h3 className="text-3xl md:text-4xl font-extrabold text-[#ffe066] mb-4 text-center drop-shadow">{news.title}</h3>
          <p className="text-white/90 text-center text-xl mb-2">{news.description}</p>
        </div>
        <div className="flex justify-center items-center gap-4 mt-10">
          {newsExamples.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIdx(idx)}
              className={`w-6 h-6 rounded-full border-2 border-[#ffe066] transition-all duration-300 mx-2 focus:outline-none ${currentIdx === idx ? 'bg-[#ffe066] scale-125 shadow-lg' : 'bg-transparent'}`}
              aria-label={`Ir a la noticia ${idx + 1}`}
            />
          ))}
        </div>
      </div>
      <style jsx>{`
        .cyberpunk-clean-title {
          display: inline-block;
          font-family: inherit;
          font-size: 3.2rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          background: linear-gradient(90deg, #ff00cc 0%, #00fff7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
          filter: drop-shadow(0 2px 12px #00fff799) drop-shadow(0 0 4px #ff00cc66);
        }
        @media (max-width: 600px) {
          .cyberpunk-clean-title { font-size: 2rem; }
        }
      `}</style>
    </section>
  );
};

export default NewsCarousel; 