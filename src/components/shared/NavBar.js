import React, { Component } from 'react';

class NavBar extends Component {
    render() { 
        return ( 
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand">React Cart</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor03">
                    <ul className="navbar-nav ml-auto">
                   
                    <li className="nav-item">
                        <a className="nav-link">Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Register</a>
                    </li>
                    <li className="nav-item">
                        <button className="btn btn-success">
                        <i className="fa fa-shopping-cart"></i>
                            <span class="badge badge-pill badge-light ml-1">4</span>
                        </button>
                    </li>
                    </ul>
                </div>
            </nav>
         );
    }
}
 
export default NavBar;