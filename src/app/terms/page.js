export const metadata = {
  title: "Terms of Service — Scornith Digital Agency",
  description: "Terms and conditions governing your use of Scornith's website and services.",
};

export default function TermsOfService() {
  return (
    <div className="policy-page">
      <div className="policy-container">
        <div className="policy-header">
          <a href="/" className="policy-back">← Back to Scornith</a>
          <div className="policy-badge">Legal</div>
          <h1>Terms of Service</h1>
          <p className="policy-meta">Last updated: <strong>June 1, 2025</strong> · Effective date: <strong>June 1, 2025</strong></p>
          <p className="policy-intro">
            Please read these Terms of Service carefully before using <strong>scornith.com</strong> operated by Scornith Digital Agency. By accessing or using our website, you agree to be bound by these terms.
          </p>
        </div>

        <div className="policy-toc">
          <div className="toc-title">Table of Contents</div>
          {["Acceptance of Terms","Use of the Website","Intellectual Property","Prohibited Activities","Disclaimer of Warranties","Limitation of Liability","Indemnification","Third-Party Links","Changes to Terms","Governing Law","Contact Us"].map((item, i) => (
            <a key={i} href={`#ts-${i+1}`} className="toc-item">
              <span className="toc-num">{String(i+1).padStart(2,"0")}</span>{item}
            </a>
          ))}
        </div>

        <div className="policy-body">
          <section id="ts-1">
            <h2><span className="section-num">01</span> Acceptance of Terms</h2>
            <p>By accessing and using scornith.com, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our <a href="/privacy">Privacy Policy</a>. If you do not agree with any part of these terms, please do not use our website.</p>
          </section>

          <section id="ts-2">
            <h2><span className="section-num">02</span> Use of the Website</h2>
            <p>You may use our website for lawful purposes only. You agree to use the site in a manner consistent with all applicable laws and regulations. Specifically, you agree not to:</p>
            <ul>
              <li>Use the site in any way that violates applicable local, national, or international laws</li>
              <li>Transmit unsolicited commercial communications (spam)</li>
              <li>Attempt to gain unauthorized access to any part of the website</li>
              <li>Interfere with or disrupt the integrity or performance of the website</li>
              <li>Collect or harvest any personally identifiable information from the site</li>
              <li>Use automated tools to scrape, crawl, or index the site without permission</li>
            </ul>
          </section>

          <section id="ts-3">
            <h2><span className="section-num">03</span> Intellectual Property</h2>
            <p>All content on this website, including but not limited to text, graphics, logos, icons, images, code, and design, is the property of Scornith Digital Agency and is protected by applicable intellectual property laws.</p>
            <p>You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit any content without our prior written consent. Viewing and printing content for personal, non-commercial use is permitted.</p>
            <div className="policy-callout">
              <strong>©</strong> The "Scornith" name, logo, and visual identity are registered trademarks of Scornith Digital Agency. Unauthorized use is strictly prohibited.
            </div>
          </section>

          <section id="ts-4">
            <h2><span className="section-num">04</span> Prohibited Activities</h2>
            <p>In addition to the general use restrictions above, the following activities are expressly prohibited:</p>
            <ul>
              <li>Reverse engineering or decompiling any software on the site</li>
              <li>Uploading or transmitting viruses or malicious code</li>
              <li>Impersonating Scornith or any of its employees</li>
              <li>Using the site to defame, harass, or harm any person</li>
              <li>Attempting to circumvent any security features of the site</li>
            </ul>
          </section>

          <section id="ts-5">
            <h2><span className="section-num">05</span> Disclaimer of Warranties</h2>
            <p>Our website is provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied. We do not warrant that:</p>
            <ul>
              <li>The site will be uninterrupted, error-free, or secure</li>
              <li>Any information on the site is accurate, complete, or current</li>
              <li>The site is free of viruses or other harmful components</li>
            </ul>
            <p>To the fullest extent permitted by law, we disclaim all warranties, express or implied, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>
          </section>

          <section id="ts-6">
            <h2><span className="section-num">06</span> Limitation of Liability</h2>
            <p>To the maximum extent permitted by applicable law, Scornith Digital Agency shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from:</p>
            <ul>
              <li>Your use of or inability to use our website</li>
              <li>Any content obtained from the website</li>
              <li>Unauthorized access to or alteration of your transmissions</li>
              <li>Any third-party conduct on the website</li>
            </ul>
            <p>Our total liability to you for any claims arising from the use of the site shall not exceed INR 1,000 (or equivalent in your local currency).</p>
          </section>

          <section id="ts-7">
            <h2><span className="section-num">07</span> Indemnification</h2>
            <p>You agree to indemnify, defend, and hold harmless Scornith Digital Agency, its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising out of or in connection with your use of the website or violation of these Terms.</p>
          </section>

          <section id="ts-8">
            <h2><span className="section-num">08</span> Third-Party Links</h2>
            <p>Our website may contain links to third-party websites. These links are provided for your convenience only. We have no control over the content of those sites and accept no responsibility for them or for any loss or damage that may arise from your use of them. We recommend reviewing the terms and privacy policies of any third-party sites you visit.</p>
          </section>

          <section id="ts-9">
            <h2><span className="section-num">09</span> Changes to Terms</h2>
            <p>We reserve the right to update or modify these Terms of Service at any time without prior notice. Changes are effective immediately upon posting to the website. Your continued use of the website following any changes constitutes your acceptance of the revised terms. We encourage you to review this page periodically.</p>
          </section>

          <section id="ts-10">
            <h2><span className="section-num">10</span> Governing Law</h2>
            <p>These Terms of Service shall be governed by and construed in accordance with the laws of India, specifically the Information Technology Act, 2000 and its amendments. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Chennai, Tamil Nadu, India.</p>
          </section>

          <section id="ts-11">
            <h2><span className="section-num">11</span> Contact Us</h2>
            <p>If you have any questions about these Terms of Service, please contact us:</p>
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
          <a href="/cookies">Cookie Policy</a>
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
        .policy-contact-card{background:rgba(16,185,129,.04);border:1px solid rgba(16,185,129,.12);border-radius:14px;padding:1.4rem 1.6rem;margin:1.2rem 0;display:flex;flex-direction:column;gap:.4rem;font-size:.93rem;color:var(--muted,#7a9e8e);font-weight:300}
        .policy-contact-card strong{color:var(--text,#f0f7f4)}
        .policy-footer{display:flex;gap:2rem;padding-top:2rem;border-top:1px solid rgba(16,185,129,.1);margin-top:2rem;flex-wrap:wrap}
        .policy-footer a{font-family:var(--mono,monospace);font-size:.72rem;letter-spacing:.08em;text-transform:uppercase;color:var(--muted,#7a9e8e);text-decoration:none;transition:color .2s}
        .policy-footer a:hover{color:var(--primary,#10b981)}
      `}</style>
    </div>
  );
}
