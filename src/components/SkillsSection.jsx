import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const HTMLCSSLogo = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
    <path d="M4 3L5.77 20.15L12 22L18.23 20.15L20 3H4Z" fill="#E34F26"/>
    <path d="M12 21L17.14 19.5L18.23 4H12V21Z" fill="#FF5722"/>
    <path d="M8.5 8.5H15.5V10.5H10.5V12.5H15V16H8.5V14H13V12.5H8.5V8.5Z" fill="white"/>
  </svg>
);

const JavaScriptLogo = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" fill="#F7DF1E"/>
    <path d="M7.9 18.9c0.4 0.7 0.9 1.2 1.8 1.2 0.8 0 1.3-0.3 1.3-1.5V11h2v7.7c0 2.4-1.4 3.5-3.5 3.5-1.9 0-3-1-3.6-2.3L7.9 18.9zM15.1 18.6c0.5 0.8 1.1 1.4 2.2 1.4 0.9 0 1.5-0.5 1.5-1.1 0-0.8-0.6-1.1-1.6-1.5l-0.5-0.2c-1.7-0.7-2.8-1.6-2.8-3.5 0-1.7 1.3-3 3.4-3 1.5 0 2.6 0.5 3.3 1.9l-1.8 1.2c-0.4-0.7-0.8-1-1.5-1-0.7 0-1.1 0.4-1.1 1 0 0.7 0.4 1 1.4 1.4l0.5 0.2c2 0.9 3.1 1.7 3.1 3.7 0 2.1-1.7 3.2-3.9 3.2-2.2 0-3.6-1-4.3-2.4L15.1 18.6z" fill="#323330"/>
  </svg>
);

const ReactLogo = () => (
  <svg width="28" height="28" viewBox="-11.5 -10.23174 23 20.46348" xmlns="http://www.w3.org/2000/svg">
    <circle r="2" fill="#61DAFB" />
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

const TailwindLogo = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
    <path d="M12 6C8.66667 6 6.66667 7.66667 6 11C7.33333 9 8.83333 8.5 10.5 9C11.3099 9.21484 11.8871 9.79167 12.5225 10.4271C13.5708 11.4754 14.8375 12.75 17.25 12.75C20.5833 12.75 22.5833 11.0833 23.25 7.75C21.9167 9.75 20.4167 10.25 18.75 9.75C17.9401 9.53516 17.3629 8.95833 16.7275 8.32292C15.6792 7.27458 14.4125 6 12 6ZM6.75 12.75C3.41667 12.75 1.41667 14.4167 0.75 17.75C2.08333 15.75 3.58333 15.25 5.25 15.75C6.05989 15.9648 6.63705 16.5417 7.27249 17.1771C8.32083 18.2254 9.58751 19.5 12 19.5C15.3333 19.5 17.3333 17.8333 18 14.5C16.6667 16.5 15.1667 17 13.5 16.5C12.6901 16.2852 12.1129 15.7083 11.4775 15.0729C10.4292 14.0246 9.16251 12.75 6.75 12.75Z" fill="#38BDF8"/>
  </svg>
);

const GitHubLogo = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
    <path d="M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.63 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.3 24 12C24 5.373 18.627 0 12 0Z" fill="currentColor"/>
  </svg>
);

const VSCodeLogo = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
    <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" fill="#007ACC"/>
  </svg>
);

const ExpressJSLogo = () => (
  <svg width="28" height="28" viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="50" fill="#4a4a4a"/>
    <text x="50" y="62" textAnchor="middle" fill="white" fontSize="42" fontFamily="Arial, sans-serif" fontWeight="normal">ex</text>
  </svg>
);

const NodeJSLogo = () => (
  <svg width="28" height="28" viewBox="0 0 256 282" xmlns="http://www.w3.org/2000/svg">
    <path d="M116.5 3.6c7-3.9 16-3.9 23 0l99.4 56.9c7 3.9 11.5 11.4 11.5 19.3v113.7c0 7.9-4.5 15.3-11.5 19.3l-99.4 56.9c-7 3.9-16 3.9-23 0L17.2 212.7c-7-3.9-11.5-11.4-11.5-19.3V79.7c0-7.9 4.5-15.3 11.5-19.3L116.5 3.6z" fill="#83CD29"/>
    <path d="M128 34l-81 46.5v93.1l81 46.6 81-46.6V80.5L128 34z" fill="white"/>
    <path d="M110 130v-32h14v48c0 14-8 22-22 22s-20-8-20-18h14c0 4 2 6 6 6s6-2 6-6-2-6-4-6-4 2-6 4h-8l2-14c1-10-4-12-4-12l10-2s-4 2-4 6c-1 4 4 8 6 9 2 0 4-2 4-4zM160 160c-4 4-10 6-16 6s-12-2-16-6l8-10c2 2 6 4 8 4 2 0 4-1 4-2 0-1-1-2-5-3-6-2-15-4-15-14 0-8 6-12 15-12s10 2 14 5l-8 9c-2-2-4-3-6-3-2 0-3 1-3 2 0 1 1 2 4 3s15 5 15 14c0 8-6 12-13 17h10z" fill="#83CD29"/>
  </svg>
);

