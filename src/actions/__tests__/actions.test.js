import { saveComment } from "../index";
import { SAVE_COMMENT } from "../types";

describe("saveComment action", () => {
  it("should have correct type", () => {
    let action = saveComment();

    expect(action.type).toEqual(SAVE_COMMENT);
  });

  it("should have correct payload", () => {
    const comment = "New Comment";
    let action = saveComment(comment);

    expect(action.payload).toEqual(comment);
  });
});
