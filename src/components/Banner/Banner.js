import React from 'react'

import './Banner.css';

function Banner() {
    return (
        <div className="banner">
            <p id="facebook" className="icons">
                <i className="fab fa-facebook"></i>
                Facebook
            </p>

            <p id="algorithm" className="icons">
               <i className="fab fa-angular"></i>
                Algorithm
            </p>

            <p id="map" className="icons">
                <i className="fas fa-globe"></i>
                World Map
            </p>

            <p id="pinterest" className="icons">
            <i className="fab fa-pinterest-p"></i>
            Pinterest
            </p>
        </div>
    )
}

export default  Banner;
