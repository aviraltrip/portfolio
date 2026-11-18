import { useRef } from "react";
import { GitPullRequest, GitMerge, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGsapContext } from "@/hooks/useGsapAnimation";

const contributions = [
  {
    title: "fix(state): revert context and delete snapshot on step cancellation",
    repo: "PicadoLabs/build-with-ai",
    number: 167,
    status: "open",
    url: "https://github.com/PicadoLabs/build-with-ai/pull/167"
  },
  {
    title: "fix: normalize punctuation-delimited meaning initials",
    repo: "EricSpencer00/abbreviation-maker",
    number: 7,
    status: "open",
    url: "https://github.com/EricSpencer00/abbreviation-maker/pull/7"
  },
  {
    title: "fix: add --version option to CLI",
    repo: "LUC-AI4FM/tlakit",
    number: 99,
    status: "merged",
    url: "https://github.com/LUC-AI4FM/tlakit/pull/99"
  },
  {
    title: "feat: add human-readable __str__ format for CheckResult and Trace (#61)",
    repo: "LUC-AI4FM/tlakit",
    number: 71,
    status: "merged",
    url: "https://github.com/LUC-AI4FM/tlakit/pull/71"
  },
  {
    title: "test(examples): add offline smoke test for run_demo.py (#136)",
    repo: "MarcoPorcellato/logseq-matryca-parser",
    number: 146,
    status: "merged",
    url: "https://github.com/MarcoPorcellato/logseq-matryca-parser/pull/146"
  },
  {
    title: "fix: simplify check.sh curl upload",
    repo: "LUC-AI4FM/tlakit",
    number: 102,
    status: "merged",
    url: "https://github.com/LUC-AI4FM/tlakit/pull/102"
  },
  {
    title: "fix: simplify check.sh using POSIX shell parameter expansion",
    repo: "LUC-AI4FM/tlakit",
    number: 115,
    status: "merged",
    url: "https://github.com/LUC-AI4FM/tlakit/pull/115"
  }
];

export const OpenSourceSection = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const listRef = useRef(null);
  const footerLinkRef = useRef(null);

  useGsapContext(
    ({ prefersReducedMotion }) => {
      if (prefersReducedMotion) return;

      if (headerRef.current) {
        gsap.fromTo(
          Array.from(headerRef.current.children),
          { y: 22, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            stagger: 0.1,
            ease: "power3.out",
            clearProps: "transform,opacity",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 92%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      if (listRef.current) {
        const items = Array.from(listRef.current.children);
        gsap.fromTo(
          items,
          { y: 25, opacity: 0, scale: 0.98 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.65,
            stagger: 0.07,
            ease: "power2.out",
            clearProps: "transform,opacity",
            scrollTrigger: {
              trigger: listRef.current,
              start: "top 92%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      if (footerLinkRef.current) {
        gsap.fromTo(
          footerLinkRef.current,
          { y: 15, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            clearProps: "transform,opacity",
            scrollTrigger: {
              trigger: footerLinkRef.current,
              start: "top 95%",
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
      id="opensource"
      ref={sectionRef}
      className="pt-12 pb-12 px-4 relative overflow-hidden"
    >
      <div className="container mx-auto max-w-3xl relative z-10">
        <div ref={headerRef}>
          <h2 className="section-heading">
            Open <span className="text-gradient">Source</span>
          </h2>

          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto -mt-6">
            Contributing to open source lately: API systems, web architectures, and production bug fixes.
          </p>
        </div>

        <div ref={listRef} className="space-y-3.5">
          {contributions.map((pr, index) => (
            <a
              key={index}
              href={pr.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-xl border border-border/40 bg-card/45 backdrop-blur-xs transition-all duration-300 hover:scale-[1.01] hover:border-primary/45 hover:shadow-sm group will-change-transform"
            >
              <div className="flex items-center gap-4 min-w-0">
                <div className="p-2.5 rounded-lg bg-background/50 border border-border/50 text-muted-foreground group-hover:text-primary group-hover:border-primary/30 transition-colors duration-300 shrink-0">
                  {pr.status === "merged" ? (
                    <GitMerge size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  ) : (
                    <GitPullRequest size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  )}
                </div>
                <div className="text-left min-w-0">
                  <h4 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors leading-snug truncate">
                    {pr.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {pr.repo} &middot; #{pr.number}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-border/50 text-xs font-medium text-foreground/80 bg-background/40 capitalize shrink-0 ml-3">
                {pr.status === "merged" ? (
                  <GitMerge size={12} className="text-muted-foreground group-hover:text-primary transition-colors" />
                ) : (
                  <GitPullRequest size={12} className="text-muted-foreground group-hover:text-primary transition-colors" />
                )}
                <span>{pr.status}</span>
              </div>
            </a>
          ))}
        </div>

        <div ref={footerLinkRef} className="mt-12 text-center">
          <a
            href="https://github.com/aviraltrip"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 group"
          >
            See all contributions on GitHub
            <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};
