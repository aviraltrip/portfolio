import { Github, Linkedin, Twitter, Code2 } from "lucide-react";

const socials = [
  { href: "https://github.com/aviraltrip", icon: Github, label: "Github" },
  { href: "https://www.linkedin.com/in/aviral-tripathi-836763204/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://x.com/AviralTrip2503", icon: Twitter, label: "X" },
  { href: "https://leetcode.com/u/aviraltrip/", icon: Code2, label: "LeetCode" }
];

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="pt-32 pb-16 px-4 max-w-3xl mx-auto z-10 animate-fade-in"
    >
      <div className="space-y-8 text-left">
        {/* Profile Avatar and Name */}
        <div className="flex items-center gap-5">
          <img
            src="https://github.com/aviraltrip.png"
            alt="Aviral Tripathi"
            className="w-20 h-20 rounded-full border border-border/60 object-cover shadow-sm bg-muted"
          />
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
              Aviral Tripathi
            </h1>
            <p className="text-muted-foreground font-medium text-sm mt-0.5">
              Full Stack Engineer
            </p>
          </div>
        </div>

        {/* Bio Description */}
        <div className="space-y-4">
          <p className="text-base text-foreground leading-relaxed">
            I build <strong>scalable web applications</strong> and <strong>AI-powered tools</strong> using JavaScript, React, Node.js, and MongoDB. Specialized in database architectures, writing clean, optimized code, and bridging the gap between back-end systems and fluid, responsive interfaces.
          </p>
        </div>



        {/* Social Badges */}
        <div className="pt-4 border-t border-border/40">
          <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-3">
            Here are my socials
          </p>
          <div className="flex gap-2 flex-wrap">
            {socials.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border/50 bg-card/45 hover:bg-secondary/40 hover:scale-105 transition-all duration-300 text-xs font-medium text-muted-foreground hover:text-primary hover:border-primary/45"
              >
                <Icon size={13} />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};