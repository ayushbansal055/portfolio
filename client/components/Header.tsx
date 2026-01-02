import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.remove("dark");
      setIsDark(false);
    } else {
      root.classList.add("dark");
      setIsDark(true);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border transition-colors duration-300">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 font-bold text-xl text-primary hover:opacity-80 transition-opacity"
        >
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center text-white font-bold">
            A
          </div>
          Ayush
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#about"
            className="text-foreground hover:text-primary transition-colors duration-200"
          >
            About
          </a>
          <a
            href="#education"
            className="text-foreground hover:text-primary transition-colors duration-200"
          >
            Education
          </a>
          <a
            href="#experience"
            className="text-foreground hover:text-primary transition-colors duration-200"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="text-foreground hover:text-primary transition-colors duration-200"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="text-foreground hover:text-primary transition-colors duration-200"
          >
            Skills
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {isDark ? "☀️" : "🌙"}
          </button>
          <a
            href="mailto:ayushbansal022@gmail.com"
            className="hidden sm:inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium duration-200"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
