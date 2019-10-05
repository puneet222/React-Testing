import commentReducer from "../commentReducer";
import { SAVE_COMMENT, FETCH_COMMENTS } from "../../actions/types";

it("should update the state on SAVE_COMMENT action", () => {
  let comment = "New Comment";
  const action = {
    type: SAVE_COMMENT,
    payload: comment
  };
  let newState = commentReducer([], action);
  expect(newState).toEqual([comment]);
});

it("should handle action with unknown types", () => {
  let newState = commentReducer([], {});
  expect(newState).toEqual([]);
});
