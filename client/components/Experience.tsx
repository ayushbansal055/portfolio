export default function Experience() {
  const experiences = [
    {
      title: "IoT Intern",
      company: "Rockwell Automation",
      location: "Gurgaon, Haryana",
      duration: "May 2025 - Jul 2025",
      description: [
        "Worked on Smart Bedroom Control System using Arduino, ESP8266, MQTT, Node-RED, and Blynk IoT app to enable IoT-based automation.",
        "Designed and implemented AC automation based on real-time temperature using a DHT11 sensor, improving energy efficiency.",
        "Integrated IR sensor, buzzer, and relay modules to control fan, lights, and AC, both manually (via Blynk IoT) and automatically.",
        "Set up and configured Mosquitto MQTT broker on a dedicated server for reliable device-to-cloud communication.",
        "Documented the system architecture and collaborated with mentor for design validation.",
      ],
      technologies: ["Arduino", "ESP8266", "MQTT", "Node-RED", "Blynk IoT"],
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-28 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Experience
            </h2>
            <div className="w-12 h-1 bg-primary rounded-full"></div>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="p-8 border border-border rounded-xl bg-card hover:shadow-xl hover:border-primary hover:scale-105 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-semibold mt-1">
                      {exp.company}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {exp.location}
                    </p>
                  </div>
                  <div className="text-sm font-medium text-primary px-4 py-2 bg-primary/10 rounded-lg whitespace-nowrap">
                    {exp.duration}
                  </div>
                </div>

                <ul className="space-y-2 mb-4 text-foreground">
                  {exp.description.map((point, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-primary font-bold mt-1 flex-shrink-0">
                        –
                      </span>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
