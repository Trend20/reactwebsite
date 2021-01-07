import React from 'react'
import './Services.css';

export default function Services() {
    return (
        <div className="services">
            <div className="services-cards">
                <div className="row1">
                    <div className="card">
                        <i class="fas fa-code"></i>
                        <h3>Web Development</h3>
                        <p>We offer quality websites which are very responsive on any device</p>
                        <a className="get-started">
                        More Details
                        <i className="fas fa-angle-right"></i>
                        </a>
                    </div>

                    <div className="card">
                        <i class="fas fa-comment-dollar"></i>
                        <h3>SEO & Marketing</h3>
                        <p>We offer quality websites which are very responsive on any device</p>
                        <a className="get-started">
                        More Details
                        <i className="fas fa-angle-right"></i>
                        </a>
                    </div>
                </div>

                {/* second row */}
                <div className="row2">
                    <div className="card" id="ui-card">
                        <i class="fab fa-uikit"></i>
                        <h3>UI/UX Analysis</h3>
                        <p>We offer quality websites which are very responsive on any device</p>
                        <a className="get-started">
                        More Details
                        <i className="fas fa-angle-right"></i>
                        </a>
                    </div>

                    <div className="card">
                        <i class="fas fa-bezier-curve"></i>
                        <h3>Graphics Design</h3>
                        <p>We offer quality websites which are very responsive on any device</p>
                        <a className="get-started">
                        More Details
                        <i className="fas fa-angle-right"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className="service-text">
                <h3>Services</h3>
                <h1>Our Services</h1>
                <h4>Include</h4>
                <p>
                    E.O.T has over 100 ambitious and dedicated employees all inclusive digital 
                    experience with a focus on long-term vision. 
                </p>

                <a className="get-started">
                        All Services
                        <i className="fas fa-angle-right"></i>
                </a>
            </div>
        </div>
    )
}
