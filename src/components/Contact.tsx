import { useState } from "react";
import { Mail, MapPin, Phone, Send, Linkedin, Github, Twitter, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { useOverlay } from "./OverlayContext";
import profileImage from "@/assets/profile-image.png";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

const Contact = () => {
  const { openOverlay } = useOverlay();

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: 'error',
        message: 'Please fill in all required fields (name, email, and message).'
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: 'error',
        message: 'Please enter a valid email address.'
      });
      return;
    }

    setStatus({ type: 'loading', message: '' });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '4ba19a4d-1725-4104-b15b-021923d85ed5', // Replace with your Web3Forms access key
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'New Contact Form Submission',
          message: formData.message,
          from_name: "Portfolio Contact Form",
          to_email: "srivatsavsurya11@gmail.com"
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully. I\'ll get back to you soon!'
        });
        // Clear form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error(result.message || 'Something went wrong');
      }
    } catch {
      setStatus({
        type: 'error',
        message: 'Oops! Something went wrong. Please try again or email me directly.'
      });
    }
  };

  const resetStatus = () => {
    if (status.type === 'success' || status.type === 'error') {
      setStatus({ type: 'idle', message: '' });
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="small-caps text-muted-foreground mb-4">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Let's Build
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Something Amazing
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Open to software development and mechatronics engineering opportunities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div
            className="slide-up cursor-pointer group"
            onClick={() => openOverlay(profileImage, "Get In Touch", "Let's collaborate on your next project.")}
          >
            <h3 className="text-2xl font-extrabold mb-8 group-hover:text-primary transition-colors">Get In Touch</h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="small-caps text-muted-foreground">Email</p>
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
                  <p className="small-caps text-muted-foreground">Phone</p>
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
                  <p className="small-caps text-muted-foreground">Location</p>
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
              <a
                href="https://x.com/srivatsavsurya"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card border border-border hover-lift"
                aria-label="X (Twitter)"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>

            <div className="p-6 bg-gradient-primary rounded-2xl text-white">
              <h4 className="small-caps font-semibold mb-2">Currently Seeking</h4>
              <p className="text-white/90 leading-relaxed">
                software development roles that solve real-world problems and mechatronics engineering opportunities.
                I thrive in environments where code interacts with the physical world, leveraging my expertise in
                AI/ML, robotic simulation, and embedded systems.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="slide-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Status Messages */}
              {status.type === 'success' && (
                <div className="flex items-start gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-600 dark:text-green-400 animate-in fade-in slide-in-from-top-2 duration-300">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <p>{status.message}</p>
                </div>
              )}

              {status.type === 'error' && (
                <div className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-600 dark:text-red-400 animate-in fade-in slide-in-from-top-2 duration-300">
                  <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <p>{status.message}</p>
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="small-caps text-muted-foreground block mb-2">
                    name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={resetStatus}
                    className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 outline-none"
                    placeholder="your name"
                    disabled={status.type === 'loading'}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="small-caps text-muted-foreground block mb-2">
                    email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={resetStatus}
                    className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 outline-none"
                    placeholder="your email"
                    disabled={status.type === 'loading'}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="small-caps text-muted-foreground block mb-2">
                  subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={resetStatus}
                  className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 outline-none"
                  placeholder="what's this about?"
                  disabled={status.type === 'loading'}
                />
              </div>

              <div>
                <label htmlFor="message" className="small-caps text-muted-foreground block mb-2">
                  message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={resetStatus}
                  className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 outline-none resize-none"
                  placeholder="tell me about your project or opportunity..."
                  disabled={status.type === 'loading'}
                />
              </div>

              <button
                type="submit"
                disabled={status.type === 'loading'}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status.type === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    send message
                  </>
                )}
              </button>

              <p className="text-xs text-muted-foreground text-center">
                Your message will be sent directly to my inbox. I typically respond within 24-48 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;