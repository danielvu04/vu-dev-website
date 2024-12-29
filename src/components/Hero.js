import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import '../styles/Hero.css';
import droneImage from '../assets/images/DroneSim.png';
import websiteImage from '../assets/images/websiteportfolio.png';
import carImage from '../assets/images/pygame_car_game.png';

function Hero() {

  // Detect screen width
  const isMobile = window.innerWidth <= 768; // Define mobile breakpoint

  // Slider settings
  const settings = {
    dots: !isMobile, // Show dots only if not mobile
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
    arrows: !isMobile, // Arrows for navigation
  };

  const navigate = useNavigate(); // Hook to navigate between pages

  const scrollToProject = (projectId) => {
    const project = document.getElementById(projectId);
    if (project) {
      project.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center', // Center the project card in the viewport
      });

      // Add highlight class
      project.classList.add('highlight');

      // Remove highlight after a delay
      setTimeout(() => {
        project.classList.remove('highlight');
      }, 3000); // 3 seconds
    } else {
      console.error('Project not found:', projectId);
    }
  };

  return (
    <section className="hero">
      <div className="slideshow-container">
        <Slider {...settings}>
          <div onClick={() => scrollToProject('drone-delivery-simulation-project')}>
            <img src={droneImage} alt="Drone Delivery Simulation" />
          </div>
          <div onClick={() => scrollToProject('portfolio-website-project')}>
            <img src={websiteImage} alt="Portfolio Website" />
          </div>
          <div onClick={() => scrollToProject('car-pygame-project')}>
            <img src={carImage} alt="Car Pygame" />
          </div>
        </Slider>
      </div>
      <div className="hero-content">
        <h1>Hi, I'm Daniel Vu</h1>
        <p>Welcome to my portfolio website.</p>
        <div class="hero-buttons">
        <button onClick={() => 
          document
            .getElementById('featured-projects')
            .scrollIntoView({ behavior: 'smooth' })}> View My Work
        </button>
        <button onClick={() => navigate('/contact')}>Contact Me</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
