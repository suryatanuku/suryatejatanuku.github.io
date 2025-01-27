export function Education() {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Education
        </h2>
        <div className="space-y-8">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Master of Computer Science
              </h3>
              <span className="text-blue-600 dark:text-blue-400">2020 - 2022</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              University Name
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Relevant coursework: Advanced Algorithms, Machine Learning, Distributed Systems
            </p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Bachelor of Software Engineering
              </h3>
              <span className="text-blue-600 dark:text-blue-400">2016 - 2020</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              University Name
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Graduated with Honors. Major in Software Development
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}