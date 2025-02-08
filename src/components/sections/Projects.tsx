import { useEffect, useState } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { useInView } from 'react-intersection-observer';
import projectsData from '../../schema/projectsData.json'; // Import JSON data

const ITEMS_PER_PAGE = 6;

export function Projects() {
  const { t } = useTranslation();
  const [displayedProjects, setDisplayedProjects] = useState(projectsData.slice(0, ITEMS_PER_PAGE));
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView && displayedProjects.length < projectsData.length) {
      const nextProjects = projectsData.slice(
        displayedProjects.length,
        displayedProjects.length + ITEMS_PER_PAGE
      );
      setDisplayedProjects(prev => [...prev, ...nextProjects]);
    }
  }, [inView, displayedProjects.length]);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          {t('projects.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <div
              key={`${project.title}-${index}`}
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {t('projects.liveDemo')}
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {displayedProjects.length < projectsData.length && (
          <div ref={ref} className="flex justify-center mt-8">
            <div className="animate-pulse text-gray-500 dark:text-gray-400">
              {t('projects.loadMore')}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
