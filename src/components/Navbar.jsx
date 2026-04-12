import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero", id: "hero" },
  { name: "About", href: "#about", id: "about" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
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
        { rootMargin: "-40% 0px -55% 0px" }
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
        "fixed top-0 left-0 right-0 w-full h-16 z-50",
        "transition-all duration-300",
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-lg border-b border-border/50"
          : "bg-background/60 backdrop-blur-sm"
      )}
    >
      <div className="container mx-auto px-4 h-full flex items-center">
        {/* Logo */}
        <a
          className="text-xl font-bold flex items-center relative z-50 h-full group"
          href="#hero"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="text-foreground group-hover:text-primary transition-colors duration-300">
            Aviral's{" "}
          </span>
          <span className="text-primary ml-1">Portfolio</span>
        </a>

        <div className="flex-grow" />

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-1 h-full">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={cn(
                "relative px-3 py-1.5 text-sm font-medium transition-all duration-200",
                "flex items-center h-full group/nav",
                activeSection === item.id ? "text-primary" : "text-foreground/70 hover:text-primary"
              )}
            >
              {item.name}
              <span className={cn(
                "absolute bottom-0 left-0 h-0.5 bg-primary rounded-full transition-all duration-300",
                activeSection === item.id ? "w-full" : "w-0 group-hover/nav:w-full"
              )} />
            </a>
          ))}
          <div className="ml-3 flex items-center h-full">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden relative z-50">
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

        {/* Mobile Nav Overlay */}
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
                  transitionDelay: isMenuOpen ? `${key * 60}ms` : "0ms",
                  transform: isMenuOpen ? "translateX(0)" : "translateX(-20px)",
                  opacity: isMenuOpen ? 1 : 0,
                  transition:
                    "color 200ms ease, transform 300ms ease, background-color 200ms ease, opacity 250ms ease",
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div
              className="py-3 px-6 rounded-xl w-full flex justify-center"
              style={{
                transitionDelay: isMenuOpen ? `${navItems.length * 60}ms` : "0ms",
                transform: isMenuOpen ? "translateX(0)" : "translateX(-20px)",
                opacity: isMenuOpen ? 1 : 0,
                transition: "transform 300ms ease, opacity 250ms ease",
              }}
            >
              <ThemeToggle />
            </div>
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