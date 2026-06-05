'use client';

export default function Services() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label">What we do</div>
          <h2 className="section-title">Services Built for <span className="gradient-text">Growth</span></h2>
          <p className="section-sub">End-to-end digital solutions — from pixel-perfect design to scalable engineering that performs.</p>
        </div>
        <div className="services-grid reveal">
          {[
            { icon: '🎨', title: 'UI/UX Design', desc: 'Intuitive user experiences built on real research, modern design systems, and delightful micro-interactions.' },
            { icon: '⚡', title: 'Web Development', desc: 'Fast, scalable websites built with Next.js, TypeScript, and performance-first architecture.' },
            { icon: '✦', title: 'Branding', desc: 'Memorable brand identities — logos, design systems, and visual language that stand out and endure.' },
            { icon: '📈', title: 'SEO Optimization', desc: 'Technical SEO, Core Web Vitals tuning, and content strategy that drives measurable organic growth.' },
          ].map((svc, i) => (
            <div key={i} className="svc-card" onClick={scrollToContact} style={{ cursor: 'none' }}>
              <div className="svc-icon">{svc.icon}</div>
              <div className="svc-title">{svc.title}</div>
              <p className="svc-desc">{svc.desc}</p>
              <div className="svc-arrow">→</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
