import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled
          ? "py-3 bg-background/90 backdrop-blur-md shadow-lg border-b border-border/50"
          : "py-4 bg-background/60 backdrop-blur-sm"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center relative z-50"
          href="#hero"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="relative">
            <span className="text-glow text-foreground">Aviral's</span>{" "}
            <span className="text-primary">Portfolio</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-all duration-300 font-medium hover:scale-105"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-foreground hover:text-primary transition-colors duration-200 relative z-50 bg-background/80 backdrop-blur-sm rounded-md"
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

        {/* Mobile Nav */}
        <div
          className={cn(
            "fixed top-0 left-0 w-full h-screen bg-background/95 backdrop-blur-md z-40",
            "flex flex-col items-center justify-center md:hidden",
            "transition-all duration-300 ease-in-out",
            isMenuOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-4 pointer-events-none"
          )}
        >
          <div className="flex flex-col items-center space-y-8 text-center">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className={cn(
                  "text-2xl font-medium text-foreground/80 hover:text-primary",
                  "transition-all duration-300 hover:scale-110",
                  "py-3 px-6 rounded-lg hover:bg-primary/10",
                  "transform",
                  isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                )}
                style={{
                  transitionDelay: isMenuOpen ? `${key * 100}ms` : "0ms"
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="absolute bottom-8 text-center">
            <p className="text-sm text-foreground/60">
              Tap anywhere outside to close
            </p>
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