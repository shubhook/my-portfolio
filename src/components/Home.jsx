import React, { useState } from 'react';
import { Github, Mail, Linkedin, Twitter, ExternalLink, Italic } from 'lucide-react';
import Navbar from './Navbar';
import './Home.css';

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  const projects = [
    {
      title: "skillsync.ai",
      description: "A web platform that matches developers with suitable projects using AI-powered semantic analysis. Users input their skills and a project description; Google Gemini analyzes for compatibility and suggests matches.",
      tech: ["Node.js", "Express", "Google Gemini AI", "REST API"],
      github: "https://github.com/shubhook/skillsync.ai",
      demo: "https://skillsync-ai-one.vercel.app"
    }
  ];

  const skills = {
    "Backend": ["Node", "Express", "REST APIs"],
    "Databases": ["MongoDB", "Postgres"],
    "Languages": ["JavaScript", "TypeScript", "Python", "C/C++"],
    "Tools": ["Git", "Linux", "Prisma"]
  };

  return (
    <div className={`home ${darkMode ? 'dark' : 'light'}`}>
      <div className="container">
        {/* About Section */}
        <section className="section">
          <span className="section-badge">About</span>
          <h1 className="main-heading">Hello Ji, I'm Khakha</h1>
          <p className="subtitle">
            I build software. <b>College</b> didn’t teach me that.
          </p>
        </section>

        <div className="section-divider" />

        {/* Projects Section */}
        <section className="section">
          <span className="section-badge">Cool Projects</span>
          <div className="projects-grid">
            {projects.map((project, idx) => (
              <div key={idx} className="project-card">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="tech-stack">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-badge">{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github size={16} />
                    Source Code
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="section-divider" />

        {/* Tech Stack Section */}
        <section className="section">
          <span className="section-badge">Tech Stack</span>
          <div className="skills-card">
            {Object.entries(skills).map(([category, techs], idx) => (
              <div key={category} className="skill-category">
                <h3 className="skill-category-title">{category}</h3>
                <div className="skill-tags">
                  {techs.map((tech, i) => (
                    <span key={i} className="skill-tag">{tech}</span>
                  ))}
                </div>
                {idx < Object.entries(skills).length - 1 && <div className="skill-divider" />}
              </div>
            ))}
          </div>
        </section>

        <div className="section-divider" />

        {/* Contact Section */}
        <section className="section">
          <span className="section-badge">Contact</span>
          <div className="contact-links">
            <a href="mailto:khakhashubham@gmail.com">
              <Mail size={16} />
              khakhashubham@gmail.com
            </a>
            <a href="https://github.com/shubhook" target="_blank" rel="noopener noreferrer">
              <Github size={16} />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/shubham-khakha/" target="_blank" rel="noopener noreferrer">
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a href="https://x.com/ShubhamKhakha" target="_blank" rel="noopener noreferrer">
              <Twitter size={16} />
              Twitter
            </a>
          </div>
        </section>

        {/* Footer with gradient */}
        <footer className="footer">
          <div className="footer-gradient" />
          <p>Built with Love • For Myself</p>
        </footer>
      </div>

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
};

export default Home;
