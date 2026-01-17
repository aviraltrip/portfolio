import { ArrowRight, ExternalLink, Github, Sparkles } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "X UI Clone",
    description: "A sleek and responsive UI clone of the X (Twitter) interface",
    image: "/projects/X-UI.png",
    tags: ["HTML", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/aviraltrip/X-UI-clone",
  },
  {
    id: 2,
    title: "HealthDesk: AI-Powered Telemedicine Platform",
    description:
      "Developed a Pharmacist Control Panel with real-time, geolocation-based medicine availability and automated stock notifications. Implemented dynamic routing using Next.js and integrated frontend and backend via the Fetch API, handling varied API responses efficiently.",
    image: "/projects/healthdesk.png",
    tags: ["ReactJS", "NextJS", "Tailwind CSS"],
    demoUrl: "https://axios-tawny-tau.vercel.app/",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "OnlyTechs: Skill-Based Leaderboard Platform",
    description:
      "Developed the platform UI with a dynamic rankings dashboard integrated with backend APIs and efficient pagination. Built a responsive, performance-focused interface using Next.js.",
    image: "/projects/onlytechs.png",
    tags: ["ReactJS", "NextJS", "Tailwind CSS"],
    demoUrl: "https://onlytechs.vercel.app/",
    githubUrl: "#",
  },
];

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative animate-in fade-in slide-in-from-bottom-8 duration-700"
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg opacity-0 group-hover:opacity-20 blur-md transition-all duration-500" />
      
      <div className="relative bg-card rounded-lg overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-500 h-full flex flex-col hover:shadow-2xl hover:shadow-primary/10">
        <div className="relative h-48 overflow-hidden bg-muted">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-0 left-0 right-0 p-4 flex gap-2 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
            {project.demoUrl && project.demoUrl !== "#" && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-primary/90 hover:bg-primary text-primary-foreground py-2 px-4 rounded-md text-sm font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
            {project.githubUrl && project.githubUrl !== "#" && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-secondary/90 hover:bg-secondary text-secondary-foreground py-2 px-4 rounded-md text-sm font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
                onClick={(e) => e.stopPropagation()}
              >
                <Github size={16} />
                Code
              </a>
            )}
          </div>
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <Sparkles className="text-yellow-400 animate-pulse" size={20} />
          </div>
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none" />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, i) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium border rounded-full bg-secondary/50 text-secondary-foreground group-hover:bg-secondary group-hover:scale-105 transition-all duration-300"
                style={{
                  transitionDelay: isHovered ? `${i * 50}ms` : '0ms',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-primary">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 flex-grow group-hover:text-foreground/80 transition-colors duration-300">
            {project.description}
          </p>
          <div className="flex justify-between items-center pt-4 border-t border-border/50 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex space-x-4">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-primary transition-all duration-300 hover:scale-110 flex items-center gap-1 text-sm"
                >
                  <ExternalLink size={18} />
                  <span className="hidden lg:inline">Demo</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-primary transition-all duration-300 hover:scale-110 flex items-center gap-1 text-sm"
                >
                  <Github size={18} />
                  <span className="hidden lg:inline">Code</span>
                </a>
              )}
            </div>
            <ArrowRight 
              className="text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" 
              size={18} 
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
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        <div className="text-center">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/aviraltrip"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};