import React, { Component } from 'react';
// import './Main.css';
import Main from '../../components/Main'
import Nav from '../../components/Nav'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import API from '../../utils/API'


class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="container">
            <Header />
            <Main />
          </div>
      </div>
    );
  }
}

export default App;