import React from 'react'
import './PostHeader.css'

const PostHeader = () => {
  return (
    <header>
      <img
        width="48"
        height="48"
        alt="Tilo Mitra&#x27;s avatar"
        class="post-avatar"
        src="img/common/tilo-avatar.png"
      />

      <h2 class="post-title">Introducing Pure</h2>

      <p class="post-meta">
        By{" "}
        <a href="#">
          Tilo Mitra
        </a>{" "}
        under{" "}
        <a class="post-category post-category-design" href="#">
          CSS
        </a>{" "}
        <a class="post-category post-category-pure" href="#">
          Pure
        </a>
      </p>
    </header>
  )
}

export default PostHeader
