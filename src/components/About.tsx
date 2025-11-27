import { Code, Cog, Cpu, Zap, Award, GraduationCap } from "lucide-react";
import profileImage from "@/assets/profile-image.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  useScrollAnimation();
  const skills = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "programming",
      description: "python, c/c++, javascript/typescript, sql"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "technologies",
      description: "git, linux, docker, arduino, raspberry pi"
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "design & simulation",
      description: "solidworks, fusion360, roboDK, easyeda"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "industrial systems",
      description: "bosch rexroth plc, yaskawa robots, matlab/simulink"
    }
  ];

  const achievements = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Tamil Nadu Student Innovators (TNSI) 2022",
      description: "Selected among top 3 from 13,300+ applicants - secured ₹1 lakh funding"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "SAE-ISS Championship 2022",
      description: "Overall Performance Bicycle - 1st place among 45+ teams nationwide"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "National IoT Quiz Challenge",
      description: "1st place among 500+ participants (AICTE-AWS-Intel collaboration)"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tighter text-shimmer">
            mechatronics engineer.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Profile Image */}
          <div className="slide-up fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="relative max-w-md mx-auto">
              <img
                src={profileImage}
                alt="Profile"
                className="w-full rounded-3xl shadow-large"
              />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-primary rounded-3xl opacity-20 blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-primary rounded-3xl opacity-20 blur-xl"></div>
            </div>
          </div>

          {/* About Content */}
          <div className="slide-up fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-semibold">B.E. Mechatronics Engineering</h3>
                <p className="text-sm text-muted-foreground">Thiagarajar College of Engineering • CGPA: 8.39/10 • 2020-2024</p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              with a strong foundation in <span className="text-foreground font-medium">mechatronics engineering</span>,
              I specialize in bridging the gap between mechanical design and intelligent control.
              My experience spans from robotic simulation to embedded systems and IoT.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I am actively transitioning from software-heavy roles to core engineering positions in
              aerospace, avionics, and robotics. I thrive in environments where code interacts with the physical world.
            </p>

            <div className="flex flex-wrap gap-3">
              {["robotics", "embedded systems", "ros", "control systems", "c/c++", "python", "solidworks", "arduino", "matlab", "iot", "computer vision", "avionics"].map((skill) => (
                <span
                  key={skill}
                  className="small-caps px-4 py-2 bg-muted rounded-full text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="card-minimal hover-lift text-center scale-in p-4s rounded-lg bg-card border border-border transition-transform duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-primary mb-4 flex justify-center">
                {skill.icon}
              </div>
              <h3 className="small-caps font-semibold mb-2">{skill.title}</h3>
              <p className="text-sm text-muted-foreground">{skill.description}</p>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-8">key achievements</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className="card-minimal hover-lift scale-in p-6 rounded-lg bg-card border border-border transition-transform duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-primary mb-4">
                {achievement.icon}
              </div>
              <h4 className="font-semibold mb-2 text-sm">{achievement.title}</h4>
              <p className="text-xs text-muted-foreground">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;