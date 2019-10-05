import { createStore, applyMiddleware } from "redux";
import commentReducer from "../reducers";
import reduxPromise from "redux-promise";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = initialState =>
  createStore(
    commentReducer,
    initialState,
    composeWithDevTools(applyMiddleware(reduxPromise))
  );
