import React, { useState } from "react";
import { connect } from "react-redux";
import { saveComment } from "../actions";

const CommentBox = () => {
  const [comment, setComment] = useState("");

  const handleChange = e => {
    setComment(e.target.value);
  };

  const onCommentSubmit = e => {
    e.preventDefault();

    // TODO - call an action creator
    // save the comment

    setComment("");
  };

  return (
    <form onSubmit={onCommentSubmit}>
      <h1>Enter a Comment</h1>
      <textarea onChange={handleChange} value={comment} />
      <div>
        <button>Submit Comment</button>
      </div>
    </form>
  );
};

export default connect(
  null,
  saveComment
)(CommentBox);
