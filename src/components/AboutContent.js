import React from 'react';
import { Database, Layout, Shield, Zap } from 'lucide-react';
import { SKILLS } from '../constants/constant';
import './AboutStyle.css';

export default function About() {
  const highlights = [
    {
      icon: <Layout className="icon blue" />,
      title: "MERN Excellence",
      desc: "Deep expertise in building robust applications with MongoDB, Express, React, and Node.js."
    },
    {
      icon: <Zap className="icon yellow" />,
      title: "Real-time Magic",
      desc: "Skilled in WebRTC and Socket.io for low-latency live interactions."
    },
    {
      icon: <Shield className="icon green" />,
      title: "Secure Backends",
      desc: "Proficient in implementing bcrypt and industry-standard security practices."
    },
    {
      icon: <Database className="icon indigo" />,
      title: "Polyglot Coding",
      desc: "Strong foundational knowledge in Java and Python for varied architectural needs."
    }
  ];

  const categories = ['Frontend', 'Backend', 'Language', 'Tool'];

  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* About text + highlights */}
        <div className="about-grid">
          <div className="about-text">
            <h2 className="about-heading">
              Turning complex problems into <span className="highlight">elegant solutions.</span>
            </h2>
            <div className="about-paragraphs">
              <p>
                My journey in tech began with a curiosity for how things work under the hood. Today, I'm a developer who bridges the gap between client-side aesthetics and server-side scalability.
              </p>
              <p>
                Whether it's orchestrating video streams with <span className="tech">WebRTC</span>, managing real-time state with <span className="tech">Socket.io</span>, or ensuring data integrity with <span className="tech">bcrypt</span>, I focus on performance and security.
              </p>
              <p>
                With proficiency in <span className="tech">Java</span> and <span className="tech">Python</span>, I bring a versatile approach to software engineering, ready to tackle any technical challenge in the modern web ecosystem.
              </p>
            </div>
          </div>

          <div className="highlight-grid">
            {highlights.map((item, idx) => (
              <div key={idx} className="highlight-card">
                <div className="highlight-icon">{item.icon}</div>
                <h3 className="highlight-title">{item.title}</h3>
                <p className="highlight-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills section inside About */}
        <div className="skills-section">
          <h2 className="skills-heading">Toolkit.</h2>
          <p className="skills-subtitle">The technologies I use to bring ideas to life.</p>

          <div className="skills-grid">
            {categories.map((cat) => (
              <div key={cat} className="skills-category">
                <h3 className="skills-category-title">{cat}</h3>
                <div className="skills-list">
                  {SKILLS.filter(s => s.category === cat).map((skill) => (
                    <div key={skill.name} className="skill-item">
                      {skill.name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
