import React from 'react'
import './PostHeader.css'

const PostHeader = () => {
  return (
    <header>

      <h2 class="post-title">Introducing Pure</h2>

      <p class="post-meta">
        By <span>Tilo Mitra</span> under
        <button class="post-category post-category-design" >
          Up
        </button>
        <button class="post-category post-category-js">
          Down
        </button>
      </p>
    </header>
  )
}

export default PostHeader
