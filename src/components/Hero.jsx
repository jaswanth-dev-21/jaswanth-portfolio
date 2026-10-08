import React from 'react';
import { Link } from 'react-scroll';
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import '../styles/Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-availability">
        <span className="hero-dot" />
        AVAILABLE FOR INTERNSHIPS
      </div>

      <div className="hero-content">
        <div className="hero-left">
          <h1 className="hero-heading">
            Jaswanth <em>builds</em>{' '}
            <span className="hero-highlight">web apps</span>
            <br />
            that work.
          </h1>

          <p className="hero-desc">
            From clean React interfaces and REST API integrations to full CI/CD
            pipelines and AI-powered backends — I enjoy turning ideas into
            digital products that are fast, functional, and built to last.
          </p>

          <div className="hero-actions">
            <Link to="projects" smooth duration={500} offset={-70} className="btn-primary">
              View Projects <FiArrowUpRight size={16} />
            </Link>
            <Link to="about" smooth duration={500} offset={-70} className="btn-secondary">
              About Me
            </Link>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/jashu-767" target="_blank" rel="noreferrer">
              <FiGithub size={18} />
              GitHub
            </a>
            <a href="https://linkedin.com/in/jashu1157" target="_blank" rel="noreferrer">
              <FiLinkedin size={18} />
              LinkedIn
            </a>
            <a href="mailto:jaswanthchenni40@gmail.com">
              <FiMail size={18} />
              Email
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-photo-wrap">
            <img src="/jaswanth-portfolio/jaswanth.png" alt="Chenni Jaswanth" />
          </div>
          <div className="hero-badge hero-badge-1">React.js</div>
          <div className="hero-badge hero-badge-2">Node.js</div>
          <div className="hero-badge hero-badge-3">Full-Stack</div>
        </div>
      </div>
    </section>
  );
}