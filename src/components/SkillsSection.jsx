import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const VSCodeLogo = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" fill="#007ACC" />
  </svg>
);

const RedisLogo = () => (
  <svg width="18" height="18" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="#A41E11" d="M121.8 93.1c-6.7 3.5-41.4 17.7-48.8 21.6-7.4 3.9-11.5 3.8-17.3 1S13 98.1 6.3 94.9c-3.3-1.6-5-2.9-5-4.2V78s48-10.5 55.8-13.2c7.8-2.8 10.4-2.9 17-.5s46.1 9.5 52.6 11.9v12.5c0 1.3-1.5 2.7-4.9 4.4z"/>
    <path fill="#D82C20" d="M121.8 80.5C115.1 84 80.4 98.2 73 102.1c-7.4 3.9-11.5 3.8-17.3 1-5.8-2.8-42.7-17.7-49.4-20.9C-.3 79-.5 76.8 6 74.3c6.5-2.6 43.2-17 51-19.7 7.8-2.8 10.4-2.9 17-.5s41.1 16.1 47.6 18.5c6.7 2.4 6.9 4.4.2 7.9z"/>
    <path fill="#A41E11" d="M121.8 72.5C115.1 76 80.4 90.2 73 94.1c-7.4 3.8-11.5 3.8-17.3 1C49.9 92.3 13 77.4 6.3 74.2c-3.3-1.6-5-2.9-5-4.2V57.3s48-10.5 55.8-13.2c7.8-2.8 10.4-2.9 17-.5s46.1 9.5 52.6 11.9V68c0 1.3-1.5 2.7-4.9 4.5z"/>
    <path fill="#D82C20" d="M121.8 59.8c-6.7 3.5-41.4 17.7-48.8 21.6-7.4 3.8-11.5 3.8-17.3 1C49.9 79.6 13 64.7 6.3 61.5s-6.8-5.4-.3-7.9c6.5-2.6 43.2-17 51-19.7 7.8-2.8 10.4-2.9 17-.5s41.1 16.1 47.6 18.5c6.7 2.4 6.9 4.4.2 7.9z"/>
    <path fill="#A41E11" d="M121.8 51c-6.7 3.5-41.4 17.7-48.8 21.6-7.4 3.8-11.5 3.8-17.3 1C49.9 70.9 13 56 6.3 52.8c-3.3-1.6-5.1-2.9-5.1-4.2V35.9s48-10.5 55.8-13.2c7.8-2.8 10.4-2.9 17-.5s46.1 9.5 52.6 11.9v12.5c.1 1.3-1.4 2.6-4.8 4.4z"/>
    <path fill="#D82C20" d="M121.8 38.3C115.1 41.8 80.4 56 73 59.9c-7.4 3.8-11.5 3.8-17.3 1S13 43.3 6.3 40.1s-6.8-5.4-.3-7.9c6.5-2.6 43.2-17 51-19.7 7.8-2.8 10.4-2.9 17-.5s41.1 16.1 47.6 18.5c6.7 2.4 6.9 4.4.2 7.8z"/>
    <path fill="#fff" d="M80.4 26.1l-10.8 1.2-2.5 5.8-3.9-6.5-12.5-1.1 9.3-3.4-2.8-5.2 8.8 3.4 8.2-2.7L72 23zM66.5 54.5l-20.3-8.4 29.1-4.4z"/>
    <ellipse fill="#fff" cx="38.4" cy="35.4" rx="15.5" ry="6"/>
    <path fill="#7A0C00" d="M93.3 27.7l17.2 6.8-17.2 6.8z"/>
    <path fill="#AD2115" d="M74.3 35.3l19-7.6v13.6l-1.9.8z"/>
  </svg>
);

