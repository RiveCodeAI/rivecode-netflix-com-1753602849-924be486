import React, { useState } from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

const EmailSignup: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="text-center">
      <p className="text-lg md:text-xl text-white mb-4">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-2 max-w-[600px] mx-auto">
        <div className="flex-1">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-4 text-white bg-[#1a1a1a] border border-gray-600 rounded focus:outline-none focus:border-gray-400"
            required
          />
        </div>
        <button
          type="submit"
          className="netflix-button flex items-center justify-center gap-2 px-8 py-4 text-xl"
        >
          Get Started
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      </form>
    </div>
  );
};

export default EmailSignup;