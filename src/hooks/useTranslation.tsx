import { useLanguage } from "./useLanguage";
import { frTranslations } from "../translations/fr";
import { enTranslations } from "../translations/en";
import { urTranslations } from "../translations/ur";
import { esTranslations } from "../translations/es";
import { deTranslations } from "../translations/de";
import { ptTranslations } from "../translations/pt";

// Define the type for translations
interface TranslationStructure {
  nav: {
    home: string;
    about: string;
    education: string;
    skills: string;
    projects: string;
    certifications: string;
    contact: string;
  };
  portfolio: string;
  hero: {
    greeting: string;
    role: string;
    resume: string;
    contactMe: string;
    viewProjects: string;
  };
  about: {
    me: string;
  };
  education: {
    title: string;
    master: string;
    bachelor: string;
    bacheloruniv: string;
    masteruniv: string;
    coursework: string;
    coursework2: string;
  };
  skills: {
    title: string;
  };
  certifications: {
    title: string;
    viewCredential: string;
  };
  contact: {
    title: string;
    info: string;
    name: string;
    email: string;
    message: string;
    send: string;
  };
  footer: {
    credit: string;
    visitors: string;
  };
}

const translations: Record<string, TranslationStructure> = {
  en: enTranslations,
  fr: frTranslations,
  ur: urTranslations,
  es:esTranslations,
  de:deTranslations,
  pt:ptTranslations,
};

export function useTranslation() {
  const { language } = useLanguage();

  // Fallback to English if language is not defined or is invalid
  const validLanguage = language && translations[language] ? language : 'en';

  const t = (key: string, category: string) => {
    const keys = key.split(".");
    let value: any = translations[validLanguage as keyof typeof translations];

    // Narrow down value based on keys
    for (const k of keys) {
      if (value && typeof value === "object") {
        value = value[k];
      }
    }

    // Ensure the value is a string before returning
    return typeof value === "string" ? value : key;
  };

  return { t };
}
