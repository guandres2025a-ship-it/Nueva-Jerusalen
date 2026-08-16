import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LightGallery from "lightgallery/react";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";

import { galleryImages, type GalleryImage } from "@/components/data/gallery";

const categories = [
  { id: "all", label: "Todas" },
  { id: "cultos", label: "Cultos" },
  { id: "campañas", label: "Campañas" },
  { id: "aniversarios", label: "Aniversarios" },
  { id: "evangelismo", label: "Evangelismo" },
  { id: "escuela", label: "Escuela Dominical" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");

  const images =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter(
          (image: GalleryImage) => image.category === activeCategory
        );

  return (
    <section id="galeria" className="gallery-section relative bg-[#FBF8F1] py-24 md:py-32 overflow-hidden">
      {/* Fuentes + tokens — consistentes con el resto del sitio */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,500&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500&display=swap');

        .gallery-section { --ink: #0B1F3A; --gold: #D4AF37; --gold-light: #F5D76E; --muted: #4A5468; }
        .gallery-display { font-family: 'Fraunces', Georgia, serif; }
        .gallery-body { font-family: 'Inter', system-ui, sans-serif; }
        .gallery-label { font-family: 'JetBrains Mono', ui-monospace, monospace; letter-spacing: 0.12em; }
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
        <div className="max-w-2xl mb-12 md:mb-14">
          <p className="gallery-label text-[#2563EB] text-xs uppercase mb-5">
            Nuestra galería
          </p>

          <h2 className="gallery-display text-[#0B1F3A] text-4xl md:text-5xl leading-[1.1]">
            Momentos que Dios nos
            <br />
            ha permitido <span className="italic text-[#2563EB]">vivir.</span>
          </h2>
        </div>

        {/* Filtro de categorías */}
        <div className="flex flex-wrap gap-2.5 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`gallery-label px-4 py-2 rounded-full text-[11px] uppercase transition-colors duration-300 ${
                activeCategory === category.id
                  ? "bg-[#0B1F3A] text-white"
                  : "bg-transparent text-[#0B1F3A]/60 border border-[#0B1F3A]/15 hover:border-[#D4AF37] hover:text-[#0B1F3A]"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            >
              {images.map((image: GalleryImage) => (
                <motion.a
                  layout
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                  key={image.id}
                  href={image.src}
                  className="group relative block overflow-hidden rounded-2xl border border-[#0B1F3A]/10"
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#071626]/85 via-[#071626]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                    <div className="p-6">
                      <p className="gallery-label text-[10px] uppercase text-[#F5D76E] mb-1.5">
                        {categories.find((c) => c.id === image.category)?.label}
                      </p>
                      <h3 className="gallery-display text-white text-xl">
                        {image.title}
                      </h3>
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </AnimatePresence>
        </LightGallery>
      </div>
    </section>
  );
}