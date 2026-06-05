'use client';

import { useState } from 'react';

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);
const TwitterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);
const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);
const DribbbleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/>
    <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"/>
  </svg>
);

export default function Footer() {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [msgColor, setMsgColor] = useState('');
  const [loading, setLoading] = useState(false);

  const handleNewsletter = async () => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMsg('✕ Please enter a valid email.');
      setMsgColor('#F87171');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setMsg("✓ You're subscribed! Welcome aboard.");
        setMsgColor('var(--primary)');
        setEmail('');
      } else {
        setMsg(data.error === 'Already subscribed' ? '✓ Already subscribed!' : '✕ Something went wrong.');
        setMsgColor(data.error === 'Already subscribed' ? 'var(--secondary)' : '#F87171');
      }
    } catch {
      setMsg('✕ Network error. Try again.');
      setMsgColor('#F87171');
    } finally {
      setLoading(false);
    }
  };

  const socials = [
    { href: 'https://linkedin.com/company/scornith', icon: <LinkedInIcon />, label: 'LinkedIn' },
    { href: 'https://twitter.com/scornith', icon: <TwitterIcon />, label: 'Twitter' },
    { href: 'https://github.com/scornith', icon: <GitHubIcon />, label: 'GitHub' },
    { href: 'https://dribbble.com/scornith', icon: <DribbbleIcon />, label: 'Dribbble' },
  ];

  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <span className="logo">Scornith</span>
          <p>A premium digital agency crafting exceptional web experiences for startups and growing businesses worldwide.</p>
          <div className="footer-social">
            {socials.map((s) => (
              <a key={s.label} href={s.href} className="social-link" target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className="footer-col-title">Services</div>
          <ul className="footer-links">
            <li><a href="#services">UI/UX Design</a></li>
            <li><a href="#services">Web Development</a></li>
            <li><a href="#services">Branding</a></li>
            <li><a href="#services">SEO Optimization</a></li>
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Company</div>
          <ul className="footer-links">
            <li><a href="#home">About Us</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-newsletter">
          <div className="footer-col-title">Stay Updated</div>
          <p>Design tips, case studies, and insights — no spam, unsubscribe anytime.</p>
          <div className="newsletter-form">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleNewsletter()}
            />
            <button type="button" onClick={handleNewsletter} disabled={loading}>
              {loading ? 'Saving…' : 'Subscribe →'}
            </button>
          </div>
          <p style={{ fontFamily: 'var(--mono)', fontSize: '.65rem', color: msgColor, marginTop: '.6rem', letterSpacing: '.04em' }}>
            {msg}
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copy">© 2025 Scornith Digital Agency. All rights reserved.</div>
        <div className="footer-legal">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/cookies">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}
