import React from "react";
import "./style.css";

const Navbar = () => {
  return (
    <div id="main" className="pure-u-1">
      <div className="email-content">
        <div className="email-content-header pure-g">
          <div className="pure-u-1-2 subtitle">
            <h2 className="email-content-title"> </h2>
          </div>
          <div className="email-content-controls pure-u-1-2">
            <button className="secondary-button pure-button">
              Order by Vote
            </button>
            <label className="secondary-button pure-button" for="modal-1">
              New Post
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
