// src/app/producto/[slug]/page.tsx
import { getProductBySlug } from "@/data/catalog";
import Link from "next/link";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductoPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  // SEGURO: Si la pieza no existe, devolvemos una interfaz limpia en lugar de rebotar la URL
  if (!product) {
    return (
      <main className="min-h-screen bg-[#05020d] text-white pt-32 px-4 text-center">
        <h1 className="text-2xl font-bold text-fuchsia-500 uppercase tracking-wider">Réplica no encontrada</h1>
        <p className="text-gray-400 mt-2 text-sm">La pieza solicitada no figura en nuestra base de datos actual.</p>
        <Link href="/catalogo" className="mt-6 inline-block text-xs font-bold uppercase tracking-widest text-cyan-400 hover:underline">
          ← Explorar el catálogo de piezas
        </Link>
      </main>
    );
  }

  const telefonoWhatsApp = "34600000000"; 
  const mensajeWhatsApp = encodeURIComponent(
    `¡Hola Astral3D! Estoy interesado en la pieza de colección: *${product.name}* (${product.franchise}). Me gustaría recibir una cotización para el tamaño de ${product.size} y acabado ${product.finish}.`
  );
  const whatsappUrl = `https://wa.me/${telefonoWhatsApp}?text=${mensajeWhatsApp}`;

  return (
    <main className="min-h-screen bg-[#05020d] text-white pt-28 px-4 md:px-8 pb-16">
      <div className="max-w-6xl mx-auto">
        <Link href="/catalogo" className="inline-flex items-center text-xs font-bold tracking-widest uppercase text-cyan-400 hover:text-fuchsia-400 transition-colors mb-8 group">
          <span className="mr-2 transition-transform group-hover:-translate-x-1">←</span> Volver al catálogo
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#0d071f] border border-purple-900/40">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            <span className={`absolute top-4 left-4 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded border backdrop-blur-md ${
              product.available ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30" : "bg-amber-500/10 text-amber-400 border-amber-500/30"
            }`}>
              {product.available ? "Disponible" : "Bajo Encargo"}
            </span>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-fuchsia-400 uppercase tracking-widest">{product.franchise}</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-wide text-white mt-1 uppercase mb-6">{product.name}</h1>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 bg-[#0d071f]/30 p-4 rounded-xl border border-purple-950/40">{product.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-[#0d071f] border border-purple-950 p-3.5 rounded-xl">
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Material Base</p>
                  <p className="text-sm font-extrabold text-cyan-400 uppercase tracking-wide mt-1">{product.material}</p>
                </div>
                <div className="bg-[#0d071f] border border-purple-950 p-3.5 rounded-xl">
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Escala / Tamaño</p>
                  <p className="text-sm font-extrabold text-white tracking-wide mt-1">{product.size}</p>
                </div>
                <div className="bg-[#0d071f] border border-purple-950 p-3.5 rounded-xl col-span-2">
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Post-procesado y Acabado</p>
                  <p className="text-sm font-extrabold text-white tracking-wide mt-1">{product.finish}</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-purple-950 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Precio estimado de salida</p>
                <p className="text-3xl font-black text-white">{product.priceFrom ? `${product.priceFrom} ${product.currency}` : "A consultar"}</p>
              </div>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-black tracking-widest uppercase text-black bg-gradient-to-r from-cyan-400 to-fuchsia-500 rounded-xl hover:shadow-[0_0_30px_rgba(217,70,239,0.3)] transition-all text-center">
                Encargar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}