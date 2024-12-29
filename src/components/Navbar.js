import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../styles/Navbar.css'; // Import the CSS file

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const scrollToProjects = () => {
    const onHomePage = location.pathname === '/';
    if (onHomePage) {
      // Scroll directly to the section if on the homepage
      const featuredSection = document.getElementById('featured-projects');
      if (featuredSection) {
        featuredSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to the homepage and scroll after navigation
      navigate('/');
      setTimeout(() => {
        if (featuredSection) {
          featuredSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500); // Adjust delay if needed to wait for the page to load
    }
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-title">DanielVu.dev</h1>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <button onClick={scrollToProjects} >
          Projects
        </button>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
