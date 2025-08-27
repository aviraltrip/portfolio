import { useState } from "react";
import { cn } from "@/lib/utils";

const HTMLCSSLogo = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
    <path d="M4 3L5.77 20.15L12 22L18.23 20.15L20 3H4Z" fill="#E34F26"/>
    <path d="M12 21L17.14 19.5L18.23 4H12V21Z" fill="#FF5722"/>
    <path d="M8.5 8.5H15.5V10.5H10.5V12.5H15V16H8.5V14H13V12.5H8.5V8.5Z" fill="white"/>
  </svg>
);

const JavaScriptLogo = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" fill="#F7DF1E"/>
    <path d="M7.9 18.9c0.4 0.7 0.9 1.2 1.8 1.2 0.8 0 1.3-0.3 1.3-1.5V11h2v7.7c0 2.4-1.4 3.5-3.5 3.5-1.9 0-3-1-3.6-2.3L7.9 18.9zM15.1 18.6c0.5 0.8 1.1 1.4 2.2 1.4 0.9 0 1.5-0.5 1.5-1.1 0-0.8-0.6-1.1-1.6-1.5l-0.5-0.2c-1.7-0.7-2.8-1.6-2.8-3.5 0-1.7 1.3-3 3.4-3 1.5 0 2.6 0.5 3.3 1.9l-1.8 1.2c-0.4-0.7-0.8-1-1.5-1-0.7 0-1.1 0.4-1.1 1 0 0.7 0.4 1 1.4 1.4l0.5 0.2c2 0.9 3.1 1.7 3.1 3.7 0 2.1-1.7 3.2-3.9 3.2-2.2 0-3.6-1-4.3-2.4L15.1 18.6z" fill="#323330"/>
  </svg>
);

const ReactLogo = () => (
  <svg
    width="28"
    height="28"
    viewBox="-11.5 -10.23174 23 20.46348"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle r="2" fill="#61DAFB" />
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

const TailwindLogo = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
    <path d="M12 6C8.66667 6 6.66667 7.66667 6 11C7.33333 9 8.83333 8.5 10.5 9C11.3099 9.21484 11.8871 9.79167 12.5225 10.4271C13.5708 11.4754 14.8375 12.75 17.25 12.75C20.5833 12.75 22.5833 11.0833 23.25 7.75C21.9167 9.75 20.4167 10.25 18.75 9.75C17.9401 9.53516 17.3629 8.95833 16.7275 8.32292C15.6792 7.27458 14.4125 6 12 6ZM6.75 12.75C3.41667 12.75 1.41667 14.4167 0.75 17.75C2.08333 15.75 3.58333 15.25 5.25 15.75C6.05989 15.9648 6.63705 16.5417 7.27249 17.1771C8.32083 18.2254 9.58751 19.5 12 19.5C15.3333 19.5 17.3333 17.8333 18 14.5C16.6667 16.5 15.1667 17 13.5 16.5C12.6901 16.2852 12.1129 15.7083 11.4775 15.0729C10.4292 14.0246 9.16251 12.75 6.75 12.75Z" fill="#38BDF8"/>
  </svg>
);

const GitHubLogo = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
    <path d="M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.63 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.3 24 12C24 5.373 18.627 0 12 0Z" fill="currentColor"/>
  </svg>
);

const VSCodeLogo = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
    <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" fill="#007ACC"/>
  </svg>
);
const ExpressJSLogo = () => (
  <svg width="28" height="28" viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="50" fill="#4a4a4a"/>
    <text x="50" y="62" textAnchor="middle" fill="white" fontSize="42" fontFamily="Arial, sans-serif" fontWeight="normal">ex</text>
  </svg>
);

const NodeJSLogo = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
    <path
      d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242L11.13,1.627c-0.081-0.047-0.189-0.047-0.271,0L2.066,6.68C1.981,6.729,1.928,6.825,1.928,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921c0-0.659,0.353-1.275,0.922-1.603L11.076,0.242C11.632-0.081,12.367-0.081,12.922,0.242l8.795,5.076c0.57,0.329,0.924,0.944,0.924,1.603v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.795,5.076C12.643,23.916,12.322,24,11.998,24z M19.099,13.993c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"
      fill="#68A063"
    />
  </svg>
);

const DatabaseLogo = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
    <ellipse cx="12" cy="5.5" rx="8.5" ry="2.5" fill="#336791"/>
    <path d="M3.5 5.5V18.5C3.5 20.5 7.5 22 12 22C16.5 22 20.5 20.5 20.5 18.5V5.5" stroke="#336791" strokeWidth="1.5" fill="none"/>
    <ellipse cx="12" cy="12" rx="8.5" ry="2.5" fill="none" stroke="#336791" strokeWidth="1.5"/>
  </svg>
);

const BootstrapLogo = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
    <path
      d="M5 2h14c1.66 0 3 1.34 3 3v14c0 1.66-1.34 3-3 3H5c-1.66 0-3-1.34-3-3V5c0-1.66 1.34-3 3-3z"
      fill="#7952B3"
    />
    <path
      d="M8 7v10h5.2c2 0 3.3-1.2 3.3-2.9 0-1.1-.6-2-1.5-2.5 
         .8-.4 1.3-1.2 1.3-2.2C16.3 8 15.3 7 14 7H8zm2 1.5h3.7c.5 0 .9.4.9.9s-.4.9-.9.9H10V8.5zm0 3.4h4c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2h-4v-2.4z"
      fill="white"
    />
  </svg>
);

const skillIcons = {
  "HTML/CSS": HTMLCSSLogo,
  "JavaScript": JavaScriptLogo,
  "React": ReactLogo,
  "Tailwind CSS": TailwindLogo,
  "Bootstrap": BootstrapLogo,
  "Node.js": NodeJSLogo,
  "MySQL": DatabaseLogo,
  "Express.js": ExpressJSLogo,
  "Git/GitHub": GitHubLogo,
  "VS Code": VSCodeLogo,
};

const skills = [
  { name: "HTML/CSS", level: 100, category: "frontend" },
  { name: "JavaScript", level: 100, category: "frontend" },
  { name: "React", level: 100, category: "frontend" },
  { name: "Tailwind CSS", level: 100, category: "frontend" },
  { name: "Bootstrap", level: 100, category: "frontend" },

  { name: "Node.js", level: 100, category: "backend" },
  { name: "MySQL", level: 100, category: "backend" },
  { name: "Express.js", level: 100, category: "backend" },

  { name: "Git/GitHub", level: 100, category: "tools" },
  { name: "VS Code", level: 100, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-all duration-300 capitalize transform hover:scale-105",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-secondary/70 text-foreground hover:bg-secondary hover:shadow-md"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => {
            const IconComponent = skillIcons[skill.name] || HTMLCSSLogo;
            return (
              <div
                key={key}
                className="bg-card p-6 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 transform hover:scale-105 group border border-transparent hover:border-primary/20 text-center"
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="relative">
                    <IconComponent className="transition-all duration-300 group-hover:scale-110 drop-shadow-sm group-hover:drop-shadow-lg" />
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 scale-150"></div>
                  </div>
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">
                    {skill.name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scaleX(0);
          }
          to {
            opacity: 1;
            transform: scaleX(1);
          }
        }
        
        .card-hover:hover {
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;