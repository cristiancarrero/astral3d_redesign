// src/components/ProductCard.tsx
import Link from "next/link";
import { Product } from "@/data/catalog";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group relative bg-[#0d071f] border border-purple-900/40 rounded-xl overflow-hidden transition-all duration-300 hover:border-fuchsia-500 hover:shadow-[0_0_25px_rgba(217,70,239,0.2)] flex flex-col h-full">
      
      {/* Contenedor de Imagen con etiqueta estándar para evitar bloqueos de Next.js */}
      <div className="relative aspect-square w-full overflow-hidden bg-[#140b2e]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {/* Badge de Material flotante */}
        <span className="absolute top-3 right-3 bg-black/80 backdrop-blur-md text-[10px] text-cyan-400 font-black uppercase tracking-widest px-2.5 py-1 rounded border border-cyan-500/30">
          {product.material}
        </span>
      </div>

      {/* Información de la Pieza */}
      <div className="p-5 flex flex-col flex-grow">
        <span className="text-[10px] font-bold text-fuchsia-400 uppercase tracking-widest mb-1">
          {product.franchise}
        </span>
        <h3 className="text-lg font-extrabold text-white tracking-wide line-clamp-1 group-hover:text-cyan-300 transition-colors">
          {product.name}
        </h3>
        
        {/* Separador e Inferior (Precio + Botón) */}
        <div className="mt-auto pt-4 flex items-center justify-between border-t border-purple-950/60">
          <div>
            <p className="text-[9px] text-gray-500 uppercase font-semibold tracking-wider">Desde</p>
            <p className="text-xl font-black text-white tracking-tight">
              {product.priceFrom ? `${product.priceFrom} EUR` : "Cotizar"}
            </p>
          </div>

          <Link 
            href={`/producto/${product.slug}`}
            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-bold text-white rounded-lg group bg-gradient-to-br from-fuchsia-500 to-cyan-500 hover:text-white focus:ring-2 focus:outline-none focus:ring-purple-800"
          >
            <span className="relative px-3 py-2 transition-all ease-in duration-75 bg-[#0d071f] rounded-md group-hover:bg-opacity-0 uppercase tracking-wider text-[11px]">
              Ver Pieza
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}