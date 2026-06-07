import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Astral 3D | Figuras, llaveros e impresión 3D personalizada",
  description: "Tienda de impresión 3D para figuras de resina, piezas en filamento, llaveros, miniaturas y productos personalizados con acabado premium.",
  keywords: ["impresión 3D", "figuras 3D", "resina", "filamento", "llaveros personalizados", "miniaturas", "figuras anime"],
  openGraph: {
    title: "Astral 3D",
    description: "Figuras 3D, miniaturas, llaveros y piezas personalizadas en resina y filamento.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="dark">
      <body className="bg-[#080515] antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
