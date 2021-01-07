import React, { Component } from 'react'
import './Hero.css';

class Hero extends Component {
    render() {
        return (
            <div className="hero">

                {/* hero text */}

                <div className="hero-text">
                    <h3>Best Agency in <strong>Kenya</strong></h3>
                    <h1>Digital Agency</h1>
                    <h3>& Solutions</h3>
                    <p>Quickly growing your business & boost up sales with professional startup ideas.</p>
                    
                    <div className="btn-section">
                    <a className="get-started">
                        Get started
                        <i className="fas fa-angle-right"></i>
                    </a>

                    <a className="demo">
                        See Live Demo
                        <i className="fas fa-play-circle"></i>
                    </a>
                    </div>
                </div>

                {/* hero image */}
                <div className="hero-image">
                    <img src="/img/hero.png" alt="hero image"/>
                </div>
            </div>
        )
    }
}

export default Hero;
