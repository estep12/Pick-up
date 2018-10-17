import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './Main.css';
import Home from '../Home/Home.js'
import Game from '../Game/Game.js'
import Player from '../Player/Player.js'

class Main extends Component {

    render() {
        return (
            
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/newgame' component={Game}/>
                    <Route path='/player' component={Player}/>
                </Switch>
            </main>
            
        )
    }
}

export default Main;