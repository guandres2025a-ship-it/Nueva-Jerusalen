import { useEffect, useState } from 'react';
import { CalendarDays, Sparkles } from 'lucide-react';

export default function Countdown() {
  const eventDate = new Date('2027-08-20T19:00:00');

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = eventDate.getTime() - now.getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, finished: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      finished: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeBlocks = [
    { value: timeLeft.days, label: 'Días' },
    { value: timeLeft.hours, label: 'Horas' },
    { value: timeLeft.minutes, label: 'Min' },
    { value: timeLeft.seconds, label: 'Seg' },
  ];

  return (
    <section className="countdown-section relative overflow-hidden bg-[#071626] py-24 md:py-28">
      {/* Fuentes + tokens — consistentes con About y Events */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,500&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500&display=swap');

        .countdown-section { --gold: #D4AF37; --gold-light: #F5D76E; }
        .countdown-display { font-family: 'Fraunces', Georgia, serif; }
        .countdown-body { font-family: 'Inter', system-ui, sans-serif; }
        .countdown-label { font-family: 'JetBrains Mono', ui-monospace, monospace; letter-spacing: 0.14em; }

        @keyframes countdownRise {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .countdown-rise { animation: countdownRise 0.6s ease-out both; }

        @media (prefers-reduced-motion: reduce) {
          .countdown-rise { animation: none; }
        }
      `}</style>

      {/* Resplandor ambiental sutil */}
      <div
        className="pointer-events-none absolute w-96 h-96 bg-[#2563EB]/15 rounded-full blur-3xl -top-32 -left-20"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl -bottom-32 -right-20"
        aria-hidden="true"
      />

      {/* Filete dorado superior, como en el original */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" aria-hidden="true" />

      <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">

        {/* ===================== ENCABEZADO ===================== */}
        <div className="text-center mb-14 countdown-rise">
          <p className="countdown-label text-[#F5D76E] text-xs uppercase mb-5">
            Una historia de fe
          </p>

          <h2 className="countdown-display text-white text-4xl md:text-5xl leading-[1.1] mb-6">
            Celebramos nuestro
            <br />
            <span className="italic text-[#F5D76E]">aniversario.</span>
          </h2>

          <p className="countdown-body text-slate-300 text-lg max-w-xl mx-auto mb-8">
            Nos preparamos para celebrar un nuevo año de la Iglesia Nueva
            Jerusalén Casa del Dios Altísimo.
          </p>

          <div className="inline-flex items-center gap-2.5 countdown-label text-xs md:text-sm text-white/80 uppercase border border-[#D4AF37]/30 rounded-full px-5 py-2.5">
            <CalendarDays className="w-4 h-4 text-[#F5D76E]" aria-hidden="true" />
            20 de agosto de 2027 · 7:00 PM
          </div>
        </div>

        {timeLeft.finished ? (
          /* Evento terminado */
          <div className="text-center countdown-rise">
            <Sparkles className="w-7 h-7 text-[#F5D76E] mx-auto mb-4" aria-hidden="true" />
            <p className="countdown-display text-white text-3xl md:text-4xl mb-2">
              ¡Hoy celebramos juntos!
            </p>
            <p className="countdown-body text-slate-300">
              Gracias a Dios por nuestra historia.
            </p>
          </div>
        ) : (
          /* Contador — como un gran reloj tallado, sin tarjetas de vidrio */
          <div className="countdown-rise" style={{ animationDelay: '0.1s' }}>
            <div className="grid grid-cols-4 divide-x divide-[#D4AF37]/20 border-y border-[#D4AF37]/20">
              {timeBlocks.map((block) => (
                <div key={block.label} className="text-center py-8 md:py-10 px-2">
                  <div className="countdown-display tabular-nums text-[#F5D76E] text-4xl sm:text-5xl md:text-7xl leading-none">
                    {String(block.value).padStart(2, '0')}
                  </div>
                  <div className="countdown-label mt-3 md:mt-4 text-[10px] md:text-xs text-white/60 uppercase">
                    {block.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===================== VERSÍCULO ===================== */}
        <div className="text-center mt-16 md:mt-20 countdown-rise" style={{ animationDelay: '0.2s' }}>
          <div className="w-px h-10 bg-[#D4AF37]/50 mx-auto mb-7" aria-hidden="true" />

          <p className="countdown-display italic text-slate-200 text-lg md:text-xl leading-relaxed max-w-xl mx-auto">
            "Después Samuel tomó una piedra, la colocó entre Mizpa y Sen, y la
            llamó Ebenezer: «El Señor no ha dejado de ayudarnos»."
          </p>

          <p className="countdown-label text-[#F5D76E] text-xs uppercase mt-6">
            1 Samuel 7:12
          </p>
        </div>

      </div>
    </section>
  );
}