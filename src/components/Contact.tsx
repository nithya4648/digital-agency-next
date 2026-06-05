'use client';

import { useState } from 'react';

// Real SVG social icons
const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);
const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);
const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);
const DribbbleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
    <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" fill="none" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [errors, setErrors] = useState({ name: false, email: false, message: false });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = {
      name: formData.name.trim().length === 0,
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
      message: formData.message.trim().length === 0,
    };
    setErrors(newErrors);
    if (newErrors.name || newErrors.email || newErrors.message) return;

    setLoading(true);
    setErrorMsg('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSuccess(true);
        // Reset back to form after 5 seconds
        setTimeout(() => {
          setSuccess(false);
          setFormData({ name: '', email: '', company: '', message: '' });
          setErrors({ name: false, email: false, message: false });
        }, 5000);
      } else {
        const data = await res.json();
        setErrorMsg(data.error || 'Failed — try again');
      }
    } catch {
      setErrorMsg('Network error — retry');
    } finally {
      setLoading(false);
    }
  };

  const socials = [
    { href: 'https://linkedin.com/company/scornith', icon: <LinkedInIcon />, label: 'LinkedIn' },
    { href: 'https://twitter.com/scornith', icon: <TwitterIcon />, label: 'Twitter / X' },
    { href: 'https://github.com/scornith', icon: <GitHubIcon />, label: 'GitHub' },
    { href: 'https://dribbble.com/scornith', icon: <DribbbleIcon />, label: 'Dribbble' },
  ];

  return (
    <section id="contact">
      <div className="container">
        <div className="contact-wrap">
          <div className="reveal">
            <div className="section-label">Get in touch</div>
            <h2 className="section-title">Let's Build<br /><span className="gradient-text">Something Great</span></h2>
            <p style={{ color: 'var(--muted)', lineHeight: 1.9, marginBottom: '2rem', fontSize: '.95rem', fontWeight: 300 }}>
              Have a project in mind? Drop us a message — we respond within 24 hours.
            </p>
            <div className="contact-detail"><div className="cd-icon">📍</div> Chennai, Tamil Nadu, India</div>
            <div className="contact-detail"><div className="cd-icon">✉️</div> hello@scornith.com</div>
            <div className="contact-detail"><div className="cd-icon">📞</div> +91 98765 43210</div>
            <div style={{ display: 'flex', gap: '.75rem', marginTop: '2rem' }}>
              {socials.map((s) => (
                <a key={s.label} href={s.href} className="social-link" target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="form-card reveal">
            {!success ? (
              <form id="cform" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input type="text" id="f-name" placeholder="Aryan Sharma" autoComplete="name"
                      className={errors.name ? 'err' : ''}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                    <div className="err-msg" style={{ display: errors.name ? 'block' : 'none' }}>Name is required</div>
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input type="email" id="f-email" placeholder="aryan@company.com" autoComplete="email"
                      className={errors.email ? 'err' : ''}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                    <div className="err-msg" style={{ display: errors.email ? 'block' : 'none' }}>Valid email required</div>
                  </div>
                </div>
                <div className="form-group">
                  <label>Company / Project</label>
                  <input type="text" id="f-company" placeholder="Acme Inc. (optional)"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })} />
                </div>
                <div className="form-group">
                  <label>Message *</label>
                  <textarea id="f-msg" placeholder="Tell us about your project..."
                    className={errors.message ? 'err' : ''}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                  <div className="err-msg" style={{ display: errors.message ? 'block' : 'none' }}>Message is required</div>
                </div>
                {errorMsg && <div style={{ color: '#F87171', fontSize: '0.8rem', marginBottom: '1rem' }}>{errorMsg}</div>}
                <p className="form-note">By submitting you agree to our <a href="/privacy">Privacy Policy</a>. We never spam.</p>
                <button type="submit" className={`btn-submit ${loading ? 'loading' : ''}`} disabled={loading}>
                  {loading ? 'Sending...' : "Let's Talk →"}
                </button>
              </form>
            ) : (
              <div className="success-state" style={{ display: 'block' }}>
                <div className="success-icon">✅</div>
                <h3>Message Received!</h3>
                <p>Thanks for reaching out to Scornith. We'll get back to you within 24 hours.</p>
                <p style={{ fontSize: '0.78rem', color: 'var(--muted)', marginTop: '1rem', fontFamily: 'var(--mono)' }}>
                  Form resets in 5 seconds…
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
