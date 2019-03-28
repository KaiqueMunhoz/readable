import React from "react";
import './Navbar.css';

const Navbar = () => {
  return (
    <div id="main" class="pure-u-1">
      <div class="email-content">
        <div class="email-content-header pure-g">
          <div class="pure-u-1-2 subtitle">
            <h2 class="email-content-title">{" "}</h2>
          </div>
          <div class="email-content-controls pure-u-1-2">
            <button class="secondary-button pure-button">Order by Vote</button>
            <button class="secondary-button pure-button">New Post</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

