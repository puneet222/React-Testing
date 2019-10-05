import { createStore } from "redux";
import commentReducer from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = initialState =>
  createStore(commentReducer, initialState, composeWithDevTools());
