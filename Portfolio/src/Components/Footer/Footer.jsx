import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <h2 className="footer-logo">Nelisiwe Ngqeme</h2>
          <p className="footer-tagline">
            Passionate Fullstack Developer based in Cape Town — building digital
            experiences that make an impact.
          </p>
        </div>

        {/* Middle Section */}
        <div className="footer-middle">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <h3>Connect with me</h3>
          <div className="footer-icons">
            <a href="https://github.com/Nelisiwe1" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:nelisiwe@example.com">
              <FaEnvelope />
            </a>
            <a href="tel:+27710000000">
              <FaPhone />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Nelisiwe Ngqeme. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
