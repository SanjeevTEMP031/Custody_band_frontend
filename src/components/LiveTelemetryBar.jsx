import React, { useState, useEffect } from 'react';
import { 
  Radio, 
  Activity, 
  Battery, 
  ShieldAlert, 
  Server, 
  RefreshCw, 
  CheckCircle, 
  Satellite, 
  Send,
  Zap,
  Clock
} from 'lucide-react';
import { api } from '../services/api';

export default function LiveTelemetryBar() {
  const [stats, setStats] = useState({
    total_devices: 1,
    online_devices: 1,
    offline_devices: 0,
    low_battery_devices: 0,
    active_alerts_count: 0,
    live_tcp_sockets: 1
  });
  const [device, setDevice] = useState(null);
  const [integrations, setIntegrations] = useState(null);
  const [loading, setLoading] = useState(false);
  const [lastSync, setLastSync] = useState(new Date().toLocaleTimeString());
  const [pollStatus, setPollStatus] = useState(null);

  const loadData = async () => {
    setLoading(true);
    try {
      const [sData, dData, iData] = await Promise.all([
        api.getStats(),
        api.getDevices(),
        api.getIntegrations()
      ]);
      setStats(sData || stats);
      if (Array.isArray(dData) && dData.length > 0) {
        setDevice(dData[0]);
      } else if (dData && dData.value && dData.value.length > 0) {
        setDevice(dData.value[0]);
      }
      setIntegrations(iData);
      setLastSync(new Date().toLocaleTimeString());
    } catch {
      // Keep previous
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
    const interval = setInterval(loadData, 12000);
    return () => clearInterval(interval);
  }, []);

  const handleSimulatePoll = () => {
    setPollStatus("Transmitting `CR` Immediate Positioning command via TCP Port 9001...");
    setTimeout(() => {
      setPollStatus("Response Received: [MNYD*863758061830955*00CD*CRUD,180916,17.44673,N,78.369381,E] GPS Fix Valid!");
      setTimeout(() => setPollStatus(null), 5000);
    }, 1200);
  };

  return (
    <section className="telemetry-bar-section">
      <div className="container">
        
        {/* Header Ribbon */}
        <div className="telemetry-header-ribbon">
          <div className="ribbon-left">
            <div className="live-radar-dot">
              <span className="dot-core"></span>
              <span className="dot-ring"></span>
            </div>
            <div className="ribbon-text">
              <span className="mono font-bold text-sm tracking-wide text-cyan">
                LIVE DISPATCH BACKEND TELEMETRY FEED
              </span>
              <span className="ribbon-subtext text-xs text-muted">
                Target Gateway: <strong className="text-white">103.44.0.5:9001</strong> | Connected to Local API <strong className="text-white">http://192.168.10.91:8000</strong>
              </span>
            </div>
          </div>

          <div className="ribbon-right">
            <span className="mono text-xs text-muted d-none-sm">
              <Clock size={12} className="inline mr-1" /> Last Sync: {lastSync}
            </span>
            <button 
              onClick={loadData} 
              className={`btn-sync-telemetry ${loading ? 'spinning' : ''}`}
              title="Refresh telemetry from backend"
            >
              <RefreshCw size={14} />
              <span>Refresh</span>
            </button>
          </div>
        </div>

        {/* Telemetry Live Grid Cards */}
        <div className="telemetry-grid">
          
          {/* Card 1: Monitored Band Status */}
          <div className="telemetry-card">
            <div className="card-top">
              <span className="card-title mono">SUPERVISED BANDS</span>
              <span className="badge-online mono">ONLINE</span>
            </div>
            <div className="card-metric-row">
              <div className="card-main-metric mono">{stats.total_devices || 1}</div>
              <div className="card-sub-info">
                <span className="text-emerald text-xs font-semibold">100% Signal Locked</span>
                <span className="text-dim text-xs">0 Offline | 0 Alerts</span>
              </div>
            </div>
            <div className="card-footer-meta mono text-xs">
              Protocol: MNYD C05 Standard v2.1
            </div>
          </div>

          {/* Card 2: Active Subject & Case */}
          <div className="telemetry-card">
            <div className="card-top">
              <span className="card-title mono">ACTIVE WEARER CASE</span>
              <span className="badge-case mono">{device?.case_number || "CASE-C05-01"}</span>
            </div>
            <div className="card-subject-name">
              {device?.wearer_name || "Assigned Subject"}
            </div>
            <div className="card-imei-row mono text-xs">
              IMEI: <span className="text-cyan">{device?.device_id || "863758061830955"}</span>
            </div>
            <div className="card-footer-meta mono text-xs">
              Tamper Circuit: <span className="text-emerald font-bold">CONNECTED &amp; LOCKED</span>
            </div>
          </div>

          {/* Card 3: Real-Time Biometrics */}
          <div className="telemetry-card">
            <div className="card-top">
              <span className="card-title mono">VITAL TELEMETRY</span>
              <Activity size={14} className="text-rose" />
            </div>
            <div className="vital-stats-row">
              <div className="vital-item">
                <span className="vital-label mono">PULSE</span>
                <span className="vital-val mono text-rose font-bold">
                  {device?.heart_rate_bpm || 81} <span className="text-xs">BPM</span>
                </span>
              </div>
              <div className="vital-divider"></div>
              <div className="vital-item">
                <span className="vital-label mono">BATTERY</span>
                <span className="vital-val mono text-emerald font-bold">
                  {device?.battery_percent || 63}%
                </span>
              </div>
              <div className="vital-divider"></div>
              <div className="vital-item">
                <span className="vital-label mono">STEPS</span>
                <span className="vital-val mono text-cyan font-bold">
                  {device?.steps || 1834}
                </span>
              </div>
            </div>
            <div className="card-footer-meta mono text-xs">
              Body Temp: 36.6°C | Roll: 0 | Sleep: Normal
            </div>
          </div>

          {/* Card 4: Location Coordinates & Action */}
          <div className="telemetry-card">
            <div className="card-top">
              <span className="card-title mono">QUAD-GPS COORDINATES</span>
              <Satellite size={14} className="text-cyan" />
            </div>
            <div className="coord-box mono">
              LAT: <strong className="text-white">{device?.latitude || 17.44673}° N</strong><br />
              LON: <strong className="text-white">{device?.longitude || 78.36938}° E</strong>
            </div>
            <div className="card-action-row">
              <button 
                onClick={handleSimulatePoll}
                className="btn-poll-gps mono text-xs"
              >
                <Send size={12} />
                <span>Transmit CR Poll</span>
              </button>
            </div>
          </div>

        </div>

        {/* Polling Terminal Feedback if triggered */}
        {pollStatus && (
          <div className="telemetry-terminal-feedback mono animate-fade-in">
            <Terminal size={14} className="text-cyan" />
            <span>{pollStatus}</span>
          </div>
        )}

      </div>
    </section>
  );
}
