import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Replace with API/email service later
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-title">
        <h1>
          Get in <span>Touch</span>
        </h1>
      </div>

      <div className="contact-container">
        {/* Contact Info */}
        <div className="contact-info">
          <h3>Contact Info</h3>
          <p><FaEnvelope className="icon" /> nelisiwe@example.com</p>
          <p><FaPhone className="icon" /> +27 123 456 789</p>
          <p><FaMapMarkerAlt className="icon" /> Cape Town, South Africa</p>

          <div className="social-links">
            <a href="#" target="_blank" rel="noreferrer"><FaLinkedin /> LinkedIn</a>
            <a href="#" target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
            <a href="#" target="_blank" rel="noreferrer"><FaTwitter /> Twitter</a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="6"
            required
          />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
