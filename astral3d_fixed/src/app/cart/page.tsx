import Link from 'next/link';

export default function CartPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-4xl font-bold mb-6">Tu cesta está vacía</h1>
      <p className="mb-8 text-lg text-white/80">Aún no has añadido productos a tu cesta.</p>
      <Link href="/" className="px-8 py-4 rounded-full bg-[#8e2de2] hover:bg-[#ffe066] text-white hover:text-[#18122B] text-xl font-semibold shadow-lg transition-all duration-300 hover:scale-105">Volver al inicio</Link>
    </section>
  );
} 