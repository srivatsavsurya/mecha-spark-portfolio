import { Mail, MapPin, Phone, Send, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="small-caps text-muted-foreground mb-4">get in touch</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            let's build
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              something amazing
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            open to software development and mechatronics engineering opportunities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="slide-up">
            <h3 className="text-2xl font-bold mb-8">get in touch</h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="small-caps text-muted-foreground">email</p>
                  <a href="mailto:srivatsavsurya11@gmail.com" className="font-medium hover:text-primary transition-colors">
                    srivatsavsurya11@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="small-caps text-muted-foreground">phone</p>
                  <a href="tel:+919943171536" className="font-medium hover:text-primary transition-colors">
                    +91 9943171536
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="small-caps text-muted-foreground">location</p>
                  <p className="font-medium">India • Remote/Hybrid</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <a
                href="https://www.linkedin.com/in/srivatsav-n-d/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card border border-border hover-lift"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/srivatsavsurya"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card border border-border hover-lift"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>

            <div className="p-6 bg-gradient-primary rounded-2xl text-white">
              <h4 className="small-caps font-semibold mb-2">currently seeking</h4>
              <p className="text-white/90 leading-relaxed">
                software development roles that solve real-world problems and mechatronics engineering opportunities.
                I thrive in environments where code interacts with the physical world, leveraging my expertise in
                AI/ML, robotic simulation, and embedded systems.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="slide-up">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="small-caps text-muted-foreground block mb-2">
                    name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 outline-none"
                    placeholder="your name"
                  />
                </div>
                <div>
                  <label className="small-caps text-muted-foreground block mb-2">
                    email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 outline-none"
                    placeholder="your email"
                  />
                </div>
              </div>

              <div>
                <label className="small-caps text-muted-foreground block mb-2">
                  subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 outline-none"
                  placeholder="what's this about?"
                />
              </div>

              <div>
                <label className="small-caps text-muted-foreground block mb-2">
                  message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 outline-none resize-none"
                  placeholder="tell me about your project or opportunity..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;