import React from "react";
import PostHeader from "../../../PostHeader";
import PostDescription from "../../../PostDescription";
import "./style.css";

//Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as PostsActions from "../../../../store/actions/posts";

const Post = props => {
  const {
    title,
    voteScore,
    commentCount,
    author,
    body,
    timestamp,
    id
  } = props.post;

  const handlePostDetails = () => {
    props.postsDetailsRequest(id);
  };

  return (
    <section className="post">
      <PostHeader
        title={title}
        commentCount={commentCount}
        author={author}
        timestamp={timestamp}
      />
      <PostDescription
        handlePostDetails={handlePostDetails}
        id={id}
        body={body}
        voteScore={voteScore}
      />
    </section>
  );
};
const mapStateToProps = state => ({
  postDetails: state
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(PostsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
