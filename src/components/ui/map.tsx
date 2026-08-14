import * as maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Plus, Minus, Compass, Maximize, Minimize } from "lucide-react";

interface MapProps {
  center?: [number, number];
  zoom?: number;
  className?: string;
  children?: React.ReactNode;
}

interface MapControlsProps {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  showZoom?: boolean;
  showCompass?: boolean;
  showFullscreen?: boolean;
}

interface MapMarkerProps {
  longitude: number;
  latitude: number;
  children?: React.ReactNode;
}

interface MapContextType {
  map: maplibregl.Map | null;
  containerRef: React.RefObject<HTMLDivElement>;
}

const MapContext = createContext<MapContextType | undefined>(undefined);

function useMapContext() {
  const context = useContext(MapContext);
  if (!context) {
    throw new Error("Map components must be used within a Map component");
  }
  return context;
}

/* ============================================================
   Tokens tipográficos compartidos con el resto del sitio
   ============================================================ */
function MapStyleTokens() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500&display=swap');
      .map-body { font-family: 'Inter', system-ui, sans-serif; }
      .map-label { font-family: 'JetBrains Mono', ui-monospace, monospace; letter-spacing: 0.1em; }
    `}</style>
  );
}

export function Map({
  center = [-74.818725, 10.939176],
  zoom = 16,
  className = "",
  children,
}: MapProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const [mapInstance, setMapInstance] = useState<maplibregl.Map | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const style = {
      version: 8 as const,
      sources: {
        osm: {
          type: "raster" as const,
          tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
          tileSize: 256,
          attribution: "© OpenStreetMap contributors",
        },
      },
      layers: [
        {
          id: "osm",
          type: "raster" as const,
          source: "osm",
        },
      ],
      attribution: "© OpenStreetMap contributors",
    };

    const map = new maplibregl.Map({
      container: containerRef.current,
      style: style as any,
      center,
      zoom,
    });

    mapRef.current = map;
    setMapInstance(map);

    return () => {
      map.remove();
      mapRef.current = null;
      setMapInstance(null);
    };
  }, [center, zoom]);

  return (
    <MapContext.Provider value={{ map: mapInstance, containerRef }}>
      <div
        ref={containerRef}
        className={`relative w-full h-full min-h-[400px] ${className}`}
      >
        {children}
      </div>
    </MapContext.Provider>
  );
}

export function MapControls({
  position = "top-right",
  showZoom = true,
  showCompass = true,
  showFullscreen = true,
}: MapControlsProps) {
  const { map } = useMapContext();
  const [isFullscreen, setIsFullscreen] = useState(false);

  const positionClass = {
    "top-left": "top-4 left-4",
    "top-right": "top-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "bottom-right": "bottom-4 right-4",
  }[position];

  // Mantiene el ícono de pantalla completa sincronizado con el estado real
  // del navegador (el original nunca alternaba el ícono).
  useEffect(() => {
    const handleChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handleChange);
    return () => document.removeEventListener("fullscreenchange", handleChange);
  }, []);

  const handleZoomIn = () => {
    if (map) map.zoomTo(map.getZoom() + 1, { duration: 300 });
  };

  const handleZoomOut = () => {
    if (map) map.zoomTo(map.getZoom() - 1, { duration: 300 });
  };

  const handleRotateCompass = () => {
    if (map) map.rotateTo(0, { duration: 300 });
  };

  const handleFullscreen = () => {
    if (!map) return;
    const mapContainer = map.getContainer();
    if (!mapContainer || !mapContainer.parentElement) return;
    const container = mapContainer.parentElement;
    if (!document.fullscreenElement) {
      container.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  };

  const buttonClass =
    "map-body w-10 h-10 flex items-center justify-center text-[#0B1F3A] hover:bg-[#0B1F3A]/5 hover:text-[#A67C00] transition-colors";

  return (
    <div className={`absolute z-20 ${positionClass}`}>
      <MapStyleTokens />
      <div className="flex flex-col gap-2.5">
        {showZoom && (
          <div className="bg-[#FBF8F1] rounded-xl shadow-md border border-[#0B1F3A]/10 overflow-hidden">
            <button
              onClick={handleZoomIn}
              aria-label="Acercar"
              className={`${buttonClass} border-b border-[#0B1F3A]/10`}
            >
              <Plus className="w-4 h-4" strokeWidth={2.5} />
            </button>

            <button onClick={handleZoomOut} aria-label="Alejar" className={buttonClass}>
              <Minus className="w-4 h-4" strokeWidth={2.5} />
            </button>
          </div>
        )}

        {showCompass && (
          <button
            onClick={handleRotateCompass}
            aria-label="Reiniciar orientación"
            className={`${buttonClass} bg-[#FBF8F1] rounded-xl shadow-md border border-[#0B1F3A]/10`}
          >
            <Compass className="w-4 h-4" strokeWidth={2} />
          </button>
        )}

        {showFullscreen && (
          <button
            onClick={handleFullscreen}
            aria-label={isFullscreen ? "Salir de pantalla completa" : "Pantalla completa"}
            className={`${buttonClass} bg-[#FBF8F1] rounded-xl shadow-md border border-[#0B1F3A]/10`}
          >
            {isFullscreen ? (
              <Minimize className="w-4 h-4" strokeWidth={2} />
            ) : (
              <Maximize className="w-4 h-4" strokeWidth={2} />
            )}
          </button>
        )}
      </div>
    </div>
  );
}

export function MapMarker({ longitude, latitude, children }: MapMarkerProps) {
  const { map, containerRef } = useMapContext();
  const [pixelPos, setPixelPos] = useState<{ x: number; y: number } | null>(
    null
  );

  useEffect(() => {
    if (!map || !containerRef.current) return;

    const updatePosition = () => {
      const canvas = map.getCanvas();
      if (!canvas) return;

      const pos = map.project([longitude, latitude]);
      setPixelPos({ x: pos.x, y: pos.y });
    };

    updatePosition();

    map.on("move", updatePosition);
    map.on("zoom", updatePosition);

    return () => {
      map.off("move", updatePosition);
      map.off("zoom", updatePosition);
    };
  }, [map, longitude, latitude, containerRef]);

  if (!pixelPos) return null;

  return (
    <div
      className="absolute z-10 pointer-events-auto"
      style={{
        left: `${pixelPos.x}px`,
        top: `${pixelPos.y}px`,
        transform: "translate(-50%, -100%)",
      }}
    >
      {children}
    </div>
  );
}

export function MarkerContent({ children }: { children?: React.ReactNode }) {
  return <div className="pointer-events-none">{children}</div>;
}

export function MarkerPopup({ children }: { children?: React.ReactNode }) {
  return (
    <div className="absolute left-1/2 bottom-full mb-4 -translate-x-1/2 z-30 pointer-events-auto">
      <MapStyleTokens />
      <div className="relative bg-[#FBF8F1] rounded-2xl shadow-xl border border-[#0B1F3A]/10 overflow-hidden min-w-[180px]">
        <div className="h-[2px] bg-gradient-to-r from-[#2563EB] via-[#D4AF37] to-[#2563EB]" aria-hidden="true" />
        <div className="map-body p-4 text-[#0B1F3A]">{children}</div>
      </div>

      {/* Flecha que conecta el popup con el marcador */}
      <div
        className="absolute left-1/2 top-full -translate-x-1/2 w-3 h-3 -mt-1.5 rotate-45 bg-[#FBF8F1] border-r border-b border-[#0B1F3A]/10"
        aria-hidden="true"
      />
    </div>
  );
}