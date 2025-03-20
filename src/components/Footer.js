import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer>
      <p>&copy; 2025 Daniel Vu. All rights reserved.</p>
      <div>
        <a
          href="https://www.linkedin.com/in/daniel-vu04"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/danielvu04"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://hub.docker.com/u/vud1394"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dockerhub
        </a>
      </div>
    </footer>
  );
}

export default Footer;
