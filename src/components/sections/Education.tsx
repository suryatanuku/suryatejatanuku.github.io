import { useTranslation } from "../../hooks/useTranslation";

export function Education() {
  const { t } = useTranslation();

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          {t("education.title", "default")}
        </h2>
        <div className="space-y-8">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {t("education.master", "default")}
              </h3>
              <span className="text-blue-600 dark:text-blue-400">
                2012 - 2015
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              <a
                href="https://aknu.edu.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                {t("education.masteruniv", "Adikavi Nannaya University")}
              </a>
              , Rajahmundry, India
            </p>

            <p className="text-gray-500 dark:text-gray-400">
              {t("education.coursework", "default")}{" "}
              {t("education.coursework2", "default")}
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {t("education.bachelor", "default")}
              </h3>
              <span className="text-blue-600 dark:text-blue-400">
                2009 - 2012
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              <a
                href="https://www.andhrauniversity.edu.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
              {t("education.bacheloruniv", "Andhra Univeristy")}
              </a>
              , Visakhapatnam, India
            </p>

            <p className="text-gray-500 dark:text-gray-400">
              {t("education.coursework", "default")}{" "}
              {t("education.course2", "default")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
