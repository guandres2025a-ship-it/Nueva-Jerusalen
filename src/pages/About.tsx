import { Flame } from 'lucide-react';

export default function About() {
  const anioFundacion = 1999;
  const anioActual = new Date().getFullYear();
  const aniosSirviendo = anioActual - anioFundacion;

  const capitulos = [
    {
      numeral: 'I',
      titulo: 'Nuestra fe',
      texto:
        'Creemos en un solo Dios manifestado en tres personas: Padre, Hijo y Espíritu Santo.',
    },
    {
      numeral: 'II',
      titulo: 'El Espíritu Santo',
      texto:
        'Creemos en la obra y los dones del Espíritu Santo para la edificación de la iglesia y el cumplimiento de la voluntad de Dios.',
    },
    {
      numeral: 'III',
      titulo: 'Nuestra comunidad',
      texto:
        'Buscamos ser una comunidad donde las personas puedan acercarse a Dios, crecer espiritualmente y servir a los demás.',
    },
  ];

  return (
    <section id="acerca" className="about-section relative bg-[#FBF8F1] py-24 md:py-32 overflow-hidden">
      {/* Fuentes + estilos locales del componente */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,500&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500&display=swap');

        .about-section { --ink: #0B1F3A; --gold: #D4AF37; --gold-light: #F5D76E; --muted: #4A5468; }
        .about-display { font-family: 'Fraunces', Georgia, serif; }
        .about-body { font-family: 'Inter', system-ui, sans-serif; }
        .about-label { font-family: 'JetBrains Mono', ui-monospace, monospace; letter-spacing: 0.14em; }

        @keyframes aboutFlamePulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.55; transform: scale(0.85); }
        }
        .about-flame-pulse { animation: aboutFlamePulse 2.6s ease-in-out infinite; }

        @keyframes aboutRise {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .about-rise { animation: aboutRise 0.7s ease-out both; }

        @media (prefers-reduced-motion: reduce) {
          .about-flame-pulse, .about-rise { animation: none; }
        }
      `}</style>

      {/* Textura de fondo: línea de guía sutil, como papel pautado */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(to bottom, transparent, transparent 43px, #0B1F3A 44px)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">

        {/* ===================== HERO / HISTORIA ===================== */}
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-10 mb-28 md:mb-36">

          {/* Columna de texto */}
          <div className="lg:col-span-7 about-rise">
            <p className="about-label text-[#2563EB] text-xs font-medium uppercase mb-5">
              Conócenos — desde {anioFundacion}
            </p>

            <h1 className="about-display text-[#0B1F3A] text-4xl sm:text-5xl md:text-6xl leading-[1.08] mb-8">
              Una historia
              <br />
              escrita línea
              <br />
              <span className="italic text-[#2563EB]">a línea.</span>
            </h1>

            <div className="space-y-5 max-w-xl">
              <p className="about-body text-[var(--muted)] text-lg leading-relaxed">
                La Iglesia Nueva Jerusalén Casa del Dios Altísimo nació el{' '}
                <strong className="text-[#0B1F3A] font-semibold">
                  20 de agosto de {anioFundacion}
                </strong>
                , en el barrio Santo Domingo de Guzmán de la ciudad de Barranquilla.
              </p>

              <p className="about-body text-[var(--muted)] text-lg leading-relaxed">
                A lo largo de los años ha pasado por distintas sedes, hasta
                establecerse en el lugar donde hoy continúa desarrollando su
                ministerio — creciendo mediante la predicación del evangelio,
                la oración y la búsqueda de Su presencia.
              </p>
            </div>
          </div>

          {/* Columna: línea de tiempo / "la llama" */}
          <div className="lg:col-span-5 relative pl-10 about-rise" style={{ animationDelay: '0.15s' }}>
            {/* Línea vertical dorada */}
            <div
              className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-[#D4AF37] via-[#D4AF37]/40 to-[#D4AF37]"
              aria-hidden="true"
            />

            {/* Nodo: fundación */}
            <div className="relative mb-16">
              <span
                className="absolute -left-10 top-1.5 w-3.5 h-3.5 rounded-full bg-[#FBF8F1] border-2 border-[#D4AF37]"
                aria-hidden="true"
              />
              <p className="about-label text-[#0B1F3A] text-xs uppercase mb-2">
                {anioFundacion} · Barranquilla
              </p>
              <p className="about-display text-[#0B1F3A] text-2xl mb-2">
                La fundación
              </p>
              <p className="about-body text-[var(--muted)] leading-relaxed">
                Una obra que comienza en un barrio, con la certeza de que Dios
                la sostendría.
              </p>
            </div>

            {/* Nodo: hoy */}
            <div className="relative">
              <span
                className="absolute -left-10 top-1.5 w-3.5 h-3.5 rounded-full bg-[#0B1F3A] flex items-center justify-center"
                aria-hidden="true"
              >
                <Flame className="about-flame-pulse w-2.5 h-2.5 text-[#F5D76E]" aria-hidden="true" />
              </span>
              <p className="about-label text-[#0B1F3A] text-xs uppercase mb-2">
                Hoy · +{aniosSirviendo} años
              </p>
              <p className="about-display text-[#0B1F3A] text-2xl mb-2">
                Seguimos sirviendo
              </p>
              <p className="about-body text-[var(--muted)] leading-relaxed">
                Más de {aniosSirviendo} años llevando el mensaje de Jesucristo
                y sirviendo a la comunidad.
              </p>
            </div>
          </div>
        </div>

        {/* ===================== IDENTIDAD: TRES CAPÍTULOS ===================== */}
        <div className="mb-28 md:mb-36">
          <div className="max-w-2xl mb-14">
            <p className="about-label text-[#2563EB] text-xs uppercase mb-4">
              Nuestra identidad
            </p>
            <h2 className="about-display text-[#0B1F3A] text-3xl md:text-4xl leading-tight">
              Tres capítulos de lo que creemos
            </h2>
          </div>

          <div className="border-t border-[#0B1F3A]/10">
            {capitulos.map((cap, i) => (
              <div
                key={cap.numeral}
                className={`group grid md:grid-cols-12 gap-4 md:gap-10 items-start py-10 border-b border-[#0B1F3A]/10 ${
                  i % 2 === 1 ? 'md:text-right' : ''
                }`}
              >
                <div
                  className={`md:col-span-2 about-display text-5xl md:text-6xl text-[#D4AF37]/70 group-hover:text-[#D4AF37] transition-colors leading-none ${
                    i % 2 === 1 ? 'md:order-3' : ''
                  }`}
                >
                  {cap.numeral}
                </div>

                <h3
                  className={`md:col-span-3 about-display text-[#0B1F3A] text-2xl md:text-3xl ${
                    i % 2 === 1 ? 'md:order-2' : ''
                  }`}
                >
                  {cap.titulo}
                </h3>

                <p
                  className={`md:col-span-7 about-body text-[var(--muted)] text-lg leading-relaxed ${
                    i % 2 === 1 ? 'md:order-1' : ''
                  }`}
                >
                  {cap.texto}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ===================== MISIÓN ===================== */}
        <div className="relative bg-[#071626] rounded-2xl px-8 py-14 md:px-16 md:py-20 overflow-hidden">
          {/* brillo ambiental sutil */}
          <div
            className="pointer-events-none absolute w-96 h-96 bg-[#2563EB]/20 rounded-full blur-3xl -top-32 -right-20"
            aria-hidden="true"
          />

          <div className="relative grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-1 flex lg:flex-col items-center lg:items-start gap-3 lg:gap-0 mb-2 lg:mb-0">
              <div className="w-px h-10 lg:h-full bg-[#D4AF37]/60" aria-hidden="true" />
            </div>

            <div className="lg:col-span-11">
              <p className="about-label text-[#F5D76E] text-xs uppercase mb-5">
                Nuestra misión
              </p>

              <h2 className="about-display text-white text-3xl md:text-5xl leading-[1.15] mb-7 max-w-2xl">
                Evangelizar, orar y{' '}
                <span className="italic text-[#F5D76E]">llevar libertad.</span>
              </h2>

              <p className="about-body text-slate-300 text-lg leading-relaxed max-w-xl">
                Estamos enfocados en la evangelización, la oración y la
                liberación, buscando que cada persona pueda conocer a
                Jesucristo, experimentar Su presencia y caminar en una vida
                transformada por Dios.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}