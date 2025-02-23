import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <motion.nav 
      className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-content">
        <Link 
          to="hero" 
          spy={true} 
          smooth={true} 
          duration={500} 
          className="logo"
          onClick={() => setIsMenuOpen(false)}
        >
          <motion.span 
            className="logo-text"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Portfolio
          </motion.span>
        </Link>

        <div 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <motion.li
              key={item.id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={item.id}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
