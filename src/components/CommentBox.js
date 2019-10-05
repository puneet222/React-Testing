import React, { useState } from "react";
import { connect } from "react-redux";
import { saveComment, fetchComments } from "../actions/commentActions";

const CommentBox = ({ saveComment, fetchComments }) => {
  const [comment, setComment] = useState("");

  const handleChange = e => {
    setComment(e.target.value);
  };

  const onClick = e => {
    fetchComments();
  };

  const onCommentSubmit = e => {
    e.preventDefault();

    saveComment(comment);

    setComment("");
  };

  return (
    <div>
      <form onSubmit={onCommentSubmit}>
        <h1>Enter a Comment</h1>
        <textarea onChange={handleChange} value={comment} />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
      <button className="fetch-comments" onClick={onClick}>
        Fetch Comments
      </button>
    </div>
  );
};

export default connect(
  null,
  { saveComment, fetchComments }
)(CommentBox);
