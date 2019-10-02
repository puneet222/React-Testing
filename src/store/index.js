import { createStore } from "redux";
import commentReducer from "../reducers";

export const store = initialState => createStore(commentReducer, initialState);
