export interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

export interface IconProps {
  className?: string;
  size?: number;
}

export interface LanguageOption {
  code: string;
  name: string;
}

export interface CookiePreferences {
  necessary: boolean;
  functional: boolean;
  performance: boolean;
  advertising: boolean;
}