import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";

export const ExperienceSection = () => (
  <section id="experience" className="scroll-mt-20 pt-10 pb-12 px-4 relative overflow-hidden">
    <div className="container mx-auto max-w-3xl relative z-10">
      <h2 className="section-heading">
        Experience <span className="text-gradient"> &amp; Work</span>
      </h2>

      <article className="rounded-2xl border border-border/50 bg-card/45 p-5 sm:p-6 text-left transition-colors hover:border-primary/30">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-border/50 bg-white p-1.5 shadow-sm">
              <img
                src="/nyrock-icon.png"
                alt="NyRock logo"
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">Software Development Intern</h3>
              <a
                href="https://www.nyrock.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-0.5 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                NyRock
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground sm:justify-end">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays size={14} aria-hidden="true" />
              <time dateTime="2026-09-22">Sep 2026</time>
              <span aria-hidden="true">–</span>
              <span>Present</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} aria-hidden="true" />
              Remote
            </span>
          </div>
        </div>

      </article>
    </div>
  </section>
);
