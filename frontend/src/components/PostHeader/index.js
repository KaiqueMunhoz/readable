import React from "react";
import "./PostHeader.css";

const PostHeader = ({ title, voteScore, author }) => {
  return (
    <header>
      <h2 class="post-title">{title}</h2>

      <p class="post-meta">
        By <span>{author}</span> {voteScore}
        <button class="post-category post-category-design">Up</button>
        <button class="post-category post-category-js">Down</button>
      </p>
    </header>
  );
};

export default PostHeader;
