import React from 'react';
import '../styles/global.css'; // Assuming you have global styles here

const About = () => {
  return (
    <section id='about' className="about-section">
      <h2 className="section-title">About This Tool</h2>
      <p className="section-description">
        This AI Code Reviewer is made especially for self-learners, students, freshers, and curious developers — those who want to <strong>become better</strong> but don’t have a senior or mentor to guide them every day.
      </p>
      <p className="section-description">
        Whether you want to improve your coding style, follow industry-level <strong>best practices</strong>, or simply write clean and secure code — this tool is for you.
      </p>
      <p className="section-description">
        This tool gives you real, honest feedback. No fake praises, no unnecessary jargon. Only what you need — clear suggestions to make your code better, faster, and safer.
      </p>

      <p className="tagline">
        "For every coder who wants to level up — even when there's no senior to guide them."
      </p>
    </section>
  );
};

export default About;
