"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { dataCatalog, categoryLabels } from "@/data/catalog";
import {
  FaBars,
  FaMoon,
  FaSearch,
  FaShoppingCart,
  FaSun,
  FaTimes,
  FaWhatsapp,
  FaFolder,
} from "react-icons/fa";

const navItems = [
  { label: "Catálogo", href: "/catalogo" }, // ¡SOLUCIÓN!: Ruta limpia original sin /todos
  { label: "Personalizados", href: "/#personalizacion" },
  { label: "Proceso", href: "/#proceso" },
  { label: "Galería", href: "/#galeria" },
  { label: "FAQ", href: "/#faq" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  
  const [desktopQuery, setDesktopQuery] = useState("");
  const [mobileQuery, setMobileQuery] = useState("");
  const [showDesktopSug, setShowDesktopSug] = useState(false);
  const [showMobileSug, setShowMobileSug] = useState(false);

  const router = useRouter();

  const getSuggestions = (queryText: string) => {
    const cleanQuery = queryText.toLowerCase().trim();
    if (!cleanQuery) return [];

    const matchedCategories = Object.entries(categoryLabels)
      .filter(([key, label]) => label.toLowerCase().includes(cleanQuery) || key.toLowerCase().includes(cleanQuery))
      .map(([key, label]) => ({
        isCategory: true,
        id: `cat-${key}`,
        name: label,
        url: `/catalogo/${key}`,
      }));

    const matchedProducts = dataCatalog
      .filter(p => p.name.toLowerCase().includes(cleanQuery) || p.franchise.toLowerCase().includes(cleanQuery))
      .map(p => ({
        isCategory: false,
        id: p.id,
        name: p.name,
        franchise: p.franchise,
        image: p.image,
        url: `/producto/${p.slug}`,
      }));

    return [...matchedCategories, ...matchedProducts].slice(0, 6);
  };

  const desktopSuggestions = getSuggestions(desktopQuery);
  const mobileSuggestions = getSuggestions(mobileQuery);

  const handleDesktopSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = desktopQuery.trim();

    if (!query) {
      router.push("/catalogo"); // Enlace limpio si el buscador está vacío
      return;
    }

    router.push(`/catalogo?buscar=${encodeURIComponent(query)}`);
    setShowDesktopSug(false);
  };

  const handleMobileSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = mobileQuery.trim();

    if (!query) {
      router.push("/catalogo");
      setMenuOpen(false);
      return;
    }

    router.push(`/catalogo?buscar=${encodeURIComponent(query)}`);
    setMenuOpen(false);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const shouldUseDark = storedTheme ? storedTheme === "dark" : true;

    setIsDark(shouldUseDark);
    document.documentElement.classList.toggle("dark", shouldUseDark);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#070512]/85 backdrop-blur-2xl">
      <nav className="flex h-20 w-full items-center gap-4 px-3 sm:px-4 lg:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="Astral 3D Inicio">
          <Image
            src="/logo.png"
            alt="Astral 3D"
            width={58}
            height={58}
            priority
            className="drop-shadow-[0_0_18px_rgba(168,85,247,.65)]"
          />
          <div className="hidden leading-tight sm:block">
            <span className="block text-sm font-black uppercase tracking-[0.24em] text-white">Astral</span>
            <span className="block text-xs font-bold uppercase tracking-[0.32em] text-fuchsia-300">3D Studio</span>
          </div>
        </Link>

        {/* Buscador de Escritorio */}
        <form onSubmit={handleDesktopSubmit} className="relative hidden w-[340px] shrink-0 md:block xl:w-[420px]" role="search">
          <input
            name="search"
            type="search"
            autoComplete="off"
            placeholder="Buscar figuras, secciones, materiales..."
            value={desktopQuery}
            onChange={(e) => setDesktopQuery(e.target.value)}
            onFocus={() => setShowDesktopSug(true)}
            onBlur={() => setTimeout(() => setShowDesktopSug(false), 240)}
            className="w-full rounded-full border border-fuchsia-400/40 bg-white/8 px-5 py-3 pr-12 text-sm text-white outline-none ring-0 placeholder:text-white/45 transition focus:border-cyan-300 focus:bg-white/12"
          />
          <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2 text-fuchsia-300 transition hover:text-yellow-200" aria-label="Buscar">
            <FaSearch />
          </button>

          {showDesktopSug && desktopSuggestions.length > 0 && (
            <div className="absolute top-full left-0 w-full mt-2 rounded-2xl border border-purple-500/30 bg-[#070512]/95 backdrop-blur-xl py-2 shadow-[0_10px_30px_rgba(168,85,247,0.3)] z-50 max-h-[350px] overflow-y-auto">
              {desktopSuggestions.map((item) => (
                <Link key={item.id} href={item.url} className="flex items-center gap-3 px-4 py-2.5 hover:bg-white/10 transition-colors">
                  {item.isCategory ? (
                    <>
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-400"><FaFolder className="text-sm" /></div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-sm font-extrabold text-white truncate">{item.name}</span>
                        <span className="text-[10px] text-fuchsia-300 font-bold uppercase tracking-widest">Sección del Catálogo</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <img src={item.image} alt={item.name} className="h-9 w-9 shrink-0 rounded-lg object-cover bg-white/5 border border-white/10" />
                      <div className="flex flex-col min-w-0">
                        <span className="text-sm font-bold text-white truncate">{item.name}</span>
                        <span className="text-[10px] text-cyan-400 font-semibold uppercase tracking-wider truncate">{item.franchise}</span>
                      </div>
                    </>
                  )}
                </Link>
              ))}
            </div>
          )}
        </form>

        <div className="hidden flex-1 items-center justify-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-full px-4 py-2 text-sm font-bold text-white/78 transition hover:bg-white/10 hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-2">
          <Link href="/#personalizacion" className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-4 py-2 text-sm font-black text-white shadow-[0_0_24px_rgba(217,70,239,.35)] transition hover:scale-105 sm:flex"><FaWhatsapp /> Cotizar</Link>
          <Link href="/cart" className="rounded-full border border-white/10 bg-white/8 p-3 text-white transition hover:border-fuchsia-300/60 hover:bg-white/14" aria-label="Carrito"><FaShoppingCart /></Link>
          <button onClick={() => setIsDark((value) => !value)} className="rounded-full border border-white/10 bg-white/8 p-3 text-white transition hover:border-yellow-200/60 hover:bg-white/14" aria-label="Cambiar tema">{isDark ? <FaSun /> : <FaMoon />}</button>
          <button onClick={() => setMenuOpen((value) => !value)} className="rounded-full border border-white/10 bg-white/8 p-3 text-white lg:hidden" aria-label="Abrir menú">{menuOpen ? <FaTimes /> : <FaBars />}</button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#070512] px-4 py-4 lg:hidden">
          <form onSubmit={handleMobileSubmit} className="relative mb-4" role="search">
            <input
              name="search"
              type="search"
              autoComplete="off"
              placeholder="Buscar figuras o secciones..."
              value={mobileQuery}
              onChange={(e) => setMobileQuery(e.target.value)}
              onFocus={() => setShowMobileSug(true)}
              onBlur={() => setTimeout(() => setShowMobileSug(false), 240)}
              className="w-full rounded-full border border-fuchsia-400/40 bg-white/8 px-5 py-3 pr-12 text-sm text-white outline-none placeholder:text-white/45"
            />
            <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2 text-fuchsia-300" aria-label="Buscar"><FaSearch /></button>

            {showMobileSug && mobileSuggestions.length > 0 && (
              <div className="absolute top-full left-0 w-full mt-2 rounded-2xl border border-purple-500/30 bg-[#070512] py-2 shadow-2xl z-50 max-h-[260px] overflow-y-auto">
                {mobileSuggestions.map((item) => (
                  <Link key={item.id} href={item.url} onClick={() => setMenuOpen(false)} className="flex items-center gap-3 px-4 py-2 hover:bg-white/10 transition-colors">
                    {item.isCategory ? (
                      <><FaFolder className="text-fuchsia-400 shrink-0" /><div className="flex flex-col min-w-0"><span className="text-sm font-bold text-white truncate">{item.name}</span><span className="text-[9px] text-fuchsia-400 uppercase tracking-wider">Sección</span></div></>
                    ) : (
                      <><img src={item.image} alt={item.name} className="h-8 w-8 shrink-0 rounded-lg object-cover bg-white/5" /><div className="flex flex-col min-w-0"><span className="text-sm font-bold text-white truncate">{item.name}</span><span className="text-[9px] text-cyan-400 uppercase tracking-wider truncate">{item.franchise}</span></div></>
                    )}
                  </Link>
                ))}
              </div>
            )}
          </form>

          <div className="grid gap-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="rounded-2xl bg-white/6 px-4 py-3 font-bold text-white/85">{item.label}</Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}