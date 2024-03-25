import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import ViewPort from "./viewport";

const reducers = combineReducers({
  ViewPort,
});

export default reducers;

export type ReducersType = ReturnType<typeof reducers>;
export type ViewPortType = ReturnType<typeof ViewPort>;

const Store = configureStore({
  reducer: reducers,
});

export { Store };
