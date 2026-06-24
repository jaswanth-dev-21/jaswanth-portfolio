import React from 'react';
import '../styles/Skills.css';

const skillGroups = [
  {
    category: 'Frontend',
    skills: ['React.js', 'HTML5', 'CSS3', 'JavaScript (ES6+)', 'Tailwind CSS', 'Bootstrap', 'Responsive Design'],
  },
  {
    category: 'Backend & APIs',
    skills: ['Node.js', 'Express.js', 'Java', 'REST APIs', 'Spring Framework'],
  },
  {
    category: 'Databases & DevOps',
    skills: ['MongoDB', 'MySQL', 'GitHub Actions', 'CI/CD', 'Render', 'Vercel', 'Git'],
  },
  {
    category: 'AI & Tools',
    skills: ['Groq AI (Llama 3.3 70B)', 'TensorFlow', 'OpenFDA API', 'Python', 'MS Excel'],
  },
  {
    category: 'Languages',
    skills: ['Java', 'Python', 'JavaScript', 'C#', 'HTML', 'CSS'],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <p className="section-label">What I work with</p>
        <h2 className="section-title"><span>Skills</span></h2>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.category}>
              <h3 className="skill-category">{group.category}</h3>
              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}