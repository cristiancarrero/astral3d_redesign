"use client";

export default function OrderFormSection() {
  return (
    <section className="relative z-30 bg-[#232046] py-20 px-4 md:px-0">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Pide tu presupuesto</h2>
        <form className="bg-[#18122B] rounded-2xl p-8 flex flex-col gap-6 shadow-lg">
          <input type="text" placeholder="Nombre" className="px-4 py-3 rounded-lg bg-[#232046] text-white placeholder:text-white/60 outline-none" />
          <input type="email" placeholder="Email" className="px-4 py-3 rounded-lg bg-[#232046] text-white placeholder:text-white/60 outline-none" />
          <input type="file" className="px-4 py-3 rounded-lg bg-[#232046] text-white outline-none" />
          <select className="px-4 py-3 rounded-lg bg-[#232046] text-white outline-none">
            <option>Material</option>
            <option>PLA</option>
            <option>ABS</option>
            <option>Resina</option>
          </select>
          <input type="text" placeholder="Color" className="px-4 py-3 rounded-lg bg-[#232046] text-white placeholder:text-white/60 outline-none" />
          <textarea placeholder="Comentarios o detalles" className="px-4 py-3 rounded-lg bg-[#232046] text-white placeholder:text-white/60 outline-none min-h-[100px]" />
          <button type="submit" className="mt-2 px-8 py-3 rounded-full bg-[#6c63ff] hover:bg-[#8e2de2] text-white text-lg font-semibold shadow-lg transition-transform duration-300 hover:scale-105">Enviar solicitud</button>
        </form>
      </div>
    </section>
  );
} 