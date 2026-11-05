import React, { useState } from 'react';
import { 
  Heart, 
  Thermometer, 
  Activity, 
  Moon, 
  Footprints, 
  AlertTriangle, 
  ShieldCheck, 
  Zap, 
  HeartPulse, 
  TrendingUp,
  Flame
} from 'lucide-react';

export default function BiometricHealthSection() {
  const [selectedMetric, setSelectedMetric] = useState('heart');

  const biometricTelemetry = [
    {
      id: 'heart',
      name: 'Continuous Heart Rate & HRV',
      current: '78 BPM',
      range: 'Resting: 64 | Peak: 104',
      status: 'Normal Sinus Rhythm',
      protocol: '[MNYD*IMEI*000A*heart,078,078]',
      icon: Heart,
      accent: 'rose',
      desc: 'High-frequency optical photoplethysmography sensor continuously checks pulse and heart rate variability (HRV). Rapid spikes trigger stress alerts; flatlines trigger skin detachment alarms.'
    },
    {
      id: 'temp',
      name: 'Real-Time Body Temperature',
      current: '36.6 °C',
      range: 'Baseline: 36.4°C - 37.1°C',
      status: 'Thermoregulation Stable',
      protocol: '[MNYD*IMEI*0009*temp,36.6]',
      icon: Thermometer,
      accent: 'cyan',
      desc: 'Precision skin-contact thermistor monitoring temperatures from -20°C to +70°C. Detects hypothermia, fever, environmental freezing exposure, or watch removal.'
    },
    {
      id: 'oxygen',
      name: 'SpO2 Blood Oxygen Saturation',
      current: '98 %',
      range: 'Optimal: 95% - 100%',
      status: 'Oxygenation Optimal',
      protocol: '[MNYD*IMEI*0009*oxygen,98]',
      icon: Activity,
      accent: 'emerald',
      desc: 'Infrared & red LED reflective sensor computes blood oxygen levels. Essential for monitoring substance-abuse rehabilitation, opioid overdose suppression, and respiratory safety.'
    },
    {
      id: 'sleep',
      name: 'Sleep Architecture (808s Periods)',
      current: '7 hrs 42 min',
      range: 'Deep: 2h 15m | Light: 5h 27m',
      status: 'Restful Sleep Cycles',
      protocol: '[MNYD*IMEI*0101*SLPRPT,676E6B4F,496,50,0,1,2,7...]',
      icon: Moon,
      accent: 'blue',
      desc: 'Evaluates sleep depth across 8 levels (0=awake to 7=deep sleep) every 808 seconds. Automatically reports overnight recovery patterns and night wandering events.'
    },
    {
      id: 'fall',
      name: '3-Axis Fall-Down Detection',
      current: 'Armed (1.0G)',
      range: 'Threshold: >2.8G Impact',
      status: 'No Abnormal Impact',
      protocol: '[MNYD*IMEI*000E*FALLDOWN,1]',
      icon: AlertTriangle,
      accent: 'amber',
      desc: 'High-precision MEMS accelerometer and gyroscope detects violent deceleration or sudden collapse. Transmits urgent fall alerts to dispatch and triggers loop calling.'
    },
    {
      id: 'pedometer',
      name: 'Pedometer & Activity Mileage',
      current: '4,210 Steps',
      range: '3.12 km | 184 kcal',
      status: 'Moderate Physical Activity',
      protocol: '[MNYD*IMEI*0014*KA,261103,4210,12,85,3.12]',
      icon: Footprints,
      accent: 'emerald',
      desc: 'Monitors daily activity level, gait changes, sedentary periods, and rollover counts to identify restlessness, distress, or physical lethargy.'
    }
  ];

  const currentData = biometricTelemetry.find(m => m.id === selectedMetric);

  return (
    <section id="biometrics" className="section-padding biometrics-section">
      <div className="container">
        
        {/* Section Heading */}
        <div className="section-head text-center">
          <div className="section-tag mono">
            <Heart size={14} className="text-rose" />
            <span>CLINICAL &amp; CUSTODY WELLNESS TELEMETRY</span>
          </div>
          <h2 className="section-title">
            Continuous Biometric &amp; Safety Monitoring
          </h2>
          <p className="section-desc">
            More than just location coordinates. The C05 watch continuously captures biometric vital signs, 
            providing indispensable proof-of-life telemetry and immediate alerts for medical emergencies, overdose, or falls.
          </p>
        </div>

        {/* Biometrics Dashboard Grid */}
        <div className="biometrics-grid">
          
          {/* Left Column: Metric Cards */}
          <div className="biometrics-cards-col">
            {biometricTelemetry.map((item) => {
              const Icon = item.icon;
              const isSelected = selectedMetric === item.id;
              return (
                <div
                  key={item.id}
                  className={`biometric-item-card ${isSelected ? 'selected' : ''}`}
                  onClick={() => setSelectedMetric(item.id)}
                >
                  <div className={`metric-icon-box text-${item.accent}`}>
                    <Icon size={20} />
                  </div>
                  <div className="metric-body">
                    <div className="metric-name">{item.name}</div>
                    <div className="metric-range text-xs text-muted">{item.range}</div>
                  </div>
                  <div className="metric-right mono">
                    <div className={`metric-val text-${item.accent}`}>{item.current}</div>
                    <span className="metric-state-dot"></span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: In-Depth Telemetry Inspector */}
          <div className="biometrics-inspector-card">
            <div className="inspector-top-banner">
              <span className="mono text-xs text-cyan">TELEMETRY STREAM DETAILS</span>
              <span className="badge-chip mono text-xs">STATUS: {currentData.status}</span>
            </div>

            <div className="inspector-main">
              <div className="inspector-value-row">
                <span className="inspector-val mono">{currentData.current}</span>
                <span className="inspector-subtitle">{currentData.name}</span>
              </div>

              {/* Animated Waveform Visualizer */}
              <div className="waveform-container">
                <div className="waveform-lines">
                  <div className="wave-bar bar-1"></div>
                  <div className="wave-bar bar-2"></div>
                  <div className="wave-bar bar-3"></div>
                  <div className="wave-bar bar-4"></div>
                  <div className="wave-bar bar-5"></div>
                  <div className="wave-bar bar-6"></div>
                  <div className="wave-bar bar-7"></div>
                  <div className="wave-bar bar-8"></div>
                  <div className="wave-bar bar-9"></div>
                  <div className="wave-bar bar-10"></div>
                  <div className="wave-bar bar-11"></div>
                  <div className="wave-bar bar-12"></div>
                </div>
                <div className="waveform-grid-overlay"></div>
              </div>

              <p className="inspector-desc">{currentData.desc}</p>

              {/* Hardware Protocol Specification Box */}
              <div className="inspector-code-box">
                <div className="code-label mono text-xs text-muted">
                  LIVE TCP HARDWARE PACKET STREAM:
                </div>
                <div className="code-packet mono text-xs text-cyan">
                  {currentData.protocol}
                </div>
              </div>

              <div className="inspector-pills-row">
                <span className="meta-pill mono text-xs">Sampling: Auto-adaptive</span>
                <span className="meta-pill mono text-xs">Transmission: 4G LTE IoT</span>
                <span className="meta-pill mono text-xs">Audit Stamped: UTC &plusmn;0</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
