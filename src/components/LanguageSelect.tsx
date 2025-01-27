import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'Français' },
  { code: 'ur', name: 'اردو' },
  { code: 'es', name: 'Español' },
  { code: 'de', name: 'Deutsch' },
  { code: 'pt', name: 'Português' },
] as const;

export function LanguageSelect() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative inline-block text-left">
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as typeof language)}
        className="appearance-none bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 pr-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-600 dark:text-gray-300 pointer-events-none" />
    </div>
  );
}