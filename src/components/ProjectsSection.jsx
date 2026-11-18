import { useRef } from "react";
import { ArrowRight, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { useGsapContext } from "@/hooks/useGsapAnimation";

const projects = [
  {
    id: 1,
    title: "ResQRoute",
    description:
      "Real-time emergency coordination platform featuring AI-triaged distress messages, Dijkstra evacuation pathfinding, and Twilio dispatching.",
    image: "/projects/resqroute.png",
    tags: ["Next.js", "TypeScript", "AI Triage", "Twilio"],
    demoUrl: "https://res-q-route-psi.vercel.app/",
    githubUrl: "https://github.com/aviraltrip/ResQRoute",
    featured: true,
  },
  {
    id: 2,
    title: "PulsePoint - AI Family Health Network",
    description:
      "Clinical triage system pairing LightGBM classifier with SHAP explanations, LoRA-tuned Llama 3.1, and medical RAG search guidelines.",
    image: "/projects/pulsepoint.png",
    tags: ["Python", "FastAPI", "LightGBM", "RAG"],
    demoUrl: "https://pulsepoint-zeta.vercel.app/",
    githubUrl: "https://github.com/aviraltrip/AIML-MedAI",
    featured: true,
  },
  {
    id: 3,
    title: "Clash Royale ML Deck Predictor",
    description:
      "ML-powered deck analyzer predicting card win rates against live meta using an MLP classifier and Wilson cardswap recommendations.",
    image: "/projects/clashroyale.png",
    tags: ["Python", "Scikit-Learn", "MLP Classifier", "Data Scraping"],
    demoUrl: "https://cr-analytics-five.vercel.app/",
    githubUrl: "https://github.com/aviraltrip/CR_ML_Analytics",
    featured: true,
  },
  {
    id: 4,
    title: "URL Shortener",
    description:
      "Production-oriented URL shortener built with Go and Fiber, using PostgreSQL for link metadata and Redis for caching, rate limiting, and click tracking.",
    image: "/projects/url-shortener.png",
    tags: ["Go", "Fiber", "PostgreSQL", "Redis"],
    githubUrl: "https://github.com/aviraltrip/URL-Shortener",
    featured: true,
  },
];

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);

  useGsapContext(
    ({ prefersReducedMotion }) => {
      if (prefersReducedMotion) return;

      gsap.fromTo(
        cardRef.current,
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          clearProps: "transform,opacity",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 92%",
            toggleActions: "play none none none",
          },
        }
      );

      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { yPercent: -5, scale: 1.05 },
          {
            yPercent: 5,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: cardRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          }
        );
      }
    },
    cardRef,
    []
  );

  return (
    <div
      ref={cardRef}
      className="group relative flex flex-col h-full will-change-transform"
    >
      <div className="relative aspect-video w-full rounded-xl border border-border/50 bg-[#16161a] p-2.5 overflow-hidden mb-4 group-hover:border-primary/40 transition-all duration-300">
        <div className="w-full h-full rounded-lg border border-border/30 bg-[#0e0e11] overflow-hidden relative group-hover:shadow-lg transition-all duration-300">
          <div className="h-5 w-full bg-[#1c1c21] border-b border-border/20 flex items-center px-2 gap-1 shrink-0 z-10 relative">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/80" />
            <span className="w-1.5 h-1.5 rounded-full bg-green-500/80" />
          </div>
          <div className="w-full h-[calc(100%-20px)] overflow-hidden relative">
            {project.image ? (
              <img
                ref={imageRef}
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top transition-transform duration-500 will-change-transform"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full bg-[#131316] flex items-center justify-center text-muted-foreground text-xs">
                No Preview Available
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-grow text-left">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-base font-bold text-foreground transition-colors duration-300 group-hover:text-primary leading-snug">
            {project.title}
          </h3>
        </div>

        <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[10px] font-medium border rounded-full bg-secondary/30 text-muted-foreground border-border/30 group-hover:border-primary/25 group-hover:text-primary transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-1">
          {project.demoUrl && project.demoUrl !== "#" && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary/80 transition-colors group/link"
            >
              Live Demo{" "}
              <ArrowRight
                size={12}
                className="transition-transform duration-200 group-hover/link:translate-x-1"
              />
            </a>
          )}
          {project.githubUrl && project.githubUrl !== "#" && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={12} />
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  useGsapContext(
    ({ prefersReducedMotion }) => {
      if (prefersReducedMotion) return;

      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { y: 25, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            clearProps: "transform,opacity",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 92%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    },
    sectionRef,
    []
  );

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="scroll-mt-20 pt-12 pb-12 px-4 relative overflow-hidden"
    >
      <div className="container mx-auto max-w-3xl relative z-10">
        <h2 ref={headingRef} className="section-heading">
          Featured <span className="text-gradient">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={cn(
                "w-full flex flex-col",
                index > 0 ? "border-t border-dashed border-border/40 pt-8" : "",
                index === 1 ? "md:border-t-0 md:pt-0" : "",
                index >= 2 ? "md:border-t md:border-dashed md:border-border/40 md:pt-12" : ""
              )}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
