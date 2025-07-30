import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";

const Projects = () => {
  const projects = [
    {
      id: "autonomous-robot",
      title: "autonomous mobile robot",
      category: "mechatronics",
      description: "designed and built an autonomous navigation system using lidar sensors, computer vision, and path planning algorithms.",
      image: project1,
      technologies: ["ros", "python", "opencv", "lidar"],
      github: "#",
      demo: "#"
    },
    {
      id: "smart-manufacturing",
      title: "smart manufacturing system", 
      category: "automation",
      description: "developed a complete automation solution for quality control using machine vision and robotic arms.",
      image: project2,
      technologies: ["plc", "c++", "machine vision", "robotics"],
      github: "#",
      demo: "#"
    },
    {
      id: "industrial-robot-arm",
      title: "6-dof industrial robot arm",
      category: "robotics", 
      description: "designed and programmed a 6-degree-of-freedom industrial robot arm with precise positioning control.",
      image: project1,
      technologies: ["solidworks", "matlab", "c++", "servo control"],
      github: "#",
      demo: "#"
    },
    {
      id: "cnc-automation",
      title: "cnc machine automation",
      category: "automation",
      description: "automated cnc machining operations with robotic loading/unloading systems and real-time monitoring.",
      image: project2,
      technologies: ["fanuc", "ladder logic", "hmi", "scada"],
      github: "#", 
      demo: "#"
    },
    {
      id: "drone-swarm",
      title: "autonomous drone swarm",
      category: "aerial robotics",
      description: "developed a coordinated drone swarm system for search and rescue operations with autonomous navigation.",
      image: project1,
      technologies: ["pixhawk", "mavlink", "python", "opencv"],
      github: "#",
      demo: "#"
    },
    {
      id: "iot-sensor-network",
      title: "industrial iot monitoring",
      category: "embedded systems",
      description: "created a wireless sensor network for industrial equipment monitoring with predictive maintenance.",
      image: project2,
      technologies: ["esp32", "lorawan", "tensorflow", "influxdb"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="small-caps text-muted-foreground mb-4">portfolio</p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tighter">
            featured
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            a showcase of mechatronic systems where software meets hardware
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a 
              key={project.title}
              href={`/projects/${project.id}`}
              className="group card-minimal hover-lift overflow-hidden fade-in block"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Project Links */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={project.github}
                    className="p-2 bg-black/20 backdrop-blur-sm rounded-lg text-white hover:bg-black/40 transition-colors"
                    aria-label="View source"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a 
                    href={project.demo}
                    className="p-2 bg-black/20 backdrop-blur-sm rounded-lg text-white hover:bg-black/40 transition-colors"
                    aria-label="View demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
<div className="p-3">
              <div>
                <span className="small-caps text-primary text-sm font-medium">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="small-caps px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
</div>
              </div>
            </a>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <a href="/projects" className="btn-primary">
            view all projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;