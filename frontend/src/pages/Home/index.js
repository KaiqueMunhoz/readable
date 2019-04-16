import React from "react";
import "./style.css";
import Header from "../../components/Header";
import Posts from "../../components/Posts";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Home = () => {
  return (
    <div className="pure-g">
      <Header />
      <main className="content pure-u-1 pure-u-md-3-4">
        <Navbar />
        <Posts />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
