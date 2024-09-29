import React from 'react';
import './AboutSection.css'; // Link the CSS file

function AboutSection() {
  return (
    <div className="about-section">
      {/* Left section containing the "About Me" and text */}
      <div className="left-section">
        <div className="about-content">About Me</div>

        {/* Text content */}
        <div className="about-text">
          <p>
            I’m a passionate developer driven by the challenge of creating solutions that truly fix problems and elevate user experiences. Whether it’s designing a visually engaging interface or developing AI-powered applications, I find motivation in building something from the ground up that users enjoy both functionally and aesthetically.
          </p>
          <p>
            With a Bachelor’s in Computing Systems and a Master’s in AI, I’ve gained a deep understanding of how to integrate web development, app development, and AI to solve real-world issues. My educational journey in London opened my eyes to the endless possibilities of software development, while my AI work has pushed me to new levels, constantly finding ways to merge these two fields to create groundbreaking solutions.
          </p>
          <p>
            One of my most meaningful projects, Here4U, an iOS app powered by AI, was inspired by a personal experience with mental health. This project drove me to not only learn a new programming language on my own but also to push the boundaries of what AI can do to improve lives.
          </p>
          <p>
            What excites me most is the fusion of creativity and technology—taking a simple idea and transforming it into something elegant and user-friendly. I see development not just as coding, but as an art form, crafting intuitive, impactful solutions that make life easier.
          </p>
        </div>
      </div>

      {/* Right section containing the image */}
      <div className="right-section">
        
      </div>
    </div>
  );
}

export default AboutSection;