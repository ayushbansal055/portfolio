import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 font-bold text-xl text-primary"
        >
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center text-white font-bold">
            A
          </div>
          Ayush
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#about"
            className="text-foreground hover:text-primary transition-colors"
          >
            About
          </a>
          <a
            href="#education"
            className="text-foreground hover:text-primary transition-colors"
          >
            Education
          </a>
          <a
            href="#experience"
            className="text-foreground hover:text-primary transition-colors"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="text-foreground hover:text-primary transition-colors"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="text-foreground hover:text-primary transition-colors"
          >
            Skills
          </a>
        </nav>

        <a
          href="mailto:ayushbansal022@gmail.com"
          className="hidden sm:inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
