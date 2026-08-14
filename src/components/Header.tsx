import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#acerca', label: 'Nosotros' },
    { href: '#eventos', label: 'Servicios' },
    { href: '#contacto', label: 'Contacto' },
  ];

  const handleNavClick = () => setIsMenuOpen(false);

  return (
    <header
      className={`header-bar fixed top-0 left-0 right-0 z-50 transition-colors duration-500 border-b ${
        isScrolled
          ? 'bg-[#FBF8F1]/95 backdrop-blur-sm border-[#0B1F3A]/10'
          : 'bg-[#0B1F3A]/25 backdrop-blur-sm border-white/15'
      }`}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500,600&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500&display=swap');

        .header-display { font-family: 'Fraunces', Georgia, serif; }
        .header-body { font-family: 'Inter', system-ui, sans-serif; }
        .header-label { font-family: 'JetBrains Mono', ui-monospace, monospace; letter-spacing: 0.14em; }
      `}</style>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <a href="#inicio" onClick={handleNavClick} className="flex flex-col leading-tight">
            <span
              className={`header-display text-base lg:text-lg transition-colors ${
                isScrolled ? 'text-[#0B1F3A]' : 'text-white'
              }`}
            >
              Iglesia Nueva Jerusalén
            </span>
            <span
              className={`header-label text-[10px] lg:text-[11px] uppercase transition-colors ${
                isScrolled ? 'text-[#A67C00]' : 'text-[#F5D76E]'
              }`}
            >
              Casa del Dios Altísimo
            </span>
          </a>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`header-body relative group text-sm font-medium transition-colors ${
                  isScrolled ? 'text-[#0B1F3A]/80 hover:text-[#0B1F3A]' : 'text-white/85 hover:text-white'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-px group-hover:w-full transition-all duration-300 ${
                    isScrolled ? 'bg-[#D4AF37]' : 'bg-[#F5D76E]'
                  }`}
                />
              </a>
            ))}

            <a
              href="#contacto"
              className={`header-body ml-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-colors duration-300 ${
                isScrolled
                  ? 'bg-[#0B1F3A] text-white hover:bg-[#132a4d]'
                  : 'bg-white text-[#0B1F3A] hover:bg-[#F5D76E]'
              }`}
            >
              Visítanos
            </a>
          </nav>

          {/* Botón móvil */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-[#0B1F3A]' : 'text-white'
            }`}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menú móvil */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'
          }`}
        >
          <nav
            className={`rounded-2xl p-2 border ${
              isScrolled ? 'bg-white border-[#0B1F3A]/10' : 'bg-[#071626] border-white/10'
            }`}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className={`header-body block px-4 py-3 rounded-xl font-medium transition-colors ${
                  isScrolled
                    ? 'text-[#0B1F3A]/80 hover:bg-[#0B1F3A]/5 hover:text-[#0B1F3A]'
                    : 'text-white/85 hover:bg-white/5 hover:text-[#F5D76E]'
                }`}
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contacto"
              onClick={handleNavClick}
              className={`header-body block mt-1 text-center px-4 py-3 rounded-xl font-semibold transition-colors ${
                isScrolled
                  ? 'bg-[#0B1F3A] text-white hover:bg-[#132a4d]'
                  : 'bg-white text-[#0B1F3A] hover:bg-[#F5D76E]'
              }`}
            >
              Visítanos
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}