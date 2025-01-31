import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser , FaProjectDiagram, FaCertificate, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-toggle" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>
      <ul className={`nav-list ${isOpen ? 'active' : ''}`}>
        <li className="nav-item">
          <Link to="/" onClick={toggleMenu}>
            <FaHome size={20} /> Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about-me" onClick={toggleMenu}>
            <FaUser  size={20} /> About Me
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/projects" onClick={toggleMenu}>
            <FaProjectDiagram size={20} /> Projects
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/certifications" onClick={toggleMenu}>
            <FaCertificate size={20} /> Certifications
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" onClick={toggleMenu}>
            <FaEnvelope size={20} /> Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;