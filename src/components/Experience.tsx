import { Calendar, MapPin, ExternalLink } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Development Engineer",
      company: "alfaTKG",
      location: "Remote",
      period: "Jun 2024 - Present",
      description: "Currently developing AI-powered solutions and full-stack software suites for manufacturing industry, focusing on automation and real-time analytics.",
      achievements: [
        "Developed AI-powered chatbot and scheduling systems, automating 70% of customer queries",
        "Delivered a full-stack software suite for sheet metal manufacturing with real-time monitoring and analytics",
        "Built intelligent manufacturing solutions improving operational efficiency"
      ]
    },
    {
      title: "Robotic Simulation Engineer Intern",
      company: "alfaTKG",
      location: "Remote",
      period: "Dec 2022 - Aug 2023",
      description: "Specialized in robotic simulation and automation workflows, working extensively with industrial robots and programming optimization.",
      achievements: [
        "Generated high-precision robotic simulations using RoboDK for Yaskawa robots, improving deployment accuracy",
        "Automated robot programming workflows, cutting process time by 60%",
        "Developed simulation frameworks for industrial automation systems"
      ]
    },
    {
      title: "Open Source Developer",
      company: "Timechain Labs",
      location: "Remote",
      period: "May 2023 - Jul 2023",
      description: "Contributed to Bitcoin Lightning Network integration and UI/UX development for cryptocurrency applications, focusing on micropayment systems.",
      achievements: [
        "Integrated Bitcoin Lightning Network backend for processing 10K+ micropayments daily",
        "Designed 'Add to Wallet' UI/UX for neucron.io, increasing engagement by 40%",
        "Implemented cryptocurrency transaction processing systems"
      ]
    },
    {
      title: "Mechanical Design Engineer",
      company: "Team Eureka",
      location: "Madurai, Tamil Nadu",
      period: "Jun 2021 - Nov 2022",
      description: "Worked as part of a cross-functional engineering team on bicycle design optimization, winning national competitions through advanced FEA and design methodologies.",
      achievements: [
        "Contributed to winning SAE-ISS 2022 championship among 45+ teams nationwide",
        "Managed Rs.50K budget and advanced FEA for optimized bicycle frame design",
        "Collaborated with multidisciplinary team for performance optimization",
        "Applied mechatronics principles to mechanical design challenges"
      ]
    }
  ];

  const education = [
    {
      degree: "B.E. in Mechatronics Engineering",
      institution: "Thiagarajar College of Engineering",
      location: "Madurai, Tamil Nadu",
      period: "2020 - 2024",
      gpa: "CGPA: 8.39/10",
      description: "Comprehensive program covering mechanical systems, electronics, control theory, and robotics with hands-on project experience."
    },
    {
      degree: "Project-based 6-week Program",
      institution: "buildspace",
      location: "Remote",
      period: "2023 - 2024",
      description: "Intensive program focused on building and shipping innovative projects while learning from industry experts and global community."
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

        <div className="relative mb-20">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={exp.title + exp.company}
                className="relative pl-16 md:pl-20"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg hidden md:block" />
                
                <div className="card-minimal hover-lift p-6">
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

        {/* Education Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-8">education</h3>
        </div>
        
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div 
              key={edu.degree + edu.institution}
              className="card-minimal hover-lift p-6"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                <div>
                  <h4 className="text-lg font-bold mb-1">{edu.degree}</h4>
                  <p className="small-caps text-primary font-medium">{edu.institution}</p>
                  {edu.gpa && <p className="text-sm text-muted-foreground">{edu.gpa}</p>}
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2 sm:mt-0">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {edu.period}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {edu.location}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;