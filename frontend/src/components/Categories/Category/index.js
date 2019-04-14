import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Category = ({ category }) => {
  const handleClick = () => {
    console.log("clicou");
  };

  return (
    <li className="nav-item">
      <Link to={`/${category}`} onClick={handleClick} className="pure-button">
        {category}
      </Link>
    </li>
  );
};

export default Category;
