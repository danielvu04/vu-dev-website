import React from 'react';

function Hero() {
  return (
    <section style={{ textAlign: 'center', padding: '50px 20px', background: '#f4f4f4' }}>
      <h1>Hi, I'm Daniel Vu</h1>
      <p>Welcome to my portfolio website.</p>
      <div style={{ marginTop: '20px' }}>
        <button style={{ padding: '10px 20px', margin: '5px' }}>View My Work</button>
        <button style={{ padding: '10px 20px', margin: '5px' }}>Contact Me</button>
      </div>
    </section>
  );
}

export default Hero;
