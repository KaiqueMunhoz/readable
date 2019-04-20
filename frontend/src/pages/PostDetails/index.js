import React from "react";
import Post from "../../components/Posts/PostsByCategory/Post";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";

//Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as PostsActions from "../../store/actions/posts";

const PostDetails = () => {
  return (
    <div className="pure-g">
      <Header />
      <main className="content pure-u-1 pure-u-md-3-4">
        <Navbar />
        <Post />
      </main>
    </div>
  );
};

const mapStateToProps = state => ({
  postDetails: state
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(PostsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);
