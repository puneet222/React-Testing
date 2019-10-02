import { createStore } from "redux";
import commentReducer from "../reducers";

export const store = createStore(commentReducer, {});
