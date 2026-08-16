import { motion } from "framer-motion";
import { Search } from "lucide-react";

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  category: string;
}

interface GalleryCardProps {
  image: GalleryImage;
  onClick: () => void;
}

export default function GalleryCard({
  image,
  onClick,
}: GalleryCardProps) {
  return (
    <motion.button
      layout
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="group relative overflow-hidden rounded-3xl shadow-xl cursor-pointer"
    >
      <img
        src={image.src}
        alt={image.title}
        className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

      {/* Icono */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40">
          <Search className="w-7 h-7 text-white" />
        </div>
      </div>

      {/* Información */}
      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
        <h3 className="text-white text-xl font-bold">
          {image.title}
        </h3>

        <p className="text-blue-200 capitalize mt-1">
          {image.category}
        </p>
      </div>
    </motion.button>
  );
}