import React from 'react';

function Footer() {
  return (
    <footer style={{ textAlign: 'center', padding: '10px 0', background: '#333', color: '#fff' }}>
      <p>&copy; 2024 Daniel Vu. All rights reserved.</p>
      <p>
        Follow me: 
        <a
          href="https://www.linkedin.com/in/daniel-vu04"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'white', margin: '0 5px' }}
        >
          LinkedIn
        </a>
        |
        <a
          href="https://github.com/danielvu04"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'white', margin: '0 5px' }}
        >
          GitHub
        </a>
      </p>
    </footer>
  );
}

export default Footer;
