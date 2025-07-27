export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: 'tv' | 'download' | 'device' | 'profile';
  image?: string;
}

export interface FeatureCardProps {
  feature: Feature;
  className?: string;
}

export interface FeatureGridProps {
  features: Feature[];
  className?: string;
}

export const FEATURE_ICONS = {
  tv: 'TvIcon',
  download: 'DownloadIcon',
  device: 'DeviceTabletIcon',
  profile: 'UserGroupIcon'
} as const;