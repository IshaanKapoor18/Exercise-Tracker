import React from "react";
import { Link } from "react-router-dom";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css"

export default class Navbar extends Component{
    render(){
        return (
            <nav className="navbar navbar-dark navbar navbar-dark bg-primary navbar-expand-lg" >
            <Link to="/" className="navbar-brand p-3">Daily-Tracker</Link>
            <div className="collpase navbar-collapse ">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                        <Link to="/" className="nav-link">Exercises</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/create" className="nav-link">Create Exercises List</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/user" className="nav-link">Create User</Link>
                    </li>
                </ul>
            </div>

        </nav>
        );
    }
}