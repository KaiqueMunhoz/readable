import React from "react";
import "./Categories.css";

import Category from "./Category";
import { connect } from "react-redux";

const Categories = ({ categories }) => {
  return (
    <div>
      <nav className="nav">
        <ul className="nav-list">
          {categories.map(category => (
            <Category key={category + Math.random()} title={category} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

const mapStateToProps = state => ({
  categories: state.categories
});
export default connect(mapStateToProps)(Categories);
