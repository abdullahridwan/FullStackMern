//all components start the same 
import React, {Component} from "react";
import {Link} from "react-router-dom";

//all components start with the line below (line 6,7,8)
export default class Navbar extends Component {
    render() {
        return (
            <nav className = "navbar navbar-dark bg-dark navbar-expand-lg"> 
                <Link to="/" className="navbar-brand"> Exer Tracker</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        
                        <li className="navbar-item">
                            <Link to="/" className="nav-link"> Exercises </Link>
                        </li>

                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">Create Exercise Log</Link>
                        </li>

                        <li className="navbar-item">
                            <Link to="/user" className="nav-link"> Create User </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}