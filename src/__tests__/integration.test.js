import React from "react";
import moxios from "moxios";
import { mount } from "enzyme";

import Root from "../Root";
import App from "../components/App";

let mockComments = [{ name: "Fetched #1" }, { name: "Fetched #2" }];
beforeEach(() => {
  moxios.install();
  moxios.stubRequest("https://jsonplaceholder.typicode.com/comments", {
    status: 200,
    response: mockComments // comes as data key in response
  });
});

afterEach(() => {
  moxios.uninstall();
});

it("should fetch all the comments and display on the browser", done => {
  let wrapper = mount(
    <Root>
      <App />
    </Root>
  );
  wrapper.find(".fetch-comments").simulate("click");
  moxios.wait(() => {
    wrapper.update();
    expect(wrapper.find("li").length).toEqual(mockComments.length);
    done();
    wrapper.unmount();
  });
});
