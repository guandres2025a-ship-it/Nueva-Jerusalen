import {
  Map,
  MapMarker,
  MarkerContent,
  MarkerPopup,
  MapControls,
} from "@/components/ui/map";

import { MapPin, Navigation } from "lucide-react";

export default function MapSection() {
  const latitude = 10.93917573071228;
  const longitude = -74.81872537382039;

  const handleDirections = () => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`,
      "_blank"
    );
  };

  return (
    <section id="ubicacion" className="map-section relative bg-[#FBF8F1] py-24 md:py-32 overflow-hidden">
      {/* Fuentes + tokens — consistentes con el resto del sitio */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,500&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500&display=swap');

        .map-section { --ink: #0B1F3A; --gold: #D4AF37; --gold-light: #F5D76E; --muted: #4A5468; }
        .map-display { font-family: 'Fraunces', Georgia, serif; }
        .map-body { font-family: 'Inter', system-ui, sans-serif; }
        .map-label { font-family: 'JetBrains Mono', ui-monospace, monospace; letter-spacing: 0.14em; }

        @keyframes mapRise {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .map-rise { animation: mapRise 0.6s ease-out both; }

        @keyframes mapPulse {
          0% { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        .map-pulse { animation: mapPulse 2.4s ease-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .map-rise, .map-pulse { animation: none; }
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

      <div className="relative max-w-5xl mx-auto px-6 sm:px-8 lg:px-10">

        {/* Encabezado */}
        <div className="max-w-2xl mb-14 map-rise">
          <p className="map-label text-[#2563EB] text-xs uppercase mb-5">
            Ubicación
          </p>

          <h2 className="map-display text-[#0B1F3A] text-4xl md:text-5xl leading-[1.1] mb-6">
            Encuéntranos.
          </h2>

          <p className="map-body text-[var(--muted)] text-lg leading-relaxed">
            Visítanos y comparte con nosotros un tiempo de fe, oración y
            comunión.
          </p>
        </div>

        {/* Mapa */}
        <div
          className="map-rise relative h-[420px] md:h-[480px] w-full rounded-2xl overflow-hidden border border-[#0B1F3A]/10 shadow-lg"
          style={{ animationDelay: '0.1s' }}
        >
          <Map center={[longitude, latitude]} zoom={16}>
            <MapControls position="bottom-right" showZoom showCompass showFullscreen />

            <MapMarker longitude={longitude} latitude={latitude}>
              <MarkerContent>
                <div className="relative flex items-center justify-center">
                  <div
                    className="map-pulse absolute w-11 h-11 rounded-full bg-[#2563EB]/40"
                    aria-hidden="true"
                  />
                  <div className="relative flex items-center justify-center w-11 h-11 bg-[#0B1F3A] rounded-full border-2 border-[#D4AF37] shadow-md">
                    <MapPin className="w-5 h-5 text-[#F5D76E]" fill="currentColor" aria-hidden="true" />
                  </div>
                </div>
              </MarkerContent>

              <MarkerPopup>
                <div className="w-60 space-y-4">
                  <div>
                    <h3 className="map-display text-[#0B1F3A] text-lg mb-0.5">
                      Iglesia Nueva Jerusalén
                    </h3>
                    <p className="map-label text-[10px] uppercase text-[#A67C00]">
                      Casa del Dios Altísimo
                    </p>
                  </div>

                  <p className="map-body flex items-center gap-2 text-sm text-[var(--muted)]">
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" aria-hidden="true" />
                    Barranquilla, Colombia
                  </p>

                  <button
                    onClick={handleDirections}
                    className="map-body w-full flex items-center justify-center gap-2 bg-[#0B1F3A] hover:bg-[#132a4d] text-white px-4 py-2.5 rounded-full font-semibold text-sm transition-colors duration-300"
                  >
                    <Navigation className="w-3.5 h-3.5" aria-hidden="true" />
                    Cómo llegar
                  </button>
                </div>
              </MarkerPopup>
            </MapMarker>
          </Map>
        </div>

        {/* Información inferior */}
        <div className="mt-8 flex items-center justify-center gap-2 map-rise" style={{ animationDelay: '0.2s' }}>
          <MapPin className="w-4 h-4 text-[#D4AF37]" aria-hidden="true" />
          <p className="map-body text-[var(--muted)] font-medium">
            Barranquilla, Atlántico, Colombia
          </p>
        </div>

      </div>
    </section>
  );
}