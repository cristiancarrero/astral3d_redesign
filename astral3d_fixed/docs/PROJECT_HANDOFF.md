# Astral3D — Documentación técnica y estado del proyecto

## 1. Resumen del proyecto

Astral3D es una web desarrollada con Next.js orientada a venta y cotización de figuras 3D, piezas personalizadas, miniaturas, llaveros, props y coleccionables impresos en resina y filamento.

El objetivo actual del proyecto es pasar de una landing visual a una web con estructura real de catálogo, buscador, categorías, fichas de producto y sistema de cotización.

---

## 2. Stack técnico

* Framework: Next.js
* Lenguaje: TypeScript
* UI: React
* Estilos: Tailwind CSS
* Iconos: react-icons
* Assets: imágenes locales en `/public`
* Datos actuales: catálogo estático en `src/data/catalog.ts`

---

## 3. Estructura principal esperada

```txt
src/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   ├── globals.css
│   ├── cart/
│   │   └── page.tsx
│   ├── catalogo/
│   │   ├── page.tsx
│   │   └── [category]/
│   │       └── page.tsx
│   ├── producto/
│   │   └── [slug]/
│   │       └── page.tsx
│   └── admin/
│       └── catalogo/
│           └── page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── ParallaxHero.tsx
│   ├── ProductCard.tsx
│   └── Footer.tsx
└── data/
    └── catalog.ts
```

---

## 4. Archivos importantes

### `src/components/ParallaxHero.tsx`

Componente principal del hero.

Este componente contiene:

* Fondo cyberpunk: `/city.png`
* Personaje central: `/girl.png`
* Luna / planeta creado con CSS
* Texto superior: `IMPRESIÓN 3D PREMIUM`
* Título: `ASTRAL 3D`
* Efecto parallax con `progress`
* Partículas animadas mediante CSS
* CTA principal hacia catálogo
* CTA secundario hacia personalización

No tocar salvo para ajustes visuales muy concretos.

Cosas delicadas:

* La altura del hero controla el parallax:

```tsx
className="relative h-[175vh] overflow-hidden bg-[#05020d]"
```

* Si se reduce demasiado, el parallax pierde efecto.
* Si se aumenta demasiado, queda un hueco negro antes de la siguiente sección.

Actualmente se ajustó para evitar demasiado vacío entre el hero y la sección de estadísticas.

---

### `src/app/globals.css`

Aquí están los efectos globales:

* `.glitch-title`
* `.astral-moon`
* `.astral-particles`

No borrar estas clases porque el hero depende de ellas.

---

### `src/components/Navbar.tsx`

Navbar fijo superior.

Estado actual:

* Logo pegado más a la izquierda.
* Buscador funcional.
* Al buscar redirige a:

```txt
/catalogo?buscar=texto
```

* Botón de cotización.
* Botón carrito.
* Botón de tema claro/oscuro.
* Menú móvil responsive.

Cosas importantes:

El buscador usa:

```tsx
const handleSearch = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const query = String(formData.get("search") ?? "").trim();

  if (!query) {
    router.push("/catalogo");
    setMenuOpen(false);
    return;
  }

  router.push(`/catalogo?buscar=${encodeURIComponent(query)}`);
  setMenuOpen(false);
};
```

Los inputs deben tener:

```tsx
name="search"
```

Si no lo tienen, el buscador no funcionará.

---

### `src/data/catalog.ts`

Actualmente actúa como base de datos temporal.

Contiene:

* Tipos de producto
* Categorías
* Lista de productos
* Funciones de búsqueda
* Funciones de filtrado
* Función de precio

Categorías actuales:

```ts
anime
videojuegos
cine-series
starwars
llaveros
personalizados
decoracion
funcional
```

Productos iniciales:

* Kratos
* Ragnar
* R2-D2
* C-3PO
* Rancor
* Rey Brujo
* Gollum

Campos importantes por producto:

```ts
{
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
```

