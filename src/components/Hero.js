import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactTyped } from 'react-typed';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import '../styles/Hero.css';

function Hero() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const scrollToProjects = () => {
    const featuredProjects = document.getElementById('featured-projects');
    if (featuredProjects) {
      featuredProjects.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      {/* Grid Background */}
      <div className="grid-background"></div>
      
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 60,
          particles: {
            color: {
              value: "#0ef",
            },
            links: {
              color: "#0ef",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 1.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: isMobile ? 30 : 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: ["circle", "triangle", "polygon"],
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: ["grab", "bubble", "repulse"],
              },
              onClick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 140,
                links: {
                  opacity: 0.5,
                },
              },
              bubble: {
                distance: 200,
                size: 5,
                duration: 2,
                opacity: 0.8,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
              push: {
                quantity: 4,
              },
            },
          },
          detectRetina: true,
        }}
        className="particles-container"
      />
      
      <div className="hero-content-wrapper">
        <div className="hero-content">
          <h1>Hi, I'm Daniel Vu</h1>
          <div className="typed-container">
            <ReactTyped
              strings={[
                "Full Stack Developer",
                "Software Engineer",
                "Problem Solver",
                "Tech Enthusiast"
              ]}
              typeSpeed={70}
              backSpeed={50}
              backDelay={1000}
              loop
              className="typed-text"
            />
          </div>
          
          <div className="hero-buttons">
            <button 
              className="glow-button primary"
              onClick={scrollToProjects}
            >
              View My Work
            </button>
            <button 
              className="glow-button secondary"
              onClick={() => navigate('/contact')}
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
