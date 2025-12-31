import "./Prohero.css";
import { PROJECTS } from '../constants/constant';
import { ExternalLink, Github } from 'lucide-react';
import React from 'react'

export default function Prohero() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="projects-header">
          <h2 className="projects-title">Selected Work.</h2>
          <p className="projects-subtitle">
            A collection of projects built with passion and precision.
          </p>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                  className="image"
                />
              </div>

              <div className="project-content">
                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-links">
                  <a href={project.link} className="link live-demo">
                    <ExternalLink size={18} className="icon" /> Live Demo
                  </a>
                  <a href={project.github} className="link repository">
                    <Github size={18} className="icon" /> Repository
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="see-more">
          <a href="https://github.com/Rashi-AI7" className="see-more-btn">
            See more on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

