import { Github, Linkedin, Mail, FileDown, Instagram } from "lucide-react";
import { useTranslation } from "../../hooks/useTranslation";

export function Hero() {
  const { t } = useTranslation();
  const handleDownloadResume = () => {
    const resumeUrl =
      "https://d35426vxse2cy3.cloudfront.net/SURYA_TANUKU_FSD.pdf"; // Ensure it's HTTPS

    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "SURYA_TANUKU_FSD.pdf"; // Suggested filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Clean up
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {t("home.greeting")}{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Surya Teja Tanuku
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            {t("home.role")}
          </p>
          <div className="flex gap-4 justify-center lg:justify-start mb-8">
            <button
              onClick={handleDownloadResume}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Download Resume
            </button>

            <a
              href="#contact"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {t("home.contactMe")}
            </a>
            <a
              href="#projects"
              className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              {t("home.viewProjects")}
            </a>
          </div>
          <div className="flex gap-4 justify-center lg:justify-start">
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
            <a
              href="https://www.instagram.com/suryatejatanuku?utm_source=qr&igsh=MWV0ODF6Zm96cTdzdA%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="flex-1">
          <img
            src="https://d35426vxse2cy3.cloudfront.net/1000120150.jpg"
            alt="Profile"
            className="rounded-full w-48 h-48 lg:w-96 lg:h-96 object-cover mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
