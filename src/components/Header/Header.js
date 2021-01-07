import React, { Component } from 'react'
import './Header.css';


class Header extends Component {
    render() {
        return (
            <header>
                <div className="logo">
                <img src= '/img/logo.png'alt="logo" />	
                </div>

                {/* navigation links */}

                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Our Work</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#" className="active">Contact</a></li>
                    </ul>
                </nav>

                <i className="fas fa-bars"></i>
            </header>
        )
    }
}

export default Header;
