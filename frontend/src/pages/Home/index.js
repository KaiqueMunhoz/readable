import React from "react";
import './Home.css'
import Header from '../../components/Header'
import Posts from '../../components/Posts'
import Footer from '../../components/Footer'

class Home extends React.Component {
  
  render() {
    return (
      <div class="pure-g">
        <Header />
        <main class="content pure-u-1 pure-u-md-3-4">
          <Posts />
          <Posts />
          <Footer />
        </main>
      </div>
    );
  }
}

export default Home;
