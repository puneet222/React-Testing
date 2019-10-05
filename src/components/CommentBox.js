import React, { useState } from "react";
import { connect } from "react-redux";
import { saveComment } from "../actions/commentActions";

const CommentBox = ({ saveComment }) => {
  const [comment, setComment] = useState("");

  const handleChange = e => {
    setComment(e.target.value);
  };

  const onCommentSubmit = e => {
    e.preventDefault();

    saveComment(comment);

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
  { saveComment }
)(CommentBox);
