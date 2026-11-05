import React, { useState, useEffect } from 'react';
import { 
  ShieldAlert, 
  Radio, 
  Cpu, 
  Navigation, 
  Activity, 
  Scale, 
  Terminal, 
  ExternalLink, 
  Menu, 
  X,
  Lock,
  ChevronRight
} from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [serverOnline, setServerOnline] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'C05 Hardware', href: '#hardware' },
    { label: 'Anti-Tamper', href: '#tamper-security' },
    { label: 'Hybrid GPS', href: '#positioning' },
    { label: 'Biometrics', href: '#biometrics' },
    { label: 'Judicial Solutions', href: '#solutions' },
    { label: 'Court Evidence', href: '#evidence' },
    { label: 'Architecture & API', href: '#api-docs' },
  ];

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        
        {/* Brand Logo */}
        <a href="#" className="nav-brand">
          <div className="brand-icon-wrapper">
            <Lock className="brand-icon" size={20} />
            <span className="brand-pulse"></span>
          </div>
          <div className="brand-text">
            <div className="brand-title">
              CUSTODY<span className="brand-highlight">WATCH</span> 360
            </div>
            <div className="brand-tagline">
              HUATEN C05 4G ECOSYSTEM
            </div>
          </div>
        </a>

        {/* Live Gateway Status Pill */}
        <div className="live-status-pill d-none-lg">
          <span className={`status-indicator-dot ${serverOnline ? 'online' : 'warn'}`}></span>
          <span className="status-indicator-text mono">
            TCP PORT 9001: <strong>LIVE CONNECTED</strong>
          </span>
        </div>

        {/* Desktop Nav Links */}
        <nav className="desktop-nav d-none-md">
          {navLinks.map((item) => (
            <a key={item.label} href={item.href} className="nav-item-link">
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Group */}
        <div className="nav-actions d-none-md">
          <a 
            href="http://192.168.10.91:8000/docs" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-nav-secondary mono"
            title="Open FastAPI Swagger API Docs"
          >
            <Terminal size={14} />
            <span>API Docs</span>
            <ExternalLink size={12} className="opacity-70" />
          </a>

          <a 
            href="https://mgr.trackin360.com/en-us/Home/Index" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-nav-portal mono"
            title="Open Trackin360 Web Management Portal"
          >
            <span>Trackin360 Portal</span>
            <ExternalLink size={13} />
          </a>

          <a href="#inquiry" className="btn-nav-primary">
            <span>Inquire</span>
            <ChevronRight size={14} />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          className="mobile-toggle-btn d-show-md" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          <div className="mobile-menu-inner container">
            <div className="mobile-status-row">
              <span className="status-indicator-dot online"></span>
              <span className="mono text-xs">Cellular Receiver: 103.44.0.5:9001 Active</span>
            </div>
            <nav className="mobile-nav-links">
              {navLinks.map((item) => (
                <a 
                  key={item.label} 
                  href={item.href} 
                  className="mobile-nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mobile-nav-actions">
              <a 
                href="http://192.168.10.91:8000/docs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-nav-secondary w-full mono text-center"
              >
                <Terminal size={14} /> FastAPI Documentation
              </a>
              <a 
                href="https://mgr.trackin360.com/en-us/Home/Index" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-nav-portal w-full text-center"
              >
                Trackin360 Management Portal
              </a>
              <a 
                href="#inquiry" 
                className="btn-nav-primary w-full text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Procurement & Inquiries
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
