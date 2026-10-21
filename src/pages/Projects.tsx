import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { projects, type Project } from "@/data/projects";

const ProjectVisual = ({ project, className }: { project: Project; className: string }) => {
  if (project.image) {
    return <img src={project.image} alt={project.title} className={`${className} object-cover`} />;
  }
  const Icon = project.icon;
  return (
    <div className={`${className} relative flex items-center justify-center bg-muted`}>
      <div className={`absolute inset-0 ${project.color} opacity-20`} />
      <Icon className="relative w-16 h-16 text-foreground/70" strokeWidth={1.25} />
    </div>
  );
};

const Projects = () => {
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
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      className="btn-primary inline-flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      view code
                    </a>
                  )}
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      className="btn-secondary inline-flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      live demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Project Image */}
          <section className="py-12 px-4 bg-muted/30">
            <div className="max-w-4xl mx-auto">
              <ProjectVisual project={selectedProject} className="w-full h-80 rounded-xl" />
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

                {(selectedProject.github || selectedProject.demo) && (
                  <>
                    <h3 className="text-xl font-bold mb-4">project links</h3>
                    <div className="space-y-3">
                      {selectedProject.github && (
                        <a
                          href={selectedProject.github}
                          className="flex items-center gap-3 p-3 border border-border rounded-lg hover:bg-muted transition-colors"
                        >
                          <Github className="w-5 h-5" />
                          <span>view source code</span>
                        </a>
                      )}
                      {selectedProject.demo && (
                        <a
                          href={selectedProject.demo}
                          className="flex items-center gap-3 p-3 border border-border rounded-lg hover:bg-muted transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                          <span>live demonstration</span>
                        </a>
                      )}
                    </div>
                  </>
                )}
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
                  className="group card-minimal hover-lift overflow-hidden block slide-up fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden rounded-xl mb-6">
                    <ProjectVisual
                      project={project}
                      className="w-full h-64 transition-transform duration-500 group-hover:scale-110"
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