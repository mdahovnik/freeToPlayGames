import { TGame } from "../pages/mainPage/type";

const headers = {
  "X-RapidAPI-Key": "cffa014724msh93a69d153bdec0ep1a261ejsn857f5e848ba6",
  "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
};

const API_GAMES_URL = "https://free-to-play-games-database.p.rapidapi.com/api";
// "https://api.allorigins.win/get?url=https://www.freetogame.com/api/games";

const checkResponse = <T>(res: Response): Promise<T> =>
  res.ok ? res.json() : res.json().then((err) => Promise.reject(err));

export async function getGamesApi(signal: AbortSignal) {
  const res = await fetch(`${API_GAMES_URL}/games`, {
    headers,
    signal,
  });
  const data = await checkResponse<TGame[]>(res);

  if (res.ok) {
    return data;
  }
  return Promise.reject(data);
}

export async function getGameDetails(id: string, signal: AbortSignal) {
  const res = await fetch(`${API_GAMES_URL}/game?id=${id}`, {
    headers,
    signal,
  });
  const data = await checkResponse<TGame>(res);

  if (res.ok) {
    return data;
  }
  return Promise.reject(data);
}
