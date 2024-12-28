import React from 'react';
import '../styles/Featured-Projects.css';

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
    <section className="featured-projects">
      <h2>Featured Projects</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            {project.dockerLink && (
              <a
                href={project.dockerLink}
                target="_blank"
                rel="noopener noreferrer"
                className="docker-link"
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