const LangChainLogo = () => (
  <svg width="18" height="18" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="20" fill="#133835" />
    <g transform="translate(10, 30)">
      <path
        d="M59.8966 0.148865H20.4063C9.15426 0.148865 0 9.27841 0 20.5001C0 31.7217 9.15426 40.8513 20.4063 40.8513H59.8966C71.1486 40.8513 80.3029 31.7217 80.3029 20.5001C80.3029 9.27841 71.1486 0.148865 59.8966 0.148865ZM40.4188 32.0555C39.7678 32.1898 39.0352 32.2142 38.5373 31.6953C38.3536 32.1165 37.9251 31.8947 37.5945 31.8398C37.5639 31.9252 37.5374 32.0005 37.5088 32.086C36.4089 32.1593 35.5845 31.04 35.0601 30.1954C34.0193 29.6337 32.8378 29.2918 31.7746 28.7036C31.7134 29.6724 31.9257 30.8731 31.0012 31.4979C30.9543 33.36 33.8255 31.7177 34.0887 33.1056C33.8847 33.128 33.6582 33.073 33.4949 33.2297C32.746 33.9563 31.8869 32.6803 31.0237 33.2074C29.8646 33.7894 29.7483 34.2656 28.3137 34.3857C28.2342 34.2656 28.2668 34.1862 28.3341 34.113C28.7382 33.6449 28.7668 33.0934 29.4565 32.8939C28.7464 32.782 28.1525 33.1728 27.5546 33.4821C26.7771 33.7996 26.7833 32.7657 25.5875 33.537C25.4548 33.4292 25.5181 33.3315 25.5936 33.2481C25.8976 32.8777 26.2976 32.8227 26.7486 32.8431C24.5304 31.6098 23.4856 34.3511 22.4612 32.9876C22.1531 33.069 22.0368 33.3457 21.8429 33.5411C21.6756 33.358 21.8021 33.1361 21.8103 32.9204C21.6103 32.8268 21.3572 32.782 21.4164 32.4625C21.0246 32.3302 20.7512 32.5622 20.4594 32.782C20.1961 32.5785 20.6369 32.2814 20.7185 32.0697C20.9532 31.6627 21.4878 31.9863 21.7592 31.6932C22.5306 31.2557 23.606 31.9659 24.4876 31.8459C25.1671 31.9313 26.0078 31.2353 25.667 30.5413C24.9406 29.6154 25.0691 28.4045 25.0528 27.2974C24.963 26.6522 23.4101 25.83 22.9612 25.134C22.4061 24.5072 21.9735 23.7807 21.5409 23.0664C19.9798 20.0523 20.4716 16.1795 18.5044 13.3812C17.6147 13.8717 16.4556 13.6397 15.6884 12.9823C15.2741 13.3588 15.2557 13.8513 15.2231 14.3744C14.2293 13.3833 14.3538 11.5109 15.1476 10.4079C15.4721 9.97239 15.8598 9.61421 16.2924 9.29876C16.3903 9.22754 16.423 9.15834 16.4209 9.04844C17.2066 5.52362 22.5653 6.20335 24.259 8.70044C25.4875 10.237 25.8589 12.27 27.2526 13.6967C29.1279 15.744 31.2645 17.5471 32.9949 19.7267C34.6315 21.7191 35.8008 24.0554 36.8211 26.4101C37.2374 27.1915 37.2415 28.1501 37.8578 28.8176C38.1618 29.2206 39.6474 30.3175 39.325 30.7062C39.5107 31.1091 40.8983 31.6647 40.4167 32.0555H40.4188ZM66.4449 20.032L63.4269 23.0419C62.6228 23.8438 61.6291 24.4421 60.5516 24.7697L60.4965 24.786L60.4761 24.8389C60.1251 25.7629 59.5925 26.5871 58.8905 27.2852L55.8724 30.2951C54.5562 31.6078 52.8054 32.3302 50.9402 32.3302C49.0751 32.3302 47.3242 31.6078 46.008 30.2951C43.2879 27.5823 43.2879 23.1701 46.008 20.4573L49.0261 17.4474C49.8342 16.6415 50.8015 16.0615 51.8973 15.7257L51.9524 15.7094L51.9728 15.6565C52.3238 14.7325 52.8584 13.9063 53.5625 13.2021L56.5805 10.1922C57.8967 8.87953 59.6476 8.15706 61.5127 8.15706C63.3779 8.15706 65.1287 8.87953 66.4449 10.1922C67.7612 11.5048 68.4856 13.251 68.4856 15.1111C68.4856 16.9712 67.7612 18.7193 66.4449 20.03V20.032Z"
        fill="#FFFFFF"
      />
      <path
        d="M28.1422 28.4126C27.8769 29.4424 27.7912 31.1946 26.4485 31.2455C26.3383 31.8398 26.8607 32.0636 27.3382 31.8723C27.8096 31.6566 28.034 32.0433 28.1932 32.4279C28.9217 32.5337 29.9992 32.1857 30.04 31.3249C28.9523 30.7001 28.6156 29.5116 28.1442 28.4106L28.1422 28.4106Z"
        fill="#FFFFFF"
      />
    </g>
  </svg>
);

