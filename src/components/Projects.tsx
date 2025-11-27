import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";

const Projects = () => {
  const items = [
    {
      id: "drone-swarm",
      title: "Autonomous Drone Swarm",
      description: "Coordinated search and rescue swarm with distributed control and computer vision.",
      header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100" />,
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
      className: "md:col-span-2",
    },
    {
      id: "industrial-robot-arm",
      title: "6-DOF Robot Arm",
      description: "Industrial robot arm with precise positioning and inverse kinematics control.",
      header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100" />,
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
      className: "md:col-span-1",
    },
    {
      id: "iot-sensor-network",
      title: "IntelliDrip",
      description: "IoT-based IV monitor with real-time alerts and predictive analytics. Reduces attention time by 65%.",
      header: <img src={project1} alt="IntelliDrip" className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover" />,
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
      className: "md:col-span-1",
    },
    {
      id: "autonomous-robot",
      title: "AutoDrive",
      description: "Level 2 autonomous driving stack using CARLA simulator and CNN-based perception.",
      header: <img src={project2} alt="AutoDrive" className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover" />,
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
      className: "md:col-span-2",
    },
    {
      id: "smart-manufacturing",
      title: "RoboDK Simulation",
      description: "High-precision robotic simulations for Yaskawa robots with automated programming workflows.",
      header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100" />,
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
      className: "md:col-span-1",
    },
    {
      id: "cnc-automation",
      title: "Pothole Detection",
      description: "ML model for pothole detection with 92% accuracy using edge video feeds.",
      header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100" />,
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
      className: "md:col-span-2",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="small-caps text-muted-foreground mb-4">portfolio</p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tighter">
            engineering
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              showcase
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            tangible systems, intelligent control, and real-world impact
          </p>
        </div>

        <BentoGrid className="max-w-4xl mx-auto mb-12">
          {items.map((item, i) => (
            <Link key={i} to={`/projects/${item.id}`} className={item.className}>
              <BentoGridItem
                title={item.title}
                description={item.description}
                header={item.header}
                icon={item.icon}
                className="h-full"
              />
            </Link>
          ))}
        </BentoGrid>

        <div className="flex justify-center">
          <Link to="/projects" className="btn-primary">
            view all projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
