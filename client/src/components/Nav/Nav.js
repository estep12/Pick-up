import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {

    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand" id="brand" href="#">PickupPal</a>
                    </div>
                    <div className="navbar-right">
                    <li className="dropdown">
                        <a href="#" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i className="fas fa-align-justify"></i></a>
                    <ul className="dropdown-menu">
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Something else here</a></li>
                        <li role="separator" className="divider"></li>
                        <li><a href="#">Separated link</a></li>
                        <li role="separator" className="divider"></li>
                        <li><a href="#">One more separated link</a></li>
                    </ul>
                    </li>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Nav;