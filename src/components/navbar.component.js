import React, { Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component
{
    render()
    {
        return(
        
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">PickyFinder</Link>
                <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                    <Link to="/Edit:id" className="nav-link">My Events</Link>
                    </li>
                    <li className="navbar-item">
                    <Link to="/create" className="nav-link">Create Event</Link>
                    </li>
                    <li className="navbar-item">
                    <Link to="/user" className="nav-link">Account Profile</Link>
                    </li>
                </ul>
                </div>

            </nav>
        )
    }
}