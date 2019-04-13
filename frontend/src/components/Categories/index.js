import React from "react";
import "./Categories.css";
import PropTypes from "prop-types";
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

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired
};

const mapStateToProps = state => ({
  categories: state.categories
});
export default connect(mapStateToProps)(Categories);
