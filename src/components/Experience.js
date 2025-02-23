import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: "Company Name",
      position: "Software Engineer",
      period: "2023 - Present",
      description: "Led development of key features and improved system performance by 40%.",
      technologies: ["React", "Node.js", "AWS"],
      achievements: [
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Mentored junior developers and conducted code reviews",
        "Optimized database queries improving response time by 30%"
      ]
    },
    // Add more experiences here
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>
        <motion.div
          className="timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              variants={itemVariants}
            >
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h3>{exp.position}</h3>
                <h4>{exp.company}</h4>
                <span className="period">{exp.period}</span>
                <p>{exp.description}</p>
                <div className="tech-stack">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <ul className="achievements">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
