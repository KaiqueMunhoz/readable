import React from "react";
import PostHeader from "../../../PostHeader";
import PostDescription from "../../../PostDescription";
import "./style.css";

const Post = props => {
  const { title, voteScore, commentCount, author } = props.post;
  const { body, timestamp } = props.post;

  return (
    <section className="post">
      <PostHeader
        title={title}
        commentCount={commentCount}
        author={author}
        timestamp={timestamp}
      />
      <PostDescription body={body} voteScore={voteScore} />
    </section>
  );
};

export default Post;
