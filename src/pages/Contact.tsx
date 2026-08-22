import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}

type FormErrors = Partial<Record<keyof ContactForm, string>>;

export default function Contact() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const contactInfo = [
    {
      icon: Phone,
      title: 'Teléfono',
      info: '+57 300 123 4567',
      link: 'tel:+573001234567',
    },
    {
      icon: Mail,
      title: 'Correo electrónico',
      info: 'casadeldiosaltisimoiglesianuev@gmail.com',
      link: 'mailto:casadeldiosaltisimoiglesianuev@gmail.com',
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      info: 'Barranquilla, Colombia',
      link: '#ubicacion',
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es obligatorio.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El correo es obligatorio.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El correo no es válido.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es obligatorio.';
    }

    return newErrors;
  };

  const handleSubmit = async () => {
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));

      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } finally {
      setLoading(false);
    }
  };

  const inputBase =
    'w-full bg-transparent border-b-2 py-3 outline-none transition-colors contact-body text-[#0B1F3A] placeholder:text-[#0B1F3A]/30';

  return (
    <section id="contacto" className="contact-section relative bg-[#FBF8F1] py-24 md:py-32 overflow-hidden">
      {/* Fuentes + tokens — consistentes con el resto del sitio */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,500&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500&display=swap');

        .contact-section { --ink: #0B1F3A; --gold: #D4AF37; --gold-light: #F5D76E; --muted: #4A5468; }
        .contact-display { font-family: 'Fraunces', Georgia, serif; }
        .contact-body { font-family: 'Inter', system-ui, sans-serif; }
        .contact-label { font-family: 'JetBrains Mono', ui-monospace, monospace; letter-spacing: 0.14em; }

        @keyframes contactRise {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .contact-rise { animation: contactRise 0.6s ease-out both; }

        @keyframes contactSlideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .contact-slide-down { animation: contactSlideDown 0.4s ease-out both; }

        @media (prefers-reduced-motion: reduce) {
          .contact-rise, .contact-slide-down { animation: none; }
        }
      `}</style>

      {/* Textura de papel pautado, igual que en el resto del sitio */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(to bottom, transparent, transparent 43px, #0B1F3A 44px)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">

        {/* Encabezado */}
        <div className="max-w-2xl mb-16 md:mb-20 contact-rise">
          <p className="contact-label text-[#2563EB] text-xs uppercase mb-5">
            Estamos para servirte
          </p>

          <h2 className="contact-display text-[#0B1F3A] text-4xl md:text-5xl leading-[1.1] mb-6">
            Hablemos.
          </h2>

          <p className="contact-body text-[var(--muted)] text-lg leading-relaxed">
            Si deseas conocer más sobre nuestra iglesia, nuestros servicios o
            necesitas comunicarte con nosotros, estaremos felices de
            atenderte.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

          {/* ===================== INFORMACIÓN ===================== */}
          <div className="contact-rise bg-[#071626] rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
            <div
              className="pointer-events-none absolute w-72 h-72 bg-[#2563EB]/15 rounded-full blur-3xl -top-24 -right-16"
              aria-hidden="true"
            />

            <div className="relative">
              <div className="w-px h-8 bg-[#D4AF37]/70 mb-6" aria-hidden="true" />

              <h3 className="contact-display text-3xl md:text-4xl mb-4">
                Iglesia Nueva Jerusalén
              </h3>

              <p className="contact-body text-slate-300 leading-relaxed mb-10">
                Casa del Dios Altísimo. Un lugar de oración, evangelización,
                liberación y crecimiento espiritual.
              </p>

              <div className="border-t border-white/10">
                {contactInfo.map((contact, index) => {
                  const Icon = contact.icon;

                  return (
                    <a
                      key={index}
                      href={contact.link}
                      className="group flex items-center gap-4 py-5 border-b border-white/10 hover:pl-1.5 transition-all duration-300"
                    >
                      <div className="w-9 h-9 shrink-0 rounded-full border border-[#D4AF37]/40 flex items-center justify-center group-hover:border-[#D4AF37] transition-colors">
                        <Icon size={16} className="text-[#F5D76E]" aria-hidden="true" />
                      </div>

                      <div>
                        <p className="contact-label text-[10px] uppercase text-white/50 mb-1">
                          {contact.title}
                        </p>
                        <p className="contact-body text-white/90 font-medium">
                          {contact.info}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ===================== FORMULARIO ===================== */}
          <div className="contact-rise" style={{ animationDelay: '0.1s' }}>
            <h3 className="contact-display text-[#0B1F3A] text-2xl md:text-3xl mb-2">
              Envíanos un mensaje
            </h3>

            <p className="contact-body text-[var(--muted)] mb-8">
              Completa el formulario y déjanos saber cómo podemos ayudarte.
            </p>

            {submitted && (
              <div className="contact-slide-down flex items-center gap-3 mb-8 py-4 px-5 border border-[#D4AF37]/40 rounded-xl bg-[#0B1F3A] text-white">
                <CheckCircle size={20} className="shrink-0 text-[#F5D76E]" aria-hidden="true" />
                <span className="contact-body font-medium">
                  ¡Mensaje enviado correctamente!
                </span>
              </div>
            )}

            <div className="space-y-7">

              {/* Nombre */}
              <div>
                <label className="contact-label block text-xs text-[#0B1F3A]/70 uppercase mb-2">
                  Nombre *
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre completo"
                  className={`${inputBase} ${
                    errors.name
                      ? 'border-red-400 focus:border-red-500'
                      : 'border-[#0B1F3A]/15 focus:border-[#2563EB]'
                  }`}
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-600 contact-body">{errors.name}</p>
                )}
              </div>

              {/* Correo */}
              <div>
                <label className="contact-label block text-xs text-[#0B1F3A]/70 uppercase mb-2">
                  Correo electrónico *
                </label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  className={`${inputBase} ${
                    errors.email
                      ? 'border-red-400 focus:border-red-500'
                      : 'border-[#0B1F3A]/15 focus:border-[#2563EB]'
                  }`}
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600 contact-body">{errors.email}</p>
                )}
              </div>

              {/* Teléfono */}
              <div>
                <label className="contact-label block text-xs text-[#0B1F3A]/70 uppercase mb-2">
                  Teléfono
                </label>
                <input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+57 300 123 4567"
                  className={`${inputBase} border-[#0B1F3A]/15 focus:border-[#2563EB]`}
                />
              </div>

              {/* Mensaje */}
              <div>
                <label className="contact-label block text-xs text-[#0B1F3A]/70 uppercase mb-2">
                  Mensaje *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Escribe tu mensaje aquí..."
                  className={`${inputBase} h-32 resize-none ${
                    errors.message
                      ? 'border-red-400 focus:border-red-500'
                      : 'border-[#0B1F3A]/15 focus:border-[#2563EB]'
                  }`}
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-600 contact-body">{errors.message}</p>
                )}
              </div>

              {/* Botón */}
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="contact-body w-full flex items-center justify-center gap-2 py-4 bg-[#0B1F3A] hover:bg-[#132a4d] text-white rounded-full font-semibold text-base transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed mt-2"
              >
                <Send size={18} aria-hidden="true" />
                {loading ? 'Enviando...' : 'Enviar mensaje'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}