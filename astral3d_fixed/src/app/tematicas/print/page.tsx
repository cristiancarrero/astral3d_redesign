import Image from 'next/image';

export default function AstralPrintPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-300 to-blue-700 flex flex-col items-center justify-start pt-24">
      <Image src="/astral3d-print.png" alt="Astral3D Print" width={400} height={120} className="mb-8 mt-8" />
      <p className="text-blue-900 text-xl font-semibold mb-8 text-center max-w-2xl">Bienvenido a Astral3D Print: prototipos, piezas técnicas y soluciones profesionales para empresas y makers. ¡Próximamente catálogo técnico!</p>
      {/* Aquí irá el catálogo print */}
    </section>
  );
} 