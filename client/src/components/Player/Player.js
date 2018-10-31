
import React, { Component } from 'react';
import './Player.css';
import API from '../../utils/API'

class Player extends Component {

    state = {
        fName: "",
        lName: "",
        digits: ""
    }

    submitUser = () => {
        API.saveUser({
            fName: this.state.fname,
            lName: this.state.lname,
            digits: this.state.digits,
            user: this.props.userId
        })
        .then(res => this.setState({
            fName: "",
            lName: "",
            digits: ""
        }))
    };



    render() {
        return (
            <form>
                <div className="form-group">
                    <label for="firstName">First Name</label>
                    <input
                        type="text"
                        value={this.state.firstName}
                        name="firstName"
                        className="form-control form-control-lg"
                        id="firstName"
                        aria-describedby="firstNameInput"
                        placeholder=""
                    />
                </div>
                <div className="form-group">
                    <label for="lastName">Last Name</label>
                    <input
                        type="text"
                        value={this.state.lastName}
                        className="form-control form-control-lg"
                        id="lastName"
                        aria-describedby="lastNameInput"
                        placeholder=""
                    />
                </div>
                <div className="form-group">
                    <label for="phoneNumber">Phone Number</label>
                    <input
                        type="text"
                        value={this.state.phoneNumber}
                        className="form-control form-control-lg"
                        id="phoneNumber"
                        aria-describedby="phoneNumberHelp"
                        placeholder=""
                    />

                    <small id="phoneNumberHelp" class="form-text text-muted">For getting the squad together!</small>
                </div>
                <button type="submit" onClickclass="btn btn-primary">Add Player</button>
            </form>
        )
    }
}

export default Player;
