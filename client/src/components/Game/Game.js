import React, { Component } from 'react';
import Header from '../Header/Header.js' 
import './Game.css';
import API from '../../utils/API'

class Game extends Component {

state = {
    players: []
};

componentDidMount() {
    this.getUsers()
};

getUsers = () => {
    API.getUsers()
    .then(res  => 
        this.setState({
            players: res.data
        })
    )
    .catch(err => console.log(err));
};

    render() {
        return (
        <div>
            <Header header="Start a New Game" />
        <div>
            <h2>Team 1</h2>
                <div class="btn-group">
                    <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Player 1
                    </button>
                        <div className="dropdown-menu">
                            {/* THIS SHOULD BE A SERIES OF LIs*/}
                            <li>hello</li>
                        </div>
                </div>
                <div class="btn-group">
                    <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Player 2
                    </button>
                        <div className="dropdown-menu">
                        {this.state.players.length}
                        </div>
                </div>
                <div class="btn-group">
                    <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Player 3
                    </button>
                        <div className="dropdown-menu">
                        {this.state.players.length}
                        </div>
                </div>
                <div class="btn-group">
                    <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Player 4
                    </button>
                        <div className="dropdown-menu">
                        {this.state.players.length}
                        </div>
                </div>
                <div class="btn-group">
                    <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Player 5
                    </button>
                        <div className="dropdown-menu">
                        {this.state.players.length}
                        </div>
                </div>
        </div>

        <div>
        <h2>Team 2</h2>
            <div className="btn-group">
                <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Player 1
                </button>
                    <div className="dropdown-menu">
                    {this.state.players.length}
                    </div>
            </div>
            <div className="btn-group">
                <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Player 2
                </button>
                    <div className="dropdown-menu">
                    {this.state.players.length}
                    </div>
            </div>
            <div class="btn-group">
                <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Player 3
                </button>
                    <div className="dropdown-menu">
                    {this.state.players.length}
                    </div>
            </div>
            <div class="btn-group">
                <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Player 4
                </button>
                    <div className="dropdown-menu">
                    {this.state.players.length}
                    </div>
            </div>
            <div className="btn-group">
                <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Player 5
                </button>
                    <div className="dropdown-menu">
                    {this.state.players.length}
                    </div>
            </div>
    </div>
        <button type="submit" id="start-game" className="btn btn-primary">Start Game</button>
    </div>
        )
    }
}

export default Game;