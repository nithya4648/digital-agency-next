export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label">What we do</div>
          <h2 className="section-title">Services Built for <span className="gradient-text">Growth</span></h2>
          <p className="section-sub">End-to-end digital solutions — from pixel-perfect design to scalable engineering that performs.</p>
        </div>
        <div className="services-grid reveal">
          <div className="svc-card">
            <div className="svc-icon">🎨</div>
            <div className="svc-title">UI/UX Design</div>
            <p className="svc-desc">Intuitive user experiences built on real research, modern design systems, and delightful micro-interactions.</p>
            <div className="svc-arrow">→</div>
          </div>
          <div className="svc-card">
            <div className="svc-icon">⚡</div>
            <div className="svc-title">Web Development</div>
            <p className="svc-desc">Fast, scalable websites built with Next.js 15, TypeScript, and performance-first architecture.</p>
            <div className="svc-arrow">→</div>
          </div>
          <div className="svc-card">
            <div className="svc-icon">✦</div>
            <div className="svc-title">Branding</div>
            <p className="svc-desc">Memorable brand identities — logos, design systems, and visual language that stand out and endure.</p>
            <div className="svc-arrow">→</div>
          </div>
          <div className="svc-card">
            <div className="svc-icon">📈</div>
            <div className="svc-title">SEO Optimization</div>
            <p className="svc-desc">Technical SEO, Core Web Vitals tuning, and content strategy that drives measurable organic growth.</p>
            <div className="svc-arrow">→</div>
          </div>
        </div>
      </div>
    </section>
  );
}
