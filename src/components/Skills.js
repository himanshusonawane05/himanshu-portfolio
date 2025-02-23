import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaReact, FaNodeJs, FaPython, FaAws } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiDocker, SiKubernetes } from 'react-icons/si';
import '../styles/Skills.css';

const Skills = () => {
  const skills = [
    { name: 'React', icon: <FaReact />, level: 90 },
    { name: 'Node.js', icon: <FaNodeJs />, level: 85 },
    { name: 'TypeScript', icon: <SiTypescript />, level: 80 },
    { name: 'Python', icon: <FaPython />, level: 85 },
    { name: 'MongoDB', icon: <SiMongodb />, level: 75 },
    { name: 'AWS', icon: <FaAws />, level: 70 },
    { name: 'Docker', icon: <SiDocker />, level: 75 },
    { name: 'Kubernetes', icon: <SiKubernetes />, level: 65 },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="skills" className="skills-section">
      <motion.div 
        className="skills-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        ref={ref}
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>

        <div className="skills-list">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-item"
              variants={itemVariants}
            >
              <div className="skill-icon">
                {skill.icon}
              </div>
              <div className="skill-info">
                <h3>
                  {skill.name}
                  <span className="skill-percentage">{skill.level}%</span>
                </h3>
                <div className="skill-bar-container">
                  <motion.div
                    className="skill-bar"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
