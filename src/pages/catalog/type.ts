type TScreenShot = {
  id: number;
  image: string;
}

type TSystemReq = {
  os: string;
  processor: string;
  memory: string;
  graphics: string;
  storage: string;
}


export type TGameCard = {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
  status?: string;
  description?: string;
  minimum_system_requirements?: TSystemReq;
  screenshots?: TScreenShot[]
}

export type TCatalog = {
  games: TGameCard[]
}
