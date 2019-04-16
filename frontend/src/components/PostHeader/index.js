import React from "react";
import "./style.css";
import DateHelper from "../../helpers/dateHelper";

const PostHeader = ({ title, timestamp, author }) => {
  return (
    <header>
      <h2 className="post-title">{title}</h2>

      <p className="post-meta">
        By <strong>{author}</strong> published {DateHelper(timestamp)}
      </p>
    </header>
  );
};

export default PostHeader;
