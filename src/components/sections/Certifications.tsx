import { useTranslation } from '../../hooks/useTranslation';
import certificationsData from '../../schema/certData.json'; // Import the JSON file

export function Certifications() {
  const { t } = useTranslation();
  const certifications = certificationsData.certifications; // Access the certifications array

  return (
    <section id="certifications" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          {t('certifications.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {cert.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  {cert.organization}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                  {cert.date}
                </p>
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {t('certifications.viewCredential')}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
