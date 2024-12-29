import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer
      style={{
        textAlign: 'center',
        padding: '10px 0',
        background: '#333',
        color: '#fff',
      }}
    >
      <p>&copy; 2024 Daniel Vu. All rights reserved.</p>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap', // Allow wrapping on smaller screens
          gap: '10px', // Add spacing between items
          marginTop: '10px',
        }}
      >
        <a
          href="https://www.linkedin.com/in/daniel-vu04"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'white', textDecoration: 'none' }}
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/danielvu04"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'white', textDecoration: 'none' }}
        >
          GitHub
        </a>
        <a
          href="https://hub.docker.com/u/vud1394"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'white', textDecoration: 'none' }}
        >
          Dockerhub
        </a>
      </div>
    </footer>
  );
}

export default Footer;
