export default function Projects() {
  const projects = [
    {
      title: "Full-Stack E-Library Platform for IIT Dharwad",
      description:
        "Developed a comprehensive digital library web application to manage, browse, and access academic resources for the IIT Dharwad community.",
      highlights: [
        "Engineered the backend using Node.js and Express.js, creating a robust set of self-designed APIs for user authentication, resource management, and search functionality.",
        "Designed and implemented a responsive frontend, enabling a seamless user experience for students and faculty to search, view, and manage library materials.",
        "Integrated a MongoDB database to efficiently store and retrieve data for thousands of books, research papers, and user profiles.",
      ],
      technologies: [
        "Node.js",
        "Express.js",
        "React.js",
        "MongoDB",
        "REST APIs",
      ],
      link: "View Project →",
    },
  ];

  return (
    <>
    <section id="projects" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Projects
            </h2>
            <div className="w-12 h-1 bg-primary rounded-full"></div>
          </div>

          <div className="space-y-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group border border-border rounded-xl overflow-hidden bg-card hover:border-primary hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {project.highlights.map((highlight, i) => (
                      <div key={i} className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">
                          ✓
                        </span>
                        <span className="text-muted-foreground leading-relaxed">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href="https://bmtripathi.github.io/innovator-s-e-library/"
                    className="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all"
                  >
                    {project.link}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
