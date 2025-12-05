import { Github, Linkedin, Mail, Download, Twitter } from "lucide-react";
import profileImage from "@/assets/profile-image.png";
import { useOverlay } from "./OverlayContext";

const Hero = () => {
  const { openOverlay } = useOverlay();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-5 gap-12 items-center">

          {/* Left Side - Profile Image */}
          <div
            className="lg:col-span-2 relative group cursor-pointer fade-in"
            onClick={() => openOverlay(profileImage, "Srivatsav N D", "Mechatronics Engineer • Building intelligent machines")}
          >
            <div className="relative aspect-square overflow-hidden rounded-3xl border-2 border-border shadow-2xl">
              <img
                src={profileImage}
                alt="Srivatsav N D"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <p className="text-sm font-medium">💥</p>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl -z-10 animate-pulse-glow" />
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl -z-10 animate-pulse-glow" />
          </div>

          {/* Right Side - Text Content */}
          <div className="lg:col-span-3 space-y-8 fade-in" style={{ animationDelay: '0.2s' }}>
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium">Available for work</span>
            </div>

            {/* Name & Title */}
            <div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-4 text-shimmer">
                Srivatsav N D
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-muted-foreground tracking-tight">
                Mechatronics Engineer
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Learning to bring hardware and software together through hands-on projects and curious tinkering.
              Developing my skills in robotics, avionics, and embedded software. Passionate about Space
              {/* <span className="text-foreground font-semibold">robotics</span>,
              <span className="text-foreground font-semibold"> avionics</span>, and
              <span className="text-foreground font-semibold"> embedded systems</span>. */}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="/Srivatsav_Resume_.pdf"
                download
                className="btn-primary flex items-center gap-2 group"
              >
                <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                Download Resume
              </a>
              <a
                href="#contact"
                className="btn-secondary flex items-center gap-2"
              >
                Get In Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://github.com/srivatsavsurya"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-muted hover:bg-accent rounded-xl transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/srivatsav-n-d/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-muted hover:bg-accent rounded-xl transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:srivatsavsurya11@gmail.com"
                className="p-3 bg-muted hover:bg-accent rounded-xl transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/srivatsavsurya"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-muted hover:bg-accent rounded-xl transition-colors"
                aria-label="X (Twitter)"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;