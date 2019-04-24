import React from "react";
import Form from "../../components/Form";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";

const PostNew = () => (
  <div className="pure-g">
    <Header />
    <main className="content pure-u-1 pure-u-md-3-4">
      <Navbar title="New Post" />
      <Form />
    </main>
  </div>
);

export default PostNew;
