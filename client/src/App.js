import React, { Component } from 'react';
import './App.css';
import Main from './components/Main/Main.js'
import Nav from './components/Nav/Nav.js'
import Header from './components/Header/Header.js'
import Footer from './components/Footer/Footer.js'
import Player from './components/Player/Player.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
          <div className="container">
            <Header />
            <Player />
          </div>
        <Footer />
      </div>
    );
  }
}

export default App;
