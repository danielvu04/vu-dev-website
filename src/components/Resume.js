import React from 'react';
import '../styles/Resume.css'; 

function Resume() {
  return (
    <div className="resume-page">
      <h1 className="resume-title">My Resume</h1>
      <iframe
        src="/Vu_Resume.pdf"
        className="resume-iframe"
        title="Resume"
      ></iframe>
      <a
        href="/Vu_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="resume-download-link"
      >
        Download Resume
      </a>
    </div>
  );
}

export default Resume;
