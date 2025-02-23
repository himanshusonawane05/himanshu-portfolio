import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaChevronDown } from 'react-icons/fa';
import '../styles/Hero.css';
import profilePic from "../assests/ProfilePicture.jpg"

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <motion.div
          className="profile-container"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 1.5
          }}
        >
          <div className="profile-frame">
            <img 
              src={profilePic} 
              alt="Profile" 
              className="profile-pic"
            />
            <div className="profile-glow"></div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Hi, I'm <span className="highlight">Himanshu Sonawane</span>
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          Full Stack Developer & UI/UX Enthusiast
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          I build beautiful and scalable web applications
        </motion.p>

        <motion.div
          className="cta-buttons"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cta-primary"
          >
            Get in Touch
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cta-secondary"
          >
            View Projects
          </Link>
        </motion.div>
      </div>

      <Link
        to="projects"
        smooth={true}
        duration={500}
        className="scroll-indicator"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <FaChevronDown />
        </motion.div>
      </Link>
    </section>
  );
};

export default Hero;
