import React from "react";
import "./Hero.css";
import heroImage from "../../assets/about.png";

const Hero = () => {
  return (
    <div className="hero">
      <img src={heroImage} alt="Nelisiwe portrait" />

      <h1>
        <span>I'm Nelisiwe Ngqeme,</span> Fullstack Developer based in Cape Town
      </h1>

      <p>
        I’m passionate about building modern, scalable, and user-focused web
        applications using technologies like React, Node.js, and MongoDB.
      </p>

      <div className="hero-action">
        <a href="#contact" className="hero-connect">Let's connect</a>

        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