const GitHubLogo = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
      fill="currentColor"
    />
  </svg>
);

const JavaScriptLogo = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0h24v24H0V0z" fill="#F7DF1E" />
    <path
      d="M22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"
      fill="#000000"
    />
  </svg>
);

const iconSlugs = {
  "TypeScript": "typescript",
  "React": "react",
  "Next.js": "nextdotjs/white",
  "Tailwind CSS": "tailwindcss",
  "Python": "python",
  "FastAPI": "fastapi",
  "Node.js": "nodedotjs",
  "Express.js": "express/white",
  "Hugging Face": "huggingface",
  "MongoDB": "mongodb",
  "PostgreSQL": "postgresql",
  "Prisma": "prisma/white",
  "Postman": "postman",
  "Vercel": "vercel/white",
};

const skillIcons = {
  "VS Code": VSCodeLogo,
  "Redis": RedisLogo,
  "LangChain": LangChainLogo,
  "Git/GitHub": GitHubLogo,
  "JavaScript": JavaScriptLogo,
};

const categoryGlow = {
  frontend: "hover:border-primary/40 hover:shadow-sm",
  backend: "hover:border-primary/40 hover:shadow-sm",
  tools: "hover:border-primary/40 hover:shadow-sm",
};

const skills = [
  { name: "JavaScript", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Python", category: "backend" },
  { name: "FastAPI", category: "backend" },
  { name: "Node.js", category: "backend" },
  { name: "Express.js", category: "backend" },
  { name: "LangChain", category: "backend" },
  { name: "Hugging Face", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "Redis", category: "backend" },
  { name: "Prisma", category: "backend" },
  { name: "Git/GitHub", category: "tools" },
  { name: "Postman", category: "tools" },
  { name: "Vercel", category: "tools" },
  { name: "VS Code", category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

const categoryColors = {
  frontend: "bg-primary/10 border-primary/20 text-primary",
  backend: "bg-primary/10 border-primary/20 text-primary",
  tools: "bg-primary/10 border-primary/20 text-primary",
};

export const SkillsSection = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="scroll-mt-20 pt-10 pb-12 px-4 relative overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto max-w-3xl relative z-10">
        <h2 className="section-heading">
          Skills & <span className="text-gradient">Technologies</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {skills.map((skill, index) => {
            const IconComponent = skillIcons[skill.name];
            const slug = iconSlugs[skill.name] || "code";
            return (
              <div
                key={skill.name}
                className={cn(
                  "flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-border/40 bg-card/45 backdrop-blur-xs text-foreground text-sm font-medium transition-all duration-300 hover:scale-105 hover:border-primary/45 cursor-default hover:shadow-xs group",
                  visible ? "reveal-visible" : "reveal-on-scroll"
                )}
                style={{
                  transition: `opacity 0.4s ease ${index * 40}ms, transform 0.45s cubic-bezier(0.22, 1, 0.36, 1) ${index * 40}ms, border-color 0.3s ease`,
                }}
              >
                <div className="transition-transform duration-300 group-hover:scale-110 flex items-center justify-center shrink-0 w-[18px] h-[18px]">
                  {IconComponent ? (
                    <IconComponent />
                  ) : (
                    <img
                      src={`https://cdn.simpleicons.org/${slug}`}
                      alt={skill.name}
                      className="w-[18px] h-[18px] object-contain"
                    />
                  )}
                </div>
                <span className="group-hover:text-primary transition-colors duration-300">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;