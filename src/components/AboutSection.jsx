import { Briefcase, Brain, Zap } from "lucide-react";
import { ResumeButton } from "./ResumeButton";

export const AboutSection = () => {

  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      {/* Ambient blobs */}
      <div className="absolute top-24 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000 pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <h2 className="section-heading">
          About <span className="text-gradient">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Full-Stack Systems Builder
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I bridge the gap between complex database architectures and fluid, 
              responsive interfaces. I focus on writing clean, scalable code 
              and optimizing every layer of the system for peak performance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href="#contact" className="cosmic-button text-center">
                Get In Touch
              </a>

              <ResumeButton variant="full" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5">
            {[
              {
                icon: Brain,
                title: "Intelligent Systems",
                desc: "Integrating fine-tuned LLMs, classification models, and RAG pipelines to build context-aware, smart products.",
              },
              {
                icon: Zap,
                title: "Real-Time Systems",
                desc: "Developing low-latency coordination engines, event-driven communications, and live tracking interfaces.",
              },
              {
                icon: Briefcase,
                title: "Full-Stack Development",
                desc: "Designing robust database schemas, secure backend APIs, and performant, server-rendered dashboards.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="glass-card p-5 hover:glow-primary transition-all duration-300 group hover:scale-[1.02] cursor-default"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 shrink-0">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-base mb-1 group-hover:text-primary transition-colors duration-300">
                      {title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};