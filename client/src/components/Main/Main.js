
import React, { Component } from 'react';
import './Main.css';

class Main extends Component {

    render() {
        return (
            <div>
                <button type="button" className="btn btn-default">New Game</button>
                <button type="button" className="btn btn-default">Players</button>
                <button type="button" className="btn btn-default">Leaderboard</button>
            </div>
        )
    }
}

export default Main;
