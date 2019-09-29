import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import CommentBox from "../CommentBox";
import CommentList from "../CommentList";

it("shows a comment box", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(CommentBox).length).toEqual(1);
});

it("show a comment list", () => {
  const wrapper = shallow(<App />);
  console.log(wrapper.find(CommentList));
  expect(wrapper.find(CommentList).length).toEqual(1);
});
