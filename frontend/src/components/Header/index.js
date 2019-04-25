import React from "react";
import Categories from "../Categories";
import "./style.css";

const Header = props => {
  return (
    <div>
      <div className="sidebar pure-u-1 pure-u-md-1-4">
        <div className="header">
          <h1 className="brand-title">Readable</h1>
          <h2 className="brand-tagline">Udacity Nanodegree</h2>
          <Categories {...props} />
        </div>
      </div>
    </div>
  );
};

export default Header;
