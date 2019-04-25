import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

//Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as PostsActions from "../../../store/actions/posts";

const Category = props => {
  const { category, postsByCategoryRequest } = props;

  const showPostsByCategory = () => {
    postsByCategoryRequest(category);
  };

  return (
    <li className="nav-item">
      <Link
        to={`/${category}`}
        onClick={showPostsByCategory}
        className="pure-button"
      >
        {category}
      </Link>
    </li>
  );
};

const mapStateToProps = state => ({
  postsByCategory: state
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PostsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Category);
