import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/himanshusonawane05/repos')
        console.log(response.data)
        const sortedProjects = response.data
          .filter(project => !project.fork && project.description)
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 6);
        setProjects(sortedProjects);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch projects');
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section id="projects" className="projects-section">
        <h2>Featured Projects</h2>
        <div className="loading">Loading projects...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="projects-section">
        <h2>Featured Projects</h2>
        <div className="error">{error}</div>
      </section>
    );
  }

  return (
    <section id="projects" className="projects-section">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Featured Projects
      </motion.h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="project-content">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                <span>Tech Stack</span>
                <div className="tech-list">
                  {project.topics && project.topics.map(topic => (
                    <span key={topic} className="tech-tag">{topic}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="project-links">
              <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                <FaGithub /> Code
              </a>
              {project.homepage && (
                <a href={project.homepage} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
