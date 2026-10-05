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
            <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border/50 bg-white p-2">
              <img
                src="https://www.nyrock.co/favicon.ico"
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
              <p className="mt-1 text-sm text-muted-foreground">Software Development Team</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground sm:justify-end">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays size={14} aria-hidden="true" />
              <time dateTime="2026-09-22">Sep 2026</time>
              <span aria-hidden="true">–</span>
              <time dateTime="2027-01-22">Jan 2027</time>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} aria-hidden="true" />
              Remote
            </span>
          </div>
        </div>

        <p className="mt-5 border-t border-border/40 pt-4 text-sm leading-relaxed text-muted-foreground">
          Contributing to project work with NyRock, a digital engineering studio building web, app, and AI products.
        </p>
      </article>
    </div>
  </section>
);
