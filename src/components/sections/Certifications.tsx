const certifications = [
  {
    title: 'AWS Certified Developer',
    organization: 'Amazon Web Services',
    date: 'January 2023',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400',
    credentialUrl: '#',
  },
  {
    title: 'React Developer Certification',
    organization: 'Meta',
    date: 'June 2023',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=400',
    credentialUrl: '#',
  },
  // Add more certifications as needed
];

export function Certifications() {
  return (
    <section id="certifications" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Certifications
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
                  View Credential
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}