// src/components/ProductCard.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Product, formatPrice } from "@/data/catalog";
import { useCart } from "@/context/CartContext";
import { FaShoppingCart, FaEye } from "react-icons/fa";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0d071f]/40 backdrop-blur-md transition-all duration-300 hover:border-fuchsia-500/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]">
      
      {/* Contenedor de la Imagen */}
      <div className="relative aspect-square w-full overflow-hidden bg-white/5">
        <Image
          src={product.image || "/logo.png"}
          alt={product.name}
          fill
          sizes="(max-w-7xl) 25vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Capa difuminada Cyberpunk al pasar el ratón */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070512] via-transparent to-transparent opacity-60" />
      </div>

      {/* Detalles de la Figura */}
      <div className="flex flex-1 flex-col p-5">
        <span className="text-[10px] font-black uppercase tracking-widest text-cyan-400">
          {product.franchise}
        </span>
        
        <h3 className="mt-1 text-lg font-bold text-white group-hover:text-fuchsia-300 transition-colors truncate">
          {product.name}
        </h3>

        <p className="mt-2 line-clamp-2 text-xs text-gray-400 flex-1">
          {product.description}
        </p>

        {/* Zona de Precio y Tipo de Material */}
        <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-4">
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Desde</span>
            <span className="text-xl font-black text-white">
              {formatPrice(product.priceFrom)}
            </span>
          </div>
          <span className="rounded-full bg-white/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-gray-300 border border-white/10">
            {product.material}
          </span>
        </div>

        {/* PANEL DE BOTONES INTERACTIVOS */}
        <div className="mt-5 grid grid-cols-5 gap-2">
          {/* Botón de Ver Detalles (Ocupa 2 columnas) */}
          <Link
            href={`/producto/${product.slug}`}
            className="col-span-2 flex items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/5 text-xs font-bold text-white transition hover:bg-white/10 hover:border-white/20"
            aria-label={`Ver detalles de ${product.name}`}
          >
            <FaEye /> Info
          </Link>

          {/* Botón de Añadir a la Cesta (Ocupa 3 columnas) */}
          <button
            onClick={() => addToCart(product)}
            className="col-span-3 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-purple-600 px-3 py-2.5 text-xs font-black text-white shadow-[0_0_15px_rgba(217,70,239,0.25)] transition duration-300 hover:scale-[1.03] hover:from-fuchsia-600 hover:to-purple-700 active:scale-[0.98]"
          >
            <FaShoppingCart /> Añadir
          </button>
        </div>

      </div>
    </div>
  );
}