import React, { useState } from 'react';
import { 
  Terminal, 
  Server, 
  ExternalLink, 
  Send, 
  Check, 
  Radio, 
  Database, 
  Layers, 
  Code,
  Shield,
  Zap
} from 'lucide-react';

export default function PlatformAndApiSection() {
  const [selectedCommand, setSelectedCommand] = useState('CR');
  const [commandParam, setCommandParam] = useState('');
  const [terminalOutput, setTerminalOutput] = useState([
    "INITIALIZING CUSTODY TELEMETRY CONSOLE...",
    "CONNECTED TO REST API: http://192.168.10.91:8000",
    "CELLULAR RAW SOCKET: 103.44.0.5:9001 (LISTENING)",
    "FIREBASE CLOUD INTEGRATION: ACTIVE (update-custody-band-back-1c169)",
    "READY TO DISPATCH PROTOCOL COMMANDS."
  ]);

  const commandCatalog = [
    { cmd: 'CR', label: 'Poll Live GPS', paramPlaceholder: 'None (Immediate)', desc: 'Powers on GPS chip and returns immediate high-precision fix.' },
    { cmd: 'UPLOAD', label: 'Set Reporting Interval', paramPlaceholder: 'Seconds (e.g. 60 or 300)', desc: 'Sets location reporting interval while in motion (default 600s).' },
    { cmd: 'RESET', label: 'Reboot Device OS', paramPlaceholder: 'None', desc: 'Performs a remote soft reboot of the watch operating system.' },
    { cmd: 'SETIP', label: 'Update Gateway IP/Port', paramPlaceholder: 'e.g. 103.44.0.5,9001', desc: 'Redirects cellular telemetry to another secure cloud endpoint.' },
    { cmd: 'VERNO', label: 'Query Firmware Build', paramPlaceholder: 'None', desc: 'Queries running firmware version and compile timestamp.' }
  ];

  const handleSendCommand = (e) => {
    e.preventDefault();
    const packet = commandParam 
      ? `[MNYD*863758061830955*LEN*${selectedCommand},${commandParam}]` 
      : `[MNYD*863758061830955*LEN*${selectedCommand}]`;

    setTerminalOutput((prev) => [
      ...prev,
      `> OUTBOUND: ${packet}`,
      `> INBOUND (ACK): [MNYD*863758061830955*0004*${selectedCommand}] (HTTP 200 SUCCESS)`
    ]);
  };

  const apiEndpoints = [
    { method: 'GET', path: '/api/v1/dashboard/stats', tag: 'Dashboard', desc: 'Real-time KPIs: active bands, battery %, online status, active alarms.' },
    { method: 'GET', path: '/api/v1/gps/live', tag: 'GPS & Locations', desc: 'Latest GPS coordinates for all monitored wearers simultaneously.' },
    { method: 'GET', path: '/api/v1/monitoring/live-grid', tag: 'Monitoring Grid', desc: 'Complete wearer grid: coordinates, battery, steps, heart rate, tamper status.' },
    { method: 'POST', path: '/api/v1/commands/send', tag: 'Commands', desc: 'Transmit protocol commands (CR, UPLOAD, RESET) via raw TCP socket.' },
    { method: 'GET', path: '/api/v1/playback/{device_id}', tag: 'Playback', desc: 'Chronological GPS trail breadcrumbs with dwell stops and transit distance.' },
    { method: 'GET', path: '/api/v1/exports/court-evidence/{device_id}', tag: 'Evidence', desc: 'Generate court-certified legal evidence packet for judicial hearings.' }
  ];

  return (
    <section id="api-docs" className="section-padding api-section">
      <div className="container">
        
        {/* Section Heading */}
        <div className="section-head text-center">
          <div className="section-tag mono">
            <Terminal size={14} className="text-cyan" />
            <span>OPEN TELEMETRY &amp; API ECOSYSTEM</span>
          </div>
          <h2 className="section-title">
            Enterprise Cloud Architecture &amp; REST API
          </h2>
          <p className="section-desc">
            Directly integrates with law enforcement CAD dispatch systems, county jail databases, 
            and hospital record systems via high-throughput FastAPI and Firebase Cloud Firestore.
          </p>
        </div>

        {/* Console and Architecture Grid */}
        <div className="api-main-grid">
          
          {/* Left Column: Interactive Command Terminal Simulator */}
          <div className="terminal-card">
            <div className="terminal-top">
              <div className="terminal-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="terminal-title mono text-xs">
                C05 PROTOCOL DISPATCH TERMINAL
              </div>
              <span className="badge-terminal-port mono text-xs">TCP: 9001</span>
            </div>

            {/* Terminal Screen */}
            <div className="terminal-screen mono text-xs">
              {terminalOutput.map((line, i) => (
                <div key={i} className={`terminal-line ${line.startsWith('>') ? 'text-cyan' : 'text-muted'}`}>
                  {line}
                </div>
              ))}
            </div>

            {/* Command Dispatch Form */}
            <form onSubmit={handleSendCommand} className="terminal-input-bar">
              <div className="command-selector-group">
                <label className="mono text-xs text-muted">SELECT COMMAND:</label>
                <select 
                  value={selectedCommand}
                  onChange={(e) => {
                    setSelectedCommand(e.target.value);
                    setCommandParam('');
                  }}
                  className="terminal-select mono text-xs"
                >
                  {commandCatalog.map(c => (
                    <option key={c.cmd} value={c.cmd}>{c.cmd} &mdash; {c.label}</option>
                  ))}
                </select>
              </div>

              {commandCatalog.find(c => c.cmd === selectedCommand)?.paramPlaceholder !== 'None' && (
                <input 
                  type="text"
                  placeholder={commandCatalog.find(c => c.cmd === selectedCommand)?.paramPlaceholder}
                  value={commandParam}
                  onChange={(e) => setCommandParam(e.target.value)}
                  className="terminal-input-param mono text-xs"
                />
              )}

              <button type="submit" className="btn-terminal-submit mono text-xs">
                <Send size={14} />
                <span>Transmit Packet</span>
              </button>
            </form>
          </div>

          {/* Right Column: FastAPI Swagger Portal Direct Access */}
          <div className="api-endpoints-card">
            <div className="endpoints-header">
              <div>
                <h3 className="card-title">Production Backend Endpoints</h3>
                <p className="text-xs text-muted">Active REST API service running on your server</p>
              </div>
              <a 
                href="http://192.168.10.91:8000/docs" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-open-swagger mono text-xs"
              >
                <span>Interactive Swagger UI</span>
                <ExternalLink size={14} />
              </a>
            </div>

            <div className="endpoints-list">
              {apiEndpoints.map((ep) => (
                <div key={ep.path} className="endpoint-item">
                  <div className="endpoint-method-row">
                    <span className={`method-badge ${ep.method.toLowerCase()} mono`}>
                      {ep.method}
                    </span>
                    <span className="endpoint-path mono">{ep.path}</span>
                    <span className="endpoint-tag mono text-xs">{ep.tag}</span>
                  </div>
                  <div className="endpoint-desc text-xs text-muted">{ep.desc}</div>
                </div>
              ))}
            </div>

            <div className="api-footer-integration mono text-xs">
              <div className="integration-row">
                <Server size={14} className="text-emerald" />
                <span>Backend: FastAPI 0.115 + Python 3.12 (Port 8000)</span>
              </div>
              <div className="integration-row">
                <Database size={14} className="text-cyan" />
                <span>Storage: Google Firebase Firestore + SQLite Cache</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
