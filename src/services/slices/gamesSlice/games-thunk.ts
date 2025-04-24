import { createAsyncThunk } from "@reduxjs/toolkit";
import { getGamesApi } from "../../../utils/game-api";

export const getGames = createAsyncThunk("games/fetchGames", getGamesApi);
