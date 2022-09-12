import { configureStore, combineReducers } from "@reduxjs/toolkit";
import fruitsSlice from "./fruitsSlice";

const reducer = combineReducers({
  fruits: fruitsSlice,
});
export const store = configureStore({
  reducer,
});
