import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="small-caps font-bold text-lg mb-4">
              mechatronics engineer
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              passionate about bridging software and hardware to create 
              intelligent mechanical systems that solve real-world problems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="small-caps font-semibold mb-4">quick links</h4>
            <div className="space-y-2">
              {["about", "projects", "experience", "contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link}`}
                  className="block text-muted-foreground hover:text-foreground transition-colors duration-200 capitalize"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="small-caps font-semibold mb-4">let's connect</h4>
            <div className="flex items-center gap-4">
              <a
                href="mailto:engineer@example.com"
                className="p-3 bg-muted hover:bg-accent rounded-xl transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 bg-muted hover:bg-accent rounded-xl transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 bg-muted hover:bg-accent rounded-xl transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} mechatronics portfolio. crafted with precision.
          </p>
          <div className="flex items-center gap-1 text-muted-foreground text-sm">
            made with <Heart className="w-4 h-4 text-red-500 mx-1" fill="currentColor" /> 
            and lots of coffee
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;