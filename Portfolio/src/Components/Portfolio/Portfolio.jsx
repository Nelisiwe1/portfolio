import React from "react";
import "./Portfolio.css";
import { FaGithub } from "react-icons/fa"; // GitHub icon
import aboutImage from "../../assets/finance.webp";
import calcu from "../../assets/calculator.jpg";
import ecom from "../../assets/ecom.jpg";
import vr from "../../assets/images.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Website",
      description:
        "A modern e-commerce platform built with React, Tailwind CSS, and MongoDB. Features include product listings, cart, checkout, and user profiles.",
      tech: "React, Node.js, MongoDB, Tailwind CSS",
      image: ecom,
      link: "#",
      github: "https://github.com/Nelisiwe1/e-Shop-master.git"
    },
    {
      title: "Simple Calculator App",
      description:
        "A beginner-friendly calculator app supporting basic arithmetic operations, built for learning purposes.",
      tech: "C#, .NET",
      image: calcu,
      link: "#",
      github: "https://github.com/yourusername/calculator-app",
    },
    {
      title: "VR Education Experience",
      description:
        "An immersive virtual reality project designed to improve STEM education outcomes through interactive 3D learning environments.",
      tech: "Unity, C#, Oculus SDK",
      image: vr,
      link: "#",
      github: "https://github.com/yourusername/vr-education",
    },
    {
      title: "AI-Driven Finance Dashboard",
      description:
        "A financial analytics tool that visualizes transaction data and trends using AI-powered insights.",
      tech: "Python, Power BI, Flask",
      image: aboutImage,
      link: "http://127.0.0.1:5000/",
      github: "https://github.com/Nelisiwe1/ai_finance_dashboard"
    },
  ];

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-title">
        <h1>
          <span>My</span> Portfolio
        </h1>
        <img src={aboutImage} alt="decoration" />
      </div>

      <div className="portfolio-container">
        {projects.map((project, index) => (
          <div className="portfolio-card" key={index}>
            <div className="portfolio-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="portfolio-content">
              <h3 className="portfolio-project-title">{project.title}</h3>
              <p className="portfolio-description">{project.description}</p>
              <p className="portfolio-tech">{project.tech}</p>
              <div className="portfolio-buttons">
                <a
                  href={project.link}
                  className="portfolio-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Project
                </a>
                <a
                  href={project.github}
                  className="portfolio-btn github-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub style={{ marginRight: "8px" }} /> GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
