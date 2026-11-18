import { useRef } from "react";
import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import gsap from "gsap";
import { useGsapContext } from "@/hooks/useGsapAnimation";

export const ExperienceSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useGsapContext(
    ({ prefersReducedMotion }) => {
      if (prefersReducedMotion) return;

      // Animate section heading
      gsap.from(headingRef.current, {
        y: 25,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // Animate experience cards staggered
      const validCards = cardsRef.current.filter(Boolean);
      if (validCards.length > 0) {
        gsap.from(validCards, {
          y: 40,
          scale: 0.98,
          opacity: 0,
          duration: 0.85,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: validCards[0],
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      }
    },
    sectionRef,
    []
  );

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="scroll-mt-20 pt-10 pb-12 px-4 relative overflow-hidden"
    >
      <div className="container mx-auto max-w-3xl relative z-10">
        <h2 ref={headingRef} className="section-heading">
          Experience <span className="text-gradient">&amp; Work</span>
        </h2>

        <article
          ref={(el) => (cardsRef.current[0] = el)}
          className="rounded-2xl border border-border/50 bg-card/45 p-5 sm:p-6 text-left transition-all duration-300 hover:border-primary/40 hover:shadow-sm"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-border/50 bg-white p-1.5 shadow-sm transition-transform duration-300 hover:scale-105">
                <img
                  src="/nyrock-icon.png"
                  alt="NyRock logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Software Development Intern
                </h3>
                <a
                  href="https://www.nyrock.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-0.5 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline group"
                >
                  NyRock
                  <ArrowUpRight
                    size={14}
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
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

        <article
          ref={(el) => (cardsRef.current[1] = el)}
          className="mt-4 rounded-2xl border border-border/50 bg-card/45 p-5 text-left transition-all duration-300 hover:border-primary/40 hover:shadow-sm sm:p-6"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-border/50 bg-white p-1.5 shadow-sm transition-transform duration-300 hover:scale-105">
                <img
                  src="/golfai-icon.png"
                  alt="GolfAI logo"
                  className="h-full w-full rounded-xl object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Software Testing &amp; QA
                </h3>
                <a
                  href="https://www.golfai.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-0.5 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline group"
                >
                  GolfAI
                  <ArrowUpRight
                    size={14}
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground sm:justify-end">
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays size={14} aria-hidden="true" />
                <time dateTime="2026-07">Jul 2026</time>
                <span aria-hidden="true">–</span>
                <time dateTime="2026-08">Aug 2026</time>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={14} aria-hidden="true" />
                IIT Delhi
              </span>
            </div>
          </div>

          <ul className="mt-5 list-disc space-y-2 border-t border-border/40 pt-4 pl-5 text-sm leading-relaxed text-muted-foreground">
            <li>
              Evaluated the Club Admin, Starter, and Player portals through manual
              testing and Playwright-based automation, covering end-to-end user
              journeys, authentication flows, permission checks, and core business
              logic.
            </li>
            <li>
              Documented issues across security, UX, and workflow reliability in a
              consolidated QA report, helping identify product gaps before release
              and improve stability and user experience.
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};
