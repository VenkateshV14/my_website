import React from "react";
import './CertificatePage.css';
import { FaAward, FaCertificate } from 'react-icons/fa'; // Icons for certificates

const CertificatePage = () => {
  return (
    <div className="certificate-page">
      <h2 className="certificate-title">Click below to view the certificates...</h2>
      <div className="certificates-container">
        
        <div className="certificate-card">
          <FaAward className="certificate-icon" />
          <h3>AWS Cloud Practitioner Certificate</h3>
          <p className="certificate-description">Achieved the AWS Cloud Practitioner certification demonstrating cloud knowledge.</p>
          <a href="/certificate/aws" className="certificate-link">View Certificate</a>
        </div>
        
        <div className="certificate-card">
          <FaCertificate className="certificate-icon" />
          <h3>Terraform Associate 003 Certificate</h3>
          <p className="certificate-description">Certified as a Terraform Associate, showing proficiency with Terraform in Infrastructure as Code.</p>
          <a href="/certificate/terraform" className="certificate-link">View Certificate</a>
        </div>

        <div className="certificate-card">
          <FaAward className="certificate-icon" />
          <h3>Udemy Course Completion Certificate</h3>
          <p className="certificate-description">Completed several courses on Udemy to deepen knowledge on Cloud Technologies.</p>
          <a href="/certificate/udemy" className="certificate-link">View Certificate</a>
        </div>

      </div>
    </div>
  );
};

export default CertificatePage;
