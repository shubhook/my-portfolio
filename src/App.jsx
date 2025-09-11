import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Mail, Linkedin, ArrowUpRight, MapPin, Clock, Twitter} from 'lucide-react';

const Portfolio = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "skillsync.ai",
      description: "An intelligent platform that connects developers with curated projects matching their tech stack. Built with Node.js and Google Gemini AI for smart recommendations.",
      tech: ["Node.js", "Express", "Google Gemini AI", "JavaScript", "REST API"],
      features: [
        "AI-powered project recommendations",
        "Tech stack matching algorithm", 
        "Curated project database",
        "Developer skill assessment"
      ],
      github: "https://github.com/shubhook/skillsync.ai",
      demo: "https://skillsync.demo",
      status: "In Development",
      year: "2024"
    }
  ];

  const skills = [
    "JavaScript", "Node.js", "React", "Express.js", 
    "MongoDB", "Git/GitHub", "REST APIs", "AI Integration"
  ];

  const ScrollToSection = ({ targetId, children, className = "" }) => {
    const handleClick = () => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    };
    return (
      <button onClick={handleClick} className={`${className}`}>
        {children}
      </button>
    );
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="nav-content">
            <div className="nav-brand">Shubham Khakha</div>
            <div className="nav-links">
              <ScrollToSection targetId="about" className="nav-link">
                About
              </ScrollToSection>
              <ScrollToSection targetId="projects" className="nav-link">
                Work
              </ScrollToSection>
              <ScrollToSection targetId="contact" className="nav-link">
                Contact
              </ScrollToSection>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div>
            <h1 className="hero-title">Shubham Khakha</h1>
            
            <div className="hero-meta">
              <div className="hero-meta-item">
                <MapPin size={16} />
                <span>Guwahati, Assam, IN</span>
              </div>
              <div className="hero-meta-item">
                <Clock size={16} />
                <span>IST (UTC+5:30)</span>
              </div>
            </div>
            
            <div className="hero-description">
              <p className="text-large">
                Full-stack developer building intelligent web applications that solve real problems. 
                Currently crafting AI-powered platforms that connect developers with meaningful projects.
              </p>
              
              <p className="text-muted">
                Passionate about the intersection of web development and artificial intelligence, 
                I create technology that not only functions beautifully but also makes a meaningful impact.
              </p>
            </div>
          </div>
          
          <div className="btn-group">
            <a href="https://github.com/shubhook" className="btn btn-primary">
              <Github size={16} />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/shubham-khakha/" className="btn btn-secondary">
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a href="mailto:khakhashubham@gmail.com" className="btn btn-secondary">
              <Mail size={16} />
              Email
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section" style={{ background: 'white' }}>
        <div className="container">
          <div className="section-small">
            <h2 style={{ marginBottom: '1.5rem' }}>About</h2>
            <div style={{ marginBottom: '3rem' }}>
              <p className="text-large" style={{ marginBottom: '1.5rem' }}>
                I'm a full-stack developer with a deep fascination for building 
                applications that make a meaningful impact. My journey has led me 
                to explore the exciting possibilities at the intersection of web 
                development and artificial intelligence.
              </p>
              
              <p className="text-muted" style={{ marginBottom: '1.5rem' }}>
                Currently working on SkillSync.ai, a platform that leverages AI 
                to intelligently match developers with projects that align with 
                their skills and interests. I believe in creating technology 
                that solves real-world problems with elegant solutions.
              </p>
              
              <p className="text-muted">
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or thinking about the next 
                big problem to solve.
              </p>
            </div>
          </div>
          
          <div>
            <h3 style={{ marginBottom: '1rem' }}>Skills</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <span key={index} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <div className="section-header">
            <h2 style={{ marginBottom: '1rem' }}>Selected Work</h2>
            <p className="text-muted">Projects that matter</p>
          </div>
          
          <div>
            {projects.map((project, index) => (
              <article key={index} className="card">
                <header className="card-header">
                  <div className="card-title">
                    <h3>{project.title}</h3>
                    <span className="card-year">{project.year}</span>
                  </div>
                  <p className="card-description">
                    {project.description}
                  </p>
                </header>
                
                <div className="card-section">
                  <h4 className="card-section-title">Features</h4>
                  <ul className="features-list">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="card-section">
                  <h4 className="card-section-title">Tech Stack</h4>
                  <div className="tech-grid">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <footer className="card-footer">
                  <a href={project.github} className="link">
                    <Github size={16} />
                    <span>View code</span>
                    <ArrowUpRight size={14} />
                  </a>
                  
                  <a href={project.demo} className="link">
                    <ExternalLink size={16} />
                    <span>Live demo</span>
                    <ArrowUpRight size={14} />
                  </a>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section" style={{ background: 'white' }}>
        <div className="container">
          <div className="section-header">
            <h2 style={{ marginBottom: '1.5rem' }}>Get in touch</h2>
            <div>
              <p className="text-large">
                I'm always interested in hearing about new opportunities, 
                collaborating on exciting projects, and connecting with 
                fellow developers who share a passion for innovation.
              </p>
            </div>
          </div>
          
          <div className="contact-grid">
            <a href="mailto:khakhashubham@gmail.com" className="contact-card">
              <div className="contact-card-header">
                <Mail className="contact-card-icon" />
                <ArrowUpRight className="contact-card-arrow" />
              </div>
              <div>
                <h3 className="contact-card-title">Email</h3>
                <p className="contact-card-description">khakhashubham@gmail.com</p>
              </div>
            </a>

            <a href="https://x.com/ShubhamKhakha" className="contact-card">
              <div className="contact-card-header">
                <Twitter className="contact-card-icon" />
                <ArrowUpRight className="contact-card-arrow" />
              </div>
              <div>
                <h3 className="contact-card-title">Twitter</h3>
                <p className="contact-card-description">Professional network</p>
              </div>
            </a>
            
            <a href="https://github.com/shubhook" className="contact-card">
              <div className="contact-card-header">
                <Github className="contact-card-icon" />
                <ArrowUpRight className="contact-card-arrow" />
              </div>
              <div>
                <h3 className="contact-card-title">GitHub</h3>
                <p className="contact-card-description">Open source projects</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-text">
              © 2024 Shubham Khakha
            </div>
            <div className="footer-text">
              Built with React & Tailwind CSS
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;