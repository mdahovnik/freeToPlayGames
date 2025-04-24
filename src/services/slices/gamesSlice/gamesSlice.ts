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
  reducers: {},
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
      });
  },
  selectors: {
    selectGames: (state) => state.games,
    selectIsLoading: (state) => state.isLoading,
  },
});

export const { selectGames, selectIsLoading } = gamesSlice.selectors;

export default gamesSlice.reducer;
