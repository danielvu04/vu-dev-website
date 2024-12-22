import React from 'react';
import '../styles/Navbar.css'; // Import the CSS file

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">DanielVu.dev</h1>
      <div className="navbar-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
