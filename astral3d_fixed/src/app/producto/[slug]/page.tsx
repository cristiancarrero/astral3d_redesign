"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import {
  categoryLabels,
  formatPrice,
  getProductBySlug,
} from "@/data/catalog";

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <main className="min-h-screen bg-[#05020d] px-6 pt-32 text-white">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-white/[0.06] p-10 text-center">
          <h1 className="text-4xl font-black">Producto no encontrado</h1>
          <Link href="/catalogo" className="mt-6 inline-block text-cyan-300">
            Volver al catálogo
          </Link>
        </div>
      </main>
    );
  }

  const whatsappText = encodeURIComponent(
    `Hola, quiero cotizar esta pieza: ${product.name}`
  );

  return (
    <main className="min-h-screen bg-[#05020d] px-4 pb-24 pt-32 text-white sm:px-6 lg:px-8">
      <section className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
        <div className="relative min-h-[520px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-fuchsia-500/20 via-violet-500/10 to-cyan-400/20">
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            className="object-contain p-10"
          />
        </div>

        <div className="flex flex-col justify-center">
          <Link href="/catalogo" className="text-sm font-black text-cyan-300">
            ← Volver al catálogo
          </Link>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.35em] text-fuchsia-300">
            {categoryLabels[product.category]} · {product.franchise}
          </p>

          <h1 className="mt-4 text-5xl font-black uppercase tracking-tight sm:text-7xl">
            {product.name}
          </h1>

          <p className="mt-6 text-2xl font-black text-yellow-200">
            {formatPrice(product)}
          </p>

          <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
            {product.description}
          </p>

          <div className="mt-8 grid gap-3 text-sm text-white/70 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
              <strong className="block text-white">Material</strong>
              {product.material}
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
              <strong className="block text-white">Tamaño</strong>
              {product.size}
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
              <strong className="block text-white">Acabado</strong>
              {product.finish}
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
              <strong className="block text-white">Producción</strong>
              Bajo pedido
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={`https://wa.me/?text=${whatsappText}`}
              target="_blank"
              className="inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-8 py-4 font-black uppercase tracking-[0.12em] text-white"
            >
              <FaWhatsapp /> Cotizar
            </a>

            {product.instagramUrl && (
              <a
                href={product.instagramUrl}
                target="_blank"
                className="inline-flex items-center justify-center gap-3 rounded-2xl border border-fuchsia-400/70 bg-black/25 px-8 py-4 font-black uppercase tracking-[0.12em] text-white"
              >
                <FaInstagram /> Instagram
              </a>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
