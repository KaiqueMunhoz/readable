import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav class="nav">
        <ul class="nav-list">
          <li class="nav-item">
            <a class="pure-button" href="http://purecss.io">
              Pure
            </a>
          </li>
          <li class="nav-item">
            <a class="pure-button" href="http://yuilibrary.com">
              YUI Library
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
export default Navbar