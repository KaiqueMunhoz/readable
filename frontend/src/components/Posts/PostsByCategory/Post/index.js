import React from "react";
import PostHeader from "../../../PostHeader";
import PostDescription from "../../../PostDescription";
import "./style.css";

const Post = props => {
  const { title, voteScore, author } = props.post;
  const { body, commentCount, timestamp } = props.post;

  return (
    <section className="post">
      <PostHeader title={title} author={author} timestamp={timestamp} />
      <PostDescription
        body={body}
        commentCount={commentCount}
        voteScore={voteScore}
      />
    </section>
  );
};

export default Post;
