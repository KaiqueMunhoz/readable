import React from "react";
import "./style.css";

const PostDescription = ({ body, commentCount, timestamp }) => {
  return (
    <div className="post-description">
      <p>{body}</p>
    </div>
  );
};

export default PostDescription;
