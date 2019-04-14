import React from "react";
import "./Home.css";
import Header from "../../components/Header";
import Posts from "../../components/Posts";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as PostsActions from "../../store/actions/posts";

class Home extends React.Component {
  componentDidMount() {
    this.props.postsRequest();
  }
  render() {
    return (
      <div class="pure-g">
        <Header />
        <main class="content pure-u-1 pure-u-md-3-4">
          <Navbar />
          <Posts />
          <Footer />
        </main>
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
)(Home);
