const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', proficiency: 90 },
      { name: 'TypeScript', proficiency: 85 },
      { name: 'Tailwind CSS', proficiency: 88 },
      { name: 'Next.js', proficiency: 82 }
    ]
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', proficiency: 85 },
      { name: 'Express', proficiency: 80 },
      { name: 'Python', proficiency: 75 },
      { name: 'PostgreSQL', proficiency: 78 }
    ]
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git', proficiency: 88 },
      { name: 'Docker', proficiency: 75 },
      { name: 'AWS', proficiency: 70 },
      { name: 'Linux', proficiency: 82 }
    ]
  },
  {
    category: 'Soft Skills',
    items: [
      { name: 'Problem Solving', proficiency: 90 },
      { name: 'Team Collaboration', proficiency: 85 },
      { name: 'Communication', proficiency: 88 },
      { name: 'Project Management', proficiency: 80 }
    ]
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {skillGroup.category}
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