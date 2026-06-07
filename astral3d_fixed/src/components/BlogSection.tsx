"use client";

export default function BlogSection() {
  return (
    <section className="relative z-30 bg-[#18122B] py-20 px-4 md:px-0">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Blog & Novedades</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#232046] rounded-2xl p-6 shadow-lg flex flex-col items-start">
            <span className="text-xs text-[#ffe066] mb-2">12/06/2024</span>
            <h3 className="text-xl font-semibold text-white mb-2">¿Qué material elegir para tu impresión 3D?</h3>
            <p className="text-white/80 text-sm">Descubre las diferencias entre PLA, ABS y resina para tus proyectos.</p>
          </div>
          <div className="bg-[#232046] rounded-2xl p-6 shadow-lg flex flex-col items-start">
            <span className="text-xs text-[#8e2de2] mb-2">05/06/2024</span>
            <h3 className="text-xl font-semibold text-white mb-2">Nuevas impresoras en nuestro taller</h3>
            <p className="text-white/80 text-sm">Ampliamos nuestra capacidad para ofrecerte mejores tiempos y calidad.</p>
          </div>
          <div className="bg-[#232046] rounded-2xl p-6 shadow-lg flex flex-col items-start">
            <span className="text-xs text-[#6c63ff] mb-2">28/05/2024</span>
            <h3 className="text-xl font-semibold text-white mb-2">Ideas creativas para regalar en 3D</h3>
            <p className="text-white/80 text-sm">Inspírate con ejemplos de regalos personalizados y únicos.</p>
          </div>
        </div>
      </div>
    </section>
  );
} 