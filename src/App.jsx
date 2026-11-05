import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LiveTelemetryBar from './components/LiveTelemetryBar';
import TamperSecuritySection from './components/TamperSecuritySection';
import PositioningEngine from './components/PositioningEngine';
import BiometricHealthSection from './components/BiometricHealthSection';
import HardwareArchitecture from './components/HardwareArchitecture';
import JudicialSolutionsSection from './components/JudicialSolutionsSection';
import ForensicEvidenceSection from './components/ForensicEvidenceSection';
import PlatformAndApiSection from './components/PlatformAndApiSection';
import ProcurementSection from './components/ProcurementSection';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <div className="app-root">
      <Navbar />
      <main>
        <Hero />
        <LiveTelemetryBar />
        <TamperSecuritySection />
        <PositioningEngine />
        <BiometricHealthSection />
        <HardwareArchitecture />
        <JudicialSolutionsSection />
        <ForensicEvidenceSection />
        <PlatformAndApiSection />
        <ProcurementSection />
      </main>
      <Footer />
    </div>
  );
}
