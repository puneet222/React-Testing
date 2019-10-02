import React from "react";
import { mount } from "enzyme";
import CommentBox from "../CommentBox";

let wrapper;

beforeEach(() => {
  wrapper = mount(<CommentBox />);
});

afterEach(() => {
  wrapper.unmount();
});

it("has a textarea and button", () => {
  expect(wrapper.find("textarea").length).toEqual(1);
  expect(wrapper.find("button").length).toEqual(1);
});

it("has the textarea in which user can type in", () => {
    let comment = "new comment";
    wrapper.find("textarea").simulate("change", {
        target: { value: comment }
    });
    wrapper.update();
    expect(wrapper.find("textarea").prop("value")).toEqual(comment);
});

it("should clear the textarea as soon as user submits the form", () => {
    let comment = "new comment";
    wrapper.find("textarea").simulate("change", {
        target: { value : comment}
    });
    wrapper.update();
    wrapper.find("form").simulate("submit");
    wrapper.update();
    expect(wrapper.find("textarea").prop("value")).toEqual("");
})
