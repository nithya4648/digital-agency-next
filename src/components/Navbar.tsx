'use client';

import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('scornith-theme') === 'light';
    setIsLight(theme);
    if (theme) {
      document.body.classList.add('light');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isLight;
    setIsLight(newTheme);
    localStorage.setItem('scornith-theme', newTheme ? 'light' : 'dark');
    document.body.classList.toggle('light', newTheme);
  };

  return (
    <nav>
      <div className="logo">Scornith</div>
      <ul className="nav-links">
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Work</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="nav-right">
        <button id="theme-toggle" onClick={toggleTheme}>
          {isLight ? '🌙 Dark' : '☀️ Light'}
        </button>
        <button 
          className="nav-cta" 
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Start a Project
        </button>
      </div>
    </nav>
  );
}
