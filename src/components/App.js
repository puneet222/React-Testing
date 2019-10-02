import React from "react";
import Root from "../Root";

import CommentList from "./CommentList";
import CommentBox from "./CommentBox";

export default () => {
  return (
    <Root>
      <div>
        <CommentBox />
        <CommentList />
      </div>
    </Root>
  );
};
