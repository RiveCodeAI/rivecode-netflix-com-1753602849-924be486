import React from 'react';
import EmailSignup from './EmailSignup';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-white pt-20">
      <div className="absolute inset-0 -z-10">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/DE-en-20250721-TRIFECTA-perspective_dce16a36-990c-42cc-9038-3d76fd400e2a_large.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-gradient"></div>
      </div>

      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-5">
          Unlimited movies, TV shows, and more
        </h1>
        <p className="text-2xl mb-5">
          Starts at €4.99. Cancel anytime.
        </p>
        <p className="text-xl mb-5">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <EmailSignup />
      </div>
    </div>
  );
};

export default Hero;