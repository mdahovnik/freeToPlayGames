import { createAsyncThunk } from "@reduxjs/toolkit";
import { getGamesApi } from "../../../../utils/game-api.ts";

export const getGames = createAsyncThunk(
  "games/fetchGames",
  async (_, { signal }) => {
    return await getGamesApi(signal);
  }
);
