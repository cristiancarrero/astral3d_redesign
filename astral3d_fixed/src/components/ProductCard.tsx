import Image from "next/image";
import Link from "next/link";
import { Product, categoryLabels, formatPrice } from "@/data/catalog";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] shadow-xl transition hover:-translate-y-1 hover:border-fuchsia-300/50 hover:bg-white/[0.09]">
      <Link href={`/producto/${product.slug}`} className="block">
        <div className="relative h-72 bg-gradient-to-br from-fuchsia-500/20 via-violet-500/10 to-cyan-400/20">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-8 transition duration-500 group-hover:scale-105"
            sizes="(min-width: 1024px) 25vw, 50vw"
          />
        </div>

        <div className="p-6">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-cyan-300">
            {categoryLabels[product.category]} · {product.franchise}
          </p>

          <h3 className="mt-3 text-2xl font-black text-white">
            {product.name}
          </h3>

          <p className="mt-3 min-h-16 text-sm leading-6 text-white/60">
            {product.description}
          </p>

          <div className="mt-5 flex items-center justify-between gap-4">
            <span className="rounded-full bg-fuchsia-500/15 px-4 py-2 text-sm font-black text-fuchsia-100">
              {formatPrice(product)}
            </span>

            <span className="text-sm font-black text-cyan-300">
              Ver pieza →
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
