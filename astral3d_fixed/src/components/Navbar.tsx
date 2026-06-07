"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  FaBars,
  FaMoon,
  FaSearch,
  FaShoppingCart,
  FaSun,
  FaTimes,
  FaWhatsapp,
} from "react-icons/fa";

const navItems = [
  { label: "Catálogo", href: "/catalogo" },
  { label: "Personalizados", href: "/#personalizacion" },
  { label: "Proceso", href: "/#proceso" },
  { label: "Galería", href: "/#galeria" },
  { label: "FAQ", href: "/#faq" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const router = useRouter();

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
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3"
          aria-label="Astral 3D Inicio"
        >
          <Image
            src="/logo.png"
            alt="Astral 3D"
            width={58}
            height={58}
            priority
            className="drop-shadow-[0_0_18px_rgba(168,85,247,.65)]"
          />

          <div className="hidden leading-tight sm:block">
            <span className="block text-sm font-black uppercase tracking-[0.24em] text-white">
              Astral
            </span>
            <span className="block text-xs font-bold uppercase tracking-[0.32em] text-fuchsia-300">
              3D Studio
            </span>
          </div>
        </Link>

        <form
          onSubmit={handleSearch}
          className="relative hidden w-[340px] shrink-0 md:block xl:w-[420px]"
          role="search"
        >
          <input
            name="search"
            type="search"
            placeholder="Buscar figuras, llaveros, resina, filamento..."
            className="w-full rounded-full border border-fuchsia-400/40 bg-white/8 px-5 py-3 pr-12 text-sm text-white outline-none ring-0 placeholder:text-white/45 transition focus:border-cyan-300 focus:bg-white/12"
          />

          <button
            type="submit"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-fuchsia-300 transition hover:text-yellow-200"
            aria-label="Buscar"
          >
            <FaSearch />
          </button>
        </form>

        <div className="hidden flex-1 items-center justify-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-bold text-white/78 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-2">
          <Link
            href="/#personalizacion"
            className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-4 py-2 text-sm font-black text-white shadow-[0_0_24px_rgba(217,70,239,.35)] transition hover:scale-105 sm:flex"
          >
            <FaWhatsapp /> Cotizar
          </Link>

          <Link
            href="/cart"
            className="rounded-full border border-white/10 bg-white/8 p-3 text-white transition hover:border-fuchsia-300/60 hover:bg-white/14"
            aria-label="Carrito"
          >
            <FaShoppingCart />
          </Link>

          <button
            onClick={() => setIsDark((value) => !value)}
            className="rounded-full border border-white/10 bg-white/8 p-3 text-white transition hover:border-yellow-200/60 hover:bg-white/14"
            aria-label="Cambiar tema"
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </button>

          <button
            onClick={() => setMenuOpen((value) => !value)}
            className="rounded-full border border-white/10 bg-white/8 p-3 text-white lg:hidden"
            aria-label="Abrir menú"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#070512] px-4 py-4 lg:hidden">
          <form onSubmit={handleSearch} className="relative mb-4" role="search">
            <input
              name="search"
              type="search"
              placeholder="Buscar en Astral3D..."
              className="w-full rounded-full border border-fuchsia-400/40 bg-white/8 px-5 py-3 pr-12 text-sm text-white outline-none placeholder:text-white/45"
            />

            <button
              type="submit"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-fuchsia-300"
              aria-label="Buscar"
            >
              <FaSearch />
            </button>
          </form>

          <div className="grid gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl bg-white/6 px-4 py-3 font-bold text-white/85"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}