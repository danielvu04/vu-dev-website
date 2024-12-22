import React from 'react';
import '../styles/About.css';

/**
 * A functional component to display the "About Me" section.
 * @return {JSX.Element} The About section content.
 */
function About() {
  return (
    <section className="about-section">
      <h1>About Me</h1>
      <div className="about-content">
        <p>
          Hi, I'm Daniel Vu! My passion for software engineering started with 
          my family—many of whom work in tech—and my fascination with mechanical 
          machinery. This interest grew into a love for robotics and coding, 
          where I enjoy creating systems that are both functional and meaningful.
        </p>
        <p>
          I’m currently building a tenant management website for my family business, 
          making maintenance and payment processes seamless while showcasing our 
          properties. I specialize in Java, Python, and C++ and am expanding my skills 
          in web development and design, blending technical knowledge with my graphic 
          design background to create polished, interactive projects.
        </p>
        <p>
          Beyond work, I enjoy playing piano, learning guitar, building computers, 
          playing video games, reading, and working with Legos—hobbies that fuel 
          my creativity and problem-solving abilities.
        </p>
        <p>
          In the future, I aim to lead a team that develops impactful software to 
          improve the lives of millions. I’m particularly excited about technology 
          like robotic exoskeletons, self-driving cars, and augmented reality—tools 
          that enhance quality of life. I want to combine technical expertise and 
          leadership to make a meaningful societal impact.
        </p>
        <p>
          At my core, I strive to meet and exceed expectations, delivering high-quality 
          work on time. I believe in the transformative power of technology and am 
          committed to creating solutions that truly matter.
        </p>
      </div>
    </section>
  );
}

export default About;
