import React, { Fragment } from "react";
import "./style.css";
import { Link } from "react-router-dom";

const PostDescription = ({ body, voteScore }) => {
  return (
    <Fragment>
      <div className="post-description">
        <p>
          {/* Alterar */}
          {body} <Link to={"/redux/1"}>More Details</Link>
        </p>
      </div>
      <div>
        <button className="post-category post-category-pure">Edit</button>
        <button className="post-category post-category-yui">Remove</button>
        <button className="post-category post-category-design">Up</button>
        <small>{voteScore}</small>
        <button className="post-category post-category-js">Down</button>
      </div>
    </Fragment>
  );
};

export default PostDescription;
