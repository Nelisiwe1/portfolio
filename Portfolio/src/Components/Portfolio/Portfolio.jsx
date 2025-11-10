import React from "react";
import "./Portfolio.css";
import aboutImage from "../../assets/about.png"; // reuse your decorative image

const Portfolio = () => {
  // Example portfolio data (you can replace links or images later)
  const projects = [
    {
      title: "E-Commerce Website",
      description:
        "A modern e-commerce platform built with React, Tailwind CSS, and MongoDB. Features include product listings, cart, checkout, and user profiles.",
      tech: "React, Node.js, MongoDB, Tailwind CSS",
      image: "https://via.placeholder.com/400x250?text=E-Commerce+Website",
      link: "#",
    },
     {
    title: "Simple Calculator App",
    description:
      "A beginner-friendly calculator app supporting basic arithmetic operations, built for learning purposes.",
    tech: "C#, .NET",
    image: "https://via.placeholder.com/400x250?text=Calculator+App",
    link: "#",
  },
    {
      title: "VR Education Experience",
      description:
        "An immersive virtual reality project designed to improve STEM education outcomes through interactive 3D learning environments.",
      tech: "Unity, C#, Oculus SDK",
      image: "https://via.placeholder.com/400x250?text=VR+Education+Project",
      link: "#",
    },
    {
      title: "AI-Driven Finance Dashboard",
      description:
        "A financial analytics tool that visualizes transaction data and trends using AI-powered insights.",
      tech: "Python, Power BI, Flask",
      image: "https://via.placeholder.com/400x250?text=Finance+Dashboard",
      link: "http://127.0.0.1:5000/",
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
              <a href={project.link} className="portfolio-btn" target="_blank" rel="noreferrer">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
