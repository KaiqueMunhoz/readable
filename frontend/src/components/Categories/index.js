import React from 'react'
import './Categories.css'

import Category from './Category';
import {getAllCategories} from '../../actions/categoriesActions'
import {connect} from 'react-redux'
class Categories extends React.Component {

  componentDidMount() {
    this.props.dispatch(getAllCategories())
  }

  render() {
    return (
      <div>
        <nav className="nav">
          <ul className="nav-list">
            {/* {this.props.categories.map(category => {
              <Category key={category} title={category} />
            })} */}
          </ul>
        </nav>
      </div>
    )
  }
}
export default connect(state => ({categories: state.categories}))(Categories)