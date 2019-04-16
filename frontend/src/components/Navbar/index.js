import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Navbar = ({ title }) => {
  return (
    <div id="main" className="pure-u-1">
      <div className="email-content">
        <div className="email-content-header pure-g">
          <div className="pure-u-1-2 subtitle">
            <h2 className="email-content-title">{title}</h2>
          </div>
          <div className="email-content-controls pure-u-1-2">
            <button className="secondary-button pure-button">
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

export default Navbar;
