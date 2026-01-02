export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center text-white text-xs font-bold">
                  A
                </div>
                Ayush Bansal
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Full-stack developer and IoT engineer passionate about building
                scalable solutions that solve real-world problems.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#about"
                    className="text-muted-foreground hover:text-primary transition-all duration-200 text-sm hover:translate-x-1 inline-block"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#education"
                    className="text-muted-foreground hover:text-primary transition-all duration-200 text-sm hover:translate-x-1 inline-block"
                  >
                    Education
                  </a>
                </li>
                <li>
                  <a
                    href="#experience"
                    className="text-muted-foreground hover:text-primary transition-all duration-200 text-sm hover:translate-x-1 inline-block"
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-muted-foreground hover:text-primary transition-all duration-200 text-sm hover:translate-x-1 inline-block"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="text-muted-foreground hover:text-primary transition-all duration-200 text-sm hover:translate-x-1 inline-block"
                  >
                    Skills
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:ayushbansal022@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-all duration-200 text-sm flex items-center gap-2 hover:translate-x-1"
                  >
                    <span>✉️</span> Email
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+918770058660"
                    className="text-muted-foreground hover:text-primary transition-all duration-200 text-sm flex items-center gap-2 hover:translate-x-1"
                  >
                    <span>📱</span> Phone
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-all duration-200 text-sm flex items-center gap-2 hover:translate-x-1"
                  >
                    <span>💼</span> LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-all duration-200 text-sm flex items-center gap-2 hover:translate-x-1"
                  >
                    <span>🔗</span> GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-center text-muted-foreground text-sm">
              © {currentYear} Ayush Bansal. All rights reserved. | Roll No.
              EE22BT015
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
