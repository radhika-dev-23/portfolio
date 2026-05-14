import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink, Folder } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="section container">
      <h2 className="section-title">Featured Projects</h2>
      
      <div className="projects-grid">
        {portfolioData.projects.map((project, index) => (
          <div key={index} className="project-card glass-card">
            <div className="project-header">
              <Folder size={32} className="text-accent" />
              <div className="project-links">
                {project.repo && (
                  <a href={project.repo} target="_blank" rel="noreferrer" aria-label="GitHub Repository">
                    <FaGithub size={20} />
                  </a>
                )}
                {project.link && (
                  <a href={project.link} target="_blank" rel="noreferrer" aria-label="Live Demo">
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>
            
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <ul className="project-points">
                {project.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
            
            <div className="project-tech">
              {project.techStack.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
