
import React, { Component } from 'react';
import './Player.css';

class Player extends Component {

    render() {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input 
                        type="text" 
                        // value = {props.firstName}
                        name= "firstName"
                        className="form-control form-control-lg" 
                        id="firstName" 
                        aria-describedby="firstNameInput" 
                        placeholder=""/>
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" className="form-control form-control-lg" id="lastName" aria-describedby="lastNameInput" placeholder=""/>
                </div>
                <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input type="text" className="form-control form-control-lg" id="phoneNumber" aria-describedby="phoneNumberHelp" placeholder=""/>
                    <small id="phoneNumberHelp" class="form-text text-muted">For getting the squad together!</small>
                </div>
                <button type="submit" class="btn btn-primary">Add Player</button>
            </form>
        )
    }
}

export default Player;