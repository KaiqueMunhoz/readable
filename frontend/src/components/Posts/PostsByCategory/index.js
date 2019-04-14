import React from "react";
import Post from "./Post";
import "./PostsByCategory.css";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as PostsActions from "../../../store/actions/posts";

class PostsByCategory extends React.Component {
  componentDidMount() {
    this.props.postsRequest();
  }

  render() {
    const { posts } = this.props;
    console.log(posts);
    return (
      <div>
        {posts.map(post => (
          <div key={post.id + post.title}>
            <h1 class="content-subhead"> {post.category} </h1>
            <Post post={post} />
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PostsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsByCategory);
