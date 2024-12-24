import React from 'react';
import '../styles/MySkills.css';

function Skills() {
  const skills = [
		{ 
			name: 'Python', 
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
			description: 'A versatile language for web and data applications.',
		},
		{ 
			name: 'Java', 
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
			description: 'An object-oriented language for enterprise apps.',
		},
		{ 
			name: 'C++', 
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg',
			description: 'Used for system programming and game development.',
		},
		{ 
			name: 'C', 
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg',
			description: 'A foundational language for OS and embedded systems.',
		},
		{ 
			name: 'JavaScript', 
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
			description: 'For interactive web pages and front-end features.',
		},
		{ 
			name: 'React', 
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
			description: 'A library for building interactive user interfaces.',
		},
		{ 
			name: 'Node.js', 
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
			description: 'A runtime for scalable server-side applications.',
		},
		{ 
			name: 'Docker', 
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
			description: 'For containerizing and deploying applications.',
		},
		{ 
			name: 'GitHub', 
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
			description: 'A platform for version control and collaboration.',
		},
		{ 
			name: 'UML', 
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unifiedmodelinglanguage/unifiedmodelinglanguage-original.svg',
			description: 'For modeling and designing software visually.',
		},
		{ 
			name: 'Jira', 
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg',
			description: 'A tool for agile project management and tracking.',
		},
	];	

  return (
    <section className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill" data-description={skill.description}>
            <img src={skill.icon} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
