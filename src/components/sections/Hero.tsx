import { Github, Linkedin, Mail, FileDown } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';

export function Hero() {
  const { t } = useTranslation();
  const handleDownloadResume = () => {
    const resumeUrl = '/path-to-your-resume.pdf';  // Ensure this path is correct
    window.open(resumeUrl, '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {t('home.greeting')} <span className="text-blue-600 dark:text-blue-400">Surya Teja Tanuku</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            {t('home.role')}
          </p>
          <div className="flex gap-4 justify-center lg:justify-start mb-8">
            <button
              onClick={handleDownloadResume}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <FileDown className="w-5 h-5" />
              {t('home.resume')}
            </button>
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {t('home.contactMe')}
            </a>
            <a
              href="#projects"
              className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              {t('home.viewProjects')}
            </a>
          </div>
          <div className="flex gap-4 justify-center lg:justify-start">
            <a
              href="https://github.com/suryatanuku"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/suryatejatanuku/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:surya.tanuku@hotmail.com"
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=600&h=600"
            alt="Profile"
            className="rounded-full w-48 h-48 lg:w-96 lg:h-96 object-cover mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
