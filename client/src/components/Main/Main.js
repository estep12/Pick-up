import React, { Component } from 'react';
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
import './Main.css';
import Player from '../Player/Player.js'
import Game from '../Game/Game.js'
import Leaderboard from '../Leaderboard/Leaderboard.js'

class Main extends Component {

    render() {
        return (
            <HashRouter>
            <div>
                <button type="button" className="btn btn-default"><NavLink to="./components/Game">New Game</NavLink></button>
                <button type="button" className="btn btn-default"><NavLink to="./components/Player">Players</NavLink></button>
                <button type="button" className="btn btn-default"><NavLink to="./components/Leaderboard">Leaderboard</NavLink></button>
            </div>
            </HashRouter>
        )
    }
}

export default Main;
