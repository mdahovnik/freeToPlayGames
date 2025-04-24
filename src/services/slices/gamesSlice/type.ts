import { TGameCard } from "../../../pages/gallery/type";

type TGamesState = {
  games: TGameCard[];
  isLoading: boolean;
  error: string;
};
