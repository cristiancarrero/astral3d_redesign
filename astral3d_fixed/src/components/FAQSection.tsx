"use client";

export default function FAQSection() {
  return (
    <section className="relative z-30 bg-[#18122B] py-20 px-4 md:px-0">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Preguntas frecuentes</h2>
        <div className="space-y-8">
          <div className="bg-[#232046] rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold text-[#ffe066] mb-2">¿Qué archivos aceptan para imprimir?</h3>
            <p className="text-white/80">Aceptamos archivos STL, OBJ y 3MF. Si tienes dudas, ¡contáctanos!</p>
          </div>
          <div className="bg-[#232046] rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold text-[#8e2de2] mb-2">¿Cuánto tarda el proceso de impresión?</h3>
            <p className="text-white/80">Depende del tamaño y complejidad, pero solemos entregar en 2-5 días hábiles.</p>
          </div>
          <div className="bg-[#232046] rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold text-[#6c63ff] mb-2">¿Puedo pedir una figura personalizada?</h3>
            <p className="text-white/80">¡Por supuesto! Cuéntanos tu idea y te asesoramos en todo el proceso.</p>
          </div>
        </div>
      </div>
    </section>
  );
} 