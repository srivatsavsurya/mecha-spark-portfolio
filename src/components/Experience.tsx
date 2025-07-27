import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "software development engineer",
      company: "alfatkg",
      location: "remote",
      period: "2023 - present",
      description: "developed scalable web applications and improved system performance by 40%. worked with modern frameworks and collaborated with cross-functional teams.",
      achievements: [
        "built responsive web applications using react and typescript",
        "optimized database queries reducing load times by 50%",
        "implemented automated testing pipelines",
        "collaborated with ui/ux teams for seamless user experiences"
      ]
    },
    {
      title: "mechatronics engineering graduate",
      company: "university",
      location: "campus",
      period: "2019 - 2023",
      description: "completed comprehensive coursework in mechanical engineering, electrical systems, and control theory with hands-on projects in robotics and automation.",
      achievements: [
        "designed autonomous robotic systems for senior capstone",
        "developed control algorithms for servo motor positioning",
        "completed internship in industrial automation",
        "graduated with honors in mechatronics engineering"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="small-caps text-muted-foreground mb-4">journey</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            professional
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              experience
            </span>
          </h2>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={exp.title}
                className="relative pl-16 md:pl-20"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg hidden md:block" />
                
                <div className="card-minimal hover-lift">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                      <p className="small-caps text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2 sm:mt-0">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div>
                    <h4 className="small-caps font-semibold mb-3 text-foreground">
                      key achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li 
                          key={i}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;