import React from "react";
import "./style.css";

const PostDescription = ({ body, commentCount, voteScore }) => {
  return (
    <div className="post-description">
      <p>{body}</p>
    </div>
  );
};

export default PostDescription;
