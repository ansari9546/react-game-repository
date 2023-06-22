import { Genere } from "./useGeneres";
import useData from "./usedata";

export interface PlatForm {
  id: number;
  name: string;
  slug: string;
}

export interface Games {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: PlatForm }[];
  metacritic: number;
}

export default function useGames(selectedGenre: Genere | null) {
  return useData<Games>(`/games`, { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]);
}
