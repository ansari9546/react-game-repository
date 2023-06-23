import { GameQuery } from "../App";
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

export default function useGames(gameQuery: GameQuery) {
  return useData<Games>(
    `/games`,
    {
      params: {
        genres: gameQuery.genere?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
      },
    },
    [gameQuery]
  );
}
