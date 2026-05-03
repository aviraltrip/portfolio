import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink, Github, Sparkles, Star } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const projects = [
  {
    id: 1,
    title: "ResQRoute",
    description:
      "Real-time emergency coordination platform with AI-triaged distress messages, Dijkstra-based evacuation pathfinding, and Twilio-powered dispatch for high-density venues like hotels.",
    image: "/projects/resqroute.png",
    tags: ["Next.js", "TypeScript", "AI Triage", "Twilio"],
    demoUrl: "https://res-q-route-psi.vercel.app/",
    githubUrl: "https://github.com/aviraltrip/ResQRoute",
    featured: true,
  },
  {
    id: 2,
    title: "MedSummary",
    description:
      "AI medical-report explainer with RAG-grounded plain-English summaries, OCR ingest for PDFs and scans, and one-click language translation.",
    image: "/projects/medsum.png",
    tags: ["Next.js", "TypeScript", "RAG", "AssemblyAI"],
    demoUrl: "https://medsummary-five.vercel.app/",
    githubUrl: "https://github.com/akshatXD-hash/MedSummary",
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
  {
    id: 4,
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
    id: 5,
    title: "Coming Soon",
    description: "Something new is in the works. Stay tuned!",
    image: null,
    tags: [],
    demoUrl: null,
    githubUrl: null,
    featured: false,
    comingSoon: true,
  },
];

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  if (project.comingSoon) {
    return (
      <div
        className="group relative animate-in fade-in slide-in-from-bottom-8 duration-700 h-full"
        style={{ animationDelay: `${index * 120}ms` }}
      >
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-25 blur-md transition-all duration-500" />
        <div className="relative h-full min-h-[420px] rounded-xl border border-dashed border-border/60 bg-card/40 backdrop-blur-sm flex flex-col items-center justify-center text-center p-8 overflow-hidden hover:border-primary/40 transition-all duration-500">
          <div className="relative mb-5">
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl scale-150 animate-pulse" />
            <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 border border-primary/30 flex items-center justify-center">
              <Sparkles className="text-primary animate-pulse" size={28} />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gradient">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm max-w-[220px] leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>
    );
  }

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
            className="w-full h-full object-contain object-center p-2 transition-all duration-700 group-hover:scale-105 group-hover:brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

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
  const trackRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 4);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scrollByCard = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("[data-project-card]");
    const step = card ? card.offsetWidth + 28 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden">
      {/* Ambient blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="section-heading">
          Featured <span className="text-gradient">Projects</span>
        </h2>

        <div className="relative mb-10">
          {/* Edge fades */}
          <div
            className={cnFade(canScrollLeft, "left")}
            aria-hidden="true"
          />
          <div
            className={cnFade(canScrollRight, "right")}
            aria-hidden="true"
          />

          {/* Arrow buttons */}
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            disabled={!canScrollLeft}
            aria-label="Scroll projects left"
            className="absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 z-20 hidden sm:flex items-center justify-center w-11 h-11 rounded-full bg-card/80 backdrop-blur-md border border-border/60 shadow-lg text-foreground/80 hover:text-primary hover:border-primary/50 hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-300"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            disabled={!canScrollRight}
            aria-label="Scroll projects right"
            className="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 z-20 hidden sm:flex items-center justify-center w-11 h-11 rounded-full bg-card/80 backdrop-blur-md border border-border/60 shadow-lg text-foreground/80 hover:text-primary hover:border-primary/50 hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-300"
          >
            <ChevronRight size={20} />
          </button>

          {/* Carousel track */}
          <div
            ref={trackRef}
            className="projects-carousel flex gap-7 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 px-1 -mx-1"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {projects.map((project, index) => (
              <div
                key={project.id}
                data-project-card
                className="snap-center shrink-0 w-[85%] sm:w-[60%] md:w-[46%] lg:w-[31%]"
              >
                <ProjectCard project={project} index={index} />
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12" />

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

const cnFade = (active, side) =>
  `pointer-events-none absolute top-0 bottom-6 ${
    side === "left" ? "left-0" : "right-0"
  } w-16 z-10 transition-opacity duration-500 ${
    active ? "opacity-100" : "opacity-0"
  } bg-gradient-to-${side === "left" ? "r" : "l"} from-background to-transparent`;