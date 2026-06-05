'use client';

import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [msgColor, setMsgColor] = useState('');

  const handleNewsletter = () => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMsg('✕ Please enter a valid email.');
      setMsgColor('#F87171');
      return;
    }
    setMsg("✓ You're subscribed! Welcome aboard.");
    setMsgColor('var(--primary)');
    setEmail('');
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'newsletter_signup', { event_category: 'engagement' });
    }
  };

  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <span className="logo">Scornith</span>
          <p>A premium digital agency crafting exceptional web experiences for startups and growing businesses worldwide.</p>
          <div className="footer-social">
            <a href="https://twitter.com/scornith" className="social-link" target="_blank" rel="noopener noreferrer">𝕏</a>
            <a href="https://linkedin.com/company/scornith" className="social-link" target="_blank" rel="noopener noreferrer" style={{ fontSize: '.72rem', fontWeight: 600 }}>in</a>
            <a href="https://github.com/scornith" className="social-link" target="_blank" rel="noopener noreferrer" style={{ fontSize: '.68rem', fontWeight: 600 }}>GH</a>
            <a href="https://dribbble.com/scornith" className="social-link" target="_blank" rel="noopener noreferrer" style={{ fontSize: '.68rem', fontWeight: 600 }}>Dr</a>
          </div>
        </div>
        <div>
          <div className="footer-col-title">Services</div>
          <ul className="footer-links">
            <li><a href="/services/ui-ux-design">UI/UX Design</a></li>
            <li><a href="/services/web-development">Web Development</a></li>
            <li><a href="/services/branding">Branding</a></li>
            <li><a href="/services/seo">SEO Optimization</a></li>
            <li><a href="/services/mobile">Mobile Apps</a></li>
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Company</div>
          <ul className="footer-links">
            <li><a href="/about">About Us</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/contact">Contact</a></li>
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
            />
            <button type="button" onClick={handleNewsletter}>Subscribe →</button>
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
