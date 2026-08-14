import { Facebook, Instagram, Youtube, MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const navigation = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#acerca', label: 'Nosotros' },
    { href: '#eventos', label: 'Servicios' },
    { href: '#ubicacion', label: 'Ubicación' },
    { href: '#contacto', label: 'Contacto' },
  ];

  const socials = [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Youtube, label: 'YouTube', href: '#' },
  ];

  return (
    <footer className="footer-section relative bg-[#071626] text-white overflow-hidden">
      {/* Fuentes + tokens — consistentes con el resto del sitio */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,500&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500&display=swap');

        .footer-display { font-family: 'Fraunces', Georgia, serif; }
        .footer-body { font-family: 'Inter', system-ui, sans-serif; }
        .footer-label { font-family: 'JetBrains Mono', ui-monospace, monospace; letter-spacing: 0.14em; }

        @keyframes footerRise {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .footer-rise { animation: footerRise 0.6s ease-out both; }

        @media (prefers-reduced-motion: reduce) {
          .footer-rise { animation: none; }
        }
      `}</style>

      {/* Resplandor ambiental */}
      <div className="pointer-events-none absolute top-0 right-0 w-96 h-96 bg-[#2563EB]/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-80 h-80 bg-[#D4AF37]/8 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" aria-hidden="true" />

      {/* Filete dorado superior — la misma firma del resto del sitio */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" aria-hidden="true" />

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

            {/* Redes */}
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-[#D4AF37] hover:text-[#F5D76E] transition-colors duration-300"
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Navegación */}
          <div className="footer-rise" style={{ animationDelay: '0.1s' }}>
            <h3 className="footer-label text-xs uppercase text-white/50 mb-6">
              Navegación
            </h3>

            <ul className="space-y-3.5">
              {navigation.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="footer-body text-slate-300 hover:text-[#F5D76E] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div className="footer-rise" style={{ animationDelay: '0.2s' }}>
            <h3 className="footer-label text-xs uppercase text-white/50 mb-6">
              Contáctanos
            </h3>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D4AF37] mt-1 shrink-0" aria-hidden="true" />
                <span className="footer-body text-slate-300 leading-relaxed">
                  Barranquilla, Atlántico
                  <br />
                  Colombia
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" aria-hidden="true" />
                <span className="footer-body text-slate-300">Próximamente</span>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" aria-hidden="true" />
                <span className="footer-body text-slate-300">Próximamente</span>
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