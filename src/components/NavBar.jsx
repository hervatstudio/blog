import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
                <NavLink className="navbar-brand" to="/">Blog</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/about">About <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/contact">Contact <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/add-post">Add Post <span className="sr-only">(current)</span></NavLink>
                        </li>
                    </ul>
                </div>
                </nav>
         );
    }
}
 
export default withRouter(NavBar);