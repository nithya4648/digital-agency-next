'use client';

export default function Portfolio() {
  const projects = [
    { t: "Project Alpha", c: "Design", e: "🖌️", bg: "#1a202c", link: "#", tag: "Featured" },
    { t: "Project Beta", c: "Development", e: "💻", bg: "#2d3748", link: "#", tag: "New" },
    { t: "Project Gamma", c: "Branding", e: "🎨", bg: "#4a5568", link: "#", tag: "Popular" }
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
            <div 
              key={i} 
              className="port-card" 
              onClick={() => window.location.href = p.link}
            >
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
