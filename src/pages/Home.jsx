import { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { StarBackground } from "@/components/StarBackground";
import { LightThemeBackground } from "@/components/LightThemeBackground"; // ADD THIS
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Watch for theme changes
  useEffect(() => {
    // Initial check
    const storedTheme = localStorage.getItem("theme");
    setIsDarkMode(storedTheme === "dark" || !storedTheme);

    // Listen for theme changes
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Conditional background based on theme */}
      {isDarkMode ? <StarBackground /> : <LightThemeBackground />}
      
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};