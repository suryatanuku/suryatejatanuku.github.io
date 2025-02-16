import { useEffect } from "react";
import { ThemeProvider } from "./hooks/useTheme";
import { LanguageProvider } from "./hooks/useLanguage";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Experience } from "./components/sections/Experience";
import { Education } from "./components/sections/Education";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import { Certifications } from "./components/sections/Certifications";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/Footer";
import { initializeGA, pageview, trackActiveUsers } from "../src/utils/gtag";

function App() {
  useEffect(() => {
    initializeGA(); // ✅ Load GA only once

    // Track initial pageview
    pageview(window.location.pathname);
    
    // Track active users on visit
    trackActiveUsers();

    return () => {}; // Cleanup if needed in the future
  }, []);

  return (
    <LanguageProvider>
      <ThemeProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Education />
            <Experience />
            <Skills />
            <Projects />
            <Certifications />
            <Contact />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