Las imágenes actuales son temporales. Más adelante deben sustituirse por fotos reales en:

```txt
public/catalogo/
```

Ejemplo:

```ts
image: "/catalogo/kratos.jpg"
```

---

## 5. Rutas creadas o previstas

### `/`

Home principal.

Incluye:

* Navbar
* Hero parallax
* Estadísticas
* Catálogo destacado
* Categorías rápidas
* Proceso
* Personalización
* Galería
* FAQ
* Footer

---

### `/catalogo`

Página de catálogo completo.

Debe mostrar todos los productos y permitir búsquedas desde la URL:

```txt
/catalogo?buscar=kratos
/catalogo?buscar=star+wars
/catalogo?buscar=resina
```

---

### `/catalogo/[category]`

Página de categoría.

Ejemplos:

```txt
/catalogo/videojuegos
/catalogo/starwars
/catalogo/cine-series
```

Muestra productos filtrados por categoría.

---

### `/producto/[slug]`

Ficha individual de producto.

Ejemplos:

```txt
/producto/kratos
/producto/r2d2
/producto/gollum
```

Debe mostrar:

* Imagen grande
* Nombre
* Categoría
* Franquicia
* Material
* Tamaño
* Acabado
* Precio desde
* Botón WhatsApp
* Enlace Instagram si existe

---

### `/admin/catalogo`

Panel interno experimental para generar JSON de productos.

No es todavía un CMS real.

Sirve para ayudar a crear productos manualmente y copiarlos a `catalog.ts`.

---

## 6. Decisiones de diseño tomadas

### Hero

Se eligió una estética:

* Cyberpunk
* Neón
* Fucsia / morado / cian
* Premium
* Gamer / coleccionista

El hero no debe volver al diseño demasiado cargado de texto.

Texto final elegido:

```txt
IMPRESIÓN 3D PREMIUM
ASTRAL 3D
PIEZAS ÚNICAS PARA COLECCIONISTAS
RESINA · FILAMENTO · PERSONALIZACIÓN
```

Se eliminó texto largo para mantener una sensación más profesional.

---

### Título `ASTRAL 3D`

Debe ser texto HTML, no imagen.

Motivos:

* Mejor SEO
* Mejor responsive
* Animaciones CSS
* Hover
* Accesibilidad

Usa clase:

```css
.glitch-title
```

---

### Luna / planeta

No se usa imagen porque la imagen generada tenía fondo no transparente.

Se genera con CSS para evitar errores visuales.

Clase:

```css
.astral-moon
```

---

### Partículas

Se generan con CSS.

Clase:

```css
.astral-particles
```

No requieren assets extra.

---

## 7. Cosas que NO tocar de momento

No tocar salvo necesidad clara:

* Composición base del `ParallaxHero`
* Clases `.glitch-title`, `.astral-moon`, `.astral-particles`
* Estructura de `catalog.ts`
* Navbar responsive
* Buscador del navbar
* Rutas de catálogo/producto una vez creadas

Evitar volver a cambiar el hero sin capturas y motivo claro. Ya está en una versión visual bastante avanzada.

---

## 8. Próximos pasos recomendados

### Prioridad 1 — Catálogo real

Sustituir placeholders por productos reales.

Añadir fotos reales en:

```txt
public/catalogo/
```

Ejemplo:

```txt
public/catalogo/kratos.jpg
public/catalogo/r2d2.jpg
public/catalogo/rancor.jpg
```

Y actualizar:

```ts
image: "/catalogo/kratos.jpg"
```

---

### Prioridad 2 — Mejorar tarjetas de producto

`ProductCard.tsx` debe mostrar:

* Imagen
* Nombre
* Categoría
* Franquicia
* Precio desde
* Botón “Ver pieza”
* Hover premium

---

### Prioridad 3 — Página de producto

Mejorar `/producto/[slug]` con:

* WhatsApp real
* Enlace Instagram
* Galería
* Materiales
* Tiempo estimado
* Preguntas frecuentes del producto

