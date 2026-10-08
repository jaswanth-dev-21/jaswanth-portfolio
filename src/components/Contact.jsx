import React, { useState } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import { saveResponse } from '../utils/storage';
import '../styles/Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = { ...form, timestamp: new Date().toISOString() };
    try {
      await saveResponse(response);
      setForm({ name: '', email: '', message: '' });
      setSent(true);
      setTimeout(() => setSent(false), 4000);
    } catch {
      alert('Could not send your message. Please try again.');
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <p className="section-label">Let's talk</p>
        <h2 className="section-title"><span>Contact</span></h2>

        <div className="contact-grid">
          <div className="contact-info">
            <p className="contact-intro">
              I'm currently open to internship opportunities and collaborations.
              Whether you have a project in mind, a role to discuss, or just want
              to say hello — my inbox is always open.
            </p>

            <div className="contact-links">
              <a href="mailto:jaswanthchenni40@gmail.com" className="contact-link">
                <FiMail size={18} />
                <span>jaswanthchenni40@gmail.com</span>
              </a>
              <a href="https://linkedin.com/in/jashu1157" target="_blank" rel="noreferrer" className="contact-link">
                <FiLinkedin size={18} />
                <span>linkedin.com/in/jashu1157</span>
              </a>
              <a href="https://github.com/jashu-767" target="_blank" rel="noreferrer" className="contact-link">
                <FiGithub size={18} />
                <span>github.com/jashu-767</span>
              </a>
              <div className="contact-link no-hover">
                <FiMapPin size={18} />
                <span>Vijayawada, Andhra Pradesh, India</span>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell me about the opportunity or project..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn-submit" disabled={sent}>
              {sent ? 'Message sent!' : (
                <><FiSend size={16} /> Send Message</>
              )}
            </button>
          </form>
        </div>
      </div>

      <footer className="site-footer">
        <p>Designed & built by <strong>Chenni Jaswanth</strong> · {new Date().getFullYear()}</p>
      </footer>
    </section>
  );
}