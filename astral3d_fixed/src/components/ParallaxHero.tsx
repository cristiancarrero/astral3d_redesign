"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function ParallaxHero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const current = Math.min(Math.max(-rect.top, 0), total);

      setProgress(total > 0 ? current / total : 0);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[118vh] overflow-hidden bg-[#05020d]"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* PARTICULAS */}
        <div className="astral-particles pointer-events-none absolute inset-0 z-15" />

        {/* FONDO */}
        <div
          className="absolute inset-0 scale-110"
          style={{
            transform: `translateY(${progress * 100}px) scale(1.1)`,
          }}
        >
          <Image
            src="/city.png"
            alt="Ciudad cyberpunk Astral3D"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-[#05020d]" />
        </div>

        {/* PLANETA / LUNA CON DEGRADADO */}
        <div
          className="astral-moon absolute left-1/2 top-[9%] z-10 h-[520px] w-[520px] rounded-full border-[4px] border-fuchsia-300/80 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.18),rgba(217,70,239,0.16)_28%,rgba(14,165,233,0.18)_58%,rgba(6,3,20,0.08)_72%)] sm:h-[620px] sm:w-[620px]"
          style={{
            transform: `translate(calc(-50% + 10px), ${
              progress * 42
            }px) scale(${1 + progress * 0.04})`,
          }}
        />

        {/* IMPRESION 3D PREMIUM */}
        <div
          className="absolute left-1/2 top-[20%] z-30 whitespace-nowrap text-xs font-black uppercase tracking-[1em] text-white/60 sm:text-sm"
          style={{
            transform: "translateX(calc(-54% + 35px))",
            textShadow: "0 0 20px rgba(255,255,255,0.12)",
          }}
        >
          IMPRESIÓN 3D PREMIUM
        </div>

        {/* TITULO DETRAS DE LA CHICA */}
        <div
          className="absolute left-1/2 top-[22%] z-20"
          style={{
            transform: `translate(-50%, ${progress * 16}px)`,
          }}
        >
          <Link href="/" className="block transition hover:scale-[1.025]">
            <h1
              data-text="ASTRAL 3D"
              className="glitch-title select-none whitespace-nowrap text-6xl font-black uppercase italic leading-none tracking-tight text-white drop-shadow-[0_0_28px_rgba(236,72,153,0.95)] sm:text-8xl lg:text-[8.8rem]"
            >
              ASTRAL 3D
            </h1>
          </Link>
        </div>

        {/* CHICA DELANTE DEL TITULO */}
        <div
          className="absolute left-1/2 top-[24%] z-25 h-[690px] w-[690px] sm:h-[790px] sm:w-[790px]"
          style={{
            transform: `translate(calc(-50% + 45px), ${
              progress * -70
            }px) scale(${1 + progress * 0.045})`,
          }}
        >
          <Image
            src="/girl.png"
            alt="Personaje Astral3D"
            fill
            priority
            className="object-contain object-top drop-shadow-[0_0_60px_rgba(236,72,153,0.75)]"
          />
        </div>

        {/* OSCURECER ABAJO */}
        <div className="absolute inset-x-0 bottom-0 z-30 h-[48vh] bg-gradient-to-t from-[#05020d]/95 via-[#05020d]/55 to-transparent" />

        {/* CONTENIDO */}
        <div className="relative z-40 flex h-screen flex-col items-center px-6 text-center text-white">
          <div className="mt-auto mb-10 max-w-5xl">
            <h2 className="bg-gradient-to-r from-fuchsia-400 via-purple-300 to-cyan-300 bg-clip-text text-3xl font-black uppercase tracking-[0.12em] text-transparent sm:text-5xl">
              Piezas únicas para coleccionistas
            </h2>

            <p className="mt-4 text-sm uppercase tracking-[0.45em] text-white/55">
              Resina · Filamento · Personalización
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="#catalogo"
                className="rounded-2xl bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-10 py-4 font-black uppercase tracking-[0.16em] shadow-2xl shadow-fuchsia-500/25 transition hover:scale-[1.03]"
              >
                Ver catálogo
              </Link>

              <Link
                href="#personalizacion"
                className="rounded-2xl border border-fuchsia-400/70 bg-black/25 px-10 py-4 font-black uppercase tracking-[0.16em] backdrop-blur transition hover:border-cyan-300 hover:bg-white/10"
              >
                Cotizar pieza personalizada
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}