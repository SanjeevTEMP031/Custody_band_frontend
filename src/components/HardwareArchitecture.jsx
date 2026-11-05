import React, { useState } from 'react';
import { 
  Battery, 
  BatteryCharging, 
  Droplets, 
  Wifi, 
  PhoneCall, 
  Cpu, 
  HardDrive, 
  ShieldCheck, 
  Check, 
  Download, 
  Smartphone,
  Eye,
  Volume2
} from 'lucide-react';

export default function HardwareArchitecture() {
  const [activeTab, setActiveTab] = useState('power');

  return (
    <section id="hardware" className="section-padding hardware-section">
      <div className="container">
        
        {/* Section Heading */}
        <div className="section-head text-center">
          <div className="section-tag mono">
            <Cpu size={14} className="text-cyan" />
            <span>INDUSTRIAL ENGINEERING EXCELLENCE</span>
          </div>
          <h2 className="section-title">
            Huaten C05 Tactical Hardware Specifications
          </h2>
          <p className="section-desc">
            Constructed to withstand harsh penitentiary and outdoor conditions. 
            IP68 submersible casing, zero-removal on-wrist mobile power charging, and crystal-clear voice communication.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="hardware-tabs-row">
          <button 
            className={`hw-tab-btn ${activeTab === 'power' ? 'active' : ''}`}
            onClick={() => setActiveTab('power')}
          >
            <BatteryCharging size={16} />
            <span>Dual-Battery System</span>
          </button>
          <button 
            className={`hw-tab-btn ${activeTab === 'comms' ? 'active' : ''}`}
            onClick={() => setActiveTab('comms')}
          >
            <PhoneCall size={16} />
            <span>Voice &amp; 4G LTE IoT</span>
          </button>
          <button 
            className={`hw-tab-btn ${activeTab === 'durability' ? 'active' : ''}`}
            onClick={() => setActiveTab('durability')}
          >
            <Droplets size={16} />
            <span>IP68 Rugged Armor</span>
          </button>
          <button 
            className={`hw-tab-btn ${activeTab === 'ota' ? 'active' : ''}`}
            onClick={() => setActiveTab('ota')}
          >
            <Download size={16} />
            <span>Micro-Chunked OTA</span>
          </button>
        </div>

        {/* Tab 1: Dual-Battery Zero-Removal System */}
        {activeTab === 'power' && (
          <div className="hw-content-grid animate-fade-in">
            <div className="hw-info-card">
              <span className="badge-chip mono text-xs">PATENTED CHARGING DOCK</span>
              <h3 className="card-title mt-2">Zero-Removal Wrist Charging</h3>
              <p className="card-desc">
                Conventional offender ankle/wrist monitors force subjects to tether themselves to a wall outlet or remove the unit, 
                creating massive custody security risks. The Huaten C05 solves this permanently.
              </p>

              <div className="battery-spec-cards">
                <div className="batt-card">
                  <div className="batt-icon text-cyan"><Battery size={24} /></div>
                  <div className="batt-val mono font-bold">830 mAh</div>
                  <div className="batt-name">Internal Lithium Cell</div>
                  <div className="batt-meta text-xs text-muted">Powers watch for 48-72h active work, 96h standby</div>
                </div>

                <div className="batt-card">
                  <div className="batt-icon text-emerald"><BatteryCharging size={24} /></div>
                  <div className="batt-val mono font-bold">1,200 mAh</div>
                  <div className="batt-name">Snap-On Mobile Power Bank</div>
                  <div className="batt-meta text-xs text-muted">Clips onto watch on wrist. Full recharge in ~2 hours</div>
                </div>
              </div>

              <div className="feature-bullets mt-4">
                <div className="bullet-row">
                  <Check size={16} className="text-emerald" />
                  <span>Subject maintains full mobility during charging (no wall tethering).</span>
                </div>
                <div className="bullet-row">
                  <Check size={16} className="text-emerald" />
                  <span>Strap continuity is never severed for charging purposes.</span>
                </div>
                <div className="bullet-row">
                  <Check size={16} className="text-emerald" />
                  <span>LED indicator lights confirm power transfer status automatically.</span>
                </div>
              </div>
            </div>

            <div className="hw-visual-card">
              <div className="charging-concept-box">
                <div className="diagram-icon-cluster">
                  <div className="c-circle c-watch">
                    <Smartphone size={32} className="text-cyan" />
                    <span className="mono text-xs">C05 Watch</span>
                  </div>
                  <div className="c-arrow">&larr;&plus;&rarr;</div>
                  <div className="c-circle c-dock">
                    <BatteryCharging size={32} className="text-emerald" />
                    <span className="mono text-xs">Snap-On 1200mAh</span>
                  </div>
                </div>
                <div className="concept-caption mono text-xs text-center text-muted mt-4">
                  MAGNETIC FAST-SNAP COUPLING // 24/7 UNINTERRUPTED CUSTODY
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Voice & 4G LTE IoT */}
        {activeTab === 'comms' && (
          <div className="hw-content-grid animate-fade-in">
            <div className="hw-info-card">
              <span className="badge-chip mono text-xs">TACTICAL AUDIO &amp; CELLULAR</span>
              <h3 className="card-title mt-2">Two-Way Voice Whitelist &amp; Audio Dispatch</h3>
              <p className="card-desc">
                Equipped with an integrated speaker and noise-canceling microphone. 
                Allows supervising officers and case managers to communicate directly with the wearer in real-time.
              </p>

              <div className="tech-spec-list">
                <div className="spec-item">
                  <div className="spec-icon text-cyan"><PhoneCall size={18} /></div>
                  <div className="spec-content">
                    <div className="spec-name">10-15 Whitelist Contacts (PHL Command)</div>
                    <div className="spec-details text-muted text-xs">
                      Prevents unauthorized outgoing calls. Watch only dials verified case managers and family numbers.
                    </div>
                  </div>
                </div>

                <div className="spec-item">
                  <div className="spec-icon text-emerald"><Volume2 size={18} /></div>
                  <div className="spec-content">
                    <div className="spec-name">Silent Voice Monitoring (CALL Command)</div>
                    <div className="spec-details text-muted text-xs">
                      Authorized officers can dial into the watch to verify ambient surroundings during emergency alerts.
                    </div>
                  </div>
                </div>

                <div className="spec-item">
                  <div className="spec-icon text-amber"><Smartphone size={18} /></div>
                  <div className="spec-content">
                    <div className="spec-name">Unicode UTF-16 Text Push (MESSAGE Command)</div>
                    <div className="spec-details text-muted text-xs">
                      Dispatch can send court date reminders, curfew instructions, and check-in orders directly to the watch screen.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hw-visual-card">
              <div className="audio-screen-mock">
                <div className="screen-call-box">
                  <PhoneCall size={28} className="text-emerald animate-bounce mx-auto" />
                  <div className="font-bold text-white mt-2">Incoming Dispatch Call</div>
                  <div className="mono text-xs text-cyan">Officer Miller (Probation Unit #4)</div>
                  <div className="mono text-xs text-muted mt-2">4G LTE HD Voice Active</div>
                </div>
                <div className="band-support-strip mono text-xs text-muted text-center mt-4">
                  Bands: 4G LTE B1 / B3 / B8 / B38 / B39 / B40 / B41 &bull; Nano SIM
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: IP68 Rugged Armor */}
        {activeTab === 'durability' && (
          <div className="hw-content-grid animate-fade-in">
            <div className="hw-info-card">
              <span className="badge-chip mono text-xs">MILITARY-GRADE RESILIENCE</span>
              <h3 className="card-title mt-2">IP68 Submersible Casing &amp; Wide Thermal Range</h3>
              <p className="card-desc">
                Wearers can shower, bathe, and perform daily physical labor without damaging the unit. 
                Dual silicone O-ring gasket seals ensure moisture, dust, and corrosive sweat cannot penetrate.
              </p>

              <div className="durability-kpi-grid">
                <div className="durability-box">
                  <div className="d-val text-cyan mono">IP68</div>
                  <div className="d-title">Submersible Rating</div>
                  <div className="d-sub text-xs text-muted">Continuous underwater immersion &gt; 1.5m</div>
                </div>
                <div className="durability-box">
                  <div className="d-val text-emerald mono">-20°C ~ 70°C</div>
                  <div className="d-title">Operating Temp</div>
                  <div className="d-sub text-xs text-muted">Sub-zero winters to extreme desert climates</div>
                </div>
              </div>

              <div className="feature-bullets mt-4">
                <div className="bullet-row">
                  <Check size={16} className="text-emerald" />
                  <span>High-impact reinforced polycarbonate &amp; aerospace alloy chassis.</span>
                </div>
                <div className="bullet-row">
                  <Check size={16} className="text-emerald" />
                  <span>Anti-allergic medical-grade silicone strap prevents dermatitis.</span>
                </div>
              </div>
            </div>

            <div className="hw-visual-card">
              <div className="ip68-graphic-box">
                <Droplets size={48} className="text-cyan mx-auto animate-pulse" />
                <div className="font-bold text-lg text-white mt-3">100% Hermetically Sealed</div>
                <p className="text-xs text-muted text-center max-w-xs mx-auto mt-1">
                  Protected against high-pressure water jets, soapy bathwater, and continuous sand or soil contact.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Micro-Chunked OTA Updates */}
        {activeTab === 'ota' && (
          <div className="hw-content-grid animate-fade-in">
            <div className="hw-info-card">
              <span className="badge-chip mono text-xs">FAIL-SAFE FIRMWARE DISPATCH</span>
              <h3 className="card-title mt-2">Segmented HTTP Micro-Chunk OTA Engine</h3>
              <p className="card-desc">
                As detailed in section 5.2 of the protocol specification, the 1.2MB firmware binary is automatically 
                partitioned into 42 micro-segments (&lt;30KB each). This eliminates bricking risks in weak signal areas.
              </p>

              <div className="ota-stepper-box mono text-xs">
                <div className="ota-step completed">
                  <span className="step-check">&check;</span>
                  <span>1. Check Version: HTTP /admin/ota/upgrade?currentVersion=1.0.30_rel</span>
                </div>
                <div className="ota-step completed">
                  <span className="step-check">&check;</span>
                  <span>2. Cloud Partitioning: 42 Segments (otabin.001 ... otabin.042)</span>
                </div>
                <div className="ota-step active">
                  <span className="step-loading">&bull;</span>
                  <span>3. Micro-Chunk Download: Resumes on packet drop without data loss</span>
                </div>
                <div className="ota-step">
                  <span className="step-pending">&bull;</span>
                  <span>4. Cryptographic Checksum &amp; Dual-Bank Boot Verification</span>
                </div>
              </div>
            </div>

            <div className="hw-visual-card">
              <div className="ota-visual-box">
                <HardDrive size={36} className="text-cyan mx-auto" />
                <div className="font-bold text-white mt-2">Zero-Downtime Remote Maintenance</div>
                <div className="progress-bar-wrap mt-3">
                  <div className="progress-bar-fill" style={{ width: '85%' }}></div>
                </div>
                <div className="progress-meta mono text-xs text-muted mt-2 text-center">
                  OTA Progress: 36 / 42 Chunks Completed &bull; Hash Verified
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
