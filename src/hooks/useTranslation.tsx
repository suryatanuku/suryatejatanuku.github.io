import { useLanguage } from './useLanguage';
import { frTranslations } from '../translations/fr';
import { enTranslations } from '../translations/en';

const translations = {
  en: enTranslations,
  fr: frTranslations
};

export function useTranslation() {
  const { language } = useLanguage();

  const t = (key: string) => {
    const keys = key.split('.');
    let value = translations[language as keyof typeof translations];

    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k as keyof typeof value];
      }
    }

    // Ensure the value is a string
    return typeof value === 'string' ? value : key;
  };

  return { t };
}
