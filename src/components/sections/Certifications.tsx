import { useTranslation } from '../../hooks/useTranslation';
import certificationsData from '../../schema/certData.json'; // Import the JSON file

export function Certifications() {
  const { t } = useTranslation();
  const certifications = certificationsData.certifications; // Access the certifications array

  return (
    <section id="certifications" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          {t('certifications.title', 'Certifications')}
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg w-72 h-auto p-4"
            >
              <img
                src={`https://${cert.image}`} // Load image from CloudFront
                alt={cert.title}
                className="w-56 h-56 object-cover mx-auto" // Adjusted image size
              />
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 break-words">
                  {cert.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                  Issued By: <strong>{cert.organization}</strong>
                </p>

                <div className="flex flex-col items-center space-y-2">
                  {/* Badge Link */}
                  {cert.Badge && (
                    <a
                      href={cert.Badge}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline text-sm break-words"
                    >
                      {t('certifications.badge', 'View Badge')}
                    </a>
                  )}

                  {/* View Certificate Link */}
                  {cert.viewCertificate && (
                    <a
                      href={`https://${cert.viewCertificate}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 dark:text-green-400 hover:underline text-sm break-words"
                    >
                      {t('certifications.viewCertificate', 'View Certificate')}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
