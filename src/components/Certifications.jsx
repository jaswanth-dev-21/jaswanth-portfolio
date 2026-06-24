import React from 'react';
import '../styles/Certifications.css';

const certs = [
  {
    title: 'Front End Web Developer Certification',
    issuer: 'Infosys Springboard',
    date: 'Oct 2025',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
  },
  {
    title: 'MERN Full Stack Development Virtual Internship',
    issuer: 'EduSkills Foundation',
    date: 'Mar 2026',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
  },
  {
    title: 'Programming in Java — Elite',
    issuer: 'NPTEL, IIT Madras',
    date: 'Jan – Sep 2025',
    tags: ['Java', 'OOP', 'Elite (66%)'],
  },
  {
    title: 'Fundamentals of Artificial Intelligence',
    issuer: 'NPTEL, IIT',
    date: 'Jul – Oct 2025',
    tags: ['AI', 'ML', 'Silver (79%)'],
  },
  {
    title: 'ACM India Winter School — Algorithmic Game Theory',
    issuer: 'ACM India · IIT Ropar',
    date: 'Dec 2025',
    tags: ['Game Theory', 'Algorithms', 'IIT Ropar'],
  },
  {
    title: 'Introduction to Programming Using Python',
    issuer: 'Cisco',
    date: 'Jul 2025',
    tags: ['Python'],
  },
  {
    title: 'Deloitte Australia — Cyber Job Simulation',
    issuer: 'Forage',
    date: 'Jun 2025',
    tags: ['Web Security', 'Incident Response'],
  },
  {
    title: 'Deloitte Australia — Data Analytics Job Simulation',
    issuer: 'Forage',
    date: 'Jan 2026',
    tags: ['Data Analytics', 'Business Intelligence'],
  },
  {
    title: 'Goldman Sachs — Operations Job Simulation',
    issuer: 'Forage',
    date: 'Jan 2026',
    tags: ['Operations', 'Problem-Solving'],
  },
  {
    title: 'Google Cloud Compute Skill Badge',
    issuer: 'Google',
    date: 'Oct 2025',
    tags: ['Cloud', 'GCP'],
  },
];

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="container">
        <p className="section-label">Credentials</p>
        <h2 className="section-title"><span>Certifications</span></h2>

        <div className="certs-grid">
          {certs.map((cert) => (
            <div className="cert-card" key={cert.title}>
              <div className="cert-header">
                <h3 className="cert-title">{cert.title}</h3>
                <span className="cert-date">{cert.date}</span>
              </div>
              <p className="cert-issuer">{cert.issuer}</p>
              <div className="cert-tags">
                {cert.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}