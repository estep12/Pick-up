// import React, { Component } from 'react';
// import './App.css';
// import Main from './components/Main/Main.js'
// import Nav from './components/Nav/Nav.js'
// import Header from './components/Header/Header.js'
// import Footer from './components/Footer/Footer.js'
// import API from './utils/API.js'


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Nav/>
//           <div className="container">
//             <Header />
//             <Main />
//           </div>
//         <Footer />
//       </div>
//     );
//   }
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Main";
import Game from "./pages/Game";
import Player from "./pages/Player";
import Nav from './components/Nav'
import Footer from './components/Footer'
import './App.css';


const App = () => (
  <Router>
    <div>
      <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path='/newgame' component={Game}/>
          <Route path='/player' component={Player}/>
        </Switch>
      <Footer />
    </div>
  </Router>
)

// class App extends Component {
 // render() {
   // return (
     // <div className="App">
       // <Nav/>
         // <div className="container">
           // <Main />
         // </div>
       // <Footer />
     // </div>
   // );
 // }
// }


export default App;
