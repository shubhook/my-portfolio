import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Github, Linkedin, Twitter, Moon, Sun, BookOpen, FileText, HomeIcon, Gitlab } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [visible, setVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const resumeLink = "YOUR_GOOGLE_DRIVE_LINK_HERE"; // Replace with actual link

  return (
    <nav className={`navbar ${visible ? 'navbar-visible' : 'navbar-hidden'} ${darkMode ? 'dark' : 'light'}`}>
      <div className="navbar-content">
        <div className="navbar-links">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            <HomeIcon size={16} />
          </Link>
          <Link to="/blog" className={location.pathname.startsWith('/blog') ? 'active' : ''}>
            <BookOpen size={16} />
          </Link>
          <a href="https://github.com/shubhook" target="_blank" rel="noopener noreferrer">
            <Github size={16} />
          </a>
          <a href="https://x.com/khakha_x" target="_blank" rel="noopener noreferrer">
            <Twitter size={16} />
          </a>
        </div>

        <div className="navbar-divider" />

        <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <Sun size={16} /> : <Moon size={18} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
