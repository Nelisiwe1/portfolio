import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo or site name */}
      <div className="nav-logo">Nelisiwe</div>

      {/* Navigation links */}
      <ul className="nav-menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#service">Service</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Connect button */}
      <a href="#contact" className="nav-connect">Connect with Me</a>
    </nav>
  );
};

export default Navbar;
