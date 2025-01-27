import { useEffect, useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';

export function Footer() {
  const { t } = useTranslation();
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Simulate visitor count with localStorage
    const count = parseInt(localStorage.getItem('visitorCount') || '0');
    if (!localStorage.getItem('hasVisited')) {
      localStorage.setItem('visitorCount', String(count + 1));
      localStorage.setItem('hasVisited', 'true');
    }
    setVisitorCount(count + 1);
  }, []);

  return (
    <footer className="bg-white dark:bg-gray-900 py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <p className="text-gray-600 dark:text-gray-300">
            {t('footer.credit')}
          </p>
          <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
            <span>{t('footer.visitors')}:</span>
            <span className="font-mono">{visitorCount}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}