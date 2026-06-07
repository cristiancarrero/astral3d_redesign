import Image from 'next/image';

export default function AstralWarPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-yellow-900 flex flex-col items-center justify-start pt-24">
      <Image src="/astral3d-war.png" alt="Astral3D War" width={400} height={120} className="mb-8 mt-8" />
      <p className="text-yellow-200 text-xl font-semibold mb-8 text-center max-w-2xl">Bienvenido a Astral3D War: miniaturas para wargames, D&D y universos de fantasía oscura. ¡Próximamente catálogo de miniaturas!</p>
      {/* Aquí irá el catálogo war */}
    </section>
  );
} 