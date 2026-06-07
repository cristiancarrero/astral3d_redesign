"use client";

export default function GallerySection() {
  return (
    <section className="relative z-30 bg-[#18122B] py-20 px-4 md:px-0">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Galería de trabajos</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-[#232046] rounded-2xl p-4 shadow-lg flex flex-col items-center">
            <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80" alt="Trabajo 1" className="w-full h-40 object-cover rounded-xl mb-3" />
            <p className="text-white/80 text-sm">Figura personalizada en resina</p>
          </div>
          <div className="bg-[#232046] rounded-2xl p-4 shadow-lg flex flex-col items-center">
            <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" alt="Trabajo 2" className="w-full h-40 object-cover rounded-xl mb-3" />
            <p className="text-white/80 text-sm">Prototipo técnico PLA</p>
          </div>
          <div className="bg-[#232046] rounded-2xl p-4 shadow-lg flex flex-col items-center">
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Trabajo 3" className="w-full h-40 object-cover rounded-xl mb-3" />
            <p className="text-white/80 text-sm">Decoración temática</p>
          </div>
          <div className="bg-[#232046] rounded-2xl p-4 shadow-lg flex flex-col items-center">
            <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="Trabajo 4" className="w-full h-40 object-cover rounded-xl mb-3" />
            <p className="text-white/80 text-sm">Miniatura de colección</p>
          </div>
        </div>
      </div>
    </section>
  );
} 