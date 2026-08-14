import {
  BookOpen,
  Droplets,
  Flame,
  Heart,
  Cross
} from 'lucide-react';

export default function Beliefs() {
  const beliefs = [
    {
      title: 'La Trinidad',
      description:
        'Creemos en un solo Dios, eterno y verdadero, manifestado en tres personas: Padre, Hijo y Espíritu Santo.',
      icon: Cross,
      color: 'from-[#0B1F3A] to-[#2563EB]',
    },
    {
      title: 'Bautismo en Agua',
      description:
        'Practicamos el bautismo en agua por inmersión como expresión pública de fe y obediencia a Jesucristo.',
      icon: Droplets,
      color: 'from-[#2563EB] to-[#1D4ED8]',
    },
    {
      title: 'Dones del Espíritu Santo',
      description:
        'Creemos en la obra y manifestación del Espíritu Santo y en los dones espirituales dados para edificación de la iglesia.',
      icon: Flame,
      color: 'from-[#D4AF37] to-[#A67C00]',
    },
    {
      title: 'La Cena del Señor',
      description:
        'Celebramos la Cena del Señor como un acto de comunión, memoria y proclamación de la obra de Jesucristo.',
      icon: Heart,
      color: 'from-[#061426] to-[#0B1F3A]',
    },
  ];

  return (
    <section
      id="fe"
      className="relative py-24 overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.12),transparent_32%),linear-gradient(180deg,#f8fbff_0%,#edf5ff_100%)]"
    >
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#2563EB]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          <span className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-semibold text-[#0B1F3A] bg-white/80 backdrop-blur-md border border-[#D4AF37]/30 rounded-full shadow-lg shadow-blue-500/10">
            <BookOpen className="w-4 h-4 text-[#D4AF37]" />
            Nuestra fe
          </span>

          <h2 className="text-4xl md:text-5xl font-black text-[#061426] mb-6 tracking-tight">
            Lo que creemos
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            Nuestra fe está fundamentada en la Palabra de Dios y en una
            relación viva con Jesucristo, guiados por la obra del Espíritu Santo.
          </p>
        </div>

        {/* Tarjetas */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {beliefs.map((belief, index) => {
            const Icon = belief.icon;

            return (
              <div
                key={index}
                className="group relative bg-white/75 backdrop-blur-xl rounded-3xl p-7 shadow-[0_25px_60px_rgba(15,23,42,0.08)] hover:shadow-[0_30px_80px_rgba(37,99,235,0.18)] border border-white/80 transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >

                {/* Línea superior */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${belief.color}`}
                />

                {/* Icono */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${belief.color} flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300 ring-4 ring-white`}
                >
                  <Icon className="w-8 h-8 text-[#F5D76E]" />
                </div>

                {/* Número */}
                <span className="text-sm font-bold text-[#1D4ED8] tracking-[0.22em]">
                  0{index + 1}
                </span>

                <h3 className="text-xl font-bold text-[#061426] mt-2 mb-4">
                  {belief.title}
                </h3>

                <p className="text-slate-600 leading-relaxed text-sm">
                  {belief.description}
                </p>

              </div>
            );
          })}

        </div>

        {/* Propósito */}
        <div className="mt-20 relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#061426] via-[#0B1F3A] to-[#1D4ED8] p-8 md:p-12 text-white shadow-[0_35px_90px_rgba(6,20,38,0.35)]">

          {/* Decoración */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#2563EB]/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-20 w-72 h-72 bg-[#D4AF37]/20 rounded-full blur-3xl" />

          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">

            <div>
              <span className="text-[#F5D76E] text-sm font-semibold uppercase tracking-[0.2em]">
                Nuestro propósito
              </span>

              <h3 className="text-3xl md:text-4xl font-black mt-3 mb-5 tracking-tight">
                Evangelizar, orar y llevar libertad
              </h3>

              <p className="text-blue-50 leading-relaxed text-lg">
                Como iglesia buscamos llevar el mensaje de Jesucristo,
                cultivar una vida constante de oración y ministrar a las
                personas que necesitan experimentar la libertad y
                restauración que vienen de Dios.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">

              <div className="text-center">
                <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-white/10 border border-[#D4AF37]/30 flex items-center justify-center backdrop-blur-sm">
                  <BookOpen className="w-7 h-7 text-[#F5D76E]" />
                </div>
                <p className="font-semibold text-white">Evangelización</p>
              </div>

              <div className="text-center">
                <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-white/10 border border-[#D4AF37]/30 flex items-center justify-center backdrop-blur-sm">
                  <Heart className="w-7 h-7 text-[#F5D76E]" />
                </div>
                <p className="font-semibold text-white">Oración</p>
              </div>

              <div className="text-center">
                <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-white/10 border border-[#D4AF37]/30 flex items-center justify-center backdrop-blur-sm">
                  <Flame className="w-7 h-7 text-[#F5D76E]" />
                </div>
                <p className="font-semibold text-white">Liberación</p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

