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
      id: "iot-sensor-network",
      title: "iot sensor network",
      category: "embedded systems",
      description: "created a wireless sensor network for environmental monitoring with real-time data visualization. the system provides comprehensive environmental data collection and analysis.",
      fullDescription: "an extensive iot sensor network designed for comprehensive environmental monitoring across large areas. the system deploys multiple sensor nodes equipped with temperature, humidity, air quality, and motion sensors. data is transmitted via mqtt protocol to a central server where it's processed and visualized in real-time. features include automated alerts, historical data analysis, and predictive environmental modeling.",
      image: project1,
      images: [project1, project2, project1],
      technologies: ["arduino", "mqtt", "react", "mongodb", "node.js", "websockets"],
      github: "https://github.com/username/iot-sensors",
      demo: "https://demo.com/iot-dashboard",
      features: [
        "distributed wireless sensor deployment",
        "real-time data visualization dashboard",
        "automated alert system for anomalies",
        "historical data analysis and trends",
        "low-power wireless communication"
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
                  <div>
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