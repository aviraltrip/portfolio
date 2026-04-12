import { ArrowDown, ArrowRight, Github, Linkedin, Twitter } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      {/* Ambient glow behind hero text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-10">

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-gradient opacity-0 animate-fade-in-delay-1">
              {" "}Aviral
            </span>
          </h1>


          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3 text-balance">
            I create modern web applications.
            Specializing in full-stack development, I build interfaces that are
            reliable and user-friendly.
          </p>

          <div className="flex items-center justify-center opacity-0 animate-fade-in-delay-4">
            <a 
              href="#projects" 
              className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium inline-flex items-center group transition-all duration-300 hover:shadow-[0_0_18px_rgba(139,92,246,0.5)] hover:scale-105 active:scale-95"
            >
              View My Work
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
            </a>
          </div>

          {/* Social quick links */}
          <div className="opacity-0 animate-fade-in-delay-4 flex items-center justify-center gap-5 pt-2">
            {[
              { href: "https://github.com/aviraltrip", icon: Github, label: "GitHub" },
              { href: "https://www.linkedin.com/in/aviral-tripathi-836763204/", icon: Linkedin, label: "LinkedIn" },
              { href: "https://x.com/AviralTrip2503", icon: Twitter, label: "Twitter" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-full border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_12px_hsl(var(--primary)/0.3)]"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer hover:text-primary transition-colors duration-300 group"
        aria-label="Scroll to about section"
      >
        <span className="text-sm text-muted-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          Scroll
        </span>
        <ArrowDown className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
      </a>
    </section>
  );
};