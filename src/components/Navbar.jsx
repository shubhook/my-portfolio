import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Github, Twitter, Moon, Sun, BookOpen, HomeIcon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import './Navbar.css';

const ACCENT_COLORS = ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#C77DFF'];

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [visible, setVisible] = useState(true);
  const location = useLocation();
  const navbarContentRef = useRef(null);

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

  useEffect(() => {
    const COUNT_KEY = 'navbar-load-count';
    const COLOR_KEY = 'navbar-accent-color';

    const count = parseInt(sessionStorage.getItem(COUNT_KEY) || '0') + 1;
    sessionStorage.setItem(COUNT_KEY, String(count));

    if (count % 7 === 0) {
      const color = ACCENT_COLORS[Math.floor(Math.random() * ACCENT_COLORS.length)];
      sessionStorage.setItem(COLOR_KEY, color);
    } else {
      sessionStorage.removeItem(COLOR_KEY);
    }

    const storedColor = sessionStorage.getItem(COLOR_KEY);
    if (storedColor && navbarContentRef.current) {
      navbarContentRef.current.style.setProperty('--dynamic-border', storedColor);
    }
  }, []);

  return (
    <nav className={`navbar ${visible ? 'navbar-visible' : 'navbar-hidden'} ${darkMode ? 'dark' : 'light'}`}>
      <div className="navbar-content" ref={navbarContentRef}>
        <div className="navbar-links">
          <Link
            to="/"
            title="Home"
            className={location.pathname === '/' ? 'active' : ''}
          >
            <HomeIcon size={16} />
          </Link>
          <Link
            to="/blog"
            title="Blog"
            className={location.pathname.startsWith('/blog') ? 'active' : ''}
          >
            <BookOpen size={16} />
          </Link>
          <a href="https://github.com/shubhook" title="GitHub" target="_blank" rel="noopener noreferrer">
            <Github size={16} />
          </a>
          <a href="https://x.com/khakha_x" title="Twitter / X" target="_blank" rel="noopener noreferrer">
            <Twitter size={16} />
          </a>
        </div>

        <div className="navbar-divider" />

        <button className="theme-toggle" onClick={toggleDarkMode} title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}>
          {darkMode ? <Sun size={16} /> : <Moon size={18} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
