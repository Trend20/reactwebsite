import React, { Component } from 'react'
import './Footer.css';
export default class Footer extends Component {
    render() {
        return (
            <div className="footer-container">
                <footer id="footer">
                    <div className="logo-details">
                        <h1>E.O.T</h1>
                        <p>eotconsultancy@mail.service</p>
                        <p>+3456363536252</p>
                    </div>

                    <div id="services">
                        <h1>Service</h1>
                        <p>Web Design</p>
                        <p>Development</p>
                        <p>Wordpress</p>
                        <p>Online Marketing</p>
                        <p>Content Writter</p>
                    </div>

                    <div id="about">
                        <h1>About Us</h1>
                        <p>Home</p>
                        <p>About Us</p>
                        <p>Work Portfolio</p>
                        <p>Team Members</p>
                        <p>Plan & Pricing</p>
                    </div>

                    <div id="address">
                       <h1>Our Address</h1>
                        <p>E.O.T Consultancy</p>
                        <h3>Nairobi, Kenya</h3>
                        <div className="footer-icons">
                           <i className="fab fa-facebook"></i>
                           <i className="fab fa-twitter"></i>
                           <i className="fab fa-pinterest"></i>
                           <i className="fab fa-linkedin"></i>
                           <i className="fab fa-instagram"></i>
                        </div>
                    </div>
                </footer>
                <div className="copyright">
                    <i class="far fa-copyright"></i>
                    <p>2021 Copyright All rights reserved</p>
                </div>
            </div>
        )
    }
}
