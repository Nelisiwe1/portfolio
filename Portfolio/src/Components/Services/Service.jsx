import React from "react";
import "./Services.css";
import aboutImage from "../../assets/about.png"; // reuse decorative image if you want

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "I build responsive and user-friendly websites using modern web technologies like React, Tailwind CSS, and Node.js to create seamless digital experiences.",
      icon: "🌐",
    },
    {
      title: "Frontend Development",
      description:
        "I design and implement interactive, visually appealing interfaces that enhance usability and accessibility across devices.",
      icon: "🎨",
    },
    {
      title: "Software Development",
      description:
        "I develop efficient and scalable software applications using Java, Python, and JavaScript, focusing on functionality and performance.",
      icon: "💻",
    },
    {
      title: "Data Visualization & Analytics",
      description:
        "I create insightful dashboards and reports using Power BI and Python to help organizations make data-driven decisions.",
      icon: "📊",
    },
    {
      title: "System Analysis & Documentation",
      description:
        "I analyze business requirements and translate them into clear technical documentation, diagrams, and functional system designs.",
      icon: "🧩",
    },
    {
      title: "Emerging Technologies",
      description:
        "I explore innovative technologies like Virtual Reality and Blockchain to design future-ready, impactful solutions.",
      icon: "🚀",
    },
  ];

  return (
    <section className="services" id="services">
      <div className="services-title">
        <h1><span>My</span> Services</h1>
        <img src={aboutImage} alt="decoration" />
      </div>

      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
