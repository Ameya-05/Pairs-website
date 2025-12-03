import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import UseCases from './components/UseCases';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';

export default function Home() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [modalType, setModalType] = useState('request');

  const openRequestDemo = () => {
    setModalType('request');
    setDemoModalOpen(true);
  };

  const openWatchDemo = () => {
    setModalType('video');
    setDemoModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar onRequestDemo={openRequestDemo} />
      
      {/* Hero Section */}
      <Hero 
        onRequestDemo={openRequestDemo} 
        onWatchDemo={openWatchDemo} 
      />
      
      {/* Products Section */}
      <Products />
      
      {/* Use Cases Section */}
      <UseCases />
      
      {/* How It Works Section */}
      <HowItWorks />
      
      {/* Benefits Section */}
      <Benefits />
      
      {/* Pricing Section */}
      <Pricing onRequestDemo={openRequestDemo} />
      
      {/* Contact Section */}
      <Contact />
      
      {/* Footer */}
      <Footer />
      
      {/* Demo Modal */}
      <DemoModal 
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        type={modalType}
      />
    </div>
  );
}