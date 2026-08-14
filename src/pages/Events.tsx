import { Shield, Sparkles, Book, Heart, Clock } from 'lucide-react';

export default function Events() {
  const agenda = [
    {
      dia: 'Lunes',
      servicios: [
        {
          titulo: 'Servicio de Guerra Espiritual',
          hora: '7:00 PM',
          descripcion: 'Un tiempo de oración, intercesión y batalla espiritual.',
          icon: Shield,
          acento: '#2563EB',
        },
      ],
    },
    {
      dia: 'Martes',
      servicios: [
        {
          titulo: 'Ayuno',
          hora: '9:00 AM',
          descripcion: 'Tiempo de consagración y búsqueda de la presencia de Dios.',
          icon: Sparkles,
          acento: '#A67C00',
        },
      ],
    },
    {
      dia: 'Miércoles',
      servicios: [
        {
          titulo: 'Servicio Evangelístico',
          hora: '7:00 PM',
          descripcion: 'Compartimos el mensaje de Jesucristo y extendemos el evangelio.',
          icon: Book,
          acento: '#2563EB',
        },
      ],
    },
    {
      dia: 'Jueves',
      servicios: [
        {
          titulo: 'Ayuno',
          hora: '9:00 AM',
          descripcion: 'Un tiempo para buscar a Dios en oración y consagración.',
          icon: Sparkles,
          acento: '#A67C00',
        },
      ],
    },
    {
      dia: 'Viernes',
      servicios: [
        {
          titulo: 'Servicio de Alabanzas',
          hora: '7:00 PM',
          descripcion: 'Un tiempo especial para alabar y exaltar el nombre de Dios.',
          icon: Heart,
          acento: '#0B1F3A',
        },
      ],
    },
    {
      dia: 'Sábado',
      servicios: [
        {
          titulo: 'Ayuno',
          hora: '9:00 AM',
          descripcion: 'Tiempo de consagración y búsqueda espiritual.',
          icon: Sparkles,
          acento: '#A67C00',
        },
      ],
    },
    {
      dia: 'Domingo',
      servicios: [
        {
          titulo: 'Escuela Dominical',
          hora: '8:00 AM',
          descripcion: 'Un espacio de enseñanza bíblica y crecimiento espiritual.',
          icon: Book,
          acento: '#2563EB',
        },
        {
          titulo: 'Escuela Dominical',
          hora: '10:00 AM',
          descripcion: 'Un espacio de enseñanza bíblica y crecimiento espiritual.',
          icon: Book,
          acento: '#0B1F3A',
        },
      ],
    },
  ];

  return (
    <section id="eventos" className="events-section relative bg-[#FBF8F1] py-24 md:py-32 overflow-hidden">
      {/* Fuentes + tokens — consistentes con la sección About */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,500&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500&display=swap');

        .events-section { --ink: #0B1F3A; --gold: #D4AF37; --gold-light: #F5D76E; --muted: #4A5468; }
        .events-display { font-family: 'Fraunces', Georgia, serif; }
        .events-body { font-family: 'Inter', system-ui, sans-serif; }
        .events-label { font-family: 'JetBrains Mono', ui-monospace, monospace; letter-spacing: 0.14em; }

        @keyframes eventsRise {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .events-rise { animation: eventsRise 0.6s ease-out both; }

        @media (prefers-reduced-motion: reduce) {
          .events-rise { animation: none; }
        }
      `}</style>

      {/* Textura de papel pautado, igual que About */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(to bottom, transparent, transparent 43px, #0B1F3A 44px)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-10">

        {/* ===================== ENCABEZADO ===================== */}
        <div className="max-w-2xl mb-16 md:mb-20 events-rise">
          <p className="events-label text-[#2563EB] text-xs uppercase mb-5">
            Agenda semanal
          </p>

          <h2 className="events-display text-[#0B1F3A] text-4xl md:text-5xl leading-[1.1] mb-6">
            Nuestros servicios,
            <br />
            <span className="italic text-[#2563EB]">día a día.</span>
          </h2>

          <p className="events-body text-[var(--muted)] text-lg leading-relaxed">
            Acompáñanos durante la semana en nuestros tiempos de oración,
            ayuno, enseñanza, evangelización y adoración.
          </p>
        </div>

        {/* ===================== AGENDA (formato de registro) ===================== */}
        <div className="relative border-t border-[#0B1F3A]/10">
          {/* Filete dorado de margen, como en el hero de About */}
          <div
            className="hidden md:block absolute left-[168px] top-0 bottom-0 w-px bg-[#D4AF37]/30"
            aria-hidden="true"
          />

          {agenda.map((grupo, gi) => (
            <div
              key={grupo.dia}
              className="events-rise grid md:grid-cols-[168px_1px_1fr] gap-0 md:gap-8 border-b border-[#0B1F3A]/10 py-8 md:py-9"
              style={{ animationDelay: `${gi * 0.06}s` }}
            >
              {/* Día */}
              <div className="mb-4 md:mb-0">
                <p className="events-display text-[#0B1F3A] text-2xl md:text-3xl">
                  {grupo.dia}
                </p>
              </div>

              <div className="hidden md:block" />

              {/* Servicios de ese día */}
              <div className="space-y-6 md:space-y-7">
                {grupo.servicios.map((servicio, si) => {
                  const Icon = servicio.icon;
                  return (
                    <div
                      key={si}
                      className="flex items-start gap-4"
                    >
                      <div
                        className="mt-1 w-8 h-8 shrink-0 rounded-full flex items-center justify-center border"
                        style={{ borderColor: `${servicio.acento}55` }}
                      >
                        <Icon
                          className="w-4 h-4"
                          style={{ color: servicio.acento }}
                          aria-hidden="true"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1.5">
                          <h3 className="events-display text-[#0B1F3A] text-xl md:text-[1.35rem]">
                            {servicio.titulo}
                          </h3>
                          <span
                            className="events-label inline-flex items-center gap-1.5 text-xs"
                            style={{ color: servicio.acento }}
                          >
                            <Clock className="w-3 h-3" aria-hidden="true" />
                            {servicio.hora}
                          </span>
                        </div>
                        <p className="events-body text-[var(--muted)] leading-relaxed">
                          {servicio.descripcion}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* ===================== VERSÍCULO DE CIERRE ===================== */}
        <div className="relative bg-[#071626] rounded-2xl px-8 py-14 md:px-16 md:py-16 mt-20 md:mt-24 overflow-hidden text-center">
          <div
            className="pointer-events-none absolute w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl -bottom-24 -left-16"
            aria-hidden="true"
          />

          <div className="relative max-w-2xl mx-auto">
            <div className="w-px h-10 bg-[#D4AF37]/60 mx-auto mb-7" aria-hidden="true" />

            <p className="events-display italic text-white text-xl md:text-2xl leading-relaxed">
              "Porque donde están dos o tres congregados en mi nombre, allí
              estoy yo en medio de ellos."
            </p>

            <p className="events-label text-[#F5D76E] text-xs uppercase mt-6">
              Mateo 18:20
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}