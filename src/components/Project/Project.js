import React from 'react'
import './Project.css';

export default function Gallery() {
    return (
        <div className="gallery">
            <div className="section-head">
                <div className="head-text">
                    <h3>Project</h3>
                    <h1>Our Project</h1>
                    <h2>Gallery</h2>
                </div>
                <div className="section-btn">
                <a className="more-details">
                        All Services
                        <i className="fas fa-angle-right"></i>
                </a>
                </div>
            </div>
            
            <div className="project-gallery">
                <i className="fas fa-angle-left"></i>
                   <img src="/img/projet1.jpeg" alt="project" />
                <i className="fas fa-angle-right"></i>
            </div>
        </div>
    )
}
