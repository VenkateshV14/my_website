import React from "react";
import './ProjectPage.css';
import { FaCloud, FaCode, FaDatabase, FaMobileAlt } from 'react-icons/fa'; // Importing icons for projects

const ProjectPage = () => {
  return (
    <div className="project-page">
      <div className="main-card">
        <h2 className="main-card-title">Click below to view each project Details...</h2>
        
        <div className="projects-container">
          <div className="project-card">
            <FaCloud className="project-icon" />
            <h3>Project 1</h3>
            <p className="project-description">Cloud-based application that provides scalable services...</p>
            <a href="/project1" className="project-link">View Details</a>
          </div>
          
          <div className="project-card">
            <FaCode className="project-icon" />
            <h3>Project 2</h3>
            <p className="project-description">A web application built using React.js and Node.js...</p>
            <a href="/project2" className="project-link">View Details</a>
          </div>

          <div className="project-card">
            <FaDatabase className="project-icon" />
            <h3>Project 3</h3>
            <p className="project-description">Database management system designed for large-scale projects...</p>
            <a href="/project3" className="project-link">View Details</a>
          </div>

          <div className="project-card">
            <FaMobileAlt className="project-icon" />
            <h3>Project 4</h3>
            <p className="project-description">Mobile application with integration to cloud services...</p>
            <a href="/project4" className="project-link">View Details</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
