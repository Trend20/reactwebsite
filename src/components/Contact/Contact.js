import React from 'react'
import './Contact.css';

export default function Contact() {
    return (
        <div className="contact">
            <div className="contact-description">
                <h3>Contact us</h3>
                <h1>Lets talk about your information</h1>
                <p>Call us for immediate support to this number</p>
                <h6>+34353424261435</h6>

                <div className="contact-icons">
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-pinterest"></i>
                    <i className="fab fa-linkedin"></i>
                    <i className="fab fa-instagram"></i>
                </div>
            </div>

            <div className="contact-form">
                <form id="form">
                   <div className="form-group">
                     <label for="name">Name:</label>
                     <input type="text" placeholder="Enter your full name" />
                   </div>

                   <div className="form-group">
                     <label for="link">Web Link:</label>
                     <input type="link" placeholder="Enter your web link" />
                   </div>

                   <div className="form-group">
                     <label for="name">Message:</label>
                     <textarea name="message" value="Message" rows="5">Message</textarea>
                   </div>

                   <button>Send Message</button>
                </form>
            </div>
        </div>
    )
}
