import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Radio, 
  BatteryCharging, 
  MapPin, 
  Activity, 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle,
  Zap,
  Terminal,
  Layers,
  Heart
} from 'lucide-react';

export default function Hero() {
  const [activeHotspot, setActiveHotspot] = useState(0);

  const hotspots = [
    {
      id: 0,
      title: "Dual-Circuit Tamper-Proof Clasp",
      badge: "SECURITY CORE",
      description: "Reinforced titanium-alloy mechanical lock screws paired with an internal conductive/optic continuous loop sensor. Severing or loosening triggers an emergency alert to dispatch in <2 seconds.",
      code: "ALARM: BRACELET_DISCONNECTED (0x00000010)"
    },
    {
      id: 1,
      title: "1.4-Inch Sunlight-Readable Color Screen",
      badge: "STATUS INTERFACE",
      description: "Displays real-time connectivity status: 4G LTE network (Blue), Server link (Green), battery percentage, SOS prompt, and Unicode UTF-16 officer text messages.",
      code: "PROTOCOL: [MNYD*IMEI*0018*MESSAGE]"
    },
    {
      id: 2,
      title: "1,200 mAh Snap-On Mobile Power Bank",
      badge: "ZERO-REMOVAL CHARGING",
      description: "Patented magnetic clip-on charging dock. Allows 24/7 uninterrupted custody monitoring by charging the watch's 830 mAh internal battery directly on the wearer's wrist.",
      code: "DOCK: 1200mAh + 830mAh WATCH BATT"
    },
    {
      id: 3,
      title: "Continuous Biometric PPG Sensor",
      badge: "VITAL TELEMETRY",
      description: "Integrated optical sensor array capturing real-time pulse (BPM), HRV, skin/body temperature (-20°C to 70°C), blood oxygen (SpO2), and rollover sleep metrics.",
      code: "METRIC: HR: 78 BPM | TEMP: 36.6°C"
    },
    {
      id: 4,
      title: "4G LTE IoT & Quad-Layer Positioning",
      badge: "CELLULAR ENGINE",
      description: "Multi-band cellular modem (B1/B3/B8/B38/B39/B40/B41) with seamless fallback: GPS -> BDS -> Wi-Fi BSSID indoor positioning -> LBS Multi-cell triangulation.",
      code: "FIX: GPS+BDS+WIFI 5 MACs + CELL"
    }
  ];

  return (
    <section className="hero-section">
      <div className="container hero-container">
        
        {/* Top Announcement Tag */}
        <div className="hero-tag-wrapper">
          <div className="hero-badge">
            <span className="badge-glow-dot"></span>
            <span className="mono text-xs font-semibold tracking-wider">
              ENTERPRISE 4G CUSTODY & OFFENDER SUPERVISION PLATFORM
            </span>
            <span className="badge-chip">IP68 RATED</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="hero-title">
          Continuous Custody Enforcement.<br />
          <span className="text-gradient">Zero Tampering.</span> Absolute Accountability.
        </h1>

        {/* Lead Subtitle */}
        <p className="hero-subtitle">
          The industry benchmark in electronic offender monitoring and secure custody tracking.
          Powered by the <strong>Huaten C05 4G Non-Removable GPS Bracelet</strong> and an enterprise
          cloud dispatch telemetry engine with real-time biometric vital signs, instant cut-detection,
          and court-admissible forensic reporting.
        </p>

        {/* Action Buttons */}
        <div className="hero-cta-group">
          <a href="#hardware" className="btn-hero-primary">
            <span>Explore C05 Hardware</span>
            <ArrowRight size={18} />
          </a>

          <a href="#tamper-security" className="btn-hero-secondary">
            <ShieldCheck size={18} className="text-cyan" />
            <span>Anti-Tamper Security</span>
          </a>

          <a 
            href="http://192.168.10.91:8000/docs" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-hero-outline mono"
          >
            <Terminal size={16} />
            <span>Backend API Docs</span>
          </a>
        </div>

        {/* Interactive Hardware Showcase Canvas */}
        <div className="hero-stage-card">
          <div className="hero-stage-grid">
            
            {/* Visual Image & Hotspot Overlays */}
            <div className="hero-product-viewport">
              <div className="image-frame">
                <img 
                  src="/assets/images/c05_watch_hero.jpg" 
                  alt="Huaten C05 4G Tamper-Proof Custody Watch" 
                  className="hero-product-image"
                />
                
                {/* Floating Telemetry Badges */}
                <div className="floating-badge top-left-badge">
                  <div className="badge-header">
                    <span className="status-indicator-dot online"></span>
                    <span className="mono text-xs">WATCH ID: 863758061830955</span>
                  </div>
                  <div className="badge-val">STATUS: <strong>SECURE / LOCKED</strong></div>
                </div>

                <div className="floating-badge bottom-right-badge">
                  <div className="badge-header">
                    <Heart size={14} className="text-rose animate-pulse" />
                    <span className="mono text-xs">LIVE BIOMETRICS</span>
                  </div>
                  <div className="badge-val">78 BPM <span className="text-dim">|</span> 36.6°C <span className="text-dim">|</span> 98% SpO2</div>
                </div>

                {/* Hotspot Interactive Nodes */}
                <div className="hotspot-nodes-container">
                  <button 
                    className={`hotspot-node node-clasp ${activeHotspot === 0 ? 'active' : ''}`}
                    onClick={() => setActiveHotspot(0)}
                    aria-label="Tamper Clasp"
                  >
                    <span>1</span>
                    <span className="node-ping"></span>
                  </button>

                  <button 
                    className={`hotspot-node node-screen ${activeHotspot === 1 ? 'active' : ''}`}
                    onClick={() => setActiveHotspot(1)}
                    aria-label="Screen"
                  >
                    <span>2</span>
                    <span className="node-ping"></span>
                  </button>

                  <button 
                    className={`hotspot-node node-dock ${activeHotspot === 2 ? 'active' : ''}`}
                    onClick={() => setActiveHotspot(2)}
                    aria-label="Snap-On Battery"
                  >
                    <span>3</span>
                    <span className="node-ping"></span>
                  </button>

                  <button 
                    className={`hotspot-node node-sensor ${activeHotspot === 3 ? 'active' : ''}`}
                    onClick={() => setActiveHotspot(3)}
                    aria-label="Biometric Sensor"
                  >
                    <span>4</span>
                    <span className="node-ping"></span>
                  </button>

                  <button 
                    className={`hotspot-node node-sim ${activeHotspot === 4 ? 'active' : ''}`}
                    onClick={() => setActiveHotspot(4)}
                    aria-label="Cellular Modem"
                  >
                    <span>5</span>
                    <span className="node-ping"></span>
                  </button>
                </div>
              </div>
            </div>

            {/* Hotspot Info Panel */}
            <div className="hero-hotspot-detail-panel">
              <div className="panel-header">
                <span className="panel-badge mono">{hotspots[activeHotspot].badge}</span>
                <span className="panel-step mono">PART {activeHotspot + 1} OF 5</span>
              </div>

              <h3 className="panel-title">{hotspots[activeHotspot].title}</h3>
              <p className="panel-description">{hotspots[activeHotspot].description}</p>

              <div className="panel-code-box">
                <div className="code-box-header">
                  <Cpu size={14} className="text-cyan" />
                  <span className="mono text-xs">HARDWARE TELEMETRY SPEC</span>
                </div>
                <div className="code-box-content mono">{hotspots[activeHotspot].code}</div>
              </div>

              {/* Selector Tabs */}
              <div className="hotspot-selector-row">
                {hotspots.map((h, i) => (
                  <button
                    key={h.id}
                    className={`hotspot-tab-pill ${activeHotspot === i ? 'selected' : ''}`}
                    onClick={() => setActiveHotspot(i)}
                  >
                    <span className="tab-num mono">{i + 1}</span>
                    <span className="tab-name">{h.title.split(' ')[0]}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Quick KPI Stat Counter Bar */}
        <div className="hero-kpi-bar">
          <div className="kpi-item">
            <div className="kpi-value text-gradient">&lt; 2.0s</div>
            <div className="kpi-label">Instant Tamper Alert Escalation</div>
          </div>
          <div className="kpi-divider"></div>

          <div className="kpi-item">
            <div className="kpi-value text-gradient">96 hrs</div>
            <div className="kpi-label">Total Battery Operating Life</div>
          </div>
          <div className="kpi-divider"></div>

          <div className="kpi-item">
            <div className="kpi-value text-gradient">IP68</div>
            <div className="kpi-label">Submersible Water & Dust Proof</div>
          </div>
          <div className="kpi-divider"></div>

          <div className="kpi-item">
            <div className="kpi-value text-gradient">Quad-Mode</div>
            <div className="kpi-label">GPS + BDS + Wi-Fi + 4G LBS</div>
          </div>
        </div>

      </div>
    </section>
  );
}
