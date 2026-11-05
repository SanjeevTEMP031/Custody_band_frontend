import React from 'react';
import { 
  Scale, 
  ShieldCheck, 
  HeartPulse, 
  Building2, 
  UserCheck, 
  CheckCircle2, 
  ArrowUpRight 
} from 'lucide-react';

export default function JudicialSolutionsSection() {
  const solutions = [
    {
      title: "Judicial Parole & Probation",
      badge: "CORRECTIONS",
      icon: Scale,
      color: "cyan",
      description: "Cost-effective, highly secure electronic alternative to physical incarceration. Provides 24/7 accountability for low-to-medium risk offenders, curfew compliance, and community reintegration.",
      features: [
        "Curfew schedule enforcement with automated breach logs",
        "Dwell time calculation at authorized workplace corridors",
        "Direct voice check-ins by supervising probation officers"
      ]
    },
    {
      title: "Pre-Trial Bail & House Arrest",
      badge: "LAW ENFORCEMENT",
      icon: ShieldCheck,
      color: "emerald",
      description: "Mitigates flight risk and prevents witness tampering. Enforces court-mandated stay-away exclusion zones around victims, schools, transport hubs, and international airports.",
      features: [
        "Exclusion zone breach alerts in under 2 seconds",
        "Immediate CR GPS polling on dispatcher command",
        "Tamper-evident clasp prevents physical evasion"
      ]
    },
    {
      title: "Dementia & Alzheimer's Care",
      badge: "HEALTHCARE",
      icon: HeartPulse,
      color: "rose",
      description: "Non-removable wristband designed for cognitive impairment and memory care facilities. Prevents patients with dementia from taking off their tracking band, preventing catastrophic wanderings.",
      features: [
        "Zero-removal snap-on charging avoids patient confusion",
        "Continuous body temperature & fall impact detection",
        "Geofence exit notifications to floor nurse stations"
      ]
    },
    {
      title: "Secure Hospital & Court Escorts",
      badge: "SECURITY ESCORT",
      icon: Building2,
      color: "amber",
      description: "Engineered for prisoners undergoing external medical treatment at public hospitals, inter-facility transport, or daily judicial trial hearings outside secured perimeters.",
      features: [
        "Immediate cut-strap alarm with sound siren on dispatch",
        "Multi-carrier 4G LTE coverage across all jurisdictions",
        "Encrypted CAD emergency webhook streaming"
      ]
    }
  ];

  return (
    <section id="solutions" className="section-padding solutions-section">
      <div className="container">
        
        {/* Section Heading */}
        <div className="section-head text-center">
          <div className="section-tag mono">
            <Scale size={14} className="text-cyan" />
            <span>MISSION-SPECIFIC DEPLOYMENTS</span>
          </div>
          <h2 className="section-title">
            Tailored for High-Risk Custody &amp; Vulnerable Healthcare
          </h2>
          <p className="section-desc">
            Proven in demanding criminal justice, judicial corrections, and locked psychiatric environments. 
            Delivering absolute reliability where failure is never an option.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="solutions-cards-grid">
          {solutions.map((sol) => {
            const Icon = sol.icon;
            return (
              <div key={sol.title} className="solution-card">
                <div className="solution-card-top">
                  <div className={`sol-icon-box text-${sol.color}`}>
                    <Icon size={26} />
                  </div>
                  <span className={`sol-badge mono text-xs text-${sol.color}`}>
                    {sol.badge}
                  </span>
                </div>

                <h3 className="sol-title">{sol.title}</h3>
                <p className="sol-desc">{sol.description}</p>

                <div className="sol-features-list">
                  {sol.features.map((feat, i) => (
                    <div key={i} className="sol-feature-item">
                      <CheckCircle2 size={15} className={`text-${sol.color} flex-shrink-0 mt-0.5`} />
                      <span className="text-xs text-muted">{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="sol-card-footer">
                  <a href="#inquiry" className="sol-link mono text-xs">
                    <span>Inquire for deployment</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
