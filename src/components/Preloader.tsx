import { useEffect, useState } from 'react';

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);
  const [prefersReducedMotion] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  // Duración total (visible + salida) — una sola fuente de verdad para
  // que el temporizador de React y la animación CSS de salida coincidan
  // en ambos modos, con o sin movimiento reducido.
  const holdMs = prefersReducedMotion ? 900 : 2400;
  const fadeMs = prefersReducedMotion ? 200 : 700;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, holdMs + fadeMs);

    return () => clearTimeout(timer);
  }, [holdMs, fadeMs]);

  if (!isVisible) return null;

  return (
    <div
      className="preloader fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#071626]"
      style={{
        animation: `preloaderFadeOut ${fadeMs}ms ease-out forwards`,
        animationDelay: `${holdMs}ms`,
      }}
    >
      <style>{`
        .preloader-display { font-family: 'Fraunces', Georgia, serif; }
        .preloader-label { font-family: 'JetBrains Mono', ui-monospace, monospace; letter-spacing: 0.16em; }

        @keyframes preloaderFadeOut {
          from { opacity: 1; visibility: visible; }
          to { opacity: 0; visibility: hidden; }
        }
        @keyframes preloaderGrowLine {
          from { height: 0; }
          to { height: 2.5rem; }
        }
        @keyframes preloaderRise {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes preloaderFill {
          from { width: 0%; }
          to { width: 100%; }
        }

        .preloader-line { animation: preloaderGrowLine 0.7s ease-out both; }
        .preloader-rise-1 { animation: preloaderRise 0.6s ease-out 0.35s both; }
        .preloader-rise-2 { animation: preloaderRise 0.6s ease-out 0.55s both; }
        .preloader-fill { animation: preloaderFill ${holdMs}ms linear 0.2s both; }

        /* Movimiento reducido: solo afecta al preloader, no a toda la página */
        .preloader.reduced-motion .preloader-line,
        .preloader.reduced-motion .preloader-rise-1,
        .preloader.reduced-motion .preloader-rise-2,
        .preloader.reduced-motion .preloader-fill {
          animation-duration: 0.01ms !important;
        }
      `}</style>

      {/* Resplandor ambiental único, discreto */}
      <div
        className="pointer-events-none absolute w-[500px] h-[500px] bg-[#2563EB]/10 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className={`relative z-10 flex flex-col items-center ${prefersReducedMotion ? 'reduced-motion' : ''}`}>

        {/* Línea dorada — la misma firma visual que abre cada sección del sitio */}
        <div className="preloader-line w-px bg-[#D4AF37]/70 mb-8" aria-hidden="true" />

        <div className="text-center mb-10">
          <h1 className="preloader-rise-1 preloader-display text-white text-4xl md:text-5xl leading-tight mb-1">
            Iglesia Nueva
          </h1>
          <h1 className="preloader-rise-1 preloader-display italic text-[#F5D76E] text-4xl md:text-5xl leading-tight mb-5">
            Jerusalén
          </h1>
          <p className="preloader-rise-2 preloader-label text-white/60 text-xs md:text-sm uppercase">
            Casa del Dios Altísimo
          </p>
        </div>

        {/* Indicador de carga: una línea que se llena, no puntos que rebotan */}
        <div className="preloader-rise-2 w-32 h-px bg-white/15 overflow-hidden">
          <div className="preloader-fill h-full bg-[#D4AF37]" />
        </div>
      </div>
    </div>
  );
}