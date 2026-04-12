import { ArrowRight, ExternalLink, Github, Sparkles, Star } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "X UI Clone",
    description: "A sleek and responsive UI clone of the X (Twitter) interface, built with pixel-perfect attention to layout and theme.",
    image: "/projects/X-UI.png",
    tags: ["HTML", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/aviraltrip/X-UI-clone",
    featured: false,
  },
  {
    id: 2,
    title: "HealthDesk: AI-Powered Telemedicine",
    description:
      "Pharmacist Control Panel with real-time, geolocation-based medicine availability and automated stock notifications. Dynamic routing via Next.js.",
    image: "/projects/healthdesk.png",
    tags: ["ReactJS", "NextJS", "Tailwind CSS"],
    demoUrl: "https://axios-tawny-tau.vercel.app/",
    githubUrl: "https://github.com/Hellf0rg0d/healthdesk",
    featured: true,
  },
  {
    id: 3,
    title: "OnlyTechs: Leaderboard Platform",
    description:
      "Skill-based rankings dashboard with backend API integration and efficient pagination. Performance-focused interface using Next.js.",
    image: "/projects/onlytechs.png",
    tags: ["ReactJS", "NextJS", "Tailwind CSS"],
    demoUrl: "https://onlytechs.vercel.app/",
    githubUrl: "#",
    featured: false,
  },
];

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative animate-in fade-in slide-in-from-bottom-8 duration-700"
      style={{ animationDelay: `${index * 120}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient glow border */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-30 blur-md transition-all duration-500" />

      <div className="relative bg-card rounded-xl overflow-hidden border border-border/50 hover:border-primary/40 transition-all duration-500 h-full flex flex-col hover:shadow-2xl hover:shadow-primary/10">
        {/* Image with overlay */}
        <div className="relative h-48 overflow-hidden bg-muted">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Featured badge */}
          {project.featured && (
            <div className="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/90 text-white text-xs font-semibold backdrop-blur-sm">
              <Star size={11} fill="white" />
              Featured
            </div>
          )}

          {/* Action buttons on hover */}
          <div className="absolute bottom-0 left-0 right-0 p-4 flex gap-2 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
            {project.demoUrl && project.demoUrl !== "#" && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-primary/90 hover:bg-primary text-primary-foreground py-2 px-4 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={15} />
                Live Demo
              </a>
            )}
            {project.githubUrl && project.githubUrl !== "#" && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-secondary/90 hover:bg-secondary text-secondary-foreground py-2 px-4 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
                onClick={(e) => e.stopPropagation()}
              >
                <Github size={15} />
                Code
              </a>
            )}
          </div>

          {/* Shimmer effect */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12 pointer-events-none" />
        </div>

        {/* Card body */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.map((tag, i) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 text-xs font-medium border rounded-full bg-secondary/50 text-secondary-foreground border-border/50 group-hover:bg-primary/10 group-hover:border-primary/30 group-hover:text-primary transition-all duration-300"
                style={{ transitionDelay: isHovered ? `${i * 50}ms` : "0ms" }}
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-lg font-semibold mb-2 transition-colors duration-300 group-hover:text-primary leading-snug">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 flex-grow leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
            {project.description}
          </p>

          {/* Footer links */}
          <div className="flex justify-between items-center pt-4 border-t border-border/40 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex space-x-4">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/50 hover:text-primary transition-all duration-300 hover:scale-110 flex items-center gap-1 text-sm"
                >
                  <ExternalLink size={16} />
                  <span className="hidden lg:inline">Demo</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/50 hover:text-primary transition-all duration-300 hover:scale-110 flex items-center gap-1 text-sm"
                >
                  <Github size={16} />
                  <span className="hidden lg:inline">Code</span>
                </a>
              )}
            </div>
            <ArrowRight
              className="text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
              size={16}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden">
      {/* Ambient blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="section-heading">
          Featured <span className="text-gradient">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="text-center">
          <a
            className="cosmic-button w-fit inline-flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/aviraltrip"
          >
            <Github size={16} />
            View All on GitHub
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};