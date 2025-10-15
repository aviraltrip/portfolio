import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "X UI Clone",
    description: "A sleek and responsive UI clone of the X (Twitter) interface",
    image: "/projects/X-UI.png",
    tags: ["HTML", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/aviraltrip/X-UI-clone",
  },
  {
    id: 2,
    title: "MediMitra: AI-Powered Telemedicine Platform",
    description:
      "A collaborative project where I worked on building a Pharmacist Control Panel, real-time medicine availability based on geolocation, and automated stock-level notifications. I implemented dynamic routing using Next.js, integrated frontend and backend through Fetch API & handling response variations.",
    image: "/projects/MediMitra.png",
    tags: ["ReactJS", "NextJS", "CSS"],
    demoUrl: "https://telemedicine-gamma.vercel.app/",
  },
  {
    id: 3,
    title: "Personal Portfolio",
    description:
      "A modern, intuitive portfolio website built to showcase my skills and projects",
    image: "/projects/portfolio.png",
    tags: ["ReactJS", "Tailwind CSS"],
    demoUrl: "https://aviral-tripathi.vercel.app/",
    githubUrl: "https://github.com/aviraltrip/portfolio",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/aviraltrip"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};