"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import {
  ProductCategory,
  categoryLabels,
  getProductsByCategory,
} from "@/data/catalog";

export default function CategoryPage() {
  const params = useParams();
  const category = params.category as ProductCategory;
  const label = categoryLabels[category];
  const products = label ? getProductsByCategory(category) : [];

  return (
    <main className="min-h-screen bg-[#05020d] px-4 pb-24 pt-32 text-white sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <Link href="/catalogo" className="text-sm font-black text-cyan-300">
          ← Volver al catálogo
        </Link>

        <h1 className="mt-6 text-5xl font-black uppercase tracking-tight sm:text-7xl">
          {label ?? "Categoría"}
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-white/65">
          Piezas disponibles en esta categoría.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {products.length === 0 && (
          <div className="mt-16 rounded-[2rem] border border-white/10 bg-white/[0.06] p-10 text-center">
            <h2 className="text-2xl font-black">Categoría vacía</h2>
            <p className="mt-3 text-white/60">
              Todavía no hay piezas aquí.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
