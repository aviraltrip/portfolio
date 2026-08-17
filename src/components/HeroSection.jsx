import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const GitHubLogo = ({ size = 13 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
      fill="currentColor"
    />
  </svg>
);

const LinkedInLogo = ({ size = 13 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
      fill="#0A66C2"
    />
  </svg>
);

const LeetCodeLogo = ({ size = 13 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"
      fill="#FFA116"
    />
  </svg>
);

const CodeforcesLogo = ({ size = 13 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.673 21 0 20.328 0 19.5V9c0-.828.673-1.5 1.5-1.5h3z"
      fill="#4A90E2"
    />
    <path
      d="M13.5 3c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.827 0-1.5-.672-1.5-1.5v-15c0-.828.673-1.5 1.5-1.5h3z"
      fill="#D9534F"
    />
    <path
      d="M22.5 10.5c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z"
      fill="#F0AD4E"
    />
  </svg>
);


const socials = [
  { href: "https://github.com/aviraltrip", icon: GitHubLogo, label: "Github" },
  { href: "https://www.linkedin.com/in/aviral-tripathi-836763204/", icon: LinkedInLogo, label: "LinkedIn" },
  { href: "https://codeforces.com/profile/aviraltrip", icon: CodeforcesLogo, label: "Codeforces" },
  { href: "https://leetcode.com/u/aviraltrip/", icon: LeetCodeLogo, label: "LeetCode" }
];

export const HeroSection = () => {
  const titles = [
    "Full Stack Engineer",
    "AI Engineer",
    "Open Source Contributor"
  ];
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % titles.length);
        setVisible(true);
      }, 350);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="scroll-mt-20 pt-32 pb-10 px-4 max-w-3xl mx-auto z-10 animate-fade-in"
    >
      <div className="space-y-8 text-left">
        {/* Profile Avatar and Name */}
        <div className="flex items-center gap-5">
          <div className="relative group shrink-0">
            {/* Elegant outer glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-indigo-500 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-500" />
            
            {/* The Logo Container */}
            <div className="relative w-20 h-20 rounded-full flex items-center justify-center p-3.5 bg-neutral-950 dark:bg-zinc-900 border border-white/10 dark:border-zinc-800/80 shadow-xl shadow-black/20 transition-all duration-300 group-hover:scale-105">
              <img
                src="/vite.png"
                alt="Aviral Tripathi"
                className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(255,255,255,0.15)]"
              />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
              Aviral Tripathi
            </h1>
            <p
              className={cn(
                "text-muted-foreground font-medium text-sm mt-0.5 transition-all duration-300 transform",
                visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"
              )}
            >
              {titles[index]}
            </p>
          </div>
        </div>

        {/* Bio Description */}
        <div className="space-y-4">
          <p className="text-base text-foreground leading-relaxed text-justify">
            Full-stack & AI developer specializing in <strong>Next.js, React, Python, FastAPI, and Generative AI</strong>. Building intelligent systems, LLM-powered applications, and scalable backend architectures with <strong>LangChain, Hugging Face, PostgreSQL, Redis, and MongoDB</strong>.
          </p>
        </div>



        {/* Social Badges */}
        <div className="pt-4 border-t border-border/40">
          <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-3 pl-1">
            Here are my socials
          </p>
          <div className="flex gap-2 flex-wrap">
            {socials.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border/50 bg-card/45 hover:bg-secondary/40 hover:scale-105 transition-all duration-300 text-xs font-medium text-muted-foreground hover:text-primary hover:border-primary/45"
              >
                <Icon size={13} />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};