import React from "react";
import './ContactPage.css';
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa'; // Icons for contact methods

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h2 className="contact-title">Hi, Below is how you can contact me......!!!</h2>
      <div className="contact-container">
        
        <div className="contact-card">
          <FaPhoneAlt className="contact-icon" />
          <h3>Phone</h3>
          <p className="contact-info">7013697300</p>
        </div>
        
        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <h3>Email</h3>
          <p className="contact-info">petercephas52@gmail.com</p>
        </div>

        <div className="contact-card">
          <FaLinkedin className="contact-icon" />
          <h3>LinkedIn</h3>
          <p className="contact-info">
            <a href="https://www.linkedin.com/in/venky-venkatesh" target="_blank" rel="noopener noreferrer">Visit My LinkedIn</a>
          </p>
        </div>

        <div className="contact-card">
          <FaMapMarkerAlt className="contact-icon" />
          <h3>Address</h3>
          <p className="contact-info">Hyderabad, Telangana, 500076, India</p>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;
