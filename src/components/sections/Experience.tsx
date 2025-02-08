import { useTranslation } from "../../hooks/useTranslation";

export function Experience() {
  const { t } = useTranslation();

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          {t("experience.title", "default")}
        </h2>
        <div className="space-y-8">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {t(
                  "experience.company1",
                  "Virtusa Consultancy Services Limited"
                )}
              </h3>
              <span className="text-blue-600 dark:text-blue-400">
                2023 - Present
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              <a
                href="https://www.virtusa.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                {t(
                  "experience.companyWebsite",
                  "Virtusa Consultancy Services Limited"
                )}
              </a>
              , Hyderabad, India
            </p>
          </div>


          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {t(
                  "experience.company2",
                  "L & T Technology Services Limited - LTTS"
                )}
              </h3>
              <span className="text-blue-600 dark:text-blue-400">
                2021 - 2023
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              <a
                href="https://www.ltts.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                {t(
                  "experience.companyWebsite",
                  "L & T Technology Services Limited - LTTS"
                )}
              </a>
              , Bengaluru, India
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {t("experience.company3", "PricewaterhouseCoopers (PwC) India")}
              </h3>
              <span className="text-blue-600 dark:text-blue-400">
                2019 - 2021
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              <a
                href="https://www.pwc.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                {t("experience.companyWebsite", "PricewaterhouseCoopers (PwC) India")}
              </a>
              , Bengaluru, India
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {t("experience.company5", "Infosys Limited")}
              </h3>
              <span className="text-blue-600 dark:text-blue-400">
                2016 - 2019
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              <a
                href="https://www.infosys.com//"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                {t("experience.companyWebsite", "Infosys Limited")}
              </a>
              , Bengaluru, India
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {t("experience.company4", "Dreamstep Software Innovations")}
              </h3>
              <span className="text-blue-600 dark:text-blue-400">
                2016 - 2019
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              <a
                href="https://dreamstep.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                {t("experience.companyWebsite", "Dreamstep Software Innovations")}
              </a>
              , Rajahmundry, India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
