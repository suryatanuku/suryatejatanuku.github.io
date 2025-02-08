import { useTranslation } from '../../hooks/useTranslation';
import skillsData from '../../schema/skillsData.json'; // Import JSON data

export function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          {t('skills.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {t(`skills.categories.${skillGroup.category}`, skillGroup.category)}
              </h3>
              <ul className="space-y-4">
                {skillGroup.items.map((skill) => (
                  <li key={skill.name} className="space-y-1">
                    <div className="flex justify-between text-gray-600 dark:text-gray-300">
                      <span>{skill.name}</span>
                      <span>{skill.proficiency}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full"
                        style={{ width: `${skill.proficiency}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
