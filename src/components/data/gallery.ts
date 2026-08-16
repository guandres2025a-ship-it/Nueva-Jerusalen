export interface GalleryImage {
  id: number;
  src: string;
  title: string;
  category:
    | "cultos"
    | "campañas"
    | "aniversarios"
    | "evangelismo"
    | "escuela";
}

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/images/gallery/gallery-1.jpg",
    title: "Servicio Dominical",
    category: "cultos",
  },
  {
    id: 2,
    src: "/images/gallery/gallery-2.jpg",
    title: "Campaña Evangelística",
    category: "campañas",
  },
  {
    id: 3,
    src: "/images/gallery/gallery-3.jpg",
    title: "Aniversario de la Iglesia",
    category: "aniversarios",
  },
  {
    id: 4,
    src: "/images/gallery/gallery-4.jpg",
    title: "Evangelismo",
    category: "evangelismo",
  },
  {
    id: 5,
    src: "/images/gallery/gallery-5.jpg",
    title: "Escuela Dominical",
    category: "escuela",
  },
  {
    id: 6,
    src: "/images/gallery/gallery-6.jpg",
    title: "Alabanza",
    category: "cultos",
  },
  {
    id: 7,
    src: "/images/gallery/gallery-7.jpg",
    title: "Tiempo de Oración",
    category: "cultos",
  },
  {
    id: 8,
    src: "/images/gallery/gallery-8.jpg",
    title: "Jóvenes",
    category: "campañas",
  },
  {
    id: 9,
    src: "/images/gallery/gallery-9.jpg",
    title: "Congregación",
    category: "aniversarios",
  },
];