import { Code, Cog, Cpu, Zap, Award } from "lucide-react";
import profileImage from "@/assets/profile-image.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useOverlay } from "./OverlayContext";

const About = () => {
  useScrollAnimation();
  const { openOverlay } = useOverlay();

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

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Key Achievements Section - First */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4">Key Achievements</h2>
            <p className="text-muted-foreground text-lg">Recognition & Awards</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                className="card-minimal hover-lift scale-in p-6 rounded-lg bg-card border border-border transition-transform duration-300 cursor-pointer group"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openOverlay(profileImage, achievement.title, achievement.description)}
              >
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  {achievement.icon}
                </div>
                <h4 className="font-semibold mb-2 text-sm group-hover:text-primary transition-colors">{achievement.title}</h4>
                <p className="text-xs text-muted-foreground">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4">Technical Skills</h2>
            <p className="text-muted-foreground text-lg">Tools & Technologies</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.title}
                className="card-minimal hover-lift text-center scale-in p-6 rounded-lg bg-card border border-border transition-transform duration-300 cursor-pointer group"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openOverlay(profileImage, skill.title, skill.description)}
              >
                <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="small-caps font-semibold mb-2 group-hover:text-primary transition-colors">{skill.title}</h3>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;