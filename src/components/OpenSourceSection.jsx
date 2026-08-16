import { GitPullRequest, GitMerge, ArrowRight } from "lucide-react";

const contributions = [
  {
    title: "feat: add SPDX license identifier validation for package.json and source files",
    repo: "Rezakarimzadeh98/repoaudit",
    number: 18,
    status: "open",
    url: "https://github.com/Rezakarimzadeh98/repoaudit/pull/18"
  },
  {
    title: "feat: Add Python-first packaging checks for pyproject.toml quality (#9)",
    repo: "Rezakarimzadeh98/repoaudit",
    number: 17,
    status: "open",
    url: "https://github.com/Rezakarimzadeh98/repoaudit/pull/17"
  },
  {
    title: "test(examples): add offline smoke test for run_demo.py (#136)",
    repo: "MarcoPorcellato/logseq-matryca-parser",
    number: 146,
    status: "merged",
    url: "https://github.com/MarcoPorcellato/logseq-matryca-parser/pull/146"
  },
  {
    title: "fix: simplify check.sh using POSIX shell parameter expansion",
    repo: "LUC-AI4FM/tlakit",
    number: 115,
    status: "merged",
    url: "https://github.com/LUC-AI4FM/tlakit/pull/115"
  },

  {
    title: "fix: simplify check.sh curl upload",
    repo: "LUC-AI4FM/tlakit",
    number: 102,
    status: "merged",
    url: "https://github.com/LUC-AI4FM/tlakit/pull/102"
  },

  {
    title: "feat: add human-readable __str__ format for CheckResult and Trace (#61)",
    repo: "LUC-AI4FM/tlakit",
    number: 71,
    status: "merged",
    url: "https://github.com/LUC-AI4FM/tlakit/pull/71"
  }
];

export const OpenSourceSection = () => {
  return (
    <section id="opensource" className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-4xl relative z-10">
        <h2 className="section-heading">
          Open <span className="text-gradient">Source</span>
        </h2>
        
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto -mt-6">
          Contributing to open source lately: API systems, web architectures, and production bug fixes.
        </p>

        <div className="space-y-3.5">
          {contributions.map((pr, index) => (
            <a
              key={index}
              href={pr.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-xl border border-border/40 bg-card/45 backdrop-blur-xs transition-all duration-300 hover:scale-[1.01] hover:border-primary/45 hover:shadow-sm group"
            >
              <div className="flex items-center gap-4 min-w-0">
                <div className="p-2.5 rounded-lg bg-background/50 border border-border/50 text-muted-foreground group-hover:text-primary group-hover:border-primary/30 transition-colors duration-300">
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
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-border/50 text-xs font-medium text-foreground/80 bg-background/40 capitalize">
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

        <div className="mt-12 text-center">
          <a
            href="https://github.com/aviraltrip"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 group"
          >
            See all contributions on GitHub
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
