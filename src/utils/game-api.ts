// import {TGameCard} from "../pages/catalog/type.ts";

import {TGameCard} from "../pages/catalog/type.ts";

const API_URL = 'https://api.allorigins.win/get?url=' + encodeURIComponent('https://www.freetogame.com/api/games');

const checkResponse = <T>(res: Response): Promise<T> =>
  res.ok
    ? res.json()
    : res.json().then((err) => Promise.reject(err));

type TServerResponse<T> = {
  contents: T;
  status: boolean;
}

export async function getGamesApi(signal: AbortSignal) {
  const res = await fetch(API_URL, {signal});
  const data = await checkResponse<TServerResponse<string>>(res);
  if (data?.contents) {
    return JSON.parse(data.contents) as TGameCard[];
  }
  return Promise.reject(data);
}