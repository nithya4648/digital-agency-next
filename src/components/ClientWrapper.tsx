'use client';

import { useEffect, useState } from 'react';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [pct, setPct] = useState(0);
  const [loadingDone, setLoadingDone] = useState(false);

  useEffect(() => {
    // Preloader
    let currentPct = 0;
    const iv = setInterval(() => {
      currentPct += Math.floor(Math.random() * 12) + 4;
      if (currentPct >= 100) {
        currentPct = 100;
        clearInterval(iv);
      }
      setPct(currentPct);
    }, 120);

    const loadTimeout = setTimeout(() => {
      setLoadingDone(true);
    }, 1900);

    return () => {
      clearInterval(iv);
      clearTimeout(loadTimeout);
    };
  }, []);

  useEffect(() => {
    // Cursor
    const cur = document.getElementById('cursor');
    const ring = document.getElementById('cursor-ring');

    const moveCursor = (e: MouseEvent) => {
      if (cur && ring) {
        cur.style.left = e.clientX + 'px';
        cur.style.top = e.clientY + 'px';
        setTimeout(() => {
          ring.style.left = e.clientX + 'px';
          ring.style.top = e.clientY + 'px';
        }, 90);
      }
    };

    document.addEventListener('mousemove', moveCursor);

    const interactables = document.querySelectorAll('button,a,.port-card,.svc-card');
    
    const onEnter = () => {
      if (cur && ring) {
        cur.style.width = '18px';
        cur.style.height = '18px';
        cur.style.background = 'var(--secondary)';
        ring.style.width = '50px';
        ring.style.height = '50px';
      }
    };
    
    const onLeave = () => {
      if (cur && ring) {
        cur.style.width = '10px';
        cur.style.height = '10px';
        cur.style.background = 'var(--primary)';
        ring.style.width = '34px';
        ring.style.height = '34px';
      }
    };

    interactables.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    // Scroll
    const onScroll = () => {
      const p = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      const prog = document.getElementById('progress');
      const btt = document.getElementById('btt');
      
      if (prog) prog.style.width = p + '%';
      if (btt) btt.classList.toggle('on', window.scrollY > 450);
    };

    window.addEventListener('scroll', onScroll);

    // Reveal
    const obs = new IntersectionObserver((es) => {
      es.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });

    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => obs.observe(el));

    // Cleanup btt
    const btt = document.getElementById('btt');
    const bttClick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    if (btt) btt.addEventListener('click', bttClick);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('scroll', onScroll);
      interactables.forEach(el => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
      reveals.forEach(el => obs.unobserve(el));
      if (btt) btt.removeEventListener('click', bttClick);
    };
  }, [loadingDone]);

  return (
    <>
      {/* Preloader */}
      <div id="loader" className={loadingDone ? 'gone' : ''}>
        <div className="loader-inner">
          <div className="loader-tagline">Digital Agency</div>
          <div className="loader-words">
            <div className="loader-word">Scornith</div>
            <div className="loader-word">Studio.</div>
          </div>
          <div className="loader-progress-wrap">
            <div className="loader-line"></div>
            <div className="loader-pct" id="pct">{pct}%</div>
          </div>
        </div>
      </div>
      
      {children}
    </>
  );
}
