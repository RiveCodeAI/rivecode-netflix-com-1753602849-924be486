import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const Header: React.FC = () => {
  return (
    <header className="fixed w-full top-0 z-50 bg-transparent">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <img 
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-24/consent/87b6a5c0-0104-4e96-a291-092c11350111/019808e2-d1a7-75a7-a8b7-f85133e4c823/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Netflix"
          className="h-[50px] w-auto"
        />
        
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 bg-black bg-opacity-60 text-white px-4 py-1 rounded border border-white/30">
            <span>English</span>
            <ChevronDownIcon className="h-4 w-4" />
          </button>
          
          <button className="bg-netflix-red text-white px-4 py-1 rounded font-medium hover:bg-[#f40612] transition-colors">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;