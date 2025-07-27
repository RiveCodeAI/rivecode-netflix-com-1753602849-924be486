import React, { useState } from 'react';
import { ChevronUpIcon } from '@heroicons/react/24/outline';

interface FAQAccordionProps {
  question: string;
  answer: string;
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700">
      <button
        className="w-full py-6 px-8 flex items-center justify-between bg-[#2D2D2D] hover:bg-[#4D4D4D] transition-colors text-white text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg md:text-xl">{question}</span>
        <ChevronUpIcon
          className={`w-6 h-6 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="bg-[#2D2D2D] px-8 py-6">
          <p className="text-white text-lg">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQAccordion;