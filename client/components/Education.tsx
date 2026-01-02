export default function Education() {
  const educationData = [
    {
      degree: "B.Tech - Electrical Engineering",
      institution: "Indian Institute of Technology, Dharwad",
      cgpa: "7.19 (Current)",
      year: "2022-Present",
      icon: "🎓",
    },
    {
      degree: "Senior Secondary (12th)",
      institution: "CBSE Board",
      cgpa: "90.4%",
      year: "2022",
      icon: "📚",
    },
    {
      degree: "Secondary (10th)",
      institution: "CBSE Board",
      cgpa: "94.8%",
      year: "2020",
      icon: "📚",
    },
  ];

  return (
    <section id="education" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Education
            </h2>
            <div className="w-12 h-1 bg-primary rounded-full"></div>
          </div>

          <div className="space-y-6">
            {educationData.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 border border-border rounded-xl hover:border-primary hover:shadow-md transition-all bg-card"
              >
                <div className="flex gap-4">
                  <div className="text-3xl">{edu.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground">
                      {edu.degree}
                    </h3>
                    <p className="text-primary font-medium mt-1">{edu.institution}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-3 text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">
                        CGPA/Grade: {edu.cgpa}
                      </span>
                      <span className="hidden sm:inline text-border">•</span>
                      <span>{edu.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
