import React from 'react'
import './About.css';

function About() {
    return (
        <div className="about">
            <div className="about-text">
                <h3>About us</h3>
                <h1>Boosts your business with E.O.T</h1>
                <p>
                    E.O.T is a business consultancy firm based in Nairobi Kenya.We have more than
                    50 employees and ten partners including Rexen, Enotech, Mike Desings,....
                    We stand for all inclusive digital experience with a focus on long-term vision. 
                </p>

                <a className="get-started">
                        More Details
                        <i className="fas fa-angle-right"></i>
                    </a>
            </div>

            <div className="about-image">
                <img src="/img/business.png" alt="about"/>
            </div>
        </div>
    )
}

export default About;
