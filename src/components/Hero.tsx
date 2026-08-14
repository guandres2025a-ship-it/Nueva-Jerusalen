import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowDown } from 'lucide-react';

const slides = [
  {
    image: '/images/hero-1.jpg',
    title: 'Bienvenidos',
    subtitle: 'Iglesia Nueva Jerusalén',
    description: 'Casa del Dios Altísimo',
  },
  {
    image: '/images/hero-2.jpg',
    title: 'Una iglesia de fe',
    subtitle: 'Evangelización, oración y liberación',
    description: 'Un lugar para encontrarnos con Dios',
  },
  {
    image: '/images/hero-3.jpg',
    title: 'Una historia que continúa',
    subtitle: 'Desde el 20 de agosto de 1999',
    description: 'Más de dos décadas caminando en fe',
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('acerca')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  const slide = slides[currentSlide];

  return (
    <section
      id="inicio"
      className="hero-section relative h-[calc(100vh-4rem)] min-h-[600px] overflow-hidden"
    >
      {/* Fuentes + tokens — consistentes con About, Events y Countdown */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,500&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@500&display=swap');

        .hero-section { --gold: #D4AF37; --gold-light: #F5D76E; }
        .hero-display { font-family: 'Fraunces', Georgia, serif; }
        .hero-body { font-family: 'Inter', system-ui, sans-serif; }
        .hero-label { font-family: 'JetBrains Mono', ui-monospace, monospace; letter-spacing: 0.14em; }

        @keyframes heroFadeIn {
          from { opacity: 0; transform: scale(1.04); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes heroRise {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-fade-in { animation: heroFadeIn 1.4s ease-out both; }
        .hero-rise { animation: heroRise 0.8s ease-out both; }

        @media (prefers-reduced-motion: reduce) {
          .hero-fade-in, .hero-rise { animation: none; }
        }
      `}</style>

      {/* Imagen */}
      <div className="absolute inset-0">
        <img
          key={slide.image}
          src={slide.image}
          alt={slide.subtitle}
          className="hero-fade-in w-full h-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#071626]/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#071626]/95 via-[#0B1F3A]/35 to-[#0B1F3A]/35" />

      {/* Filete dorado superior */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent z-20" aria-hidden="true" />

      {/* Contenido */}
      <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-6">
        <div key={currentSlide} className="hero-rise max-w-4xl">
          <div className="w-px h-8 bg-[#D4AF37]/70 mx-auto mb-6" aria-hidden="true" />

          <p className="hero-label text-xs md:text-sm uppercase text-[#F5D76E] mb-6">
            {slide.title}
          </p>

          <h1 className="hero-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] mb-5">
            {slide.subtitle}
          </h1>

          <p className="hero-body text-lg md:text-2xl text-slate-200 font-light mb-11">
            {slide.description}
          </p>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-5">
            <button
              onClick={scrollToAbout}
              className="hero-body px-9 py-4 rounded-full bg-white text-[#0B1F3A] font-semibold text-base hover:bg-[#F5D76E] transition-colors duration-300"
            >
              Conócenos
            </button>

            <button
              onClick={scrollToContact}
              className="hero-body px-9 py-4 rounded-full border border-white/50 text-white font-semibold text-base hover:border-[#D4AF37] hover:text-[#F5D76E] transition-colors duration-300"
            >
              Contáctanos
            </button>
          </div>
        </div>
      </div>

      {/* Flecha izquierda */}
      <button
        onClick={previousSlide}
        aria-label="Imagen anterior"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-white/25 text-white flex items-center justify-center hover:border-[#D4AF37] hover:text-[#F5D76E] transition-colors duration-300"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Flecha derecha */}
      <button
        onClick={nextSlide}
        aria-label="Siguiente imagen"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-white/25 text-white flex items-center justify-center hover:border-[#D4AF37] hover:text-[#F5D76E] transition-colors duration-300"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Ir a la imagen ${index + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'w-9 bg-[#D4AF37]' : 'w-1.5 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Indicador de scroll */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 text-white/60 hover:text-[#F5D76E] transition-colors"
        aria-label="Desplazarse hacia abajo"
      >
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
}