"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { ProductCategory, categoryLabels, searchProducts } from "@/data/catalog";

const categories = Object.entries(categoryLabels) as [ProductCategory, string][];

export default function CatalogoPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("buscar") ?? "";
  const results = searchProducts(query);

  return (
    <main className="min-h-screen bg-[#05020d] px-4 pb-24 pt-32 text-white sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <p className="text-sm font-black uppercase tracking-[0.35em] text-fuchsia-300">
          Catálogo Astral3D
        </p>

        <h1 className="mt-4 text-5xl font-black uppercase tracking-tight sm:text-7xl">
          Explora nuestras piezas
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-white/65">
          Figuras, coleccionables, llaveros y encargos personalizados en resina
          y filamento.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/catalogo"
            className="rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm font-black"
          >
            Todo
          </Link>

          {categories.map(([key, label]) => (
            <Link
              key={key}
              href={`/catalogo/${key}`}
              className="rounded-full border border-white/10 bg-white/6 px-5 py-3 text-sm font-black text-white/80 transition hover:border-fuchsia-300 hover:text-white"
            >
              {label}
            </Link>
          ))}
        </div>

        {query && (
          <p className="mt-10 text-white/70">
            Resultados para: <strong className="text-cyan-300">{query}</strong>
          </p>
        )}

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {results.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {results.length === 0 && (
          <div className="mt-16 rounded-[2rem] border border-white/10 bg-white/[0.06] p-10 text-center">
            <h2 className="text-2xl font-black">No encontramos piezas</h2>
            <p className="mt-3 text-white/60">
              Prueba con otro término o solicita una pieza personalizada.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
