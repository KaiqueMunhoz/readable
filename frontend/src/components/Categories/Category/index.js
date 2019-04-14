
import React from 'react';
import './Category.css'
import {Link} from 'react-router-dom'

const Category = ({title}) => {
  return (
    <li className="nav-item">
      <Link to="" className="pure-button">
        {title}
      </Link>
    </li>
  )
};

export default Category;
