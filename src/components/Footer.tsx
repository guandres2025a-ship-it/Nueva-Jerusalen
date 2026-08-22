/**
 * Footer — Iglesia Nueva Jerusalén
 *
 * Correcciones aplicadas:
 * FIX 1: @import de fuentes movido fuera del componente (ver comentario abajo).
 * FIX 2: bg-[#D4AF37]/8 → bg-[#D4AF37]/10 (valor de opacidad válido en Tailwind).
 * FIX 3: Links de ancla con scroll suave vía handleAnchorClick.
 * FIX 4: rel="noopener noreferrer" + aria-label descriptivo con aviso de nueva pestaña.
 * FIX 5: size={16} en los íconos de react-icons para forzar dimensiones sin depender del wrapper.
 * FIX 6: animationDelay movido a clases CSS declaradas en el bloque <style>.
 *
 * IMPORTANTE — FIX 1:
 * Agrega estas dos líneas en el <head> de tu documento raíz (index.html o _document.jsx),
 * NO dentro de este componente:
 *
 *   <link rel="preconnect" href="https://fonts.googleapis.com" />
 *   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
 *   <link
 *     href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,500&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500&display=swap"
 *     rel="stylesheet"
 *   />
 */

import type { MouseEvent } from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

export default function Footer() {
  const navigation = [
    { href: "#inicio",    label: "Inicio" },
    { href: "#acerca",    label: "Nosotros" },
    { href: "#eventos",   label: "Servicios" },
    { href: "#ubicacion", label: "Ubicación" },
    { href: "#contacto",  label: "Contacto" },
  ];

  const socials = [
    {
      icon: FaFacebookF,
      label: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61590460418017",
    },
    {
      icon: FaInstagram,
      label: "Instagram",
      href: "https://www.instagram.com/iglesianueva_jerusalen/",
    },
    {
      icon: FaYoutube,
      label: "YouTube",
      href: "https://www.youtube.com/@IglesiaNuevaJerusalenCasaDelDiosAltisimo",
    },
    {
      icon: FaTiktok,
      label: "TikTok",
      href: "https://www.tiktok.com/@iglesianueva_jerusalen",
    },
  ];

  /**
   * FIX 3: Scroll suave hacia anclas internas sin depender de scroll-behavior global,
   * compatible con React Router (no recarga la página).
   */
  function handleAnchorClick(e: MouseEvent<HTMLAnchorElement>, href: string) {
    const id = href.replace("#", "");
    const target = document.getElementById(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    // Si no existe el elemento, el navegador maneja el href normalmente.
  }

  return (
    <footer className="footer-section relative bg-[#071626] text-white overflow-hidden">

      {/* Tokens de tipografía y animaciones
          FIX 1: @import eliminado — las fuentes deben cargarse en el <head> del documento.
          FIX 6: Los delays de animación se definen aquí como clases para evitar
                 mismatches de hidratación SSR en lugar de style inline. */}
      <style>{`
        .footer-display   { font-family: 'Fraunces', Georgia, serif; }
        .footer-body      { font-family: 'Inter', system-ui, sans-serif; }
        .footer-label     { font-family: 'JetBrains Mono', ui-monospace, monospace; letter-spacing: 0.14em; }

        @keyframes footerRise {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .footer-rise          { animation: footerRise 0.6s ease-out both; }
        .footer-rise-delay-1  { animation: footerRise 0.6s 0.1s ease-out both; }
        .footer-rise-delay-2  { animation: footerRise 0.6s 0.2s ease-out both; }

        @media (prefers-reduced-motion: reduce) {
          .footer-rise,
          .footer-rise-delay-1,
          .footer-rise-delay-2 { animation: none; }
        }
      `}</style>

      {/* Resplandor ambiental */}
      <div
        className="pointer-events-none absolute top-0 right-0 w-96 h-96 bg-[#2563EB]/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"
        aria-hidden="true"
      />
      {/* FIX 2: /8 → /10 (opacidad válida en Tailwind) */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"
        aria-hidden="true"
      />

      {/* Filete dorado superior */}
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Iglesia */}
          <div className="footer-rise lg:col-span-2">
            <h2 className="footer-display text-2xl md:text-3xl mb-1">
              Iglesia Nueva Jerusalén
            </h2>

            <p className="footer-label text-[#F5D76E] text-xs uppercase mb-6">
              Casa del Dios Altísimo
            </p>

            <p className="footer-body text-slate-300 max-w-md leading-relaxed mb-7">
              Una iglesia cristiana evangélica enfocada en la evangelización,
              la oración y la liberación, llevando el mensaje de Jesucristo a
              cada vida.
            </p>

            {/* Redes sociales */}
            <div className="flex gap-3" role="list">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  /* FIX 4: aria-label indica explícitamente que abre en nueva pestaña */
                  aria-label={`${label} (abre en nueva pestaña)`}
                  role="listitem"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-[#D4AF37] hover:text-[#F5D76E] hover:bg-white/5 hover:scale-105 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]"
                >
                  {/* FIX 5: size en lugar de clases w/h para que react-icons
                      aplique las dimensiones directamente al SVG */}
                  <Icon size={16} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Navegación */}
          {/* FIX 6: animationDelay como clase CSS en lugar de style inline */}
          <nav aria-label="Navegación del pie de página" className="footer-rise-delay-1">
            <h3 className="footer-label text-xs uppercase text-white/50 mb-6">
              Navegación
            </h3>

            <ul className="space-y-3.5">
              {navigation.map((link) => (
                <li key={link.href}>
                  {/* FIX 3: scroll suave vía handleAnchorClick */}
                  <a
                    href={link.href}
                    onClick={(e) => handleAnchorClick(e, link.href)}
                    className="footer-body text-slate-300 hover:text-[#F5D76E] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37] rounded-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contacto */}
          <div className="footer-rise-delay-2">
            <h3 className="footer-label text-xs uppercase text-white/50 mb-6">
              Contáctanos
            </h3>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin
                  className="w-4 h-4 text-[#D4AF37] mt-1 shrink-0"
                  aria-hidden="true"
                />
                <span className="footer-body text-slate-300 leading-relaxed">
                  Barranquilla, Atlántico
                  <br />
                  Colombia
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone
                  className="w-4 h-4 text-[#D4AF37] shrink-0"
                  aria-hidden="true"
                />
                <span className="footer-body text-slate-300">
                  Próximamente
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Mail
                  className="w-4 h-4 text-[#D4AF37] shrink-0"
                  aria-hidden="true"
                />
                <span className="footer-body text-slate-300">
                  casadeldiosaltisimoiglesianuev@gmail.com

                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="relative border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 footer-label text-[11px] text-white/40 uppercase">
            <p>© 2026 Iglesia Nueva Jerusalén Casa del Dios Altísimo</p>
            <p>Todos los derechos reservados</p>
          </div>
        </div>
      </div>

    </footer>
  );
}