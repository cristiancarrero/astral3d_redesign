// src/data/catalog.ts

export type ProductCategory = 
  | 'anime' 
  | 'videojuegos' 
  | 'cine-series' 
  | 'starwars' 
  | 'llaveros' 
  | 'personalizados' 
  | 'decoracion' 
  | 'funcional';

export type ProductMaterial = 'resina' | 'filamento';

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  franchise: string;
  material: ProductMaterial;
  finish: string;
  size: string;
  priceFrom: number | null;
  currency: "EUR";
  image: string;
  instagramUrl?: string;
  featured: boolean;
  available: boolean;
  madeToOrder: boolean;
  description: string;
  tags: string[];
}

export const categoryLabels: Record<ProductCategory, string> = {
  anime: "Anime & Manga",
  videojuegos: "Videojuegos",
  "cine-series": "Cine & Series",
  starwars: "Star Wars",
  llaveros: "Llaveros",
  personalizados: "Encargos Personalizados",
  decoracion: "Decoración",
  funcional: "Piezas Funcionales"
};

// IMPORTANTE: Aquí está el 'dataCatalog' que Next.js no encontraba
export const dataCatalog: Product[] = [
  {
    id: "kratos-premium",
    name: "Kratos",
    slug: "kratos",
    category: "videojuegos",
    franchise: "God of War",
    material: "resina",
    finish: "Pintado Premium a mano",
    size: "22cm",
    priceFrom: 120,
    currency: "EUR",
    image: "/logo.png",
    featured: true,
    available: true,
    madeToOrder: true,
    description: "Figura premium de Kratos con máximo nivel de detalle en texturas de piel y armadura. Pintado con acrílicos de alta calidad.",
    tags: ["kratos", "god of war", "playstation", "gow", "figura", "resina"]
  },
  {
    id: "ragnar-lothbrok",
    name: "Ragnar",
    slug: "ragnar",
    category: "cine-series",
    franchise: "Vikings",
    material: "resina",
    finish: "Pintado Realista",
    size: "20cm",
    priceFrom: 95,
    currency: "EUR",
    image: "/logo.png",
    featured: true,
    available: true,
    madeToOrder: true,
    description: "Estatua coleccionista de Ragnar Lothbrok. Detalles hiperrealistas en la cota de malla y peana temática.",
    tags: ["ragnar", "vikingos", "vikings", "serie", "figura", "resina"]
  },
  {
    id: "r2d2-astromech",
    name: "R2-D2",
    slug: "r2d2",
    category: "starwars",
    franchise: "Star Wars",
    material: "filamento",
    finish: "Efecto Desgastado",
    size: "30cm",
    priceFrom: 75,
    currency: "EUR",
    image: "/logo.png",
    featured: true,
    available: true,
    madeToOrder: true,
    description: "Droide Astromecánico R2-D2 impreso en filamento de alta resolución con pintura con efecto de desgaste.",
    tags: ["r2d2", "star wars", "droide", "articulado", "filamento"]
  },
  {
    id: "c3po-protocol",
    name: "C-3PO",
    slug: "c3po",
    category: "starwars",
    franchise: "Star Wars",
    material: "resina",
    finish: "Oro Cromado Pulido",
    size: "28cm",
    priceFrom: 110,
    currency: "EUR",
    image: "/logo.png",
    featured: false,
    available: true,
    madeToOrder: true,
    description: "Droide de protocolo C-3PO impreso en resina con acabado dorado espejo.",
    tags: ["c3po", "star wars", "droide", "oro", "resina"]
  },
  {
    id: "rancor-monster",
    name: "Rancor",
    slug: "rancor",
    category: "starwars",
    franchise: "Star Wars",
    material: "resina",
    finish: "Pintado Monocromo con Sombras",
    size: "35cm",
    priceFrom: 180,
    currency: "EUR",
    image: "/logo.png",
    featured: true,
    available: true,
    madeToOrder: true,
    description: "Bestia Rancor a gran escala. Una pieza masiva con texturas brutales.",
    tags: ["rancor", "star wars", "monstruo", "figura-grande", "resina"]
  },
  {
    id: "rey-brujo-angmar",
    name: "Rey Brujo",
    slug: "rey-brujo",
    category: "cine-series",
    franchise: "El Señor de los Anillos",
    material: "resina",
    finish: "Efecto Metal Oscuro",
    size: "25cm",
    priceFrom: 85,
    currency: "EUR",
    image: "/logo.png",
    featured: true,
    available: true,
    madeToOrder: true,
    description: "El Rey Brujo de Angmar con su icónica maza y corona metálica.",
    tags: ["rey brujo", "esdlc", "lord of the rings", "nazgul", "figura", "resina"]
  },
  {
    id: "gollum-smeagol",
    name: "Gollum",
    slug: "gollum",
    category: "cine-series",
    franchise: "El Señor de los Anillos",
    material: "resina",
    finish: "Pintado Detallado",
    size: "15cm",
    priceFrom: 60,
    currency: "EUR",
    image: "/logo.png",
    featured: false,
    available: false,
    madeToOrder: true,
    description: "Criatura Gollum buscando su tesoro. Impresión ultra detallada.",
    tags: ["gollum", "smeagol", "esdlc", "lord of the rings", "figura", "resina"]
  }
];

export const featuredProducts: Product[] = dataCatalog.filter(p => p.featured);

export function formatPrice(price: number | null): string {
  if (price === null) return "Cotizar";
  return new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(price);
}

export function getProductBySlug(slug: string): Product | undefined {
  return dataCatalog.find(p => p.slug === slug);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return dataCatalog.filter(p => p.category === category);
}