// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css"; 
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Astral 3D Studio",
  description: "Réplicas exclusivas y figuras impresas en alta definición.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      {/* 🚀 Añadimos suppressHydrationWarning aquí también para bloquear las extensiones del body */}
      <body 
        className="bg-[#05020d] antialiased selection:bg-fuchsia-500 selection:text-white" 
        suppressHydrationWarning
      >
        <CartProvider>
          <Navbar />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}