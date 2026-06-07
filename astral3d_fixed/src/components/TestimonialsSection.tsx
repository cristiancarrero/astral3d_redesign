"use client";

export default function TestimonialsSection() {
  return (
    <section className="relative z-30 bg-[#232046] py-20 px-4 md:px-0">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Testimonios de clientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center bg-[#18122B] rounded-2xl p-6 shadow-lg">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Cliente 1" className="w-20 h-20 rounded-full mb-4" />
            <h3 className="text-xl font-semibold text-[#ffe066] mb-2">Carlos M.</h3>
            <p className="text-white/80 text-center">&ldquo;¡Excelente calidad y atención! Mi figura personalizada quedó perfecta.&rdquo;</p>
          </div>
          <div className="flex flex-col items-center bg-[#18122B] rounded-2xl p-6 shadow-lg">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Cliente 2" className="w-20 h-20 rounded-full mb-4" />
            <h3 className="text-xl font-semibold text-[#8e2de2] mb-2">Lucía G.</h3>
            <p className="text-white/80 text-center">&ldquo;Rápidos y profesionales. Recomiendo Astral3D para cualquier proyecto.&rdquo;</p>
          </div>
          <div className="flex flex-col items-center bg-[#18122B] rounded-2xl p-6 shadow-lg">
            <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="Cliente 3" className="w-20 h-20 rounded-full mb-4" />
            <h3 className="text-xl font-semibold text-[#6c63ff] mb-2">Miguel R.</h3>
            <p className="text-white/80 text-center">&ldquo;Me ayudaron a imprimir una pieza difícil y el resultado fue increíble.&rdquo;</p>
          </div>
        </div>
      </div>
    </section>
  );
} 