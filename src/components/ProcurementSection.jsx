import React, { useState } from 'react';
import { 
  Building, 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Cpu, 
  FileText,
  HelpCircle,
  ExternalLink
} from 'lucide-react';

export default function ProcurementSection() {
  const [formData, setFormData] = useState({
    agencyName: '',
    contactName: '',
    email: '',
    phone: '',
    agencyType: 'Corrections / Parole',
    quantity: '50 - 200 Units',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="inquiry" className="section-padding procurement-section">
      <div className="container">
        
        {/* Section Heading */}
        <div className="section-head text-center">
          <div className="section-tag mono">
            <Building size={14} className="text-cyan" />
            <span>INSTITUTIONAL PARTNERSHIP &amp; PROCUREMENT</span>
          </div>
          <h2 className="section-title">
            Procurement, OEM/ODM &amp; Agency Inquiries
          </h2>
          <p className="section-desc">
            Direct collaboration with corrections departments, law enforcement agencies, healthcare systems, 
            and authorized global distributors. Secure batch ordering, custom telemetry firmware, and private cloud deployment.
          </p>
        </div>

        {/* Procurement Layout Grid */}
        <div className="procurement-grid">
          
          {/* Left Column: Inquiry Form */}
          <div className="procurement-form-card">
            {submitted ? (
              <div className="form-success-state text-center animate-fade-in">
                <CheckCircle2 size={48} className="text-emerald mx-auto mb-3" />
                <h3 className="text-xl font-bold text-white mb-2">Inquiry Successfully Transmitted</h3>
                <p className="text-sm text-muted mb-4">
                  Thank you, <strong>{formData.contactName || "Officer"}</strong>. 
                  Your institutional inquiry for <strong>{formData.quantity}</strong> has been logged. 
                  A technical sales engineer from Huaten Global will contact you at <strong>{formData.email}</strong> within 12 business hours.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="btn-procure-reset mono text-xs"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="procurement-form">
                <div className="form-title-row">
                  <h3 className="font-bold text-lg text-white">Agency Procurement Form</h3>
                  <span className="mono text-xs text-cyan">DIRECT FACTORY LIAISON</span>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label mono text-xs">AGENCY / DEPARTMENT NAME</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. County Sheriff's Dept / State DOC"
                      value={formData.agencyName}
                      onChange={(e) => setFormData({ ...formData, agencyName: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label mono text-xs">CONTACT OFFICER / TITLE</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Cmdr. Sarah Jenkins"
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label mono text-xs">OFFICIAL EMAIL</label>
                    <input 
                      type="email" 
                      required
                      placeholder="officer@agency.gov or corporate"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label mono text-xs">PHONE / EXTENSION</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label mono text-xs">APPLICATION SECTOR</label>
                    <select 
                      value={formData.agencyType}
                      onChange={(e) => setFormData({ ...formData, agencyType: e.target.value })}
                      className="form-select"
                    >
                      <option>Judicial Parole &amp; Probation</option>
                      <option>Pre-Trial Release &amp; House Arrest</option>
                      <option>Healthcare &amp; Dementia Memory Care</option>
                      <option>Police / Corrections Escort</option>
                      <option>Commercial Distributor / OEM Partner</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label mono text-xs">PROJECTED FLEET VOLUME</label>
                    <select 
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="form-select"
                    >
                      <option>Evaluation Batch (10 - 49 Units)</option>
                      <option>Medium Deployment (50 - 200 Units)</option>
                      <option>Large Institutional (200 - 1,000 Units)</option>
                      <option>State / Nationwide (1,000+ Units)</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label mono text-xs">PROJECT REQUIREMENTS &amp; CARRIER SPECIFICATIONS</label>
                  <textarea 
                    rows={3}
                    placeholder="Specify SIM frequency requirements, custom backend server IP configurations, or software integration details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-textarea"
                  />
                </div>

                <button type="submit" className="btn-procure-submit">
                  <span>Submit Institutional Inquiry</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Manufacturer & Distributor Contact Info */}
          <div className="procurement-info-card">
            <h3 className="card-title">Manufacturer &amp; Technical Support</h3>
            <p className="card-desc">
              Original hardware manufacturer of the C05 4G Non-Removable GPS Tracking Bracelet.
              Over 85 high-quality OEM/ODM solutions delivered to 430+ global partners since 2015.
            </p>

            <div className="contact-details-list">
              <div className="contact-detail-item">
                <Building className="detail-icon text-cyan" size={18} />
                <div>
                  <div className="detail-label mono text-xs">MANUFACTURER</div>
                  <div className="detail-text font-semibold">Shenzhen Huatenglobal Technology Co., Ltd.</div>
                </div>
              </div>

              <div className="contact-detail-item">
                <Mail className="detail-icon text-emerald" size={18} />
                <div>
                  <div className="detail-label mono text-xs">TECHNICAL ENGINEERING &amp; SALES</div>
                  <a href="mailto:Jason.huang@huatenglobal.com" className="detail-text text-cyan hover:underline font-mono">
                    Jason.huang@huatenglobal.com
                  </a>
                </div>
              </div>

              <div className="contact-detail-item">
                <ExternalLink className="detail-icon text-amber" size={18} />
                <div>
                  <div className="detail-label mono text-xs">GLOBAL MANUFACTURER PORTAL</div>
                  <a href="https://www.huatenglobal.com/" target="_blank" rel="noopener noreferrer" className="detail-text text-white hover:underline">
                    www.huatenglobal.com
                  </a>
                </div>
              </div>

              <div className="contact-detail-item">
                <Cpu className="detail-icon text-cyan" size={18} />
                <div>
                  <div className="detail-label mono text-xs">DISTRIBUTOR FLEET PORTAL</div>
                  <a href="https://mgr.trackin360.com/en-us/Home/Index" target="_blank" rel="noopener noreferrer" className="detail-text text-white hover:underline">
                    mgr.trackin360.com (Trackin360)
                  </a>
                </div>
              </div>
            </div>

            <div className="partnership-box mt-4">
              <div className="font-bold text-sm text-white mb-1">OEM / ODM Custom Capabilities:</div>
              <ul className="text-xs text-muted space-y-1">
                <li>&bull; Custom brand engraving &amp; agency logo silkscreening</li>
                <li>&bull; Dedicated cellular APN hardcoding &amp; private APN server profiles</li>
                <li>&bull; Private on-premise TCP/UDP socket receiver deployment</li>
                <li>&bull; Custom hardware sensors (ECG transmission, blood glucose)</li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
