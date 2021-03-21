import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

export class NavBar extends Component {
    render() {
        return (
            <div className="navbar-container ">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
            </div>
        );
    }
}

