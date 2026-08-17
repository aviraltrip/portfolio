import { ArrowRight, Github } from "lucide-react";
import { cn } from "@/lib/utils";

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
    title: "OnlyTechs: Leaderboard Platform",
    description:
      "Skill-based rankings dashboard featuring backend API integration, efficient pagination, and responsive layouts.",
    image: "/projects/onlytechs.png",
    tags: ["React", "Next.js", "Tailwind CSS"],
    demoUrl: "https://onlytechs.vercel.app/",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 5,
    title: "HealthDesk: AI Telemedicine",
    description:
      "Pharmacist telemedicine dashboard featuring real-time, geolocation-based medicine availability and automated stock notifications.",
    image: "/projects/healthdesk.png",
    tags: ["ReactJS", "NextJS", "Tailwind CSS"],
    demoUrl: "https://axios-tawny-tau.vercel.app/",
    githubUrl: "https://github.com/Hellf0rg0d/healthdesk",
    featured: true,
  },
];

const ProjectCard = ({ project, index }) => {
  return (
    <div
      className="group relative flex flex-col h-full animate-in fade-in slide-in-from-bottom-8 duration-700"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative aspect-video w-full rounded-xl border border-border/50 bg-[#16161a] p-2.5 overflow-hidden mb-4 group-hover:border-primary/30 transition-all duration-300">
        <div className="w-full h-full rounded-lg border border-border/30 bg-[#0e0e11] overflow-hidden relative group-hover:shadow-lg transition-all duration-300">
          <div className="h-5 w-full bg-[#1c1c21] border-b border-border/20 flex items-center px-2 gap-1 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/80" />
            <span className="w-1.5 h-1.5 rounded-full bg-green-500/80" />
          </div>
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[calc(100%-20px)] object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
            />
          ) : (
            <div className="w-full h-[calc(100%-20px)] bg-[#131316] flex items-center justify-center text-muted-foreground text-xs">
              No Preview Available
            </div>
          )}
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
              className="px-2 py-0.5 text-[10px] font-medium border rounded-full bg-secondary/30 text-muted-foreground border-border/30 group-hover:border-primary/20 group-hover:text-primary transition-colors duration-300"
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
              className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              Live Demo <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
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
  return (
    <section id="projects" className="scroll-mt-20 pt-12 pb-12 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-3xl relative z-10">
        <h2 className="section-heading">
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
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};