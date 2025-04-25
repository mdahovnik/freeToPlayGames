import { TGame } from "../../../pages/galleryPage/type";

export type TState = {
  games: TGame[];
  isLoading: boolean;
  error: string | null | undefined;
};
