import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import sortHelper from "../../helpers/sortHelper";

//Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as PostsActions from "../../store/actions/posts";

const Navbar = props => {
  const orderByVote = () => {
    sortHelper(props.posts);
    props.postOrdered(props.posts);
  };
  const { title } = props;
  return (
    <div id="main" className="pure-u-1">
      <div className="email-content">
        <div className="email-content-header pure-g">
          <div className="pure-u-1-2 subtitle">
            <h2 className="email-content-title">{title}</h2>
          </div>
          <div className="email-content-controls pure-u-1-2">
            <button
              onClick={orderByVote}
              className="secondary-button pure-button"
            >
              Order by Vote
            </button>
            <Link to={"/new"} className="secondary-button pure-button">
              New Post
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  posts: state.posts
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PostsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
