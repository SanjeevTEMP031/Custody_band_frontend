import React, { useState } from 'react';
import { 
  Navigation, 
  Wifi, 
  Radio, 
  MapPin, 
  Compass, 
  Layers, 
  Play, 
  Pause, 
  ShieldCheck, 
  Clock, 
  Satellite,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';

export default function PositioningEngine() {
  const [activeTab, setActiveTab] = useState('hybrid'); // 'hybrid' | 'geofence' | 'replay'
  const [isPlayingTrail, setIsPlayingTrail] = useState(false);
  const [trailStep, setTrailStep] = useState(2);

  const breadcrumbs = [
    { time: '14:00', lat: '17.4450', lon: '78.3650', speed: '0 km/h', status: 'Stationary at Residence (Inclusion Zone)' },
    { time: '14:30', lat: '17.4462', lon: '78.3675', speed: '4.2 km/h', status: 'Walking towards transit corridor' },
    { time: '15:15', lat: '17.4467', lon: '78.3693', speed: '0.0 km/h', status: 'Current Verified Location (Approved Zone)' },
  ];

  const handlePlayToggle = () => {
    setIsPlayingTrail(!isPlayingTrail);
    if (!isPlayingTrail) {
      setTrailStep((prev) => (prev + 1) % breadcrumbs.length);
    }
  };

  return (
    <section id="positioning" className="section-padding positioning-section">
      <div className="container">
        
        {/* Section Heading */}
        <div className="section-head text-center">
          <div className="section-tag mono">
            <Satellite size={14} className="text-cyan" />
            <span>QUAD-LAYER LOCATION ACCURACY</span>
          </div>
          <h2 className="section-title">
            Intelligent Quad-Mode Positioning Engine
          </h2>
          <p className="section-desc">
            Continuous indoor and outdoor location tracking. Autonomous fallback across GPS, BeiDou, 
            Wi-Fi BSSID indoor triangulation, and 4G LBS cell towers ensures subjects can never go dark.
          </p>
        </div>

        {/* Feature Navigation Tabs */}
        <div className="engine-tabs-row">
          <button 
            className={`engine-tab-btn ${activeTab === 'hybrid' ? 'active' : ''}`}
            onClick={() => setActiveTab('hybrid')}
          >
            <Satellite size={16} />
            <span>Hybrid Multi-Constellation</span>
          </button>
          <button 
            className={`engine-tab-btn ${activeTab === 'geofence' ? 'active' : ''}`}
            onClick={() => setActiveTab('geofence')}
          >
            <ShieldCheck size={16} />
            <span>Dynamic Geofencing &amp; Curfews</span>
          </button>
          <button 
            className={`engine-tab-btn ${activeTab === 'replay' ? 'active' : ''}`}
            onClick={() => setActiveTab('replay')}
          >
            <Layers size={16} />
            <span>Trajectory Breadcrumb Replay</span>
          </button>
        </div>

        {/* Tab 1: Hybrid Positioning Architecture */}
        {activeTab === 'hybrid' && (
          <div className="engine-content-grid animate-fade-in">
            
            <div className="engine-visual-card">
              <div className="radar-screen-wrapper">
                <div className="radar-circle circle-1"></div>
                <div className="radar-circle circle-2"></div>
                <div className="radar-circle circle-3"></div>
                <div className="radar-sweep"></div>
                
                {/* Simulated Target Markers */}
                <div className="radar-target-pin target-main">
                  <MapPin size={22} className="pin-icon" />
                  <span className="pin-label mono">C05 TARGET LOCKED</span>
                </div>
                <div className="radar-target-pin target-wifi">
                  <Wifi size={14} className="text-cyan" />
                  <span className="pin-sub mono">5 BSSIDs</span>
                </div>
                <div className="radar-target-pin target-cell">
                  <Radio size={14} className="text-emerald" />
                  <span className="pin-sub mono">Cell 231626</span>
                </div>
              </div>

              <div className="radar-bottom-telemetry mono text-xs">
                <span>FIX ORDER: GPS &gt; BDS &gt; WIFI &gt; LBS</span>
                <span className="text-emerald">PRECISION: &plusmn;3.5 METERS</span>
              </div>
            </div>

            <div className="engine-info-card">
              <h3 className="card-title">Priority Auto-Fallback Matrix</h3>
              <p className="card-desc">
                In line with the Huaten C05 communication protocol, location acquisition prioritizes high-accuracy 
                satellite fixes outdoors and seamlessly shifts to local Wi-Fi router sniffing in high-rise buildings, 
                shopping malls, and subterranean tunnels.
              </p>

              <div className="tech-spec-list">
                <div className="spec-item">
                  <div className="spec-icon text-cyan"><Satellite size={18} /></div>
                  <div className="spec-content">
                    <div className="spec-name">Outdoor Satellite: GPS + BeiDou + GLONASS</div>
                    <div className="spec-details text-muted text-xs">
                      Tracks 6-12 simultaneous satellites. Sub-meter velocity and course angle calculation.
                    </div>
                  </div>
                </div>

                <div className="spec-item">
                  <div className="spec-icon text-emerald"><Wifi size={18} /></div>
                  <div className="spec-content">
                    <div className="spec-name">Indoor Micro-Positioning: Wi-Fi Sniffing</div>
                    <div className="spec-details text-muted text-xs">
                      Sniffs up to 5 nearby Wi-Fi MAC addresses &amp; RSSI values without requiring network password connection.
                    </div>
                  </div>
                </div>

                <div className="spec-item">
                  <div className="spec-icon text-amber"><Radio size={18} /></div>
                  <div className="spec-content">
                    <div className="spec-name">Cellular Triangulation: LBS Multi-Tower</div>
                    <div className="spec-details text-muted text-xs">
                      Extracts MCC, MNC, LAC, and Cell ID signals to compute position even in reinforced basements.
                    </div>
                  </div>
                </div>

                <div className="spec-item">
                  <div className="spec-icon text-cyan"><Clock size={18} /></div>
                  <div className="spec-content">
                    <div className="spec-name">Immediate 'CR' On-Demand Polling</div>
                    <div className="spec-details text-muted text-xs">
                      Officers can force an instant live coordinate refresh at any moment by sending protocol command `CR`.
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* Tab 2: Geofencing & Curfews */}
        {activeTab === 'geofence' && (
          <div className="engine-content-grid animate-fade-in">
            <div className="engine-info-card">
              <span className="badge-chip mono text-xs">PERIMETER CONTROL</span>
              <h3 className="card-title mt-2">Inclusion &amp; Exclusion Zones</h3>
              <p className="card-desc">
                Configure unlimited virtual perimeter boundaries via the Trackin360 portal or local REST API. 
                Ideal for house arrest compliance, workplace corridors, school restraining zones, and quarantine bubbles.
              </p>

              <div className="fence-types-grid">
                <div className="fence-card inclusion">
                  <div className="fence-tag mono">INCLUSION ZONE</div>
                  <div className="fence-name">Home Detention / Medical Facility</div>
                  <div className="fence-desc text-xs text-muted">
                    Wearer is mandated to remain within this perimeter during specified hours. Exiting triggers breach sirens.
                  </div>
                </div>

                <div className="fence-card exclusion">
                  <div className="fence-tag mono">EXCLUSION ZONE</div>
                  <div className="fence-name">Victim Residence / Prohibited Area</div>
                  <div className="fence-desc text-xs text-muted">
                    Forbidden perimeter. If the subject enters within the threshold radius, dispatch and law enforcement are alerted.
                  </div>
                </div>
              </div>

              <div className="fence-code-preview mono text-xs mt-4">
                POST /api/v1/geofences/validate-position<br />
                {`{ "device_id": "863758061830955", "lat": 17.4467, "lon": 78.3693 }`} &rarr; <span className="text-emerald">Status: COMPLIANT</span>
              </div>
            </div>

            <div className="engine-visual-card">
              <div className="geofence-map-graphic">
                <div className="map-grid-layer"></div>
                <div className="zone-circle inclusion-circle">
                  <span className="zone-label mono">APPROVED PERIMETER (RADIUS: 500M)</span>
                </div>
                <div className="zone-circle exclusion-circle">
                  <span className="zone-label mono">RESTRICTED ZONE (NO ENTRY)</span>
                </div>
                <div className="subject-marker-pin">
                  <div className="marker-dot"></div>
                  <div className="marker-badge mono">SUBJECT IN PERIMETER</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Trajectory Breadcrumb Replay */}
        {activeTab === 'replay' && (
          <div className="engine-content-grid animate-fade-in">
            <div className="engine-visual-card">
              <div className="trajectory-map-mockup">
                <div className="route-line-svg">
                  <svg viewBox="0 0 400 240" className="w-full h-full">
                    <path 
                      d="M 50 180 Q 120 160 180 120 T 320 60" 
                      fill="none" 
                      stroke="#00f0ff" 
                      strokeWidth="3" 
                      strokeDasharray="6 4"
                    />
                    <circle cx="50" cy="180" r="6" fill="#10b981" />
                    <circle cx="180" cy="120" r="6" fill="#3b82f6" />
                    <circle cx="320" cy="60" r="8" fill="#f43f5e" className="animate-ping" />
                    <circle cx="320" cy="60" r="6" fill="#00f0ff" />
                  </svg>
                </div>
                <div className="route-legend mono text-xs">
                  <span>START: 14:00 (Residence)</span>
                  <span className="text-cyan">LIVE STOP: 15:15</span>
                </div>
              </div>

              <div className="trajectory-player-bar">
                <button onClick={handlePlayToggle} className="btn-player-play">
                  {isPlayingTrail ? <Pause size={16} /> : <Play size={16} />}
                  <span>{isPlayingTrail ? "Pause Playback" : "Replay Trajectory"}</span>
                </button>
                <span className="mono text-xs text-muted">
                  Point {trailStep + 1} of {breadcrumbs.length}: {breadcrumbs[trailStep].time}
                </span>
              </div>
            </div>

            <div className="engine-info-card">
              <span className="badge-chip mono text-xs">FORENSIC AUDIT TRAIL</span>
              <h3 className="card-title mt-2">Dwell Time &amp; Speed Analysis</h3>
              <p className="card-desc">
                Review any historical date range with minute-by-minute trajectory points. 
                Identify stops, dwell duration, transit speeds, and correlation with reported incidents.
              </p>

              <div className="breadcrumb-timeline">
                {breadcrumbs.map((b, idx) => (
                  <div key={b.time} className={`timeline-entry ${trailStep === idx ? 'current' : ''}`}>
                    <div className="timeline-point"></div>
                    <div className="timeline-body">
                      <div className="timeline-top mono text-xs">
                        <strong className="text-white">{b.time}</strong> &bull; Lat: {b.lat}, Lon: {b.lon} &bull; <span className="text-cyan">{b.speed}</span>
                      </div>
                      <div className="timeline-status text-xs text-muted">{b.status}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="api-reference-note mono text-xs mt-3">
                API Endpoint: GET /api/v1/playback/{`{device_id}`}?start_date=2026-11-01
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
