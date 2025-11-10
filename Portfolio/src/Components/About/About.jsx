import React from 'react';
import './About.css';
import aboutImage from '../../assets/about.png';

const About = () => {
  return (
    <div className="about">
      {/* Title Section */}
      <div className="about-title">
        <h1>About Me</h1>
        
      </div>

      {/* About Content */}
      <div className="about-section">
        {/* Left Side (Image) */}
        <div className="about-left">
          <img src={aboutImage} alt="Nelisiwe Ngqeme" />
        </div>

        {/* Right Side (Text + Skills) */}
        <div className="about-right">
          <div className="about-para">
            <p>
              Hello! I'm <b>Nelisiwe Ngqeme</b>, a passionate Fullstack Developer based in Cape Town. My journey in
              technology began with curiosity and a desire to create impactful digital experiences. I specialize in both
              front-end and back-end development, building web apps that are not only visually appealing but also
              functionally robust.
            </p>
            <p>
            I have completed my Advanced Diploma in Application Development 
            after earning my IT Diploma. I love turning ideas into functional applications and 
            continuously improving my skills in programming, problem-solving, and innovation.
            </p>
          </div>

          {/* Skills */}
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: '70%' }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: '65%' }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: '55%' }} />
            </div>
            <div className="about-skill">
              <p>Python</p>
              <hr style={{ width: '60%' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>2+</h1>
          <p>Years Experience</p>
        </div>
        <div className="about-achievement">
          <h1>52+</h1>
          <p>Projects Completed</p>
        </div>
        <div className="about-achievement">
          <h1>5+</h1>
          <p>Happy Clients</p>
        </div>
      </div>
    </div>
  );
};

export default About;
