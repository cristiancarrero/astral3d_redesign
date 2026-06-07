export type ProductCategory =
  | "anime"
  | "videojuegos"
  | "cine-series"
  | "starwars"
  | "llaveros"
  | "personalizados"
  | "decoracion"
  | "funcional";

export type ProductMaterial = "resina" | "filamento" | "mixto";

export type Product = {
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
};

export const categoryLabels: Record<ProductCategory, string> = {
  anime: "Anime",
  videojuegos: "Videojuegos",
  "cine-series": "Cine y series",
  starwars: "Star Wars",
  llaveros: "Llaveros",
  personalizados: "Personalizados",
  decoracion: "Decoración geek",
  funcional: "Piezas funcionales",
};

export const products: Product[] = [
  {
    id: "kratos",
    name: "Kratos",
    slug: "kratos",
    category: "videojuegos",
    franchise: "God of War",
    material: "resina",
    finish: "Figura detallada",
    size: "15-25 cm",
    priceFrom: 45,
    currency: "EUR",
    image: "/girl.png",
    instagramUrl: "",
    featured: true,
    available: true,
    madeToOrder: true,
    description: "Figura de Kratos inspirada en God of War para coleccionistas.",
    tags: ["kratos", "god of war", "videojuegos", "resina"],
  },
  {
    id: "ragnar",
    name: "Ragnar",
    slug: "ragnar",
    category: "cine-series",
    franchise: "Vikingos",
    material: "resina",
    finish: "Figura de colección",
    size: "15-25 cm",
    priceFrom: 45,
    currency: "EUR",
    image: "/skull.png",
    instagramUrl: "",
    featured: true,
    available: true,
    madeToOrder: true,
    description: "Figura inspirada en estética vikinga, ideal para colección.",
    tags: ["ragnar", "vikingos", "serie", "resina"],
  },
  {
    id: "r2d2",
    name: "R2-D2",
    slug: "r2d2",
    category: "starwars",
    franchise: "Star Wars",
    material: "filamento",
    finish: "Color base o pintado",
    size: "10-20 cm",
    priceFrom: 30,
    currency: "EUR",
    image: "/astral3d-print.png",
    instagramUrl: "",
    featured: true,
    available: true,
    madeToOrder: true,
    description: "Droide clásico de Star Wars impreso en 3D.",
    tags: ["star wars", "r2d2", "droide", "filamento"],
  },
  {
    id: "c3po",
    name: "C-3PO",
    slug: "c3po",
    category: "starwars",
    franchise: "Star Wars",
    material: "resina",
    finish: "Pintado metálico",
    size: "15-25 cm",
    priceFrom: 45,
    currency: "EUR",
    image: "/astral3d-war.png",
    instagramUrl: "",
    featured: true,
    available: true,
    madeToOrder: true,
    description: "Figura de C-3PO con acabado dorado o personalizado.",
    tags: ["star wars", "c3po", "droide", "resina"],
  },
  {
    id: "rancor",
    name: "Rancor",
    slug: "rancor",
    category: "starwars",
    franchise: "Star Wars",
    material: "resina",
    finish: "Alta textura",
    size: "15-30 cm",
    priceFrom: 55,
    currency: "EUR",
    image: "/skull.png",
    instagramUrl: "",
    featured: true,
    available: true,
    madeToOrder: true,
    description: "Criatura Rancor para vitrinas, dioramas y coleccionismo.",
    tags: ["star wars", "rancor", "criatura", "resina"],
  },
  {
    id: "rey-brujo",
    name: "Rey Brujo",
    slug: "rey-brujo",
    category: "cine-series",
    franchise: "El Señor de los Anillos",
    material: "resina",
    finish: "Figura oscura",
    size: "15-25 cm",
    priceFrom: 50,
    currency: "EUR",
    image: "/girl.png",
    instagramUrl: "",
    featured: true,
    available: true,
    madeToOrder: true,
    description: "Figura del Rey Brujo inspirada en fantasía épica.",
    tags: ["lotr", "rey brujo", "fantasia", "resina"],
  },
  {
    id: "gollum",
    name: "Gollum",
    slug: "gollum",
    category: "cine-series",
    franchise: "El Señor de los Anillos",
    material: "resina",
    finish: "Figura detallada",
    size: "10-20 cm",
    priceFrom: 35,
    currency: "EUR",
    image: "/astral-kawaii.png",
    instagramUrl: "",
    featured: true,
    available: true,
    madeToOrder: true,
    description: "Figura de Gollum para fans de El Señor de los Anillos.",
    tags: ["lotr", "gollum", "fantasia", "resina"],
  },
];

export const featuredProducts = products.filter((product) => product.featured);

export function formatPrice(product: Product) {
  if (product.priceFrom === null) return "Cotizar";

  return `Desde ${new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: product.currency,
    maximumFractionDigits: 0,
  }).format(product.priceFrom)}`;
}

export function searchProducts(query: string) {
  const normalized = query.trim().toLowerCase();

  if (!normalized) return products;

  return products.filter((product) => {
    const searchable = [
      product.name,
      product.category,
      categoryLabels[product.category],
      product.franchise,
      product.material,
      product.description,
      ...product.tags,
    ]
      .join(" ")
      .toLowerCase();

    return searchable.includes(normalized);
  });
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(category: ProductCategory) {
  return products.filter((product) => product.category === category);
}