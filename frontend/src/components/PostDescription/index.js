import React, { Fragment } from "react";
import "./style.css";
import { Link } from "react-router-dom";

//Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as PostsActions from "../../store/actions/posts";

const PostDescription = props => {
  const updateVote = option => {
    props.postsUpdateVoteRequest(props.id, option);
  };
  const { body, voteScore, id, handlePostDetails } = props;

  return (
    <Fragment>
      <div className="post-description">
        <p>
          {body}
          <Link to={`/posts/${id}`} onClick={handlePostDetails}>
            More Details
          </Link>
        </p>
      </div>
      <div>
        <button className="post-category post-category-pure">Edit</button>
        <button className="post-category post-category-yui">Remove</button>
        <button
          onClick={() => updateVote("upVote")}
          className="post-category post-category-design"
        >
          Up
        </button>
        <small>{voteScore}</small>
        <button
          onClick={() => updateVote("downVote")}
          className="post-category post-category-js"
        >
          Down
        </button>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  post: state.post
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PostsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDescription);
