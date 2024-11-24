import React from 'react';

function FeaturedProjects() {
  const projects = [
    { name: 'Project 1', description: 'Description of project 1.' },
    { name: 'Project 2', description: 'Description of project 2.' },
    { name: 'Project 3', description: 'Description of project 3.' },
  ];

  return (
    <section style={{ padding: '50px 20px' }}>
      <h2>Featured Projects</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
        {projects.map((project, index) => (
          <div key={index} style={{ border: '1px solid #ddd', padding: '20px', width: '30%' }}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProjects;
