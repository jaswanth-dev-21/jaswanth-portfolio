import React from 'react';
import '../styles/About.css';

const stats = [
  { value: '7.73', label: 'CGPA' },
  { value: '5+', label: 'Certifications' },
  { value: '2', label: 'Projects Built' },
  { value: '3rd', label: 'Year B.Tech IT' },
];

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <p className="section-label">Who I am</p>
        <h2 className="section-title"><span>About Me</span></h2>

        <div className="about-grid">
          <div className="about-text">
            <p>
              Hi, I'm <strong>Chenni Jaswanth</strong> — a B.Tech Information Technology
              student at <strong>Prasad V. Potluri Siddhartha Institute of Technology (PVPSIT)</strong>,
              Vijayawada, currently in my 3rd year with a CGPA of 7.73.
            </p>
            <p>
              I'm passionate about building full-stack web applications that solve real problems.
              My interest lies at the intersection of clean UI design and robust backend architecture —
              whether it's integrating AI APIs, setting up CI/CD pipelines, or crafting
              responsive interfaces with React.
            </p>
            <p>
              Outside academics, I've competed in coding challenges globally (Smart Coder Bronze —
              ranked 17,331 / 51,463 worldwide), participated in the ACM India Winter School on
              Algorithmic Game Theory at IIT Ropar, and led a 2-day entrepreneurial workshop
              managing 300+ students at PVPSIT.
            </p>
            <p>
              I'm actively looking for internship opportunities where I can contribute meaningfully
              and continue growing as a developer.
            </p>
          </div>

          <div className="about-stats">
            {stats.map((s) => (
              <div className="stat-card" key={s.label}>
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}