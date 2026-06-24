import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import '../styles/Projects.css';

const projects = [
  {
    title: 'MediScan',
    subtitle: 'AI-Powered Medicine Detection & Data Analysis Platform',
    description:
      'A production-grade full-stack web application that lets users search any medicine and receive real-time usage information, side effects, drug interactions, and safety warnings — covering both global and Indian brand medicines.',
    highlights: [
      'Integrated Groq AI (Llama 3.3 70B) + OpenFDA API for real-time medicine insights',
      '7-day MongoDB caching strategy to reduce redundant API calls',
      'Full CI/CD pipeline via GitHub Actions — backend on Render, frontend on Vercel',
      'UptimeRobot health-check monitoring every 5 minutes',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Groq AI', 'OpenFDA API', 'GitHub Actions', 'Vercel'],
    github: 'https://github.com/jashu-767',
    live: null,
    featured: true,
  },
  {
    title: 'IT Service Performance Dashboard',
    subtitle: 'Web-Based Analytics Dashboard',
    description:
      'A responsive web dashboard built to visualize service performance metrics, identify trends, and surface operational insights in a clean and user-friendly interface.',
    highlights: [
      'Data gathered from multiple sources and analyzed for trend identification',
      'Clean responsive UI built with HTML, CSS, and JavaScript',
      'Presented findings in a visual format to support data-driven decisions',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Data Visualization'],
    github: 'https://github.com/jashu-767',
    live: null,
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <p className="section-label">What I've built</p>
        <h2 className="section-title"><span>Projects</span></h2>

        <div className="projects-list">
          {projects.map((project) => (
            <div className={`project-card ${project.featured ? 'featured' : ''}`} key={project.title}>
              {project.featured && (
                <span className="project-featured-badge">Featured Project</span>
              )}
              <div className="project-header">
                <div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                </div>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                      <FiGithub size={20} />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" aria-label="Live demo">
                      <FiExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <p className="project-desc">{project.description}</p>

              <ul className="project-highlights">
                {project.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>

              <div className="project-tech">
                {project.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}