import React from "react";
import './AboutPage.css';
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa'; // Icons for contact methods

const AboutPage = () => {
  return (
    <div className="about-page">
      <h2 className="about-title">Hi, I'm Venkatesh!</h2>
      <p className="about-description">
        I am a passionate technologist with a vision for the cloud. Over the years, I have honed my skills and gained expertise in various cloud technologies, including AWS, Terraform, and infrastructure automation. My goal is to build scalable, secure, and efficient solutions to address real-world challenges. 
      </p>
      
      <div className="contact-info">
        <h3 className="contact-header">How to Reach Me</h3>

        <div className="contact-container">
        
          <div className="contact-card">
            <FaPhoneAlt className="contact-icon" />
            <h3>Phone</h3>
            <p className="contact-info-text">7013697300</p>
          </div>
          
          <div className="contact-card">
            <FaEnvelope className="contact-icon" />
            <h3>Email</h3>
            <p className="contact-info-text">petercephas52@gmail.com</p>
          </div>

          <div className="contact-card">
            <FaLinkedin className="contact-icon" />
            <h3>LinkedIn</h3>
            <p className="contact-info-text">
              <a href="https://www.linkedin.com/in/venky-venkatesh" target="_blank" rel="noopener noreferrer">Visit My LinkedIn</a>
            </p>
          </div>

          <div className="contact-card">
            <FaMapMarkerAlt className="contact-icon" />
            <h3>Address</h3>
            <p className="contact-info-text">Hyderabad, Telangana, 500076, India</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutPage;
