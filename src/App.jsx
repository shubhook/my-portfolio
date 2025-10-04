import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Mail, Linkedin, ArrowUpRight, MapPin, Clock, Twitter, Terminal, Code, Coffee } from 'lucide-react';

const Portfolio = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [terminalText, setTerminalText] = useState('');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const text = 'Loading developer profile...';
    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        setTerminalText(text.slice(0, i + 1));
        i++;
        setTimeout(typeWriter, 100);
      }
    };
    typeWriter();
  }, []);

  const projects = [
    {
      title: "skillsync.ai",
      description: "An intelligent platform that connects developers with curated projects matching their tech stack. Implements advanced ML algorithms using Google Gemini AI for semantic project matching and developer skill profiling.",
      tech: ["Node.js", "Express.js", "Google Gemini AI", "JavaScript ES6+", "REST API", "MongoDB"],
      features: [
        "AI-powered semantic project recommendations",
        "Tech stack compatibility matrix algorithm", 
        "Automated project difficulty assessment",
        "Developer skill gap analysis",
        "Real-time project matching engine"
      ],
      github: "https://github.com/shubhook/skillsync.ai",
      demo: "https://skillsync-ai-one.vercel.app",
      status: "/* STATUS: ACTIVE_DEVELOPMENT */",
      year: "2024",
      lines: "~2.3k",
      commits: "127"
    }
  ];

  const skills = {
    languages: ["JavaScript", "TypeScript", "Rust", "C/C++", "Python", "Go"],
    frameworks: ["Node.js", "React.js", "Express.js"],
    databases: ["MongoDB"],
    tools: ["Git/GitHub", "Linux"],
    concepts: ["REST APIs",  "AI/ML Integration"]
  };

  const stats = {
    commits: "1,247",
    projects: "23",
    coffees: "∞",
    uptime: "99.9%"
  };

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
            <div className="nav-brand">khakha.dev</div>
            <div className="nav-links">
              <ScrollToSection targetId="about" className="nav-link">
                about
              </ScrollToSection>
              <ScrollToSection targetId="projects" className="nav-link">
                projects
              </ScrollToSection>
              <ScrollToSection targetId="contact" className="nav-link">
                contact
              </ScrollToSection>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div style={{ marginBottom: '32px' }}>
            <div className="code-block">
              <span style={{ color: '#7d8590' }}>$ cat /dev/developer | grep name</span><br/>
              <span style={{ color: '#00ff41' }}>{terminalText}</span><span className="cursor"></span>
            </div>
          </div>

          <div>
            <h1 className="hero-title">Shubham Khakha</h1>
            
            <div className="hero-meta">
              <div className="hero-meta-item">
                <MapPin size={14} />
                <span>location: "Guwahati, IN"</span>
              </div>
              <div className="hero-meta-item">
                <Clock size={14} />
                <span>timezone: UTC+5:30</span>
              </div>
              <div className="hero-meta-item">
                <Terminal size={14} />
                <span>uptime: {Math.floor((currentTime - new Date('2020-01-01')) / (1000 * 60 * 60 * 24))} days</span>
              </div>
            </div>
            
            <div className="hero-description">
              <p className="text-large">
                <code>const developer = new FullStackEngineer()</code><br/>
                Passionate about building intelligent web applications that solve real-world problems. 
                Currently architecting AI-powered platforms and exploring the intersection of web development and machine learning.
              </p>
              
              <p className="text-muted">
                <code>// Specializing in:</code><br/>
                → Building scalable backend systems with Node.js<br/>
                → Integrating AI/ML models into web applications<br/>
                → Creating developer tools that enhance productivity<br/>
                → Contributing to open-source projects when {"{coffee && time}"}
              </p>
              
              {/* Stats */}
              <div style={{ display: 'flex', gap: '24px', marginTop: '24px', flexWrap: 'wrap' }}>
                {Object.entries(stats).map(([key, value]) => (
                  <div key={key} style={{ 
                    fontSize: '12px', 
                    color: '#7d8590',
                    fontFamily: 'JetBrains Mono, monospace',
                    padding: '4px 8px',
                    background: '#161b22',
                    borderRadius: '4px',
                    border: '1px solid #30363d'
                  }}>
                    <span style={{ color: '#58a6ff' }}>{key}</span>: <span style={{ color: '#00ff41' }}>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="btn-group">
            <a href="https://github.com/shubhook" className="btn btn-primary">
              <Github size={14} />
              git clone portfolio
            </a>
            <a href="https://www.linkedin.com/in/shubham-khakha/" className="btn btn-secondary">
              <Linkedin size={14} />
              connect --professional
            </a>
            <a href="mailto:khakhashubham@gmail.com" className="btn btn-secondary">
              <Mail size={14} />
              send --message
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <div className="section-small">
            <h2 style={{ marginBottom: '20px' }}>About Me</h2>
            <div style={{ marginBottom: '32px' }}>
              <p className="text-large" style={{ marginBottom: '20px' }}>
                <code>function getPassion() {"{"} return "building awesome stuff"; {"}"}</code><br/><br/>
                I'm a full-stack developer who believes that the best code is not just functional, 
                but elegant, maintainable, and solves real problems. My journey began with a simple 
                "Hello, World!" and has evolved into architecting complex systems that millions could use.
              </p>
              
              <p className="text-muted" style={{ marginBottom: '20px' }}>
                Currently deep-diving into <strong>SkillSync.ai</strong> - a platform that uses 
                machine learning to intelligently match developers with projects. It's like Tinder, 
                but for code and way more useful. The system analyzes tech stacks, project complexity, 
                and developer preferences to create perfect matches.
              </p>
              
              <p className="text-muted">
                When I'm not debugging at 3 AM (which happens more often than I'd like to admit), 
                you'll find me exploring new technologies, contributing to open-source, or explaining 
                why semicolons in JavaScript are actually important (fight me).
              </p>
              
              <div className="code-block" style={{ marginTop: '24px' }}>
                <code style={{ color: '#7d8590' }}>// My development philosophy:</code><br/>
                <code style={{ color: '#f85149' }}>if</code> <code>(problem.exists()) {"{"}</code><br/>
                &nbsp;&nbsp;<code style={{ color: '#00ff41' }}>code.elegant_solution();</code><br/>
                <code>{"}"} </code><code style={{ color: '#f85149' }}>else</code> <code>{"{"}</code><br/>
                &nbsp;&nbsp;<code style={{ color: '#7d8590' }}>// Find a problem worth solving</code><br/>
                <code>{"}"}</code>
              </div>
            </div>
          </div>
          
          <div>
            <h3 style={{ marginBottom: '20px' }}>Tech Stack</h3>
            {Object.entries(skills).map(([category, techs]) => (
              <div key={category} style={{ marginBottom: '20px' }}>
                <h4 style={{ 
                  fontSize: '14px', 
                  color: '#58a6ff', 
                  marginBottom: '12px',
                  textTransform: 'capitalize'
                }}>
                  {category.replace('_', ' ')}
                </h4>
                <div className="skills-grid">
                  {techs.map((skill, index) => (
                    <span key={index} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <div className="section-header">
            <h2 style={{ marginBottom: '12px' }}>Featured Projects</h2>
            <p className="text-muted">Some things I've built that don't completely suck</p>
          </div>
          
          <div>
            {projects.map((project, index) => (
              <article key={index} className="card">
                <header className="card-header">
                  <div className="card-title">
                    <h3>
                      <Terminal size={16} style={{ display: 'inline', marginRight: '8px', color: '#58a6ff' }} />
                      {project.title}
                    </h3>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      <span className="card-year">{project.year}</span>
                      <span style={{ 
                        fontSize: '11px', 
                        color: '#7d8590',
                        padding: '4px 8px',
                        background: '#21262d',
                        borderRadius: '4px',
                        border: '1px solid #30363d'
                      }}>
                        {project.lines} LOC
                      </span>
                      <span style={{ 
                        fontSize: '11px', 
                        color: '#7d8590',
                        padding: '4px 8px',
                        background: '#21262d',
                        borderRadius: '4px',
                        border: '1px solid #30363d'
                      }}>
                        {project.commits} commits
                      </span>
                    </div>
                  </div>
                  <p className="card-description">
                    {project.description}
                  </p>
                  <div style={{ 
                    fontSize: '11px', 
                    color: '#238636', 
                    fontFamily: 'JetBrains Mono, monospace',
                    marginTop: '12px'
                  }}>
                    {project.status}
                  </div>
                </header>
                
                <div className="card-section">
                  <h4 className="card-section-title">Core Features</h4>
                  <ul className="features-list">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="card-section">
                  <h4 className="card-section-title">Technology Stack</h4>
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
                    <Github size={14} />
                    <span>source_code</span>
                  </a>
                  
                  <a href={project.demo} className="link">
                    <ExternalLink size={14} />
                    <span>live_demo</span>
                  </a>
                </footer>
              </article>
            ))}
          </div>

          {/* Additional Projects Teaser */}
          <div className="code-block" style={{ marginTop: '32px', textAlign: 'center' }}>
            <code style={{ color: '#7d8590' }}>// More projects loading...</code><br/>
            <code style={{ color: '#58a6ff' }}>git log --oneline | head -5</code><br/>
            <code style={{ color: '#7d8590' }}>// Check my GitHub for the complete commit history</code>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <div className="section-header">
            <h2 style={{ marginBottom: '20px' }}>Initialize Connection</h2>
            <div>
              <p className="text-large">
                <code>if (you.hasInterestingProject() || you.wantsToCollaborate()) {"{"}</code><br/>
                &nbsp;&nbsp;<code>me.respondWith("Let's build something awesome!");</code><br/>
                <code>{"}"}</code>
              </p>
              <p className="text-muted" style={{ marginTop: '16px' }}>
                Always excited to discuss new opportunities, collaborate on innovative projects, 
                or just geek out about the latest in tech. My inbox is always open for fellow developers, 
                potential clients, or anyone who wants to talk about why vim is superior to emacs.
              </p>
            </div>
          </div>
          
          <div className="contact-grid">
            <a href="mailto:khakhashubham@gmail.com" className="contact-card">
              <div className="contact-card-header">
                <Mail className="contact-card-icon" />
              </div>
              <div className="contact-card-content">
                <h3 className="contact-card-title">email</h3>
                <p className="contact-card-description">khakhashubham@gmail.com</p>
              </div>
              <ArrowUpRight className="contact-card-arrow" />
            </a>

            <a href="https://x.com/ShubhamKhakha" className="contact-card">
              <div className="contact-card-header">
                <Twitter className="contact-card-icon" />
              </div>
              <div className="contact-card-content">
                <h3 className="contact-card-title">twitter</h3>
                <p className="contact-card-description">@ShubhamKhakha</p>
              </div>
              <ArrowUpRight className="contact-card-arrow" />
            </a>
            
            <a href="https://github.com/shubhook" className="contact-card">
              <div className="contact-card-header">
                <Github className="contact-card-icon" />
              </div>
              <div className="contact-card-content">
                <h3 className="contact-card-title">github</h3>
                <p className="contact-card-description">@shubhook</p>
              </div>
              <ArrowUpRight className="contact-card-arrow" />
            </a>

            <a href="https://www.linkedin.com/in/shubham-khakha/" className="contact-card">
              <div className="contact-card-header">
                <Linkedin className="contact-card-icon" />
              </div>
              <div className="contact-card-content">
                <h3 className="contact-card-title">linkedin</h3>
                <p className="contact-card-description">Professional network</p>
              </div>
              <ArrowUpRight className="contact-card-arrow" />
            </a>
          </div>

          {/* Terminal-style availability */}
          <div className="code-block" style={{ marginTop: '32px' }}>
            <code style={{ color: '#7d8590' }}>$ curl -s api.shubham.dev/status</code><br/>
            <code>{"{"}</code><br/>
            &nbsp;&nbsp;<code style={{ color: '#58a6ff' }}>"status"</code>: <code style={{ color: '#00ff41' }}>"available_for_hire"</code>,<br/>
            &nbsp;&nbsp;<code style={{ color: '#58a6ff' }}>"response_time"</code>: <code style={{ color: '#00ff41' }}>"&lt; 24 hours"</code>,<br/>
            &nbsp;&nbsp;<code style={{ color: '#58a6ff' }}>"timezone"</code>: <code style={{ color: '#00ff41' }}>"UTC+5:30"</code>,<br/>
            &nbsp;&nbsp;<code style={{ color: '#58a6ff' }}>"coffee_level"</code>: <code style={{ color: '#f0883e' }}>{Math.floor(Math.random() * 100)}%</code><br/>
            <code>{"}"}</code>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-text">
              Built with ❤️ and way too much caffeine
            </div>
            <div className="footer-text">
              Last updated: {currentTime.toLocaleDateString()}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;