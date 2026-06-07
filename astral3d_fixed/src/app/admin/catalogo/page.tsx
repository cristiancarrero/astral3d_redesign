"use client";

import { useState } from "react";

export default function AdminCatalogoPage() {
  const [form, setForm] = useState({
    name: "",
    slug: "",
    category: "anime",
    material: "resina",
    priceFrom: "",
    image: "",
    instagramUrl: "",
    description: "",
  });

  const generatedJson = `{
  id: "${form.slug}",
  name: "${form.name}",
  slug: "${form.slug}",
  category: "${form.category}",
  material: "${form.material}",
  finish: "",
  size: "",
  priceFrom: ${form.priceFrom || "null"},
  currency: "EUR",
  image: "${form.image}",
  instagramUrl: "${form.instagramUrl}",
  featured: false,
  available: true,
  madeToOrder: true,
  description: "${form.description}",
  tags: []
},`;

  return (
    <main className="min-h-screen p-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold">
          Administrador de Catálogo
        </h1>

        <div className="grid gap-4">
          <input
            className="rounded border p-3"
            placeholder="Nombre"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <input
            className="rounded border p-3"
            placeholder="Slug"
            value={form.slug}
            onChange={(e) =>
              setForm({ ...form, slug: e.target.value })
            }
          />

          <select
            className="rounded border p-3"
            value={form.category}
            onChange={(e) =>
              setForm({ ...form, category: e.target.value })
            }
          >
            <option value="anime">Anime</option>
            <option value="videojuegos">Videojuegos</option>
            <option value="llaveros">Llaveros</option>
            <option value="miniaturas">Miniaturas</option>
            <option value="decoracion">Decoración</option>
            <option value="personalizados">Personalizados</option>
            <option value="funcional">Funcional</option>
          </select>

          <select
            className="rounded border p-3"
            value={form.material}
            onChange={(e) =>
              setForm({ ...form, material: e.target.value })
            }
          >
            <option value="resina">Resina</option>
            <option value="filamento">Filamento</option>
            <option value="mixto">Mixto</option>
          </select>

          <input
            className="rounded border p-3"
            placeholder="Precio"
            value={form.priceFrom}
            onChange={(e) =>
              setForm({ ...form, priceFrom: e.target.value })
            }
          />

          <input
            className="rounded border p-3"
            placeholder="/catalogo/goku.jpg"
            value={form.image}
            onChange={(e) =>
              setForm({ ...form, image: e.target.value })
            }
          />

          <input
            className="rounded border p-3"
            placeholder="URL Instagram"
            value={form.instagramUrl}
            onChange={(e) =>
              setForm({ ...form, instagramUrl: e.target.value })
            }
          />

          <textarea
            className="rounded border p-3"
            rows={5}
            placeholder="Descripción"
            value={form.description}
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
          />

          <div>
            <h2 className="mb-2 text-xl font-semibold">
              JSON generado
            </h2>

            <pre className="overflow-auto rounded bg-black p-4 text-green-400">
              {generatedJson}
            </pre>
          </div>
        </div>
      </div>
    </main>
  );
}
