import React from "react";
import Post from "./Post";
import "./PostsByCategory.css";

const PostsByCategory = () => {
  return (
    <div>
      <h1 class="content-subhead"> {"Category"} </h1> <Post />
    </div>
  );
};

export default PostsByCategory;
