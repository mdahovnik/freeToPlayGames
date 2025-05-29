import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { TDetails } from "./type";
import { getDetailsThunk } from "./thunks/details-thunk.ts";

export const initialState: TDetails = {
  game: null,
  isLoading: true,
  error: null,
};

const detailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<TDetails>) => {
    builder
      .addCase(getDetailsThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getDetailsThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.game = payload;
      })
      .addCase(getDetailsThunk.rejected, (state, { error }) => {
        state.isLoading = false;
        state.error = error.message;
      });
  },
  selectors: {
    selectGame: (state) => state,
  },
});

export const { selectGame } = detailsSlice.selectors;
export default detailsSlice.reducer;
