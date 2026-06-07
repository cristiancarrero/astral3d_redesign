// src/app/cart/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/catalog";
import { FaTrash, FaMinus, FaPlus, FaWhatsapp, FaArrowLeft } from "react-icons/fa";

// 📞 Configuración oficial de Astral 3D
const WHATSAPP_PHONE = "34624650424"; 

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart();
  
  // Estados oficiales del formulario
  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [notas, setNotas] = useState("");

  const total = getCartTotal();

  // Función de disparo a la API de WhatsApp
  const handleFinalizarPedido = (e: React.FormEvent) => {
    e.preventDefault();

    if (!nombre.trim() || !direccion.trim()) {
      alert("Por favor, rellena tu nombre y dirección para poder gestionar el envío.");
      return;
    }

    // 1. Formatear la lista de productos en texto plano para WhatsApp
    let listaProductos = "";
    cart.forEach((item) => {
      const precioItem = (item.product.priceFrom ?? 0) * item.quantity;
      listaProductos += `• *${item.product.name}* (${item.product.franchise}) x${item.quantity} -> ${formatPrice(precioItem)}\n`;
    });

    // 2. Mensaje estructurado Cyberpunk
    const mensaje = `🛸 *NUEVO PEDIDO - ASTRAL 3D STUDIO* 🛸\n\n` +
      `👋 ¡Hola! He configurado mi carrito en la web y quiero confirmar el siguiente pedido:\n\n` +
      `📦 *PIEZAS SOLICITADAS:*\n${listaProductos}\n` +
      `💰 *TOTAL ESTIMADO:* ${formatPrice(total)} _(Envío no incluido)_\n\n` +
      `📍 *DATOS DE ENTREGA:*\n` +
      `- *Nombre:* ${nombre}\n` +
      `- *Dirección:* ${direccion}\n` +
      (notas.trim() ? `- *Notas/Escala:* ${notas}\n` : "") + `\n` +
      `💳 _Quedo a la espera de que me confirmes los tiempos de impresión y los datos para realizar el Bizum o transferencia._`;

    // 3. Abrir la ventana oficial de WhatsApp
    const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  // PANTALLA 1: Si la cesta está vacía
  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-[#05020d] text-white pt-32 px-4 pb-16 flex items-center justify-center">
        <div className="text-center max-w-md border border-purple-900/30 rounded-3xl bg-[#0d071f]/45 backdrop-blur-md p-10 shadow-[0_0_50px_rgba(168,85,247,0.1)]">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-500/10 text-fuchsia-400 text-2xl mb-6 border border-fuchsia-500/30">
            🛒
          </div>
          <h1 className="text-3xl font-black uppercase tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-cyan-400">
            Tu cesta está vacía
          </h1>
          <p className="mt-4 text-gray-400 text-sm leading-relaxed">
            Explora el radar del catálogo para añadir réplicas de resina, filamento o tus figuras favoritas.
          </p>
          <Link
            href="/catalogo"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-600 px-6 py-3 text-sm font-black text-white shadow-[0_0_20px_rgba(217,70,239,0.3)] transition hover:scale-105"
          >
            <FaArrowLeft className="text-xs" /> Volver al Catálogo
          </Link>
        </div>
      </main>
    );
  }

  // PANTALLA 2: Carrito Activo con productos
  return (
    <main className="min-h-screen bg-[#05020d] text-white pt-32 px-4 md:px-8 pb-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-black uppercase tracking-wider mb-8 bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-cyan-400 border-b border-purple-900/20 pb-4">
          Cesta de Impresión
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* COLUMNA IZQUIERDA: Lista de Figuras */}
          <div className="lg:col-span-7 space-y-4">
            {cart.map((item) => (
              <div 
                key={item.product.id}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#0d071f]/30 p-4 backdrop-blur-sm hover:border-purple-500/20 transition"
              >
                {/* Imagen Miniatura */}
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-white/5 border border-white/10">
                  <Image
                    src={item.product.image || "/logo.png"}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Detalles de la pieza */}
                <div className="flex-1 min-w-0">
                  <span className="text-[9px] font-bold text-cyan-400 uppercase tracking-widest block truncate">
                    {item.product.franchise}
                  </span>
                  <h3 className="font-bold text-white text-base truncate">
                    {item.product.name}
                  </h3>
                  <span className="text-xs text-gray-400 block mt-0.5">
                    {formatPrice(item.product.priceFrom)} / ud
                  </span>
                </div>

                {/* Modificadores de unidades */}
                <div className="flex flex-col sm:flex-row items-center gap-2">
                  <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-xl p-1">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="p-1.5 hover:bg-white/10 text-gray-400 hover:text-white rounded-lg transition text-xs"
                    >
                      <FaMinus />
                    </button>
                    <span className="w-6 text-center font-bold text-sm">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="p-1.5 hover:bg-white/10 text-gray-400 hover:text-white rounded-lg transition text-xs"
                    >
                      <FaPlus />
                    </button>
                  </div>

                  {/* Eliminar de la lista */}
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.product.id)}
                    className="p-2.5 rounded-xl border border-red-500/20 bg-red-500/5 text-red-400 hover:bg-red-500/20 transition text-xs"
                    title="Eliminar pieza"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={clearCart}
              className="text-xs text-gray-500 hover:text-red-400 font-bold uppercase tracking-wider transition pt-2 block ml-auto"
            >
              Vaciar toda la cesta
            </button>
          </div>

          {/* COLUMNA DERECHA: Resumen de Facturación e Inputs */}
          <div className="lg:col-span-5 rounded-3xl border border-white/10 bg-[#0d071f]/60 backdrop-blur-md p-6 shadow-xl">
            <h2 className="text-lg font-extrabold uppercase tracking-wide text-white border-b border-white/5 pb-3 mb-4">
              Resumen del Pedido
            </h2>

            <div className="space-y-3 text-sm text-gray-400 border-b border-white/5 pb-4 mb-4">
              <div className="flex justify-between">
                <span>Subtotal de piezas</span>
                <span className="text-white font-semibold">{formatPrice(total)}</span>
              </div>
              <div className="flex justify-between">
                <span>Método de pago</span>
                <span className="text-cyan-400 font-bold uppercase text-xs tracking-wider">Bizum / Transf.</span>
              </div>
              <div className="flex justify-between">
                <span>Gastos de envío</span>
                <span className="text-fuchsia-400 font-medium text-xs">A calcular en chat</span>
              </div>
            </div>

            <div className="flex justify-between items-baseline mb-6">
              <span className="text-sm uppercase font-black text-gray-400 tracking-wider">Total estimado:</span>
              <span className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-cyan-300">
                {formatPrice(total)}
              </span>
            </div>

            {/* Formulario de Validación */}
            <form onSubmit={handleFinalizarPedido} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Cristian Carrero"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/20 outline-none focus:border-fuchsia-500 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                  Dirección de Envío Completa *
                </label>
                <textarea
                  required
                  rows={2}
                  placeholder="Ej: Calle Gran Vía 12, 3ºB, 28013 Madrid"
                  value={direccion}
                  onChange={(e) => setDireccion(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/20 outline-none focus:border-fuchsia-500 transition resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                  Notas / Escala Especial (Opcional)
                </label>
                <input
                  type="text"
                  placeholder="Ej: Cambiar tamaño a 25cm / Imprimir en resina gris"
                  value={notas}
                  onChange={(e) => setNotas(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/20 outline-none focus:border-fuchsia-500 transition"
                />
              </div>

              {/* Botón de Enviar Pedido a WhatsApp - ¡CORREGIDO Y LIMPIO! */}
              <button
                type="submit"
                className="w-full mt-4 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 py-3 text-sm font-black text-white shadow-[0_0_20px_rgba(34,197,94,0.2)] transition hover:scale-[1.02] hover:from-green-600 hover:to-emerald-700"
              >
                <FaWhatsapp className="text-base" /> Solicitar por WhatsApp
              </button>
            </form>

            <p className="text-[10px] text-center text-gray-500 mt-4 leading-normal">
              Al hacer clic se abrirá un chat privado para acordar los detalles de fabricación y coordinar el pago manual sin comisiones.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}