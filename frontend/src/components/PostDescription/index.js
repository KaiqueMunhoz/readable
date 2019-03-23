import React from 'react'
import './PostDescription.css'

const PostDescription = () => {
  return (
    <div class="post-description">
      <p>
        Yesterday at CSSConf, we launched Pure – a new CSS library.
        Phew! Here are the{" "}
        <a href="https://speakerdeck.com/tilomitra/pure-bliss">
          slides from the presentation
        </a>
        . Although it looks pretty minimalist, we’ve been working on
        Pure for several months. After many iterations, we have
        released Pure as a set of small, responsive, CSS modules
        that you can use in every web project.
      </p>
    </div>
  )
}

export default PostDescription
