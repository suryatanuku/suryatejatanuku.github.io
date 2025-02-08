import { useTranslation } from "../../hooks/useTranslation";

export function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          {t("about.me")}
        </h2>
        <div className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
          <p className="mb-4">
            I'm a passionate Full Stack Developer and Technocrat with over 9 years of
            experience in building high-performance web applications. My journey
            in software development began in 2016, and since then, I've been
            dedicated to crafting innovative solutions that drive business
            transformation.
          </p>
          <p className="mb-4">
            I specialize in modern web technologies with a strong foundation in
            both frontend and backend development. My focus is on creating
            efficient, scalable, and user-friendly applications that solve
            real-world problems, leveraging my expertise in JavaScript
            frameworks, cloud-native architectures, and microservices.
          </p>
          <p>
            When I'm not coding, I enjoy exploring new technologies, watching
            both regional and international films, Freelance, walking, gaming, attending
            occasional parties, and playing volleyball from time to time. I'm
            always eager to learn new skills, take on challenging projects, and
            collaborate with like-minded professionals to push the boundaries of
            technology.
            Open to exciting remote opportunities and ready to collaborate
            with global teams.
          </p>
        </div>
      </div>
    </section>
  );
}
