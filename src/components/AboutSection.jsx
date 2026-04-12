import { Briefcase, Code, User, Download } from "lucide-react";
import { useState } from "react";

export const AboutSection = () => {
  const [downloading, setDownloading] = useState(false);

  const handleDownloadCV = (e) => {
    e.preventDefault();
    try {
      setDownloading(true);
      const link = document.createElement("a");
      link.href = "/assets/Resume.pdf";
      link.download = "Resume.pdf";
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Download failed:", error);
      alert("Resume download is currently unavailable. Please try again later.");
    } finally {
      setTimeout(() => setDownloading(false), 1000);
    }
  };

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="section-heading">
          About <span className="text-gradient">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I specialize in creating responsive, accessible and high-performance
              web applications using modern technology. I'm passionate about
              crafting elegant solutions to complex problems and delivering
              exceptional user experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href="#contact" className="cosmic-button text-center">
                Get In Touch
              </a>

              <button
                onClick={handleDownloadCV}
                disabled={downloading}
                className="group relative px-6 py-2 rounded-full border-2 border-primary text-primary hover:text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Download
                    size={16}
                    className={downloading ? "animate-bounce" : "group-hover:animate-bounce"}
                  />
                  {downloading ? "Downloading..." : "Download CV"}
                </span>
                <span className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5">
            {[
              {
                icon: Code,
                title: "Web Development",
                desc: "Creating responsive websites and web applications with modern frameworks like React and Next.js.",
              },
              {
                icon: User,
                title: "UI/UX Design",
                desc: "Designing intuitive user interfaces and seamless user experiences with a focus on accessibility.",
              },
              {
                icon: Briefcase,
                title: "Full-Stack Projects",
                desc: "End-to-end development from database schema to polished frontend using the MERN stack.",
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