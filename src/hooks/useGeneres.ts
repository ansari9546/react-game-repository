import useData from "./usedata";

export interface PlatForm {
  id: number;
  name: string;
}

export interface Genere {
  id: number;
  name: string;
  image_background: string;
}
export default function useGeneres() {
  return useData<Genere>(`/genres`);
}
