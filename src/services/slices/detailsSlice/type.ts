import { TGame } from "../../../pages/mainPage/type";

export type TDetails = {
  game: TGame | null;
  isLoading: boolean;
  error: string | null | undefined;
};
