import { Github, Mail, Linkedin, Twitter, ExternalLink } from 'lucide-react';
import Navbar from './Navbar';
import { useTheme } from '../context/ThemeContext';
import { about, contact, projects, experiments } from '../data/portfolio';
import './Home.css';

const ProjectCard = ({ project, isExperiment }) => (
  <div className="project-card">
    {isExperiment ? (
      <div className="experiment-header">
        <h3 className="project-title">{project.title}</h3>
        <span className={`vibe-badge ${project.vibecoded ? 'vibecoded' : 'human-built'}`}>
          {project.vibecoded ? 'Vibecoded' : 'Built by Human'}
        </span>
      </div>
    ) : (
      <h3 className="project-title">{project.title}</h3>
    )}
    <p className="project-description">{project.description}</p>

    <div className="tech-stack">
      {project.tech.map((tech) => (
        <span key={tech} className="tech-badge">{tech}</span>
      ))}
    </div>

    <div className="project-links">
      <a href={project.github} target="_blank" rel="noopener noreferrer">
        <Github size={16} />
        Source Code
      </a>
      {project.demo && (
        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="demo-link">
          <ExternalLink size={16} />
          Live Demo
        </a>
      )}
    </div>
  </div>
);

const Home = () => {
  const { darkMode } = useTheme();

  return (
    <div className={`home ${darkMode ? 'dark' : 'light'}`}>
      <div className="container">
        {/* About Section */}
        <section className="section">
          <span className="section-badge">About</span>
          <h1 className="main-heading">{about.greeting}</h1>
          <p className="subtitle">
            {about.subtitle} <strong>{about.subtitleEmphasis}</strong>{about.subtitleSuffix}
          </p>
        </section>

        <div className="section-divider" />

        {/* Projects Section */}
        <section className="section">
          <span className="section-badge">Cool Projects</span>
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <div className="section-divider" />

        {/* Experiments Section */}
        <section className="section">
          <span className="section-badge">Experiments</span>
          <div className="projects-grid">
            {experiments.map((experiment) => (
              <ProjectCard key={experiment.title} project={experiment} isExperiment />
            ))}
          </div>
        </section>

        <div className="section-divider" />

        {/* Contact Section */}
        <section className="section">
          <span className="section-badge">Contact</span>
          <div className="contact-links">
            <a href={`mailto:${contact.email}`}>
              <Mail size={16} />
              {contact.email}
            </a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a href={contact.github} target="_blank" rel="noopener noreferrer">
              <Github size={16} />
              GitHub
            </a>
            <a href={contact.twitter} target="_blank" rel="noopener noreferrer">
              <Twitter size={16} />
              Twitter
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-gradient" />
          <p>Built with Love • For Myself</p>
        </footer>
      </div>

      <Navbar />
    </div>
  );
};

export default Home;
