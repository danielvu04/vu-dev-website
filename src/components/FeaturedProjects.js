import React from 'react';
import '../styles/Featured-Projects.css';

function FeaturedProjects() {
  const projects = [
    {
      name: 'Tenant Management Website',
      description: `
        A full-stack web application for managing rental properties with integrated rent collection, 
        tenant onboarding, and maintenance tracking. Built with Angular, Express.js, MongoDB, 
        and Firebase Auth. Includes Stripe payment processing and AWS deployment.
      `,
      githubLink: 'https://github.com/danielvu04/TenantManagementSystem',
      websiteLink: 'https://tenant-management-demo.vercel.app',
      tech: ['Angular', 'Express.js', 'MongoDB', 'Firebase Auth', 'Stripe', 'AWS']
    },
    {
      name: 'Smart Mirror System',
      description: `
        Interactive smart mirror with real-time updates, AI-driven personalization, and IoT smart home 
        integration. Built with Raspberry Pi, Python, OpenCV, and TensorFlow. Features facial recognition 
        for personalized dashboards and voice/gesture controls.
      `,
      githubLink: 'https://github.com/danielvu04/SmartMirror',
      tech: ['Raspberry Pi', 'Python', 'OpenCV', 'TensorFlow', 'MQTT']
    },
    {
      name: 'Drone Delivery Simulation',
      description: `
        Simulated drone delivery system featuring dynamic route planning,
        battery tracking, and autonomous recharging to optimize operations.
      `,
      dockerLink: 'https://hub.docker.com/repository/docker/vud1394/drone_sim',
      tech: ['Java', 'Docker', 'Algorithm Design']
    },
    { 
      name: 'Portfolio Website', 
      description: `
        A responsive portfolio site built with React to showcase my projects and skills. 
        Features include a dynamic slideshow, clean design, and easy navigation.
      `, 
      githubLink: 'https://github.com/danielvu04/vu-dev-website',
      tech: ['React', 'Tailwind CSS', 'JavaScript']
    },
  ];

  return (
    <section id="featured-projects" className="featured-projects">
      <h2>Featured Projects</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div 
            className="project-card" 
            key={index}
            id={project.name.toLowerCase().replace(/\s+/g, '-') + '-project'} // Generate a unique ID
          >
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            
            {project.tech && (
              <div className="project-tech">
                {project.tech.map((item, techIndex) => (
                  <span key={techIndex} className="tech-tag">{item}</span>
                ))}
              </div>
            )}
            
            <div className="project-links">
              {project.websiteLink && (
                <a
                  href={project.websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="website-link"
                >
                  Visit Website
                </a>
              )}
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
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  View on GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProjects;
