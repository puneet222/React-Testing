import React from "react";
import CommentList from "../CommentList";
import Root from "../../Root";
import { mount } from "enzyme";

let comments = ["Comment 1", "Comment 2"];
let wrapper;
beforeEach(() => {
  const initialState = {
    comments: comments
  };
  wrapper = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

it("should have one LI per comment", () => {});
