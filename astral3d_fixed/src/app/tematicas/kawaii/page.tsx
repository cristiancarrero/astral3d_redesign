import Image from 'next/image';

export default function AstralKawaiiPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-200 to-white flex flex-col items-center justify-start pt-24">
      <Image src="/astral-kawaii.png" alt="Astral Kawaii" width={400} height={120} className="mb-8 mt-8" />
      <p className="text-pink-700 text-xl font-semibold mb-8 text-center max-w-2xl">Bienvenido a Astral Kawaii: figuras y objetos llenos de ternura, color y estilo japonés. ¡Próximamente catálogo kawaii!</p>
      {/* Aquí irá el catálogo kawaii */}
    </section>
  );
} 