import { TGameCard } from "../../../pages/gallery/type";

export type TState = {
  games: TGameCard[];
  isLoading: boolean;
  error: string | null;
};
