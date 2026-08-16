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