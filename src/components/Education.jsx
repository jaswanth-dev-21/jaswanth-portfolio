import React from 'react';
import '../styles/Education.css';

const education = [
  {
    degree: 'B.Tech — Information Technology',
    institution: 'Prasad V. Potluri Siddhartha Institute of Technology (PVPSIT)',
    location: 'Kanuru, Vijayawada',
    period: 'Sep 2023 – Sep 2027 (Expected)',
    grade: 'CGPA: 7.73',
    details: [
      'Affiliated to JNTUK · Approved by AICTE · Accredited by NBA & NAAC',
      'Relevant Coursework: Data Structures & Algorithms, DBMS, Web Technologies, OOP, Computer Networks, OS, Software Engineering',
      'Activities: Net Ball, Basket Ball · Event Organizer — led 2-day workshop for 300+ students',
    ],
  },
  {
    degree: 'Intermediate (Class XII) — MPC',
    institution: 'Sri Sarada Junior College',
    location: 'Vijayawada, Andhra Pradesh',
    period: 'Mar 2023',
    grade: 'Grade: A',
    details: [
      'Board of Intermediate Education, Andhra Pradesh',
      'Subjects: Mathematics, Physics, Chemistry, English, Sanskrit',
    ],
  },
  {
    degree: 'Secondary School (Class X)',
    institution: 'Samvida Vidya Peeth Poranki',
    location: 'Vijayawada, Andhra Pradesh',
    period: '2021',
    grade: '84.4%',
    details: [
      'Central Board of Secondary Education (CBSE)',
      'Subjects: Mathematics (92), Science (82), English (82), Telugu (85), Social Science (81)',
    ],
  },
];

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <p className="section-label">Academic background</p>
        <h2 className="section-title"><span>Education</span></h2>

        <div className="edu-timeline">
          {education.map((edu, index) => (
            <div className="edu-item" key={index}>
              <div className="edu-dot" />
              <div className="edu-card">
                <div className="edu-top">
                  <div>
                    <h3 className="edu-degree">{edu.degree}</h3>
                    <p className="edu-institution">{edu.institution}</p>
                    <p className="edu-location">{edu.location}</p>
                  </div>
                  <div className="edu-meta">
                    <span className="edu-period">{edu.period}</span>
                    <span className="edu-grade">{edu.grade}</span>
                  </div>
                </div>
                <ul className="edu-details">
                  {edu.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}