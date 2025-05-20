import React, { useState } from "react";
import "./Navbar.css";

function Navbar(props) {
    return (
        <>
        <nav className="navbar">
        <div className="navbar-container">
        
            <input type="checkbox" id="menu-toggle" />

            <div className="hamburger-lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
            </div>

        
            <ul className="menu-items">
                <li><a href="#page1">Home</a></li>
                <li><a href="#page2">About</a></li>
                <li><a href="#page3">Details</a></li>
                <li><a href="/start">Test</a></li>
                <li><a href="#">Contact</a></li>
            </ul>

    
            <h1 className="logo">WELCOME BACK {props.name} 😊</h1>
        </div>
        </nav>
        </>
    );
}

export default Navbar;
