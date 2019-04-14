import React from "react";
import PostHeader from "../../../PostHeader";
import PostDescription from "../../../PostDescription";
import "./Post.css";

const Post = props => {
  const { title, voteScore, author } = props.post;
  const { body, commentCount, timestamp } = props.post;

  return (
    <section className="post">
      <PostHeader title={title} voteScore={voteScore} author={author} />
      <PostDescription
        body={body}
        commentCount={commentCount}
        timestamp={timestamp}
      />
    </section>
  );
};

export default Post;
