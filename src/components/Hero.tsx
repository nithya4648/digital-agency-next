'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
  const s1Ref = useRef<HTMLDivElement>(null);
  const s2Ref = useRef<HTMLDivElement>(null);
  const s3Ref = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function count(el: HTMLElement | null, target: number, sfx: string) {
      if (!el) return;
      let n = 0;
      const step = () => {
        n = Math.min(n + Math.ceil(target / 28), target);
        el.textContent = n + sfx;
        if (n < target) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }

    const cobs = new IntersectionObserver((es) => {
      if (es[0].isIntersecting) {
        count(s1Ref.current, 50, '+');
        count(s2Ref.current, 20, '+');
        count(s3Ref.current, 5, '+');
        cobs.disconnect();
      }
    }, { threshold: 0.4 });

    if (statsRef.current) {
      cobs.observe(statsRef.current);
    }

    return () => cobs.disconnect();
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <div className="orb orb1"></div>
        <div className="orb orb2"></div>
        <div className="orb orb3"></div>
      </div>
      <div className="fc fc-left">
        <div className="fc-lbl">Lighthouse Score</div>
        <div className="fc-val">⚡ 98 / 100</div>
        <div className="fc-sub">Performance ↑ 12%</div>
      </div>
      <div className="fc fc-right">
        <div className="fc-lbl">Latest Delivery</div>
        <div className="fc-val">✦ Fintech Dashboard</div>
        <div className="fc-sub">Shipped 2 days ago</div>
      </div>
      <div className="hero-content">
        <div className="hero-badge"><span className="pulse-dot"></span> Available for new projects</div>
        <h1 className="hero-title">
          We Design Digital<br />
          <span className="gradient-text">Experiences That Convert</span>
        </h1>
        <p className="hero-sub">Helping startups and businesses build beautiful, high-performing digital products that users love and investors notice.</p>
        <div className="hero-btns">
          <button 
            className="btn-primary" 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start a Project →
          </button>
          <button 
            className="btn-secondary" 
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Portfolio
          </button>
        </div>
        <div className="stats" ref={statsRef}>
          <div className="stat"><div className="stat-num" id="s1" ref={s1Ref}>0+</div><div className="stat-label">Projects Completed</div></div>
          <div className="stat"><div className="stat-num" id="s2" ref={s2Ref}>0+</div><div className="stat-label">Happy Clients</div></div>
          <div className="stat"><div className="stat-num" id="s3" ref={s3Ref}>0+</div><div className="stat-label">Years Experience</div></div>
        </div>
      </div>
    </section>
  );
}
