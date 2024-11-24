import React from 'react';

function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 20px', background: '#333', color: '#fff' }}>
      <h1>DanielVu.dev</h1>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '15px' }}>
        <li><a href="#home" style={{ color: 'white', textDecoration: 'none' }}>Home</a></li>
        <li><a href="#about" style={{ color: 'white', textDecoration: 'none' }}>About</a></li>
        <li><a href="#projects" style={{ color: 'white', textDecoration: 'none' }}>Projects</a></li>
        <li><a href="#contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
