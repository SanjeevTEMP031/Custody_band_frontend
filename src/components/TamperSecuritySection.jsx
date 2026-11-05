import React, { useState } from 'react';
import { 
  ShieldAlert, 
  Lock, 
  Unlock, 
  Scissors, 
  AlertOctagon, 
  BellRing, 
  Cpu, 
  CheckCircle2, 
  Fingerprint,
  Radio,
  FileCheck
} from 'lucide-react';

export default function TamperSecuritySection() {
  const [tamperState, setTamperState] = useState('locked'); // 'locked' | 'tampered'

  return (
    <section id="tamper-security" className="section-padding tamper-section">
      <div className="container">
        
        {/* Section Heading */}
        <div className="section-head text-center">
          <div className="section-tag mono">
            <ShieldAlert size={14} className="text-rose" />
            <span>ZERO COMPROMISE HARDWARE SECURITY</span>
          </div>
          <h2 className="section-title">
            Patented Dual-Circuit Anti-Tamper Architecture
          </h2>
          <p className="section-desc">
            Engineered specifically to prevent evasion, unauthorized removal, and physical circumvention.
            Any attempt to cut, detach, or tamper with the Huaten C05 bracelet immediately notifies judicial dispatch.
          </p>
        </div>

        {/* Interactive Tamper Logic Simulator */}
        <div className="tamper-interactive-card">
          <div className="tamper-control-row">
            <span className="mono text-xs text-muted">LIVE CIRCUIT SIMULATOR:</span>
            <div className="tamper-toggle-group">
              <button 
                className={`btn-tamper-toggle ${tamperState === 'locked' ? 'active-locked' : ''}`}
                onClick={() => setTamperState('locked')}
              >
                <Lock size={14} />
                <span>Normal State (Strap Secured)</span>
              </button>
              <button 
                className={`btn-tamper-toggle ${tamperState === 'tampered' ? 'active-tampered' : ''}`}
                onClick={() => setTamperState('tampered')}
              >
                <Scissors size={14} />
                <span>Simulate Strap Cut / Tamper</span>
              </button>
            </div>
          </div>

          <div className="tamper-display-grid">
            
            {/* Visual Watch State Display */}
            <div className={`tamper-state-box ${tamperState}`}>
              <div className="state-badge mono">
                {tamperState === 'locked' ? (
                  <>
                    <Lock size={16} className="text-emerald" />
                    <span className="text-emerald">CIRCUIT CONTINUITY: SECURE (100%)</span>
                  </>
                ) : (
                  <>
                    <AlertOctagon size={16} className="text-rose" />
                    <span className="text-rose">CRITICAL ALARM: STRAP SEVERED</span>
                  </>
                )}
              </div>

              <div className="state-screen-mockup">
                <div className="screen-header mono text-xs">
                  <span>4G LTE</span>
                  <span>{tamperState === 'locked' ? '16:32' : 'ALERT!'}</span>
                  <span>85%</span>
                </div>
                <div className="screen-center">
                  {tamperState === 'locked' ? (
                    <div className="screen-locked-view">
                      <Lock size={36} className="text-emerald mx-auto" />
                      <div className="font-bold text-sm mt-2 text-white">Watch was Locked</div>
                      <div className="text-xs text-muted mono">Tamper Loop Intact</div>
                    </div>
                  ) : (
                    <div className="screen-alarm-view animate-pulse">
                      <AlertOctagon size={36} className="text-rose mx-auto" />
                      <div className="font-bold text-sm mt-2 text-rose">TAMPER DETECTED</div>
                      <div className="text-xs text-white mono">DISPATCH ALERT SENT</div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Protocol Packet Telemetry Box */}
            <div className="tamper-telemetry-box">
              <div className="box-title mono text-xs text-muted">
                AUTONOMOUS PROTOCOL PACKET TRANSMISSION
              </div>
              <div className="packet-console mono">
                <div className="text-dim">// Handshake sent over cellular TCP port 9001:</div>
                {tamperState === 'locked' ? (
                  <div className="packet-line text-emerald">
                    [MNYD*863758061830955*0012*BRACELET_CONNECTED]
                  </div>
                ) : (
                  <>
                    <div className="packet-line text-rose font-bold">
                      [MNYD*863758061830955*0012*BRACELET_DISCONNECTED]
                    </div>
                    <div className="packet-line text-amber">
                      [MNYD*863758061830955*00CD*AL,261103,163200,A,17.44673,N,78.36938,E,0.0,00100010]
                    </div>
                    <div className="packet-line text-white">
                      &gt; Escalation: Auto-dialing 2 SOS officer lines in loop
                    </div>
                    <div className="packet-line text-cyan">
                      &gt; Dispatch Webhook: POST /api/v1/integrations/webhooks (200 OK)
                    </div>
                  </>
                )}
              </div>
              <div className="telemetry-notes text-xs text-muted">
                {tamperState === 'locked' 
                  ? "Continuous micro-current pulse verifies strap integrity every millisecond. Low-power circuit draws virtually zero battery."
                  : "Within 1.5 seconds of physical strap disruption, high-priority emergency packets are transmitted. Platform persists alarm state until formal judicial clearance."}
              </div>
            </div>

          </div>
        </div>

        {/* 4 Multi-Tier Security Pillars */}
        <div className="security-pillars-grid">
          
          <div className="pillar-card">
            <div className="pillar-icon-box text-cyan">
              <Cpu size={24} />
            </div>
            <h3 className="pillar-title">Conductive Optical Mesh</h3>
            <p className="pillar-text">
              High-tensile composite silicone strap embeds internal conductive tracing and optical fibers. Any physical puncture, knife slice, or tensile tearing breaks the circuit instantly.
            </p>
            <div className="pillar-footer mono text-xs text-cyan">
              Latency: &lt; 200ms trigger
            </div>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon-box text-emerald">
              <Lock size={24} />
            </div>
            <h3 className="pillar-title">Tamper-Evident Mechanical Lock</h3>
            <p className="pillar-text">
              Heavy-duty metallic clasp secured by dual tamper-evident micro-screws with specialized torque heads. Only authorized officers with custom tools can install or release the bracelet.
            </p>
            <div className="pillar-footer mono text-xs text-emerald">
              Aircraft Grade Alloy
            </div>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon-box text-amber">
              <Fingerprint size={24} />
            </div>
            <h3 className="pillar-title">Skin Proximity &amp; Inactivity</h3>
            <p className="pillar-text">
              Continuous optical PPG sensors and body temperature monitoring verify physical contact with human skin. Slipping the band off or placing it on a dummy triggers "Watch Inactive" alarms.
            </p>
            <div className="pillar-footer mono text-xs text-amber">
              Bit-4 Status Analysis
            </div>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon-box text-rose">
              <BellRing size={24} />
            </div>
            <h3 className="pillar-title">Dual SOS Loop Calling</h3>
            <p className="pillar-text">
              When an SOS or tamper alarm occurs, the watch autonomously calls preset emergency phone numbers. If unanswered, it executes a 2-cycle loop until acknowledged, followed by SMS alerts.
            </p>
            <div className="pillar-footer mono text-xs text-rose">
              Dual Officer Dial-In
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
