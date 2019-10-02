import React from "react";
import { mount } from "enzyme";
import CommentBox from "../CommentBox";
import Root from "../../Root";

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapper.unmount();
});

it("has a textarea and button", () => {
  expect(wrapper.find("textarea").length).toEqual(1);
  expect(wrapper.find("button").length).toEqual(1);
});

describe("textarea of comment box", () => {
  let comment = "new comment";
  beforeEach(() => {
    wrapper.find("textarea").simulate("change", {
      target: { value: comment }
    });
    wrapper.update();
  });

  it("has the textarea in which user can type in", () => {
    expect(wrapper.find("textarea").prop("value")).toEqual(comment);
  });

  it("should clear the textarea as soon as user submits the form", () => {
    wrapper.find("form").simulate("submit");
    wrapper.update();
    expect(wrapper.find("textarea").prop("value")).toEqual("");
  });
});
