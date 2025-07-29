import { Code, Cog, Cpu, Zap } from "lucide-react";
import profileImage from "@/assets/profile-image.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  useScrollAnimation();
  const skills = [
    {
      icon: <Cog className="w-8 h-8" />,
      title: "mechanical design",
      description: "cad modeling, simulation, and prototyping"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "embedded systems",
      description: "microcontrollers, sensors, and actuators"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "software development",
      description: "python, c++, matlab, and control algorithms"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "automation",
      description: "robotics, plc programming, and system integration"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="small-caps text-muted-foreground mb-4">about me</p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tighter">
            Not just thinking outside the box —         
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              I probably built the box.    
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Profile Image */}
          <div className="slide-up fade-in">
            <div className="relative max-w-md mx-auto">
              <img 
                src={profileImage} 
                alt="Profile" 
                className="w-full rounded-3xl shadow-large"
              />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-primary rounded-3xl opacity-20 blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-primary rounded-3xl opacity-20 blur-xl"></div>
            </div>
          </div> {/* Closing the profile image div */}
          
          {/* About Content */}
          <div className="slide-up fade-in">
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              after graduating with a degree in mechatronics engineering, i spent a year at 
              <span className="text-foreground font-medium"> alfatkg </span> 
              honing my software development skills. now, i'm passionate about returning to my roots 
              and applying my unique blend of software expertise and mechanical knowledge to create 
              intelligent robotic systems.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              my journey through software development has given me a deep understanding of system 
              architecture, problem-solving, and clean code principles—skills that perfectly 
              complement mechatronic design and implementation.
            </p>
            
            <div className="flex flex-wrap gap-3">
              {["python", "c++", "matlab", "solidworks", "arduino", "ros", "machine learning"].map((skill) => (
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
      </div>
    </section>
  );
};

export default About;