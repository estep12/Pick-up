import React, { Component } from 'react';
import './App.css';
import Home from './components//Home/Home.js'
import Nav from './components/Nav/Nav.js'
//import Footer from './Footer/Footer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Home />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
