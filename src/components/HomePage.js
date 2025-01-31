import React from "react";
import './HomePage.css';
import '../images/venkyresumepng.png';

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="sticker">
        <span>👋</span> {/* You can use a sticker emoji or an image */}
        Welcome to My Page...
      </div>
      <div className="gif-sticker">
        <img src="https://media.tenor.com/AvHPuvcRU4wAAAAj/cute-penguin.gif" alt="tech gif" />
      </div>
      <div className="container">
        <h1 className="title">Hi, I'm Venkatesh</h1>
        <p className="intro">I am a passionate technologist with a vision for the cloud.</p>
        <p className="goal">My Goal <br /> Throughout my journey in the cloud, my goal has been to</p>
        <h2 className="motto">"Dream it, Build it, Deploy it"</h2>
        <a href="http://44.223.67.183:8080/my-page/" className="resume-btn">View My Resume</a>
        
      </div>
    </div>
  );
};

export default Homepage;
