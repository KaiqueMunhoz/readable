import React from "react";
import "./style.css";
import DateHelper from "../../helpers/dateHelper";

const PostHeader = ({ title, timestamp, author }) => {
  return (
    <header>
      <h2 className="post-title">{title}</h2>

      <p className="post-meta">
        By <span>{author}</span> published {DateHelper(timestamp)}
        <button className="post-category post-category-design">Up</button>
        <button className="post-category post-category-js">Down</button>
      </p>
    </header>
  );
};

export default PostHeader;
