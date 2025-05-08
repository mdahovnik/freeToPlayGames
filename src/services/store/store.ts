import { configureStore } from "@reduxjs/toolkit";
import gamesReducer from "../slices/gamesSlice/gamesSlice";
import detailsReducer from "../slices/detailsSlice/detailsSlice";
import paginationReducer from "../slices/paginationSlice/paginationSlice";
import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook,
} from "react-redux";

const store = configureStore({
  reducer: {
    games: gamesReducer,
    pagination:paginationReducer,
    details: detailsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = () => dispatchHook();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export default store;
