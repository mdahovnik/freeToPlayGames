import { TGame } from "../../../pages/mainPage/type";

export type TState = {
  games: TGame[];
  isLoading: boolean;
  error: string | null | undefined;
};