const MongoDBLogo = () => (
  <svg width="28" height="28" viewBox="0 0 1080 1080" fill="none">
    <path d="M540 0 C540 0 300 200 300 600 C300 800 400 1000 540 1080 C540 1080 540 1080 540 1080 C680 1000 780 800 780 600 C780 200 540 0 540 0 Z" fill="#6FA857"/>
    <path d="M540 0 C540 0 540 0 540 1080" stroke="#4D8B3D" strokeWidth="20"/>
    <path d="M540 950 L520 1080 L560 1080 L540 950 Z" fill="#B8C5B3"/>
  </svg>
);

const PostmanLogo = () => (
  <svg width="28" height="28" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
    <circle cx="128" cy="128" r="128" fill="#FF6C37"/>
    <path 
      fill="white" 
      d="M178.5,73c-14.1,0-25.5,11.4-25.5,25.5c0,1.9,0.2,3.7,0.6,5.5L78.8,178.8 c-1.3,1.3-3,2.1-4.8,2.1c-3.8,0-6.9-3.1-6.9-6.9c0-1.8,0.7-3.5,2-4.8l12.4-12.4c3.1-3.1,3.1-8.2,0-11.3s-8.2-3.1-11.3,0l-12.4,12.4 c-7.5,7.5-7.5,19.7,0,27.2l21.2,21.2c7.5,7.5,19.7,7.5,27.2,0l15.1-15.1c1.3-1.3,2.1-3,2.1-4.8c0-3.8-3.1-6.9-6.9-6.9 c-1.8,0-3.5,0.7-4.8,2l-7.6,7.6L164.6,107.2c1.7,0.4,3.5,0.6,5.4,0.6c14.1,0,25.5-11.4,25.5-25.5S184,66.8,169.9,66.8z" 
    />
  </svg>
);

const skillIcons = {
  "HTML/CSS": HTMLCSSLogo,
  "JavaScript": JavaScriptLogo,
  "React": ReactLogo,
  "Tailwind CSS": TailwindLogo,
  "Postman": PostmanLogo,
  "Node.js": NodeJSLogo,
  "MongoDB": MongoDBLogo,
  "Express.js": ExpressJSLogo,
  "Git/GitHub": GitHubLogo,
  "VS Code": VSCodeLogo,
};

const categoryGlow = {
  frontend: "hover:shadow-[0_0_18px_rgba(56,189,248,0.35)] hover:border-sky-400/40",
  backend:  "hover:shadow-[0_0_18px_rgba(104,160,99,0.35)] hover:border-green-400/40",
  tools:    "hover:shadow-[0_0_18px_rgba(139,92,246,0.35)] hover:border-violet-400/40",
};

const skills = [
  { name: "HTML/CSS", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "Express.js", category: "backend" },
  { name: "Git/GitHub", category: "tools" },
  { name: "Postman", category: "tools" },
  { name: "VS Code", category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

const categoryColors = {
  frontend: "bg-sky-500/10 border-sky-500/30 text-sky-500",
  backend:  "bg-green-500/10 border-green-500/30 text-green-500",
  tools:    "bg-violet-500/10 border-violet-500/30 text-violet-500",
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30" ref={sectionRef}>
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-heading">
          My <span className="text-gradient">Skills</span>
        </h2>

        {/* Category filter pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-all duration-300 capitalize text-sm font-medium border",
                activeCategory === category
                  ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25 scale-105"
                  : "bg-card/60 border-border/50 text-foreground/70 hover:bg-primary/10 hover:border-primary/40 hover:text-primary hover:scale-105"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skill cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredSkills.map((skill, index) => {
            const IconComponent = skillIcons[skill.name] || HTMLCSSLogo;
            const glowClass = categoryGlow[skill.category] || "";
            return (
              <div
                key={skill.name}
                className={cn(
                  "glass-card p-5 flex flex-col items-center gap-3 text-center cursor-default",
                  "group border border-border/40 transition-all duration-300",
                  "hover:scale-[1.06] hover:-translate-y-1",
                  glowClass,
                  visible ? "reveal-visible" : "reveal-on-scroll"
                )}
                style={{
                  transition: `opacity 0.4s ease ${index * 60}ms, transform 0.4s ease ${index * 60}ms, box-shadow 0.3s ease, border-color 0.3s ease`,
                }}
              >
                {/* Icon with category badge dot */}
                <div className="relative">
                  <div className="p-3 rounded-xl bg-card group-hover:bg-primary/5 transition-colors duration-300">
                    <IconComponent />
                  </div>
                  <span
                    className={cn(
                      "absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full border-2 border-background",
                      skill.category === "frontend" ? "bg-sky-400" :
                      skill.category === "backend"  ? "bg-green-400" : "bg-violet-400"
                    )}
                  />
                </div>
                <h3 className="font-semibold text-sm group-hover:text-primary transition-colors duration-300 leading-tight">
                  {skill.name}
                </h3>
                <span className={cn("text-[10px] font-medium px-2 py-0.5 rounded-full border capitalize", categoryColors[skill.category])}>
                  {skill.category}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;