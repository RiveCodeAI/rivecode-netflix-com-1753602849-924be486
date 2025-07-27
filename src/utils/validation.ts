export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password: string): boolean => {
  return password.length >= 6;
};

export const validateLanguageCode = (code: string): boolean => {
  const validCodes = ['en', 'de', 'fr', 'es', 'it'];
  return validCodes.includes(code);
};

export const validateCookiePreferences = (preferences: Record<string, boolean>): boolean => {
  const requiredKeys = ['necessary', 'functional', 'performance', 'advertising'];
  return requiredKeys.every(key => typeof preferences[key] === 'boolean');
};

export const validateSubscriptionPlan = (plan: string): boolean => {
  const validPlans = ['basic', 'standard', 'premium'];
  return validPlans.includes(plan.toLowerCase());
};