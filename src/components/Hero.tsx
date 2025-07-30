import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Mechatronics Engineering" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 to-background/50" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="fade-in">
          <p className="small-caps text-muted-foreground mb-4">
            mechatronics engineer • robotics specialist • automation expert
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tighter">
            hi i'm
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
            srivatsav
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            experienced in ros, plc programming, machine vision, and embedded systems. 
            seeking mechatronics engineering roles in robotics, automation, and ai-driven manufacturing
          </p>
          
          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 mb-12">
            <a 
              href="#" 
              className="p-3 rounded-full bg-card border border-border hover-lift"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="p-3 rounded-full bg-card border border-border hover-lift"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="p-3 rounded-full bg-card border border-border hover-lift"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a href="/projects" className="btn-primary">
              view my work
            </a>
            <a href="/Srivatsav_Resume_.pdf" download className="btn-secondary">
              download resume
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;