import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav class="nav">
        <ul class="nav-list">
          <li class="nav-item">
            {/* Link para ordenar por essa categoria */}
            <button class="pure-button">
              React
            </button>
          </li>
          <li class="nav-item">
            <button class="pure-button">
              React-Redux
            </button>
          </li>
          <li class="nav-item">
            <button class="pure-button">
              React-Native
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}
export default Navbar