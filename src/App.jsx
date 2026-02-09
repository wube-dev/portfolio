import React from "react";
// 1. Logic is abstracted
import { useDarkMode } from "./hooks/useDarkMode";

// 2. Every section is a self-contained component
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About"; // <--- IMPORT THE NEW ABOUT COMPONENT
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer"; // <--- EVEN FOOTER SHOULD BE A COMPONENT

export default function App() {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <div className="min-h-screen bg-white dark:bg-[#030303] selection:bg-blue-500/30 selection:text-white transition-colors duration-500">
      {/* Navigation */}
      <Navbar darkMode={isDark} setDarkMode={setIsDark} />

      {/* Page Content */}
      <main>
        <Hero />

        {/* Each component is clean. No inline HTML allowed here in Senior Level */}
        <About />

        <Skills />

        <Projects />

        <Experience />

        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}
