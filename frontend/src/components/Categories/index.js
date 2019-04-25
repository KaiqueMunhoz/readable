import React from "react";
import "./style.css";
import PropTypes from "prop-types";
import Category from "./Category";
import { Link } from "react-router-dom";

//Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as CategoriesActions from "../../store/actions/categories";

class Categories extends React.Component {
  componentDidMount() {
    this.props.categoriesRequest();
  }

  render() {
    const { categories, showCategories } = this.props;

    return (
      <div>
        <nav className="nav">
          <ul className="nav-list">
            {showCategories ? (
              categories.map(category => (
                <Category
                  key={category.name + category.path}
                  category={category.name}
                />
              ))
            ) : (
              <div className="nav-item">
                <Link to={"/"} className="pure-button">
                  Home
                </Link>
              </div>
            )}
          </ul>
        </nav>
      </div>
    );
  }
}

Categories.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      path: PropTypes.string
    })
  )
};

const mapStateToProps = state => ({
  categories: state.categories
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CategoriesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
