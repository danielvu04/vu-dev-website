import React from 'react';
import '../styles/App.css';

function FeaturedProjects() {
  const projects = [
    {
      name: 'Drone Delivery Simulation',
      description: `
        Simulated drone delivery system featuring dynamic route planning,
        battery tracking, and autonomous recharging to optimize operations.
      `,
      dockerLink: 'https://hub.docker.com/repository/docker/vud1394/drone_sim',
    },
    { 
      name: 'Project 2', 
      description: 'Description of project 2.', 
    },
    { name: 'Project 3', description: 'Description of project 3.' },
  ];

  return (
    <section style={{ padding: '50px 20px' }}>
      <h2>Featured Projects</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #ddd',
              padding: '20px',
              width: '30%',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            {project.dockerLink && (
              <a
                href={project.dockerLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  marginTop: '10px',
                  padding: '10px 20px',
                  background: '#007acc',
                  color: '#fff',
                  textDecoration: 'none',
                  borderRadius: '4px',
                  textAlign: 'center',
                }}
              >
                View on Docker Hub
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProjects;
