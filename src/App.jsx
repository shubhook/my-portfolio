import React, { useState } from 'react';
import { Github, Mail, Linkedin, Twitter, ExternalLink, Moon, Sun } from 'lucide-react';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);

  const theme = darkMode ? {
    bg: '#0a0a0a',
    text: '#e8e8e8',
    textMuted: '#888888',
    link: '#e8e8e8',
    linkHover: '#ffffff',
    hoverBg: '#1a1a1a',
    border: '#333333',
    cardBg: '#111111',
    badgeBg: '#1a1a1a'
  } : {
    bg: '#ffffff',
    text: '#1a1a1a',
    textMuted: '#666666',
    link: '#1a1a1a',
    linkHover: '#000000',
    hoverBg: '#f5f5f5',
    border: '#e0e0e0',
    cardBg: '#fafafa',
    badgeBg: '#f0f0f0'
  };

  const projects = [
    {
      title: "skillsync.ai",
      description: "Platform matching developers with projects using ML. Built RESTful API handling 1000+ req/min with Node.js/Express. Integrated Google Gemini AI for semantic analysis. MongoDB schema with indexed queries averaging 50ms response time.",
      tech: ["Node.js", "Express", "MongoDB", "Google Gemini AI", "REST API"],
      github: "https://github.com/shubhook/skillsync.ai",
      demo: "https://skillsync-ai-one.vercel.app"
    }
  ];

  const skills = {
    "Backend": ["Node.js", "Express", "REST APIs"],
    "Databases": ["MongoDB"],
    "Languages": ["JavaScript", "TypeScript", "Python", "C/C++", "Rust", "Go"],
    "Tools": ["Git", "Linux"]
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: theme.bg,
      color: theme.text,
      transition: 'background 0.2s, color 0.2s',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      fontSize: '16px',
      lineHeight: '1.6',
      paddingBottom: '100px'
    }}>
      <div style={{
        maxWidth: '680px',
        margin: '0 auto',
        padding: '60px 24px'
      }}>
        {/* About */}
        <section style={{ marginBottom: '60px' }}>
          <span style={{ 
            display: 'inline-block',
            background: theme.badgeBg,
            border: `1px solid ${theme.border}`,
            borderRadius: '4px',
            padding: '4px 10px',
            fontSize: '12px',
            color: theme.textMuted,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            marginBottom: '20px'
          }}>
            About
          </span>
          <h1 style={{ 
            fontSize: '32px', 
            fontWeight: 600, 
            margin: '0 0 20px 0',
            letterSpacing: '-0.02em'
          }}>
            Shubham Khakha
          </h1>
          <p style={{ 
            color: theme.textMuted, 
            margin: 0,
            textAlign: 'justify',
            fontSize: '15px'
          }}>
            Building scalable backend systems and APIs. I focus on distributed systems, databases, and performance optimization. Currently exploring AI integration in production environments and working on developer tools that solve real problems.
          </p>
        </section>

        {/* Projects */}
        <section style={{ marginBottom: '60px' }}>
          <span style={{ 
            display: 'inline-block',
            background: theme.badgeBg,
            border: `1px solid ${theme.border}`,
            borderRadius: '4px',
            padding: '4px 10px',
            fontSize: '12px',
            color: theme.textMuted,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            marginBottom: '24px'
          }}>
            Projects
          </span>
          
          {projects.map((project, idx) => (
            <div 
              key={idx}
              style={{
                background: theme.cardBg,
                border: `1px solid ${theme.border}`,
                borderRadius: '8px',
                padding: '24px',
                marginBottom: '20px'
              }}
            >
              <h3 style={{ 
                fontSize: '18px', 
                fontWeight: 600,
                margin: '0 0 12px 0'
              }}>
                {project.title}
              </h3>
              
              <p style={{ 
                color: theme.textMuted, 
                margin: '0 0 16px 0',
                fontSize: '15px',
                lineHeight: '1.6',
                textAlign: 'justify'
              }}>
                {project.description}
              </p>

              {/* Tech Stack */}
              <div style={{ marginBottom: '16px' }}>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px'
                }}>
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      style={{
                        background: theme.badgeBg,
                        border: `1px solid ${theme.border}`,
                        borderRadius: '4px',
                        padding: '4px 10px',
                        fontSize: '13px',
                        color: theme.textMuted,
                        fontWeight: 500
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div style={{
                display: 'flex',
                gap: '16px',
                paddingTop: '16px',
                borderTop: `1px solid ${theme.border}`
              }}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: theme.text,
                    textDecoration: 'none',
                    fontSize: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'opacity 0.2s',
                    opacity: 0.8
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '0.8'}
                >
                  <Github size={16} />
                  Source Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: theme.text,
                    textDecoration: 'none',
                    fontSize: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'opacity 0.2s',
                    opacity: 0.8
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '0.8'}
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </section>

        {/* Stack */}
        <section style={{ marginBottom: '60px' }}>
          <span style={{ 
            display: 'inline-block',
            background: theme.badgeBg,
            border: `1px solid ${theme.border}`,
            borderRadius: '4px',
            padding: '4px 10px',
            fontSize: '12px',
            color: theme.textMuted,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            marginBottom: '24px'
          }}>
            Tech Stack
          </span>
          
          <div style={{
            background: theme.cardBg,
            border: `1px solid ${theme.border}`,
            borderRadius: '8px',
            padding: '24px'
          }}>
            {Object.entries(skills).map(([category, techs], idx) => (
              <div key={category} style={{ marginBottom: idx === Object.entries(skills).length - 1 ? '0' : '20px' }}>
                <h3 style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  color: theme.textMuted,
                  margin: '0 0 10px 0',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  {category}
                </h3>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px'
                }}>
                  {techs.map((tech, i) => (
                    <span
                      key={i}
                      style={{
                        background: theme.badgeBg,
                        border: `1px solid ${theme.border}`,
                        borderRadius: '4px',
                        padding: '4px 10px',
                        fontSize: '13px',
                        color: theme.text,
                        fontWeight: 500
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section>
          <span style={{ 
            display: 'inline-block',
            background: theme.badgeBg,
            border: `1px solid ${theme.border}`,
            borderRadius: '4px',
            padding: '4px 10px',
            fontSize: '12px',
            color: theme.textMuted,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            marginBottom: '20px'
          }}>
            Contact
          </span>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            <a
              href="mailto:khakhashubham@gmail.com"
              style={{
                color: theme.link,
                textDecoration: 'underline',
                textDecorationColor: 'transparent',
                fontSize: '15px',
                transition: 'text-decoration-color 0.2s',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                width: 'fit-content'
              }}
              onMouseEnter={(e) => e.target.style.textDecorationColor = theme.linkHover}
              onMouseLeave={(e) => e.target.style.textDecorationColor = 'transparent'}
            >
              <Mail size={16} />
              khakhashubham@gmail.com
            </a>
            <a
              href="https://github.com/shubhook"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: theme.link,
                textDecoration: 'underline',
                textDecorationColor: 'transparent',
                fontSize: '15px',
                transition: 'text-decoration-color 0.2s',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                width: 'fit-content'
              }}
              onMouseEnter={(e) => e.target.style.textDecorationColor = theme.linkHover}
              onMouseLeave={(e) => e.target.style.textDecorationColor = 'transparent'}
            >
              <Github size={16} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/shubham-khakha/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: theme.link,
                textDecoration: 'underline',
                textDecorationColor: 'transparent',
                fontSize: '15px',
                transition: 'text-decoration-color 0.2s',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                width: 'fit-content'
              }}
              onMouseEnter={(e) => e.target.style.textDecorationColor = theme.linkHover}
              onMouseLeave={(e) => e.target.style.textDecorationColor = 'transparent'}
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a
              href="https://x.com/ShubhamKhakha"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: theme.link,
                textDecoration: 'underline',
                textDecorationColor: 'transparent',
                fontSize: '15px',
                transition: 'text-decoration-color 0.2s',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                width: 'fit-content'
              }}
              onMouseEnter={(e) => e.target.style.textDecorationColor = theme.linkHover}
              onMouseLeave={(e) => e.target.style.textDecorationColor = 'transparent'}
            >
              <Twitter size={16} />
              Twitter
            </a>
          </div>
        </section>
      </div>

      {/* Floating Bottom Bar */}
      <div style={{
        position: 'fixed',
        bottom: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: theme.hoverBg,
        border: `1px solid ${theme.border}`,
        borderRadius: '12px',
        padding: '12px 20px',
        display: 'flex',
        gap: '20px',
        alignItems: 'center',
        boxShadow: darkMode ? '0 4px 20px rgba(0, 0, 0, 0.5)' : '0 4px 20px rgba(0, 0, 0, 0.1)',
        zIndex: 1000
      }}>
        <a
          href="https://github.com/shubhook"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: theme.text,
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            transition: 'opacity 0.2s',
            opacity: 0.7
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
          onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}
        >
          <Github size={20} />
        </a>
        
        <a
          href="https://www.linkedin.com/in/shubham-khakha/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: theme.text,
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            transition: 'opacity 0.2s',
            opacity: 0.7
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
          onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}
        >
          <Linkedin size={20} />
        </a>
        
        <a
          href="https://x.com/ShubhamKhakha"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: theme.text,
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            transition: 'opacity 0.2s',
            opacity: 0.7
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
          onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}
        >
          <Twitter size={20} />
        </a>

        <div style={{
          width: '1px',
          height: '20px',
          background: theme.border
        }} />
        
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            background: 'transparent',
            border: 'none',
            color: theme.text,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            padding: '0',
            transition: 'opacity 0.2s',
            opacity: 0.7
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
          onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </div>
  );
};

export default Portfolio;