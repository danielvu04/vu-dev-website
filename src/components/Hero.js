import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import '../styles/Hero.css';
import droneImage from '../assets/images/DroneSim.png';

function Hero() {
  // Slider settings
  const settings = {
    dots: true, // Shows dots below the slideshow
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
    arrows: true, // Arrows for navigation
  };

  const navigate = useNavigate(); // Hook to navigate between pages

  return (
    <section className="hero">
      <div className="slideshow-container">
        <Slider {...settings}>
          <div>
            <img src={droneImage} alt="Drone Delivery Simulation" />
          </div>
          <div>
            <img src="https://via.placeholder.com/1200x600" alt="Slide 2" />
          </div>
          <div>
            <img src="https://via.placeholder.com/1200x600" alt="Slide 3" />
          </div>
        </Slider>
      </div>
      <div className="hero-content">
        <h1>Hi, I'm Daniel Vu</h1>
        <p>Welcome to my portfolio website.</p>
        <div class="hero-buttons">
        <button onClick={() => navigate('/projects')}>View My Work</button>
        <button onClick={() => navigate('/contact')}>Contact Me</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
