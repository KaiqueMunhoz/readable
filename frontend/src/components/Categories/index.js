import React from "react";
import "./Categories.css";
import PropTypes from "prop-types";
import Category from "./Category";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as CategoriesActions from "../../store/actions/categories";

class Categories extends React.Component {
  componentDidMount() {
    this.props.categoriesRequest();
  }

  render() {
    const { categories } = this.props;

    return (
      <div>
        <nav className="nav">
          <ul className="nav-list">
            {categories.map(category => (
              <Category
                key={category.name + category.path}
                title={category.name}
              />
            ))}
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
