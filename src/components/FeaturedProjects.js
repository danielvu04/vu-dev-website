import React from 'react';
import '../styles/Featured-Projects.css';

function FeaturedProjects() {
  const projects = [
    {
      name: 'AI4Earth Summer Research Program',
      description: `
        Developed LSTM-based sequence-to-sequence models for stream temperature prediction 
        using multi-modal datasets (weather, reservoir, and stream data). Built PyTorch workflows 
        for training, finetuning, and evaluation, with visualization tools for model comparison. 
        Presented research findings to peers and faculty mentors.
      `,
      organization: 'University of Minnesota, National Science Foundation',
      tech: ['PyTorch', 'LSTM', 'Sequence-to-Sequence', 'Data Preprocessing', 'Python', 'Machine Learning']
    },
    {
      name: 'Tenant Management Website',
      description: `
        A full-stack web application for managing rental properties with integrated rent collection, 
        tenant onboarding, and maintenance tracking. Built with Angular, Express.js, MongoDB, 
        and Firebase Auth. Includes Stripe payment processing and AWS deployment.
      `,
      githubLink: 'https://github.com/danielvu04/TenantManagementSystem',
      // websiteLink: 'https://tenant-management-demo.vercel.app',
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
        Simulated drone delivery system featuring dynamic route planning, battery tracking, 
        and autonomous recharging to optimize logistics. Built with C++ for pathfinding, 
        TypeScript for visualization, and deployed using Docker. The system integrates 
        real-time data collection and follows design patterns (Decorator, Factory) to 
        enhance scalability and maintainability.
        `,
      dockerLink: 'https://hub.docker.com/repository/docker/vud1394/drone_sim',
      tech: ['C++', 'Typescript', 'Docker', 'Jira', 'Design Patterns']
    },
    { 
      name: 'Portfolio Website', 
      description: `
      A responsive portfolio built with React.js and Tailwind CSS to showcase 
      projects and skills. Designed with a clean UI and intuitive navigation 
      for a seamless experience. Deployed on Netlify, leveraging Git for 
      version control and automated updates. Includes interactive components 
      and animations for enhanced engagement.  
      `, 
      githubLink: 'https://github.com/danielvu04/vu-dev-website',
      tech: ['React.js', 'Tailwind CSS', 'JavaScript', 'Agile']
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
            {project.organization && (
              <div className="project-organization">
                <span className="organization-name">{project.organization}</span>
                {project.duration && (
                  <span className="project-duration">{project.duration}</span>
                )}
              </div>
            )}
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
