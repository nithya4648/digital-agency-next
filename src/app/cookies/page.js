export const metadata = {
  title: "Cookie Policy — Scornith Digital Agency",
  description: "How Scornith uses cookies and similar tracking technologies on our website.",
};

export default function CookiePolicy() {
  return (
    <div className="policy-page">
      <div className="policy-container">
        <div className="policy-header">
          <a href="/" className="policy-back">← Back to Scornith</a>
          <div className="policy-badge">Legal</div>
          <h1>Cookie Policy</h1>
          <p className="policy-meta">Last updated: <strong>June 1, 2025</strong> · Effective date: <strong>June 1, 2025</strong></p>
          <p className="policy-intro">
            This Cookie Policy explains how Scornith Digital Agency uses cookies and similar technologies when you visit <strong>scornith.com</strong>. It explains what these technologies are, why we use them, and your rights to control our use of them.
          </p>
        </div>

        <div className="policy-toc">
          <div className="toc-title">Table of Contents</div>
          {["What Are Cookies?","Why We Use Cookies","Types of Cookies We Use","Cookie Details","Third-Party Cookies","Your Cookie Choices","How to Manage Cookies","Updates to This Policy","Contact Us"].map((item, i) => (
            <a key={i} href={`#ck-${i+1}`} className="toc-item">
              <span className="toc-num">{String(i+1).padStart(2,"0")}</span>{item}
            </a>
          ))}
        </div>

        <div className="policy-body">
          <section id="ck-1">
            <h2><span className="section-num">01</span> What Are Cookies?</h2>
            <p>Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used by website owners to make their websites work more efficiently and to provide reporting information.</p>
            <p>Cookies set by the website owner (in this case, Scornith) are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies enable features or functionality provided by third parties (e.g., analytics, advertising).</p>
          </section>

          <section id="ck-2">
            <h2><span className="section-num">02</span> Why We Use Cookies</h2>
            <p>We use first-party and third-party cookies for several reasons:</p>
            <ul>
              <li>To make our website function correctly and securely</li>
              <li>To remember your preferences (such as dark/light mode)</li>
              <li>To understand how visitors interact with our website</li>
              <li>To improve our website's performance and user experience</li>
              <li>To measure the effectiveness of our content</li>
            </ul>
          </section>

          <section id="ck-3">
            <h2><span className="section-num">03</span> Types of Cookies We Use</h2>

            <div className="cookie-type-card">
              <div className="cookie-type-header">
                <span className="cookie-badge essential">Essential</span>
                <span className="cookie-status always">Always Active</span>
              </div>
              <p>These cookies are strictly necessary for the website to function. They cannot be switched off. They are usually only set in response to actions made by you, such as setting your privacy preferences or logging in.</p>
            </div>

            <div className="cookie-type-card">
              <div className="cookie-type-header">
                <span className="cookie-badge preference">Preference</span>
                <span className="cookie-status optional">Optional</span>
              </div>
              <p>These cookies enable the website to remember choices you make (such as your preferred theme — dark or light mode) and provide enhanced, more personal features.</p>
            </div>

            <div className="cookie-type-card">
              <div className="cookie-type-header">
                <span className="cookie-badge analytics">Analytics</span>
                <span className="cookie-status optional">Optional</span>
              </div>
              <p>These cookies allow us to count visits and traffic sources, so we can measure and improve the performance of our site. They help us understand which pages are the most and least popular.</p>
            </div>
          </section>

          <section id="ck-4">
            <h2><span className="section-num">04</span> Cookie Details</h2>
            <div className="cookie-table-wrap">
              <table className="cookie-table">
                <thead>
                  <tr>
                    <th>Cookie Name</th>
                    <th>Type</th>
                    <th>Purpose</th>
                    <th>Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>scornith-theme</code></td>
                    <td>Preference</td>
                    <td>Stores your dark/light mode preference</td>
                    <td>Persistent (localStorage)</td>
                  </tr>
                  <tr>
                    <td><code>_ga</code></td>
                    <td>Analytics</td>
                    <td>Google Analytics — distinguishes users</td>
                    <td>2 years</td>
                  </tr>
                  <tr>
                    <td><code>_ga_*</code></td>
                    <td>Analytics</td>
                    <td>Google Analytics — persists session state</td>
                    <td>2 years</td>
                  </tr>
                  <tr>
                    <td><code>_gid</code></td>
                    <td>Analytics</td>
                    <td>Google Analytics — distinguishes users</td>
                    <td>24 hours</td>
                  </tr>
                  <tr>
                    <td><code>_gat</code></td>
                    <td>Analytics</td>
                    <td>Google Analytics — throttles request rate</td>
                    <td>1 minute</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="policy-callout">
              <strong>📌 Note:</strong> <code>scornith-theme</code> is stored in <code>localStorage</code>, not as a traditional cookie, but serves a similar purpose of persisting your preferences across sessions.
            </div>
          </section>

          <section id="ck-5">
            <h2><span className="section-num">05</span> Third-Party Cookies</h2>
            <p>Some cookies are placed by third-party services that appear on our pages. We use the following third-party services that may set cookies:</p>
            <ul>
              <li><strong>Google Analytics</strong> — website traffic analysis. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy ↗</a></li>
              <li><strong>Vercel</strong> — hosting and deployment infrastructure. <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Vercel Privacy Policy ↗</a></li>
              <li><strong>MongoDB Atlas</strong> — database services (server-side only, no browser cookies). <a href="https://www.mongodb.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">MongoDB Privacy Policy ↗</a></li>
            </ul>
          </section>

          <section id="ck-6">
            <h2><span className="section-num">06</span> Your Cookie Choices</h2>
            <p>You have the right to decide whether to accept or reject optional cookies. You can exercise your cookie preferences by:</p>
            <ul>
              <li>Configuring your browser settings to refuse cookies</li>
              <li>Using the Google Analytics Opt-out Browser Add-on to prevent your data from being used by Google Analytics</li>
              <li>Clearing your browser's cookies and local storage at any time</li>
            </ul>
            <p>Please note that if you choose to reject cookies, you may still use our website, but your access to some functionality may be limited (e.g., your theme preference won't be remembered).</p>
          </section>

          <section id="ck-7">
            <h2><span className="section-num">07</span> How to Manage Cookies</h2>
            <p>You can control and manage cookies in your browser settings. Here's how for popular browsers:</p>
            <ul>
              <li><strong>Chrome</strong> — Settings → Privacy and Security → Cookies and other site data</li>
              <li><strong>Firefox</strong> — Settings → Privacy & Security → Cookies and Site Data</li>
              <li><strong>Safari</strong> — Preferences → Privacy → Manage Website Data</li>
              <li><strong>Edge</strong> — Settings → Cookies and Site Permissions → Cookies</li>
            </ul>
            <p>To clear localStorage in your browser: Open DevTools (F12) → Application tab → Local Storage → Right-click and clear.</p>
          </section>

          <section id="ck-8">
            <h2><span className="section-num">08</span> Updates to This Policy</h2>
            <p>We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our data practices. We will notify you of significant changes by updating the date at the top of this page. We encourage you to review this policy periodically to stay informed about how we use cookies.</p>
          </section>

          <section id="ck-9">
            <h2><span className="section-num">09</span> Contact Us</h2>
            <p>If you have questions about our use of cookies or other technologies, please contact us:</p>
            <div className="policy-contact-card">
              <div><strong>Scornith Digital Agency</strong></div>
              <div>Chennai, Tamil Nadu, India</div>
              <div><a href="mailto:hello@scornith.com">hello@scornith.com</a></div>
              <div>+91 98765 43210</div>
            </div>
          </section>
        </div>

        <div className="policy-footer">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/">← Home</a>
        </div>
      </div>

      <style>{`
        .policy-page{background:var(--bg,#000);color:var(--text,#f0f7f4);min-height:100vh;font-family:var(--body,'Inter',sans-serif);padding:5rem 1.5rem 4rem}
        .policy-container{max-width:860px;margin:0 auto}
        .policy-header{margin-bottom:3rem;padding-bottom:3rem;border-bottom:1px solid rgba(16,185,129,0.12)}
        .policy-back{display:inline-flex;align-items:center;gap:.4rem;font-family:var(--mono,monospace);font-size:.72rem;letter-spacing:.08em;text-transform:uppercase;color:var(--primary,#10b981);text-decoration:none;margin-bottom:1.5rem;transition:opacity .2s}
        .policy-back:hover{opacity:.7}
        .policy-badge{display:inline-block;background:rgba(16,185,129,.1);border:1px solid rgba(16,185,129,.25);color:#34d399;font-family:var(--mono,monospace);font-size:.68rem;letter-spacing:.14em;text-transform:uppercase;padding:.3rem .9rem;border-radius:9999px;margin-bottom:1rem}
        .policy-header h1{font-family:var(--serif,'Montserrat',serif);font-size:clamp(2rem,5vw,3.2rem);font-weight:800;line-height:1.1;background:linear-gradient(135deg,#10b981,#d4a843);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:.8rem}
        .policy-meta{font-family:var(--mono,monospace);font-size:.75rem;color:var(--muted,#7a9e8e);letter-spacing:.04em;margin-bottom:1.5rem}
        .policy-meta strong{color:var(--text,#f0f7f4)}
        .policy-intro{font-size:1.05rem;line-height:1.85;color:var(--muted,#7a9e8e);font-weight:300}
        .policy-toc{background:rgba(16,185,129,.04);border:1px solid rgba(16,185,129,.1);border-radius:18px;padding:1.8rem 2rem;margin-bottom:3rem}
        .toc-title{font-family:var(--mono,monospace);font-size:.68rem;letter-spacing:.14em;text-transform:uppercase;color:#d4a843;margin-bottom:1.2rem}
        .toc-item{display:flex;align-items:center;gap:.9rem;padding:.45rem 0;color:var(--muted,#7a9e8e);text-decoration:none;font-size:.9rem;font-weight:300;border-bottom:1px solid rgba(16,185,129,.06);transition:color .2s}
        .toc-item:last-child{border-bottom:none}
        .toc-item:hover{color:var(--text,#f0f7f4)}
        .toc-num{font-family:var(--mono,monospace);font-size:.65rem;color:var(--primary,#10b981);flex-shrink:0}
        .policy-body section{margin-bottom:3rem;padding-bottom:3rem;border-bottom:1px solid rgba(16,185,129,.08)}
        .policy-body section:last-child{border-bottom:none}
        .policy-body h2{font-family:var(--serif,'Montserrat',serif);font-size:1.4rem;font-weight:700;display:flex;align-items:center;gap:.8rem;margin-bottom:1.2rem;color:var(--text,#f0f7f4)}
        .section-num{font-family:var(--mono,monospace);font-size:.7rem;color:var(--primary,#10b981);background:rgba(16,185,129,.1);border:1px solid rgba(16,185,129,.2);padding:.2rem .6rem;border-radius:6px;font-weight:400;flex-shrink:0}
        .policy-body p{color:var(--muted,#7a9e8e);font-size:.96rem;line-height:1.85;font-weight:300;margin-bottom:1rem}
        .policy-body ul{margin:1rem 0;padding-left:0;list-style:none}
        .policy-body ul li{color:var(--muted,#7a9e8e);font-size:.96rem;line-height:1.75;font-weight:300;padding:.35rem 0 .35rem 1.4rem;position:relative}
        .policy-body ul li::before{content:"→";position:absolute;left:0;color:var(--primary,#10b981);font-size:.75rem}
        .policy-body a{color:var(--primary,#10b981);text-decoration:none;border-bottom:1px solid rgba(16,185,129,.3);transition:border-color .2s}
        .policy-body a:hover{border-color:var(--primary,#10b981)}
        .policy-callout{background:rgba(16,185,129,.06);border-left:3px solid var(--primary,#10b981);border-radius:0 10px 10px 0;padding:1rem 1.2rem;margin-top:1.2rem;font-size:.9rem;color:var(--muted,#7a9e8e);font-weight:300}
        .policy-callout code{background:rgba(16,185,129,.1);padding:.1rem .4rem;border-radius:4px;font-family:var(--mono,monospace);font-size:.82rem;color:#34d399}
        .cookie-type-card{background:rgba(16,185,129,.04);border:1px solid rgba(16,185,129,.1);border-radius:14px;padding:1.2rem 1.4rem;margin-bottom:1rem}
        .cookie-type-header{display:flex;align-items:center;gap:.75rem;margin-bottom:.8rem}
        .cookie-badge{font-family:var(--mono,monospace);font-size:.65rem;letter-spacing:.1em;text-transform:uppercase;padding:.25rem .75rem;border-radius:9999px;font-weight:500}
        .cookie-badge.essential{background:rgba(16,185,129,.15);color:#34d399;border:1px solid rgba(16,185,129,.3)}
        .cookie-badge.preference{background:rgba(212,168,67,.15);color:#d4a843;border:1px solid rgba(212,168,67,.3)}
        .cookie-badge.analytics{background:rgba(99,102,241,.15);color:#818cf8;border:1px solid rgba(99,102,241,.3)}
        .cookie-status{font-family:var(--mono,monospace);font-size:.62rem;letter-spacing:.08em;text-transform:uppercase;padding:.2rem .65rem;border-radius:9999px}
        .cookie-status.always{background:rgba(16,185,129,.08);color:#34d399}
        .cookie-status.optional{background:rgba(212,168,67,.08);color:#d4a843}
        .cookie-table-wrap{overflow-x:auto;margin:1rem 0;border-radius:12px;border:1px solid rgba(16,185,129,.1)}
        .cookie-table{width:100%;border-collapse:collapse;font-size:.85rem}
        .cookie-table th{background:rgba(16,185,129,.08);color:var(--text,#f0f7f4);font-family:var(--mono,monospace);font-size:.68rem;letter-spacing:.08em;text-transform:uppercase;padding:.85rem 1rem;text-align:left;border-bottom:1px solid rgba(16,185,129,.12)}
        .cookie-table td{padding:.8rem 1rem;color:var(--muted,#7a9e8e);border-bottom:1px solid rgba(16,185,129,.06);vertical-align:top;font-weight:300}
        .cookie-table tr:last-child td{border-bottom:none}
        .cookie-table code{background:rgba(16,185,129,.1);padding:.1rem .4rem;border-radius:4px;font-family:var(--mono,monospace);font-size:.78rem;color:#34d399}
        .policy-contact-card{background:rgba(16,185,129,.04);border:1px solid rgba(16,185,129,.12);border-radius:14px;padding:1.4rem 1.6rem;margin:1.2rem 0;display:flex;flex-direction:column;gap:.4rem;font-size:.93rem;color:var(--muted,#7a9e8e);font-weight:300}
        .policy-contact-card strong{color:var(--text,#f0f7f4)}
        .policy-footer{display:flex;gap:2rem;padding-top:2rem;border-top:1px solid rgba(16,185,129,.1);margin-top:2rem;flex-wrap:wrap}
        .policy-footer a{font-family:var(--mono,monospace);font-size:.72rem;letter-spacing:.08em;text-transform:uppercase;color:var(--muted,#7a9e8e);text-decoration:none;transition:color .2s}
        .policy-footer a:hover{color:var(--primary,#10b981)}
      `}</style>
    </div>
  );
}
