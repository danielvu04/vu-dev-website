import React from 'react';
import '../styles/MySkills.css';

function Skills() {
  // Organize skills by categories for better presentation
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { 
          name: 'Python', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
          description: 'A versatile language for web, data, and AI applications.',
        },
        { 
          name: 'JavaScript', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
          description: 'For interactive web pages and front-end development.',
        },
        { 
          name: 'TypeScript', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
          description: 'A strongly typed programming language that builds on JavaScript.',
        },
        { 
          name: 'Java', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
          description: 'An object-oriented language for enterprise applications.',
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
          name: 'SQL', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
          description: 'Database query language for relational databases.',
        },
        { 
          name: 'MongoDB', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
          description: 'A NoSQL database for modern applications.',
        },
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { 
          name: 'React', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
          description: 'A library for building interactive user interfaces.',
        },
        { 
          name: 'Angular', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg',
          description: 'A platform for building web applications.',
        },
        { 
          name: 'Node.js', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
          description: 'A runtime for scalable server-side applications.',
        },
        { 
          name: 'Express.js', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg',
          description: 'A minimal and flexible Node.js web application framework.',
        },
        { 
          name: 'Tailwind', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
          description: 'A utility-first CSS framework for rapid UI development.',
        },
        { 
          name: 'OpenCV', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg',
          description: 'Computer vision and machine learning software library.',
        },
        { 
          name: 'TensorFlow', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg',
          description: 'An end-to-end platform for machine learning.',
        },
      ]
    },
    {
      title: "Developer Tools & Cloud",
      skills: [
        { 
          name: 'Docker', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
          description: 'For containerizing and deploying applications.',
        },
        { 
          name: 'Git', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
          description: 'Version control system for tracking code changes.',
        },
        { 
          name: 'GitHub', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
          description: 'A platform for version control and collaboration.',
        },
        { 
          name: 'VS Code', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg',
          description: 'A lightweight but powerful source code editor.',
        },
        { 
          name: 'Jira', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg',
          description: 'A tool for agile project management and tracking.',
        },
        { 
          name: 'AWS', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
          description: 'Cloud platform services for building applications.',
        },
        { 
          name: 'Firebase', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg',
          description: 'Platform for web and mobile application development.',
        },
        { 
          name: 'Raspberry Pi', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/raspberrypi/raspberrypi-original.svg',
          description: 'A small computer for IoT projects and prototyping.',
        },
      ]
    },
    {
      title: "Software Engineering Concepts",
      skills: [
        { 
          name: 'OOP', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg',
          description: 'Object-Oriented Programming design principles.',
        },
        { 
          name: 'SOLID', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/confluence/confluence-original.svg',
          description: 'Principles for writing maintainable and extensible software.',
        },
        { 
          name: 'RESTful API', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg',
          description: 'Best practices for building web API interfaces.',
        },
        { 
          name: 'Algorithms', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg',
          description: 'Efficient problem-solving approaches and data structures.',
        },
        { 
          name: 'UML', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unifiedmodelinglanguage/unifiedmodelinglanguage-original.svg',
          description: 'For modeling and designing software visually.',
        },
        { 
          name: 'IoT', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg',
          description: 'Internet of Things - connecting and managing smart devices.',
        },
        { 
          name: 'Machine Learning', 
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg',
          description: 'AI techniques that enable systems to learn from data.',
        }
      ]
    }
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-heading-container">
        <h2>My Skills</h2>
      </div>
      
      <div className="skills-categories">
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="skill-category">
            <h3>{category.title}</h3>
            <div className="skills-container">
              {category.skills.map((skill, skillIndex) => {
                // Calculate position within the row to determine edge classes
                const posIndex = skillIndex % 4;
                const isLeftEdge = posIndex === 0;
                const isRightEdge = posIndex === 3;
                
                return (
                  <div 
                    key={skillIndex} 
                    className={`skill ${
                      skill.name === "Raspberry Pi" || 
                      skill.name === "Machine Learning" || 
                      skill.name === "RESTful API" ? 
                      "skill-long-text" : ""
                    } ${isLeftEdge ? 'edge-left' : ''} ${isRightEdge ? 'edge-right' : ''}`}
                    data-description={skill.description}
                    data-position={posIndex}
                  >
                    <img src={skill.icon} alt={skill.name} />
                    <p>{skill.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
