import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Projects = () => {
  const projects = [
    {
      id: "autonomous-robot",
      title: "autonomous mobile robot",
      category: "mechatronics",
      description: "designed and built an autonomous navigation system using lidar sensors, computer vision, and path planning algorithms. the robot can navigate complex environments while avoiding obstacles and reaching target destinations efficiently.",
      fullDescription: "this project involved developing a complete autonomous navigation system from the ground up. the robot features a sophisticated sensor fusion approach combining lidar data with computer vision for robust environmental perception. implemented advanced path planning algorithms including a* and rrt for optimal route calculation. the system also incorporates slam (simultaneous localization and mapping) capabilities for real-time map building and localization.",
      image: project1,
      images: [project1, project2, project1],
      technologies: ["ros", "python", "opencv", "lidar", "slam", "path planning"],
      github: "https://github.com/username/autonomous-robot",
      demo: "https://demo.com/robot",
      features: [
        "real-time obstacle detection and avoidance",
        "simultaneous localization and mapping (slam)",
        "advanced path planning algorithms",
        "sensor fusion with lidar and cameras",
        "ros-based architecture for modularity"
      ]
    },
    {
      id: "smart-manufacturing",
      title: "smart manufacturing system",
      category: "automation",
      description: "developed a complete automation solution for quality control using machine vision and robotic arms. the system can identify defects and automatically sort products based on quality standards.",
      fullDescription: "this comprehensive manufacturing automation system revolutionizes quality control processes. utilizing advanced machine vision algorithms for defect detection with 99.7% accuracy. integrated robotic arms perform precise pick-and-place operations based on vision system feedback. the system features real-time monitoring, statistical process control, and predictive maintenance capabilities.",
      image: project2,
      images: [project2, project1, project2],
      technologies: ["plc", "c++", "machine vision", "robotics", "hmi", "scada"],
      github: "https://github.com/username/smart-manufacturing",
      demo: "https://demo.com/manufacturing",
      features: [
        "high-precision machine vision inspection",
        "automated robotic sorting and handling",
        "real-time quality control monitoring",
        "predictive maintenance algorithms",
        "industrial hmi for operator interface"
      ]
    },
    {
      id: "industrial-robot-arm",
      title: "6-dof industrial robot arm",
      category: "robotics",
      description: "designed and programmed a 6-degree-of-freedom industrial robot arm with precise positioning control and safety features for manufacturing applications.",
      fullDescription: "engineered a complete 6-dof robotic arm system with advanced kinematics control, trajectory planning, and safety protocols. the system features servo motor control with encoder feedback, inverse kinematics calculations, and collision detection. implemented pid controllers for precise positioning with repeatability of ±0.1mm. includes emergency stop systems and safety light curtains for industrial compliance.",
      image: project1,
      images: [project1, project2, project1],
      technologies: ["solidworks", "matlab", "c++", "servo control", "kinematics", "pid"],
      github: "https://github.com/username/robot-arm",
      demo: "https://demo.com/robot-arm",
      features: [
        "6-dof precision movement control",
        "inverse kinematics algorithms",
        "collision detection and avoidance",
        "industrial safety protocols",
        "real-time trajectory planning"
      ]
    },
    {
      id: "cnc-automation",
      title: "cnc machine automation",
      category: "automation",
      description: "automated cnc machining operations with robotic loading/unloading systems and real-time monitoring for increased productivity and safety.",
      fullDescription: "developed a comprehensive cnc automation solution integrating robotic material handling with machining operations. the system features automated tool changing, workpiece loading/unloading, and quality inspection. implemented real-time monitoring with predictive maintenance algorithms and statistical process control. achieved 40% reduction in cycle time and 99.5% uptime reliability.",
      image: project2,
      images: [project2, project1, project2],
      technologies: ["fanuc", "ladder logic", "hmi", "scada", "opc", "modbus"],
      github: "https://github.com/username/cnc-automation",
      demo: "https://demo.com/cnc-system",
      features: [
        "automated material handling systems",
        "real-time machining monitoring",
        "predictive maintenance algorithms",
        "quality control integration",
        "operator safety systems"
      ]
    },
    {
      id: "drone-swarm",
      title: "autonomous drone swarm",
      category: "aerial robotics",
      description: "developed a coordinated drone swarm system for search and rescue operations with autonomous navigation and communication protocols.",
      fullDescription: "created an autonomous multi-drone system capable of coordinated flight patterns and collaborative mission execution. the swarm features distributed control algorithms, inter-drone communication, and autonomous obstacle avoidance. implemented mission planning software with real-time path optimization and emergency protocols. successfully demonstrated coordinated search patterns and object detection capabilities.",
      image: project1,
      images: [project1, project2, project1],
      technologies: ["pixhawk", "mavlink", "python", "opencv", "gps", "radio"],
      github: "https://github.com/username/drone-swarm",
      demo: "https://demo.com/drone-swarm",
      features: [
        "distributed swarm intelligence",
        "autonomous formation flying",
        "real-time mission coordination",
        "emergency response protocols",
        "computer vision integration"
      ]
    },
    {
      id: "iot-sensor-network",
      title: "industrial iot monitoring",
      category: "embedded systems",
      description: "created a wireless sensor network for industrial equipment monitoring with predictive maintenance and real-time analytics dashboard.",
      fullDescription: "an extensive iot sensor network designed for comprehensive industrial equipment monitoring. the system deploys multiple sensor nodes equipped with vibration, temperature, pressure, and current sensors. data is transmitted via lorawan protocol to a central server where it's processed using machine learning algorithms for predictive maintenance. features include automated alerts, historical trend analysis, and equipment health scoring.",
      image: project2,
      images: [project2, project1, project2],
      technologies: ["esp32", "lorawan", "tensorflow", "influxdb", "grafana", "mqtt"],
      github: "https://github.com/username/industrial-iot",
      demo: "https://demo.com/iot-dashboard",
      features: [
        "wireless sensor deployment",
        "predictive maintenance ai",
        "real-time equipment monitoring",
        "automated alert systems",
        "historical data analytics"
      ]
    },
    {
      id: "robotic-welding",
      title: "automated welding system",
      category: "welding automation",
      description: "designed an automated welding system with vision-guided positioning and adaptive control for consistent weld quality in manufacturing.",
      fullDescription: "developed a complete robotic welding automation system with machine vision guidance and adaptive welding parameters. the system features real-time seam tracking, weld quality monitoring, and automatic parameter adjustment based on material thickness and joint type. implemented safety systems including fume extraction and arc flash protection. achieved 99.2% first-pass quality rate with 60% faster production times.",
      image: project1,
      images: [project1, project2, project1],
      technologies: ["kuka", "welding control", "machine vision", "plc", "safety systems"],
      github: "https://github.com/username/robotic-welding",
      demo: "https://demo.com/welding-system",
      features: [
        "vision-guided seam tracking",
        "adaptive welding parameters",
        "real-time quality monitoring",
        "automated safety systems",
        "multi-material compatibility"
      ]
    },
    {
      id: "agv-system",
      title: "autonomous guided vehicles",
      category: "logistics automation",
      description: "built an agv fleet management system for warehouse automation with dynamic routing and collision avoidance capabilities.",
      fullDescription: "engineered a comprehensive autonomous guided vehicle system for warehouse logistics automation. the fleet features magnetic tape guidance, laser navigation, and dynamic route optimization. implemented fleet management software with real-time tracking, battery monitoring, and automatic charging station docking. the system handles material transport, inventory management, and order fulfillment with 99.8% reliability.",
      image: project2,
      images: [project2, project1, project2],
      technologies: ["magnetic guidance", "laser nav", "fleet management", "rfid", "battery management"],
      github: "https://github.com/username/agv-system",
      demo: "https://demo.com/agv-fleet",
      features: [
        "dynamic route optimization",
        "collision avoidance systems",
        "automatic battery management",
        "inventory integration",
        "real-time fleet monitoring"
      ]
    }
  ];

  const { projectId } = useParams();
  const selectedProject = projects.find(p => p.id === projectId);

  if (selectedProject) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <main className="pt-20">
          {/* Project Header */}
          <section className="py-12 px-4">
            <div className="max-w-4xl mx-auto">
              <Link 
                to="/projects" 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                back to projects
              </Link>
              
              <div className="mb-8">
                <span className="small-caps text-primary text-sm font-medium">
                  {selectedProject.category}
                </span>
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tighter">
                  {selectedProject.title}
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  {selectedProject.description}
                </p>
                
                <div className="flex gap-4">
                  <a 
                    href={selectedProject.github}
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    view code
                  </a>
                  <a 
                    href={selectedProject.demo}
                    className="btn-secondary inline-flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    live demo
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Project Images */}
          <section className="py-12 px-4 bg-muted/30">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {selectedProject.images.map((image, index) => (
                  <img 
                    key={index}
                    src={image} 
                    alt={`${selectedProject.title} ${index + 1}`}
                    className="w-full h-64 object-cover rounded-xl"
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Project Details */}
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-extrabold mb-6 tracking-tight">project overview</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {selectedProject.fullDescription}
                </p>
                
                <h3 className="text-xl font-bold mb-4">key features</h3>
                <ul className="space-y-2">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">technologies used</h3>
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="small-caps px-3 py-2 bg-muted rounded-full text-sm text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold mb-4">project links</h3>
                <div className="space-y-3">
                  <a 
                    href={selectedProject.github}
                    className="flex items-center gap-3 p-3 border border-border rounded-lg hover:bg-muted transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>view source code</span>
                  </a>
                  <a 
                    href={selectedProject.demo}
                    className="flex items-center gap-3 p-3 border border-border rounded-lg hover:bg-muted transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>live demonstration</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Projects Header */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <p className="small-caps text-muted-foreground mb-4">portfolio</p>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tighter">
              all
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                projects
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              a comprehensive showcase of mechatronic systems where software meets hardware
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Link
                  key={project.id}
                  to={`/projects/${project.id}`}
                  className="group card-minimal hover-lift overflow-hidden block"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden rounded-xl mb-6">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Project Content */}
                  <div className="p-3">
                    <span className="small-caps text-primary text-sm font-medium">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-extrabold mb-3 group-hover:text-primary transition-colors duration-200 tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span 
                          key={tech}
                          className="small-caps px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="small-caps px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;