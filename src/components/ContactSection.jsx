import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
  Twitter,
  Code2,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const FloatingInput = ({ id, name, label, type = "text", required }) => {
  const [focused, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  return (
    <div className="relative">
      <input
        type={type}
        id={id}
        name={name}
        required={required}
        onFocus={() => setFocused(true)}
        onBlur={(e) => {
          setFocused(false);
          setHasValue(e.target.value.length > 0);
        }}
        className={cn(
          "peer w-full px-4 pt-5 pb-2 rounded-xl border bg-background/60 backdrop-blur-sm",
          "focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200",
          "text-sm placeholder-transparent",
          focused ? "border-primary/60" : "border-input"
        )}
        placeholder={label}
      />
      <label
        htmlFor={id}
        className={cn(
          "absolute left-4 transition-all duration-200 pointer-events-none",
          focused || hasValue
            ? "top-1.5 text-[10px] text-primary font-medium"
            : "top-3.5 text-sm text-muted-foreground"
        )}
      >
        {label}
      </label>
    </div>
  );
};

const FloatingTextarea = ({ id, name, label, rows = 4, required }) => {
  const [focused, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  return (
    <div className="relative">
      <textarea
        id={id}
        name={name}
        required={required}
        rows={rows}
        onFocus={() => setFocused(true)}
        onBlur={(e) => {
          setFocused(false);
          setHasValue(e.target.value.length > 0);
        }}
        className={cn(
          "peer w-full px-4 pt-5 pb-2 rounded-xl border bg-background/60 backdrop-blur-sm",
          "focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200",
          "text-sm placeholder-transparent resize-none",
          focused ? "border-primary/60" : "border-input"
        )}
        placeholder={label}
      />
      <label
        htmlFor={id}
        className={cn(
          "absolute left-4 transition-all duration-200 pointer-events-none",
          focused || hasValue
            ? "top-1.5 text-[10px] text-primary font-medium"
            : "top-3.5 text-sm text-muted-foreground"
        )}
      >
        {label}
      </label>
    </div>
  );
};

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/aviral-tripathi-836763204/",
    icon: Linkedin,
    label: "LinkedIn",
    color: "hover:text-blue-500 hover:shadow-blue-500/30",
  },
  {
    href: "https://x.com/AviralTrip2503",
    icon: Twitter,
    label: "X / Twitter",
    color: "hover:text-sky-400 hover:shadow-sky-400/30",
  },
  {
    href: "https://github.com/aviraltrip",
    icon: Github,
    label: "GitHub",
    color: "hover:text-foreground hover:shadow-foreground/20",
  },
  {
    href: "https://leetcode.com/u/aviraltrip/",
    icon: Code2,
    label: "LeetCode",
    color: "hover:text-orange-400 hover:shadow-orange-400/30",
  },
  {
    href: "https://codeforces.com/profile/aviraltrip",
    icon: Zap,
    label: "Codeforces",
    color: "hover:text-blue-400 hover:shadow-blue-400/30",
  },
];

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;

    if (!SERVICE_ID || !TEMPLATE_ID || !USER_ID) {
      toast({
        title: "Configuration Error",
        description: "Email service is not properly configured. Please try again later.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID).then(
      () => {
        toast({
          title: "Message sent! 🎉",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        form.current.reset();
        setIsSubmitting(false);
      },
      () => {
        toast({
          title: "Error sending message",
          description: "Something went wrong. Please try again later.",
          variant: "destructive",
        });
        setIsSubmitting(false);
      }
    );
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-heading">
          Get In <span className="text-gradient">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? I'm always open to
          discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left — glass info panel */}
          <div className="glass-card p-8 space-y-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-8">
                Contact Information
              </h3>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center gap-4 group">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-0.5">Email</p>
                    <a
                      href="mailto:aviraltripathi25@gmail.com"
                      className="text-sm font-medium hover:text-primary transition-colors duration-200"
                    >
                      aviraltripathi25@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4 group">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-0.5">Location</p>
                    <span className="text-sm font-medium">
                      Greater Noida, Uttar Pradesh, India
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-4">
                Connect With Me
              </p>
              <div className="flex gap-3 flex-wrap">
                {socialLinks.map(({ href, icon: Icon, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={cn(
                      "p-2.5 rounded-xl border border-border/50 bg-background/50 text-muted-foreground",
                      "transition-all duration-300 hover:scale-110 hover:border-primary/30",
                      "hover:shadow-lg",
                      color
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — contact form */}
          <div className="glass-card p-8">
            <h3 className="text-2xl font-semibold mb-6">
              Send a <span className="text-primary">Message</span>
            </h3>

            <form ref={form} onSubmit={handleSubmit} className="space-y-5">
              <FloatingInput id="user_name" name="name" label="Your Name" required />
              <FloatingInput id="user_email" name="email" label="Your Email" type="email" required />
              <FloatingTextarea id="message" name="message" label="Your Message" rows={5} required />

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2",
                  isSubmitting && "opacity-60 cursor-not-allowed"
                )}
              >
                {isSubmitting ? (
                  <>
                    <span className="inline-block w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={15} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};