---

### Prioridad 4 — WhatsApp real

Ahora el enlace puede ser genérico:

```txt
https://wa.me/?text=...
```

Debe reemplazarse por número real:

```txt
https://wa.me/34XXXXXXXXX?text=...
```

---

### Prioridad 5 — Admin real

El panel `/admin/catalogo` actualmente solo genera JSON.

Opciones futuras:

1. Mantener `catalog.ts` manual.
2. Pasar a Google Sheets.
3. Pasar a Airtable.
4. Pasar a PostgreSQL + Prisma.

Recomendación actual:

* Hasta 100-200 productos: Airtable o Google Sheets.
* Más adelante: base de datos real.

---

## 9. Pendientes técnicos

* Revisar errores de build.
* Comprobar rutas dinámicas.
* Validar imports con alias `@/`.
* Confirmar que `tsconfig.json` soporta alias `@/*`.
* Revisar responsive del hero en móvil.
* Optimizar imágenes.
* Usar `next/image` correctamente.
* Añadir metadata SEO por página.
* Añadir sitemap.
* Añadir robots.txt.
* Añadir Open Graph.

---

## 10. SEO pendiente

Home:

```ts
title: "Astral3D | Figuras 3D personalizadas en resina y filamento"
description: "Figuras 3D, miniaturas, llaveros y piezas personalizadas para coleccionistas."
```

Catálogo:

```ts
title: "Catálogo Astral3D | Figuras 3D y coleccionables personalizados"
description: "Explora figuras 3D, piezas de colección, miniaturas y encargos personalizados."
```

Producto:

```ts
title: "{product.name} | Astral3D"
description: "{product.description}"
```

---

## 11. Assets actuales

Usados por el hero:

```txt
public/city.png
public/girl.png
public/logo.png
```

Usados temporalmente por catálogo:

```txt
public/skull.png
public/astral3d-print.png
public/astral3d-war.png
public/astral-kawaii.png
```

Recomendación:

Crear carpeta:

```txt
public/catalogo/
```

Y mover ahí las fotos reales.

---

## 12. Comandos útiles

Instalar:

```bash
npm install
```

Ejecutar desarrollo:

```bash
npm run dev
```

Buscar errores TypeScript:

```bash
npx tsc --noEmit
```

Ver estructura:

```bash
tree src -L 4
```

Buscar archivo:

```bash
find . -name "Navbar.tsx"
```

---

## 13. Estado actual del proyecto

Estado visual:

* Hero bastante avanzado.
* Estética cyberpunk definida.
* Navbar mejorado.
* Buscador en proceso de conexión a `/catalogo`.
* Catálogo estático preparado.
* Faltan fotos reales.
* Falta consolidar rutas nuevas.
* Falta probar build completo.

Estado funcional:

* Landing funciona.
* Navbar visual funciona.
* Buscador requiere verificar después de pegar `Navbar.tsx`.
* Catálogo debe probarse en `/catalogo`.
* Producto debe probarse en `/producto/kratos`.

---

## 14. Reglas para continuar

Cuando se retome el proyecto:

1. No empezar rediseñando el hero.
2. Primero comprobar que compila.
3. Probar `/`, `/catalogo`, `/producto/kratos`.
4. Si hay errores, arreglar imports/rutas.
5. Después meter productos reales.
6. Después mejorar catálogo.
7. Después mejorar formularios y WhatsApp.
8. Después SEO.
9. Después CMS/admin.

---

## 15. Frase guía del proyecto

Astral3D no debe sentirse como una web genérica de impresión 3D.

Debe sentirse como:

```txt
Una marca premium de coleccionables, figuras y piezas personalizadas para fans.
```

El diseño debe seguir esta dirección:

* Oscuro
* Neón
* Cyberpunk
* Coleccionista
* Gamer
* Premium
* Visual
* Poco texto
* Mucha imagen real
* CTA directo a cotización
