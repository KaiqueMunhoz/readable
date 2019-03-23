
import React from 'react'
import Navbar from '../Navbar'

const Header = () => {

  return (
    <div>
      <div class="sidebar pure-u-1 pure-u-md-1-4">
        <div class="header">
          <h1 class="brand-title">A Sample Blog</h1>
          <h2 class="brand-tagline">Creating a blog layout using Pure</h2>

          <Navbar />
        </div>
      </div>
    </div>
  )
}

export default Header
