// src/app/catalogo/page.tsx
import { dataCatalog } from "@/data/catalog";
import ProductCard from "@/components/ProductCard";

export const dynamic = "force-dynamic";

interface CatalogPageProps {
  searchParams: Promise<{ 
    buscar?: string; 
    search?: string; 
    query?: string; 
    q?: string; 
  }>;
}

export default async function CatalogoPage({ searchParams }: CatalogPageProps) {
  const resolvedParams = await searchParams;
  
  const query = (
    resolvedParams?.buscar || 
    resolvedParams?.search || 
    resolvedParams?.query || 
    resolvedParams?.q || 
    ""
  ).toLowerCase().trim();

  // Si no hay búsqueda, filteredProducts contendrá absolutamente TODOS los productos de catalog.ts
  const filteredProducts = dataCatalog.filter((product) => {
    if (!query) return true; 
    return (
      product.name.toLowerCase().includes(query) ||
      product.franchise.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      (product.tags && product.tags.some(tag => tag.toLowerCase().includes(query)))
    );
  });

  return (
    <main className="min-h-screen bg-[#05020d] text-white pt-32 px-4 md:px-8 pb-16">
      <div className="max-w-7xl mx-auto">
        
        <header className="mb-12 text-center md:text-left border-b border-purple-900/20 pb-6">
          <h1 className="text-4xl md:text-5xl font-black tracking-wider uppercase bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-purple-600 to-cyan-400">
            {query ? `Resultados para: "${query}"` : "Catálogo Completo"}
          </h1>
          <p className="text-gray-400 mt-2 text-sm md:text-base">
            Explora nuestra colección de réplicas exclusivas de resina y filamento impresas en alta definición.
          </p>
        </header>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-24 border border-purple-900/30 rounded-2xl bg-[#0d071f]/40 backdrop-blur-md">
            <p className="text-xl text-gray-400 font-medium">No se han encontrado piezas que coincidan.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}