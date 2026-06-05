'use client';

export default function Portfolio() {
  const projects = [
    { t: "Fintech Dashboard", c: "Design & Development", e: "💳", bg: "linear-gradient(135deg,#0f2027,#203a43,#2c5364)", link: "#", tag: "Featured" },
    { t: "EcoShop Platform", c: "UI/UX & Branding", e: "🌿", bg: "linear-gradient(135deg,#134e5e,#71b280)", link: "#", tag: "New" },
    { t: "Pulse Media App", c: "Mobile & Web", e: "🎙️", bg: "linear-gradient(135deg,#200122,#6f0000)", link: "#", tag: "Popular" },
    { t: "Nova SaaS Landing", c: "Development & SEO", e: "🚀", bg: "linear-gradient(135deg,#0f0c29,#302b63,#24243e)", link: "#", tag: "Recent" },
  ];

  return (
    <section id="portfolio">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label">Our work</div>
          <h2 className="section-title">Selected <span className="gradient-text">Projects</span></h2>
          <p className="section-sub">A curated look at products we've designed and shipped across industries and scales.</p>
        </div>
        <div className="port-grid reveal" id="port-grid">
          {projects.map((p, i) => (
            <div key={i} className="port-card" onClick={() => window.location.href = p.link}>
              <div className="port-thumb" style={{ background: p.bg }}>
                <span>{p.e}</span>
              </div>
              <div className="port-overlay"></div>
              <div className="port-info">
                <div className="port-title">{p.t}</div>
                <div className="port-cat">{p.c}</div>
              </div>
              <div className="port-badge">{p.tag}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
