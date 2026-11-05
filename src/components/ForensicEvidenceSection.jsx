import React, { useState } from 'react';
import { 
  FileCheck, 
  FileSpreadsheet, 
  Download, 
  Scale, 
  ShieldAlert, 
  Lock, 
  Clock, 
  Hash,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

export default function ForensicEvidenceSection() {
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(null);

  const handleSimulateExport = (type) => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setDownloadSuccess(`Generated official ${type} for Device 863758061830955 (Case #2026-001)`);
      setTimeout(() => setDownloadSuccess(null), 4000);
    }, 1200);
  };

  return (
    <section id="evidence" className="section-padding evidence-section">
      <div className="container">
        
        {/* Section Heading */}
        <div className="section-head text-center">
          <div className="section-tag mono">
            <Scale size={14} className="text-emerald" />
            <span>COURT-ADMISSIBLE INTEGRITY</span>
          </div>
          <h2 className="section-title">
            Judicial Evidence &amp; Forensic Chain-of-Custody
          </h2>
          <p className="section-desc">
            Telemetry data that stands up in judicial courts, revocation hearings, and parole boards. 
            Automated PDF &amp; CSV forensic packets with cryptographic verification and immutable timestamps.
          </p>
        </div>

        {/* Evidence Dashboard Grid */}
        <div className="evidence-grid">
          
          {/* Left Column: Interactive Evidence Packet Document Mockup */}
          <div className="evidence-doc-mockup">
            <div className="doc-top-bar">
              <div className="doc-seal">
                <Scale size={18} className="text-white" />
              </div>
              <div className="doc-header-text">
                <div className="font-bold text-sm text-white">FORENSIC CUSTODY REPORT</div>
                <div className="mono text-xs text-muted">STATE SUPERVISION &bull; DIVISION OF PAROLE</div>
              </div>
              <span className="doc-cert-badge mono">CERTIFIED ADMISSIBLE</span>
            </div>

            <div className="doc-body">
              <div className="doc-meta-grid mono text-xs">
                <div>CASE NO: <strong className="text-white">CASE-2026-001</strong></div>
                <div>DEVICE IMEI: <strong className="text-white">863758061830955</strong></div>
                <div>SUBJECT: <strong className="text-white">Demo Wearer</strong></div>
                <div>CIRCUIT STATUS: <strong className="text-emerald">TAMPER-FREE (VERIFIED)</strong></div>
              </div>

              <div className="doc-incident-table mt-3">
                <div className="doc-table-header mono text-xs">
                  <span>TIMESTAMP (UTC)</span>
                  <span>EVENT</span>
                  <span>COORDINATES</span>
                  <span>VERDICT</span>
                </div>
                <div className="doc-table-row mono text-xs">
                  <span>07:07:24 UTC</span>
                  <span>Keepalive Link</span>
                  <span>17.4467°N, 78.3693°E</span>
                  <span className="text-emerald">IN BOUNDS</span>
                </div>
                <div className="doc-table-row mono text-xs">
                  <span>06:45:10 UTC</span>
                  <span>Hourly Biometric</span>
                  <span>17.4465°N, 78.3691°E</span>
                  <span className="text-emerald">COMPLIANT</span>
                </div>
                <div className="doc-table-row mono text-xs">
                  <span>04:21:33 UTC</span>
                  <span>Motion Update</span>
                  <span>17.4461°N, 78.3685°E</span>
                  <span className="text-emerald">APPROVED CORRIDOR</span>
                </div>
              </div>

              <div className="doc-crypto-hash-box mono text-xs mt-3">
                <div className="text-dim">SHA-256 DIGITAL FINGERPRINT:</div>
                <div className="hash-str text-cyan">
                  e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
                </div>
              </div>
            </div>

            <div className="doc-action-bar">
              <button 
                onClick={() => handleSimulateExport('Court Evidence Packet (PDF)')}
                disabled={downloading}
                className="btn-export-doc mono text-xs"
              >
                <FileCheck size={14} />
                <span>{downloading ? "Compiling Packet..." : "Export Court Evidence Packet"}</span>
              </button>

              <button 
                onClick={() => handleSimulateExport('Telemetry CSV Archive')}
                disabled={downloading}
                className="btn-export-csv mono text-xs"
              >
                <FileSpreadsheet size={14} />
                <span>Download CSV Logs</span>
              </button>
            </div>

            {downloadSuccess && (
              <div className="export-notification mono text-xs text-emerald animate-fade-in mt-2">
                <CheckCircle2 size={14} className="inline mr-1" />
                <span>{downloadSuccess}</span>
              </div>
            )}
          </div>

          {/* Right Column: Legal Integrity Pillars */}
          <div className="evidence-pillars-col">
            
            <div className="legal-pillar-card">
              <div className="pillar-header">
                <Clock size={20} className="text-cyan" />
                <h3 className="pillar-title">Synchronized Time Zone Stamping</h3>
              </div>
              <p className="pillar-desc">
                As specified in protocol section 1.4, all GPS fixes, biometric readings, and tamper events 
                are locked to network server timestamps and synchronized with Beijing Time or local GMT offset, 
                eliminating local device clock manipulation.
              </p>
            </div>

            <div className="legal-pillar-card">
              <div className="pillar-header">
                <Hash size={20} className="text-emerald" />
                <h3 className="pillar-title">Unbroken Chain of Custody</h3>
              </div>
              <p className="pillar-desc">
                From the moment the watch strap screws are tightened and the `BRACELET_CONNECTED` packet is acknowledged, 
                every subsequent heart rate pulse, movement, geofence check, and battery voltage is recorded in an unalterable database.
              </p>
            </div>

            <div className="legal-pillar-card">
              <div className="pillar-header">
                <Lock size={20} className="text-amber" />
                <h3 className="pillar-title">Officer Command Audit Ledger</h3>
              </div>
              <p className="pillar-desc">
                Complete traceability for supervising staff. Every command sent by dispatch (`CR` poll, `UPLOAD` interval change, 
                whitelisted phone edit, or unbind order) is permanently linked to the initiating officer's badge number and session ID.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
