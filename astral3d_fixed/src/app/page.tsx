import Image from "next/image";
import Link from "next/link";
import {
  FaCheck,
  FaCube,
  FaGem,
  FaPaintBrush,
  FaStar,
  FaTruck,
} from "react-icons/fa";
import ParallaxHero from "../components/ParallaxHero";
import Footer from "../components/Footer";
import { categoryLabels, featuredProducts, formatPrice } from "@/data/catalog";

const categories = Object.values(categoryLabels);

const process = [
  {
    title: "Cuéntanos tu idea",
    text: "Mándanos referencia, personaje, tamaño, material o archivo STL.",
  },
  {
    title: "Te cotizamos",
    text: "Definimos precio, tiempo de producción, pintura y envío.",
  },
  {
    title: "Imprimimos y acabamos",
    text: "Resina o filamento, lijado, curado, ensamble y pintura si aplica.",
  },
  {
    title: "Recibe tu pieza",
    text: "Te compartimos avances y preparamos el envío o entrega.",
  },
];

const faqs = [
  {
    q: "¿Trabajan resina y filamento?",
    a: "Sí. Resina para máximo detalle y filamento para piezas grandes, funcionales o de bajo costo.",
  },
  {
    q: "¿Pueden pintar las figuras?",
    a: "Sí. Podemos entregar piezas sin pintar, con color base o con acabado pintado a mano.",
  },
  {
    q: "¿Puedo pedir algo personalizado?",
    a: "Sí. Puedes mandar referencias, archivo 3D o una idea para cotizarla.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080515] text-white">
      <ParallaxHero />

      <section className="relative z-20 -mt-28 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 rounded-[2rem] border border-white/10 bg-white/8 p-4 shadow-2xl backdrop-blur-xl md:grid-cols-4">
          {[
            ["+120", "modelos posibles"],
            ["2", "materiales base"],
            ["100%", "bajo pedido"],
            ["24/48h", "respuesta de cotización"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="rounded-3xl bg-black/24 p-6 text-center"
            >
              <strong className="block text-3xl font-black text-yellow-200">
                {value}
              </strong>
              <span className="mt-1 block text-sm font-semibold text-white/62">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section id="catalogo" className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.35em] text-fuchsia-300">
                Catálogo destacado
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-6xl">
                Piezas reales, personalizadas y listas para cotizar.
              </h2>
            </div>

            <Link
              href="#personalizacion"
              className="rounded-full border border-cyan-300/40 px-6 py-3 text-center font-black text-cyan-100 transition hover:bg-cyan-300/10"
            >
              Pedir algo único
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featuredProducts.map((product) => (
              <article
                key={product.id}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/7 shadow-xl transition hover:-translate-y-1 hover:border-fuchsia-300/40 hover:bg-white/10"
              >
                <div className="relative h-64 bg-gradient-to-br from-fuchsia-500/20 via-violet-500/10 to-cyan-400/20 p-6">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-7 transition duration-500 group-hover:scale-105"
                    sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                  />

                  <span className="absolute left-5 top-5 rounded-full bg-black/55 px-3 py-1 text-xs font-black text-yellow-200 backdrop-blur">
                    {product.finish}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-black">{product.name}</h3>

                    <span className="shrink-0 rounded-full bg-fuchsia-500/16 px-3 py-1 text-sm font-black text-fuchsia-100">
                      {formatPrice(product)}
                    </span>
                  </div>

                  <p className="mt-2 text-sm font-bold text-cyan-200">
                    {categoryLabels[product.category]} · {product.franchise}
                  </p>

                  <p className="mt-3 min-h-16 text-sm leading-6 text-white/62">
                    {product.description}
                  </p>

                  {product.instagramUrl ? (
                    <Link
                      href={product.instagramUrl}
                      target="_blank"
                      className="mt-6 block w-full rounded-full bg-white px-5 py-3 text-center font-black text-[#12091f] transition hover:bg-yellow-200"
                    >
                      Ver en Instagram
                    </Link>
                  ) : (
                    <Link
                      href="#personalizacion"
                      className="mt-6 block w-full rounded-full bg-white px-5 py-3 text-center font-black text-[#12091f] transition hover:bg-yellow-200"
                    >
                      Cotizar pieza
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.04] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-7 text-sm font-black uppercase tracking-[0.35em] text-cyan-300">
            Categorías rápidas
          </p>

          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-white/10 bg-black/22 px-5 py-3 text-sm font-bold text-white/80"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="proceso" className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-yellow-200">
              Cómo funciona
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-6xl">
              Un proceso claro reduce dudas y aumenta pedidos.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {process.map((step, index) => (
              <div
                key={step.title}
                className="rounded-[2rem] border border-white/10 bg-white/7 p-6"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-fuchsia-500 to-cyan-400 text-lg font-black">
                  {index + 1}
                </span>

                <h3 className="mt-6 text-xl font-black">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/62">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="personalizacion" className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-fuchsia-950/80 via-violet-950 to-cyan-950/70 shadow-2xl lg:grid-cols-[.95fr_1.05fr]">
          <div className="p-8 sm:p-12 lg:p-14">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-fuchsia-200">
              Personalización
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
              Convierte una idea en una pieza real.
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/68">
              Esta sección debe ser el motor de ventas: permite pedir figuras,
              llaveros, props, prototipos y regalos aunque todavía no estén en
              catálogo.
            </p>

            <ul className="mt-8 grid gap-4 text-white/78">
              {[
                "Subida de referencia o enlace",
                "Selección de material y tamaño",
                "Acabado sin pintar o pintado",
                "Cotización por WhatsApp o email",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <FaCheck className="mt-1 text-cyan-300" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <form className="grid gap-4 bg-black/24 p-8 sm:p-12 lg:p-14">
            <input
              className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white outline-none placeholder:text-white/38 focus:border-cyan-300"
              placeholder="Tu nombre"
            />

            <input
              type="email"
              className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white outline-none placeholder:text-white/38 focus:border-cyan-300"
              placeholder="Email o WhatsApp"
            />

            <select
              className="rounded-2xl border border-white/10 bg-[#160d2b] px-5 py-4 text-white outline-none focus:border-cyan-300"
              defaultValue=""
            >
              <option value="" disabled>
                Tipo de pieza
              </option>
              <option>Figura coleccionable</option>
              <option>Llavero personalizado</option>
              <option>Miniatura / wargame</option>
              <option>Pieza funcional / prototipo</option>
            </select>

            <textarea
              className="min-h-36 rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white outline-none placeholder:text-white/38 focus:border-cyan-300"
              placeholder="Describe tu idea, tamaño, colores, material o pega un enlace de referencia."
            />

            <button className="rounded-full bg-gradient-to-r from-yellow-200 to-fuchsia-300 px-6 py-4 font-black text-[#160d2b] transition hover:scale-[1.02]">
              Enviar solicitud de cotización
            </button>
          </form>
        </div>
      </section>

      <section id="galeria" className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.35em] text-cyan-300">
                Confianza visual
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-6xl">
                Muestra trabajos reales cuanto antes.
              </h2>

              <p className="mt-5 text-white/62">
                Esta galería usará las fotos reales que pongas en
                <strong> public/catalogo</strong>. Las piezas terminadas venden
                más que cualquier render.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {featuredProducts.slice(0, 4).map((product, index) => (
                <div
                  key={product.id}
                  className="relative h-52 overflow-hidden rounded-[2rem] border border-white/10 bg-white/7"
                >
                  <Image
                    src={product.image}
                    alt={`Trabajo destacado ${index + 1}`}
                    fill
                    className="object-contain p-6"
                    sizes="50vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="faq"
        className="border-t border-white/10 px-4 py-24 sm:px-6 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-fuchsia-300">
              FAQ
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-6xl">
              Responde antes de que pregunten.
            </h2>
          </div>

          <div className="grid gap-4">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-[1.5rem] border border-white/10 bg-white/7 p-6 open:bg-white/10"
              >
                <summary className="cursor-pointer text-lg font-black">
                  {item.q}
                </summary>
                <p className="mt-4 leading-7 text-white/62">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-4">
          {[
            [FaGem, "Acabados premium"],
            [FaCube, "Modelos a medida"],
            [FaPaintBrush, "Pintura artesanal"],
            [FaTruck, "Entrega coordinada"],
          ].map(([Icon, text]) => {
            const TypedIcon = Icon as typeof FaStar;

            return (
              <div
                key={text as string}
                className="rounded-[2rem] border border-white/10 bg-white/7 p-6 text-center"
              >
                <TypedIcon className="mx-auto mb-4 text-3xl text-yellow-200" />
                <p className="font-black">{text as string}</p>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
}