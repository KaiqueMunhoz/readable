
import React from 'react'
import Categories from '../Categories'
import './Header.css'

const Header = () => {

  return (
    <div>
      <div class="sidebar pure-u-1 pure-u-md-1-4">
        <div class="header">
          <h1 class="brand-title">Readable</h1>
          <h2 class="brand-tagline">Udacity Nanodegree</h2>
          <Categories />
        </div>
      </div>
    </div>
  )
}

export default Header
