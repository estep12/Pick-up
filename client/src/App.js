import React, { Component } from 'react';
import './App.css';
import Main from './components/Main/Main.js'
import Nav from './components/Nav/Nav.js'
import Header from './components/Header/Header.js'
import Footer from './components/Footer/Footer.js'
import Player from './components/Player/Player.js'
import Game from './components/Game/Game.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
          <div className="container">
            <Header />
            <Game />
          </div>
        <Footer />
      </div>
    );
  }
}

export default App;
