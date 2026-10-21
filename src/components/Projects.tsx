import { Link, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";

const Projects = () => {
  const navigate = useNavigate();

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container px-6 mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4">Selected Works</h2>
          <p className="text-muted-foreground text-lg md:text-xl">Things I&apos;ve built across vehicles, robots and software.</p>
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
