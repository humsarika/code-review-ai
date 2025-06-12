import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">CodeReviewAI</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#faq">FAQ</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
