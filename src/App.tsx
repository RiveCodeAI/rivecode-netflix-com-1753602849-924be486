import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrendingSection from './components/TrendingSection';
import FeaturesGrid from './components/FeaturesGrid';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';

const App: React.FC = () => {
  const [showCookieConsent, setShowCookieConsent] = useState(true);

  const handleAccept = () => {
    setShowCookieConsent(false);
  };

  const handleReject = () => {
    setShowCookieConsent(false);
  };

  const handleClose = () => {
    setShowCookieConsent(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <TrendingSection />
        <FeaturesGrid />
        <FAQSection />
      </main>
      <Footer />
      {showCookieConsent && (
        <CookieConsent 
          onAccept={handleAccept}
          onReject={handleReject}
          onClose={handleClose}
        />
      )}
    </div>
  );
};

export default App;