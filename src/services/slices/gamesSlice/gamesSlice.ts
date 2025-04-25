import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { TState } from "./type";
import { getGames } from "./games-thunk";

export const initialState: TState = {
  games: [],
  isLoading: true,
  error: null,
};

const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    clearGames: () => initialState,
  },
  extraReducers: (builder: ActionReducerMapBuilder<TState>) => {
    builder
      .addCase(getGames.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getGames.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.games = payload;
      })
      .addCase(getGames.rejected, (state, { error }) => {
        state.isLoading = false;
        state.error = error.message;
      });
  },
  selectors: {
    selectGames: (state) => state,
  },
});

export const { selectGames } = gamesSlice.selectors;
export const { clearGames } = gamesSlice.actions;
export default gamesSlice.reducer;
