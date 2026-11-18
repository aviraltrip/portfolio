import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { ResumeButton } from "./ResumeButton";
import { useLenis } from "@/context/SmoothScrollContext";

const navItems = [
  { name: "About", href: "#hero", id: "hero" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { scrollTo } = useLenis() || {};

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (scrollTo) {
      scrollTo(href, { offset: -65 });
    } else {
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observers = [];
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-35% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isMenuOpen) setIsMenuOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 w-full h-16 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/85 backdrop-blur-md shadow-sm border-b border-border/50"
          : "bg-background/50 backdrop-blur-xs"
      )}
    >
      <div className="container mx-auto px-4 h-full flex items-center">
        <a
          className="text-xl font-bold flex items-center relative z-50 h-full group"
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
        >
          <span className="text-foreground group-hover:text-primary transition-colors duration-300">
            Aviral's{" "}
          </span>
          <span className="text-primary ml-1">Portfolio</span>
        </a>

        <div className="flex-grow" />

        <div className="hidden md:flex items-center space-x-1 h-full">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "relative px-3.5 py-1.5 text-sm font-medium transition-colors duration-200",
                  "flex items-center h-full group/nav",
                  isActive ? "text-primary" : "text-foreground/75 hover:text-primary"
                )}
              >
                <span>{item.name}</span>
                {isActive && (
                  <span className="absolute bottom-2 left-3.5 right-3.5 h-[2px] bg-primary rounded-full transition-all duration-300" />
                )}
              </a>
            );
          })}
          <div className="ml-3 flex items-center gap-3 h-full">
            <ResumeButton variant="compact" />
            <ThemeToggle />
          </div>
        </div>

        <div className="md:hidden flex items-center gap-2 relative z-50">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-foreground hover:text-primary transition-colors duration-200 bg-background/80 backdrop-blur-sm rounded-md"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={isMenuOpen}
          >
            <div className="relative w-6 h-6">
              <Menu
                size={24}
                className={cn(
                  "absolute inset-0 transition-all duration-300",
                  isMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                )}
              />
              <X
                size={24}
                className={cn(
                  "absolute inset-0 transition-all duration-300",
                  isMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
                )}
              />
            </div>
          </button>
        </div>

        <div
          className={cn(
            "fixed top-0 left-0 w-full h-screen z-40",
            "flex flex-col items-center justify-center md:hidden",
            "transition-all duration-300 ease-in-out",
            isMenuOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-4 pointer-events-none"
          )}
          style={{
            backgroundColor: "hsl(var(--background) / 0.96)",
            backdropFilter: "blur(12px)",
          }}
        >
          <div className="flex flex-col items-center space-y-2 text-center w-full px-8">
            {navItems.map((item, key) => (
              <a
                key={item.id}
                href={item.href}
                className={cn(
                  "text-2xl font-medium w-full py-3 px-6 rounded-xl",
                  "transition-all duration-200",
                  activeSection === item.id
                    ? "text-primary bg-primary/10"
                    : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                )}
                style={{
                  transform: isMenuOpen ? "translateX(0)" : "translateX(-20px)",
                  opacity: isMenuOpen ? 1 : 0,
                  transitionProperty: "color, transform, background-color, opacity",
                  transitionDuration: "200ms, 300ms, 200ms, 250ms",
                  transitionTimingFunction: "ease, ease, ease, ease",
                  transitionDelay: isMenuOpen ? `${key * 60}ms` : "0ms",
                }}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/20 z-30 md:hidden"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </div>
    </nav>
  );
};
