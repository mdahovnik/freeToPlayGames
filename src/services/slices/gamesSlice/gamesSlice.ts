import { createSlice } from "@reduxjs/toolkit";
import { TState } from "./type";

export const initialState: TState = {
  games: [],
  isLoading: true,
  error: null,
};

const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {},
});

export default gamesSlice.reducer;
