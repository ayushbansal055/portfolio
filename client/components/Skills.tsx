export default function Skills() {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["C/C++", "Python", "JavaScript", "HTML5", "CSS", "OOP"],
    },
    {
      category: "Web Technologies",
      skills: [
        "Node.js",
        "Express.js",
        "React.js",
        "REST APIs",
        "RESTful APIs",
      ],
    },
    {
      category: "Databases",
      skills: ["MongoDB", "MySQL", "PostgreSQL"],
    },
    {
      category: "Developer Tools",
      skills: ["Git", "GitHub", "VS Code"],
    },
    {
      category: "Key Competencies",
      skills: [
        "Problem Solving",
        "System Design",
        "IoT Development",
        "Full-Stack Development",
        "API Design",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-28 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Technical Skills
            </h2>
            <div className="w-12 h-1 bg-primary rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, idx) => (
              <div
                key={idx}
                className="p-6 border border-border rounded-xl bg-card hover:shadow-lg hover:border-primary hover:scale-105 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  {category.category}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div
            className="mt-12 p-8 border border-primary/30 rounded-xl bg-primary/5 animate-slide-up hover:shadow-lg transition-all duration-300"
            style={{ animationDelay: "500ms" }}
          >
            <h3 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
              <span className="text-2xl">📚</span>
              Key Courses
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-foreground">
              <div>
                <p className="font-semibold text-primary mb-2">Mathematics</p>
                <p className="text-sm text-muted-foreground">
                  Linear Algebra, Basic Calculus, Probability & Random Processes
                </p>
              </div>
              <div>
                <p className="font-semibold text-primary mb-2">
                  Computer Science
                </p>
                <p className="text-sm text-muted-foreground">
                  Computer Architecture, Operating Systems, DSA, Digital Design,
                  Embedded Systems, Database Management
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
