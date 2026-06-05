'use client';

import { useState } from 'react';

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate
    const newErrors = {
      name: formData.name.trim().length === 0,
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
      message: formData.message.trim().length === 0
    };
    
    setErrors(newErrors);
    
    if (newErrors.name || newErrors.email || newErrors.message) {
      return;
    }
    
    setLoading(true);
    setErrorMsg('');
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (res.ok) {
        setSuccess(true);
      } else {
        const data = await res.json();
        setErrorMsg(data.error || 'Failed — try again');
      }
    } catch (err) {
      setErrorMsg('Network error — retry');
    } finally {
      setLoading(false);
    }
  };

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
              <a href="https://twitter.com/scornith" className="social-link" target="_blank" rel="noopener noreferrer">𝕏</a>
              <a href="https://linkedin.com/company/scornith" className="social-link" target="_blank" rel="noopener noreferrer" style={{ fontSize: '.72rem', fontWeight: 600 }}>in</a>
              <a href="https://github.com/scornith" className="social-link" target="_blank" rel="noopener noreferrer" style={{ fontSize: '.68rem', fontWeight: 600 }}>GH</a>
              <a href="https://dribbble.com/scornith" className="social-link" target="_blank" rel="noopener noreferrer" style={{ fontSize: '.68rem', fontWeight: 600 }}>Dr</a>
            </div>
          </div>
          <div className="form-card reveal">
            {!success ? (
              <form id="cform" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input 
                      type="text" 
                      id="f-name" 
                      placeholder="Aryan Sharma" 
                      autoComplete="name"
                      className={errors.name ? 'err' : ''}
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                    <div className="err-msg" style={{ display: errors.name ? 'block' : 'none' }}>Name is required</div>
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input 
                      type="email" 
                      id="f-email" 
                      placeholder="aryan@company.com" 
                      autoComplete="email"
                      className={errors.email ? 'err' : ''}
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                    <div className="err-msg" style={{ display: errors.email ? 'block' : 'none' }}>Valid email required</div>
                  </div>
                </div>
                <div className="form-group">
                  <label>Company / Project</label>
                  <input 
                    type="text" 
                    id="f-company" 
                    placeholder="Acme Inc. (optional)"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label>Message *</label>
                  <textarea 
                    id="f-msg" 
                    placeholder="Tell us about your project — scope, goals, and timeline..."
                    className={errors.message ? 'err' : ''}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
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
                <p>Thanks for reaching out to Scornith. We'll get back to you within 24 hours at the email you provided.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
