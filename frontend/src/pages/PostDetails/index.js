import React from "react";
import Post from "../../components/Posts/PostsByCategory/Post";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";

const PostDetails = () => {
  return (
    <div className="pure-g">
      <Header />
      <main className="content pure-u-1 pure-u-md-3-4">
        <Navbar />
        <Post />
      </main>
    </div>
  );
};

export default PostDetails;
