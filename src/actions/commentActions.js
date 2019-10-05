import axios from "axios";
import { SAVE_COMMENT, FETCH_COMMENTS } from "./types";

export const saveComment = comment => {
  return {
    type: SAVE_COMMENT,
    payload: comment
  };
};

export const fetchComments = () => {
  let res = axios.get("https://jsonplaceholder.typicode.com/comments");
  return {
    type: FETCH_COMMENTS,
    payload: res
  };
};
