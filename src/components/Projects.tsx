import { Link, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";

const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: "drone-swarm",
      title: "Autonomous Drone Swarm",
      category: "Robotics / AI",
      description: "Coordinated search and rescue swarm with distributed control and computer vision.",
      image: null,
      color: "bg-blue-500",
    },
    {
      id: "industrial-robot-arm",
      title: "6-DOF Robot Arm",
      category: "Industrial Automation",
      description: "Industrial robot arm with precise positioning and inverse kinematics control.",
      image: null,
      color: "bg-orange-500",
    },
    {
      id: "iot-sensor-network",
      title: "IntelliDrip",
      category: "IoT / Healthcare",
      description: "IoT-based IV monitor with real-time alerts and predictive analytics.",
      image: project1,
      color: "bg-green-500",
    },
    {
      id: "autonomous-robot",
      title: "AutoDrive",
      category: "Autonomous Systems",
      description: "Level 2 autonomous driving stack using CARLA simulator and CNN-based perception.",
      image: project2,
      color: "bg-purple-500",
    },
    {
      id: "smart-manufacturing",
      title: "RoboDK Simulation",
      category: "Simulation",
      description: "High-precision robotic simulations for Yaskawa robots with automated programming workflows.",
      image: null,
      color: "bg-red-500",
    },
    {
      id: "cnc-automation",
      title: "Pothole Detection",
      category: "Computer Vision",
      description: "ML model for pothole detection with 92% accuracy using edge video feeds.",
      image: null,
      color: "bg-yellow-500",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container px-6 mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4">Selected Works</h2>
          <p className="text-muted-foreground text-lg md:text-xl">Interaction & Engineering</p>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group cursor-pointer rounded-3xl overflow-hidden border border-border bg-muted/20 aspect-[4/5] hover:-translate-y-2 transition-all duration-500 fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => navigate(`/projects/${project.id}`)}
            >
              {/* Image Background */}
              <div className={`absolute inset-0 ${project.image ? '' : project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                {/* Category Badge */}
                <div className="flex justify-between items-start">
                  <span className="px-3 py-1 rounded-full border border-white/20 text-white/80 text-xs uppercase tracking-widest backdrop-blur-md bg-white/10">
                    {project.category}
                  </span>
                  <div className="p-2 rounded-full bg-white/10 group-hover:bg-white/20 backdrop-blur-md text-white transition-colors opacity-0 group-hover:opacity-100">
                    <ArrowRight className="w-5 h-5 -rotate-45" />
                  </div>
                </div>

                {/* Title & Description */}
                <div className="space-y-3">
                  <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-white/70 text-sm md:text-base line-clamp-2">
                    {project.description}
                  </p>
                  <div className="text-white/50 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
                    Click to view details
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <Link to="/projects" className="btn-primary flex items-center gap-2 group">
            View All Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
