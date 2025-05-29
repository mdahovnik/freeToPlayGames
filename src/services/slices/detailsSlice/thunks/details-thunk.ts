import { createAsyncThunk } from "@reduxjs/toolkit";
import { getGameDetails } from "../../../../utils/game-api.ts";

export const getDetailsThunk = createAsyncThunk(
  "details/fetchDetails",
  async (id: string, { signal }) => {
    return await getGameDetails(id, signal);
  }
);
