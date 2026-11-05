import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Terminal, 
  ExternalLink, 
  Mail, 
  Globe, 
  Cpu, 
  Radio,
  FileText
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container footer-container">
        
        {/* Main Footer Columns */}
        <div className="footer-columns-grid">
          
          {/* Col 1: Brand & Overview */}
          <div className="footer-brand-col">
            <div className="footer-logo-row">
              <div className="brand-icon-wrapper">
                <Lock className="brand-icon" size={20} />
              </div>
              <div className="brand-text">
                <div className="brand-title">
                  CUSTODY<span className="brand-highlight">WATCH</span> 360
                </div>
                <div className="brand-tagline">
                  HUATEN C05 4G ECOSYSTEM
                </div>
              </div>
            </div>

            <p className="footer-about-text text-xs text-muted mt-3">
              Comprehensive electronic custody monitoring, judicial supervision, and high-security 
              patient tracking. Powered by the Huaten C05 4G tamper-proof bracelet with dual-circuit 
              continuity sensors and cloud dispatch telemetry.
            </p>

            <div className="footer-gateway-pill mono text-xs mt-4">
              <span className="status-indicator-dot online"></span>
              <span>GATEWAY ACTIVE: TCP 103.44.0.5:9001</span>
            </div>
          </div>

          {/* Col 2: Hardware & Features */}
          <div className="footer-links-col">
            <div className="footer-col-title mono text-xs">HARDWARE &amp; SENSORS</div>
            <ul className="footer-links-list text-xs">
              <li><a href="#hardware">Huaten C05 Specifications</a></li>
              <li><a href="#tamper-security">Dual-Circuit Anti-Tamper Strap</a></li>
              <li><a href="#hardware">830mAh + 1200mAh Mobile Power Bank</a></li>
              <li><a href="#positioning">Quad-Mode GPS / BDS / Wi-Fi / LBS</a></li>
              <li><a href="#biometrics">PPG Heart Rate &amp; Vital Telemetry</a></li>
              <li><a href="#hardware">IP68 Submersible Durability</a></li>
            </ul>
          </div>

          {/* Col 3: Cloud & API Integration */}
          <div className="footer-links-col">
            <div className="footer-col-title mono text-xs">PLATFORM &amp; API</div>
            <ul className="footer-links-list text-xs">
              <li>
                <a href="http://192.168.10.91:8000/docs" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                  <span>FastAPI Swagger UI</span>
                  <ExternalLink size={11} />
                </a>
              </li>
              <li>
                <a href="https://mgr.trackin360.com/en-us/Home/Index" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                  <span>Trackin360 Management Portal</span>
                  <ExternalLink size={11} />
                </a>
              </li>
              <li><a href="#api-docs">Supported Protocol Commands (CR, UPLOAD)</a></li>
              <li><a href="#evidence">Court Evidence Packets (PDF/CSV)</a></li>
              <li><a href="#positioning">Geofencing &amp; Curfew Validation</a></li>
              <li><a href="#api-docs">Law Enforcement CAD Webhooks</a></li>
            </ul>
          </div>

          {/* Col 4: Manufacturer & Inquiries */}
          <div className="footer-links-col">
            <div className="footer-col-title mono text-xs">MANUFACTURER &amp; CONTACT</div>
            <div className="manufacturer-info text-xs text-muted space-y-2">
              <div className="font-semibold text-white">Shenzhen Huatenglobal Technology Co., Ltd.</div>
              <div>Leading safety &amp; health IoT device manufacturer with 430+ global partners.</div>
              <div className="mt-2">
                <a href="mailto:Jason.huang@huatenglobal.com" className="text-cyan mono hover:underline flex items-center gap-1">
                  <Mail size={12} />
                  <span>Jason.huang@huatenglobal.com</span>
                </a>
              </div>
              <div>
                <a href="https://www.huatenglobal.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline flex items-center gap-1">
                  <Globe size={12} />
                  <span>www.huatenglobal.com</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Compliance Strip */}
        <div className="footer-bottom-strip">
          <div className="copyright text-xs text-dim mono">
            &copy; {new Date().getFullYear()} CustodyWatch 360 &bull; Shenzhen Huatenglobal Technology Co., Ltd. All rights reserved.
          </div>
          <div className="bottom-badges mono text-xs text-dim">
            <span>PROTOCOL: MNYD V2.1</span>
            <span>&bull;</span>
            <span>ENCRYPTED AES-256</span>
            <span>&bull;</span>
            <span>IP68 CERTIFIED</span>
            <span>&bull;</span>
            <span>FCC &amp; CE COMPLIANT</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
