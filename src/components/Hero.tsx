import { Github, Linkedin, Mail, Download, ArrowRight, CircuitBoard, Bot, Plane, Cpu } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 -z-10 w-[50%] h-[50%] bg-gradient-primary opacity-5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 -z-10 w-[50%] h-[50%] bg-blue-500 opacity-5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="fade-in text-left z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="small-caps text-xs font-medium">currently working & seeking jobs</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tighter leading-[1.1]">
            building
            <span className="block text-muted-foreground">intelligent</span>
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              machines.
            </span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
            Mechatronics Engineer with a passion for bridging the gap between software and the physical world.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Link to="/projects" className="btn-primary flex items-center gap-2 group">
              view projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="/Srivatsav_Resume_.pdf"
              download
              className="btn-secondary flex items-center gap-2"
              aria-label="Download resume"
            >
              <Download className="w-4 h-4" />
              resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 text-muted-foreground">
            <a href="https://github.com/srivatsavsurya" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/srivatsav-n-d/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:srivatsavsurya11@gmail.com" className="hover:text-foreground transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Visual Content - Single Interactive Card */}
        <div className="relative hidden lg:block fade-in" style={{ animationDelay: '0.2s' }}>
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl -z-10 rounded-full animate-pulse-glow" />

          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-square max-w-md mx-auto transform rotate-3 hover:rotate-0 transition-all duration-500 animate-float">
            <img
              src={heroImage}
              alt="Mechatronics Engineering"
              className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-700"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            {/* Floating Badge 1 */}
            <div className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl text-white animate-float-delayed">
              <p className="small-caps text-xs text-white/70 mb-1">focus</p>
              <p className="font-bold">Robotics & Avionics</p>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-12 -right-12 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl animate-pulse-glow" />
          <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl animate-pulse-glow" />
        </div>
      </div>
    </section>
  );
};

export default Hero;