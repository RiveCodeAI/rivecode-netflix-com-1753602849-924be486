import React from 'react';
import { DeviceTabletIcon, ArrowDownTrayIcon, TvIcon, UserGroupIcon } from '@heroicons/react/24/outline';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  const getIcon = () => {
    switch (icon) {
      case 'tv':
        return <TvIcon className="w-12 h-12 text-white" />;
      case 'download':
        return <ArrowDownTrayIcon className="w-12 h-12 text-white" />;
      case 'devices':
        return <DeviceTabletIcon className="w-12 h-12 text-white" />;
      case 'kids':
        return <UserGroupIcon className="w-12 h-12 text-white" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-[#121212] rounded-lg p-8 flex flex-col items-start">
      <div className="mb-6">{getIcon()}</div>
      <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default FeatureCard;