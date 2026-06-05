export const metadata = {
  title: "Privacy Policy — Scornith Digital Agency",
  description: "How Scornith collects, uses, and protects your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <div className="policy-page">
      <div className="policy-container">
        <div className="policy-header">
          <a href="/" className="policy-back">← Back to Scornith</a>
          <div className="policy-badge">Legal</div>
          <h1>Privacy Policy</h1>
          <p className="policy-meta">Last updated: <strong>June 1, 2025</strong> · Effective date: <strong>June 1, 2025</strong></p>
          <p className="policy-intro">
            At Scornith Digital Agency ("<strong>Scornith</strong>", "we", "our", or "us"), we are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <strong>scornith.com</strong>.
          </p>
        </div>

        <div className="policy-toc">
          <div className="toc-title">Table of Contents</div>
          {[
            "Information We Collect",
            "How We Use Your Information",
            "Sharing Your Information",
            "Cookies and Tracking",
            "Data Retention",
            "Your Rights",
            "Security",
            "Third-Party Links",
            "Children's Privacy",
            "Contact Us",
          ].map((item, i) => (
            <a key={i} href={`#section-${i + 1}`} className="toc-item">
              <span className="toc-num">{String(i + 1).padStart(2, "0")}</span>
              {item}
            </a>
          ))}
        </div>

        <div className="policy-body">
          <section id="section-1">
            <h2><span className="section-num">01</span> Information We Collect</h2>
            <p>We collect information you voluntarily provide to us when you:</p>
            <ul>
              <li>Fill out our contact form (name, email address, company name, and message)</li>
              <li>Subscribe to our newsletter (email address)</li>
              <li>Communicate with us via email or social media</li>
            </ul>
            <p>We also automatically collect certain information when you visit our site, including your IP address, browser type, operating system, referring URLs, and pages visited. This is collected via server logs and analytics tools.</p>
            <div className="policy-callout">
              <strong>📌 Note:</strong> We never collect sensitive personal data such as payment card details, government ID numbers, or health information.
            </div>
          </section>

          <section id="section-2">
            <h2><span className="section-num">02</span> How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiries and project requests</li>
              <li>Send you our newsletter and design insights (only with your consent)</li>
              <li>Improve our website experience and content</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Comply with legal obligations</li>
              <li>Prevent fraudulent or malicious activity</li>
            </ul>
            <p>We will never use your personal data for automated decision-making or profiling without your explicit consent.</p>
          </section>

          <section id="section-3">
            <h2><span className="section-num">03</span> Sharing Your Information</h2>
            <p>We do not sell, rent, or trade your personal information. We may share your data only with:</p>
            <ul>
              <li><strong>Service providers</strong> — trusted vendors (e.g., MongoDB Atlas for database hosting, Vercel for hosting) who are contractually bound to handle data securely</li>
              <li><strong>Legal authorities</strong> — if required by law, court order, or to protect the rights and safety of our users</li>
              <li><strong>Business transfers</strong> — in the event of a merger, acquisition, or sale of all or substantially all of our assets</li>
            </ul>
          </section>

          <section id="section-4">
            <h2><span className="section-num">04</span> Cookies and Tracking</h2>
            <p>We use cookies to enhance your browsing experience. These include:</p>
            <ul>
              <li><strong>Essential cookies</strong> — required for the website to function (e.g., theme preference)</li>
              <li><strong>Analytics cookies</strong> — help us understand how visitors interact with our site</li>
              <li><strong>Preference cookies</strong> — remember your settings (e.g., dark/light mode)</li>
            </ul>
            <p>You can control cookies through your browser settings. Note that disabling certain cookies may affect website functionality. See our <a href="/cookies">Cookie Policy</a> for full details.</p>
          </section>

          <section id="section-5">
            <h2><span className="section-num">05</span> Data Retention</h2>
            <p>We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected:</p>
            <ul>
              <li>Contact form submissions are retained for up to <strong>24 months</strong></li>
              <li>Newsletter subscriptions are retained until you unsubscribe</li>
              <li>Analytics data is retained for <strong>26 months</strong></li>
            </ul>
            <p>After the retention period, data is securely deleted or anonymised.</p>
          </section>

          <section id="section-6">
            <h2><span className="section-num">06</span> Your Rights</h2>
            <p>Depending on your location, you may have the following rights regarding your personal data:</p>
            <ul>
              <li><strong>Right to access</strong> — request a copy of your data we hold</li>
              <li><strong>Right to rectification</strong> — request correction of inaccurate data</li>
              <li><strong>Right to erasure</strong> — request deletion of your personal data</li>
              <li><strong>Right to restrict processing</strong> — request we limit how we use your data</li>
              <li><strong>Right to data portability</strong> — receive your data in a machine-readable format</li>
              <li><strong>Right to object</strong> — object to processing based on legitimate interests</li>
            </ul>
            <p>To exercise any of these rights, contact us at <a href="mailto:hello@scornith.com">hello@scornith.com</a>. We will respond within 30 days.</p>
          </section>

          <section id="section-7">
            <h2><span className="section-num">07</span> Security</h2>
            <p>We implement industry-standard security measures to protect your data, including:</p>
            <ul>
              <li>HTTPS encryption for all data in transit</li>
              <li>Secure, encrypted databases (MongoDB Atlas with TLS)</li>
              <li>Regular security audits and dependency updates</li>
              <li>Limited employee access to personal data on a need-to-know basis</li>
            </ul>
            <p>However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security but are committed to taking all reasonable steps to protect your information.</p>
          </section>

          <section id="section-8">
            <h2><span className="section-num">08</span> Third-Party Links</h2>
            <p>Our website may contain links to third-party sites (e.g., LinkedIn, GitHub, Dribbble). We have no control over the content or privacy practices of those sites and encourage you to review their privacy policies. We are not responsible for the privacy practices of third parties.</p>
          </section>

          <section id="section-9">
            <h2><span className="section-num">09</span> Children's Privacy</h2>
            <p>Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us immediately at <a href="mailto:hello@scornith.com">hello@scornith.com</a> and we will take steps to delete it.</p>
          </section>

          <section id="section-10">
            <h2><span className="section-num">10</span> Contact Us</h2>
            <p>If you have questions or concerns about this Privacy Policy or our data practices, please contact us:</p>
            <div className="policy-contact-card">
              <div><strong>Scornith Digital Agency</strong></div>
              <div>Chennai, Tamil Nadu, India</div>
              <div><a href="mailto:hello@scornith.com">hello@scornith.com</a></div>
              <div>+91 98765 43210</div>
            </div>
            <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. Your continued use of our site after changes constitutes acceptance of the updated policy.</p>
          </section>
        </div>

        <div className="policy-footer">
          <a href="/terms">Terms of Service</a>
          <a href="/cookies">Cookie Policy</a>
          <a href="/">← Home</a>
        </div>
      </div>

      <style>{`
        .policy-page {
          background: var(--bg, #000);
          color: var(--text, #f0f7f4);
          min-height: 100vh;
          font-family: var(--body, 'Inter', sans-serif);
          padding: 5rem 1.5rem 4rem;
        }
        .policy-container {
          max-width: 860px;
          margin: 0 auto;
        }
        .policy-header {
          margin-bottom: 3rem;
          padding-bottom: 3rem;
          border-bottom: 1px solid rgba(16,185,129,0.12);
        }
        .policy-back {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-family: var(--mono, monospace);
          font-size: 0.72rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--primary, #10b981);
          text-decoration: none;
          margin-bottom: 1.5rem;
          transition: opacity 0.2s;
        }
        .policy-back:hover { opacity: 0.7; }
        .policy-badge {
          display: inline-block;
          background: rgba(16,185,129,0.1);
          border: 1px solid rgba(16,185,129,0.25);
          color: #34d399;
          font-family: var(--mono, monospace);
          font-size: 0.68rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 0.3rem 0.9rem;
          border-radius: 9999px;
          margin-bottom: 1rem;
        }
        .policy-header h1 {
          font-family: var(--serif, 'Montserrat', serif);
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 800;
          line-height: 1.1;
          background: linear-gradient(135deg, #10b981, #d4a843);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 0.8rem;
        }
        .policy-meta {
          font-family: var(--mono, monospace);
          font-size: 0.75rem;
          color: var(--muted, #7a9e8e);
          letter-spacing: 0.04em;
          margin-bottom: 1.5rem;
        }
        .policy-meta strong { color: var(--text, #f0f7f4); }
        .policy-intro {
          font-size: 1.05rem;
          line-height: 1.85;
          color: var(--muted, #7a9e8e);
          font-weight: 300;
        }
        .policy-toc {
          background: rgba(16,185,129,0.04);
          border: 1px solid rgba(16,185,129,0.1);
          border-radius: 18px;
          padding: 1.8rem 2rem;
          margin-bottom: 3rem;
        }
        .toc-title {
          font-family: var(--mono, monospace);
          font-size: 0.68rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #d4a843;
          margin-bottom: 1.2rem;
        }
        .toc-item {
          display: flex;
          align-items: center;
          gap: 0.9rem;
          padding: 0.45rem 0;
          color: var(--muted, #7a9e8e);
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 300;
          border-bottom: 1px solid rgba(16,185,129,0.06);
          transition: color 0.2s;
        }
        .toc-item:last-child { border-bottom: none; }
        .toc-item:hover { color: var(--text, #f0f7f4); }
        .toc-num {
          font-family: var(--mono, monospace);
          font-size: 0.65rem;
          color: var(--primary, #10b981);
          flex-shrink: 0;
        }
        .policy-body section {
          margin-bottom: 3rem;
          padding-bottom: 3rem;
          border-bottom: 1px solid rgba(16,185,129,0.08);
        }
        .policy-body section:last-child {
          border-bottom: none;
        }
        .policy-body h2 {
          font-family: var(--serif, 'Montserrat', serif);
          font-size: 1.4rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-bottom: 1.2rem;
          color: var(--text, #f0f7f4);
        }
        .section-num {
          font-family: var(--mono, monospace);
          font-size: 0.7rem;
          color: var(--primary, #10b981);
          background: rgba(16,185,129,0.1);
          border: 1px solid rgba(16,185,129,0.2);
          padding: 0.2rem 0.6rem;
          border-radius: 6px;
          font-weight: 400;
          flex-shrink: 0;
        }
        .policy-body p {
          color: var(--muted, #7a9e8e);
          font-size: 0.96rem;
          line-height: 1.85;
          font-weight: 300;
          margin-bottom: 1rem;
        }
        .policy-body ul {
          margin: 1rem 0 1rem 0;
          padding-left: 0;
          list-style: none;
        }
        .policy-body ul li {
          color: var(--muted, #7a9e8e);
          font-size: 0.96rem;
          line-height: 1.75;
          font-weight: 300;
          padding: 0.35rem 0 0.35rem 1.4rem;
          position: relative;
        }
        .policy-body ul li::before {
          content: "→";
          position: absolute;
          left: 0;
          color: var(--primary, #10b981);
          font-size: 0.75rem;
        }
        .policy-body a {
          color: var(--primary, #10b981);
          text-decoration: none;
          border-bottom: 1px solid rgba(16,185,129,0.3);
          transition: border-color 0.2s;
        }
        .policy-body a:hover { border-color: var(--primary, #10b981); }
        .policy-callout {
          background: rgba(16,185,129,0.06);
          border-left: 3px solid var(--primary, #10b981);
          border-radius: 0 10px 10px 0;
          padding: 1rem 1.2rem;
          margin-top: 1.2rem;
          font-size: 0.9rem;
          color: var(--muted, #7a9e8e);
          font-weight: 300;
        }
        .policy-contact-card {
          background: rgba(16,185,129,0.04);
          border: 1px solid rgba(16,185,129,0.12);
          border-radius: 14px;
          padding: 1.4rem 1.6rem;
          margin: 1.2rem 0;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          font-size: 0.93rem;
          color: var(--muted, #7a9e8e);
          font-weight: 300;
        }
        .policy-contact-card strong { color: var(--text, #f0f7f4); }
        .policy-footer {
          display: flex;
          gap: 2rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(16,185,129,0.1);
          margin-top: 2rem;
          flex-wrap: wrap;
        }
        .policy-footer a {
          font-family: var(--mono, monospace);
          font-size: 0.72rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--muted, #7a9e8e);
          text-decoration: none;
          transition: color 0.2s;
        }
        .policy-footer a:hover { color: var(--primary, #10b981); }
      `}</style>
    </div>
  );
}
