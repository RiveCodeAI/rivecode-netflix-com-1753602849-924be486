import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface CookieConsentProps {
  onAccept: () => void;
  onReject: () => void;
  onClose: () => void;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ onAccept, onReject, onClose }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black bg-opacity-90 text-white p-6 z-50">
      <div className="container mx-auto max-w-6xl relative">
        <button 
          onClick={onClose}
          className="absolute top-0 right-0 p-2"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>
        
        <p className="mb-4 pr-8">
          Netflix and third parties use cookies and similar technologies on this website to collect information about your browsing activities, which we use to analyse your use of the website, personalise our services, and customise online advertisements. You can accept, reject, or personalise your choices by selecting 'Learn more'. Netflix supports the Digital Advertising Alliance Principles.
        </p>
        
        <div className="flex gap-4">
          <button
            onClick={() => {}}
            className="px-4 py-2 bg-transparent border border-white rounded hover:bg-white hover:bg-opacity-10"
          >
            Learn more
          </button>
          
          <button
            onClick={onReject}
            className="px-4 py-2 bg-netflix-red rounded hover:bg-[#f40612]"
          >
            Reject
          </button>
          
          <button
            onClick={onAccept}
            className="px-4 py-2 bg-netflix-red rounded hover:bg-[#f40612]"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;