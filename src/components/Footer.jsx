import { ArrowUp } from "lucide-react";
import { useLenis } from "@/context/SmoothScrollContext";

export const Footer = () => {
  const { scrollTo } = useLenis() || {};

  const handleBackToTop = (e) => {
    e.preventDefault();
    if (scrollTo) {
      scrollTo(0, { duration: 1.4 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="mt-12 border-t border-border bg-background">
      <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center gap-4 text-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Aviral Tripathi. All rights reserved.
        </p>
        <a
          href="#hero"
          onClick={handleBackToTop}
          className="inline-flex items-center justify-center rounded-full bg-primary/10 p-2.5 text-primary transition-all duration-300 hover:bg-primary/20 hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background group"
          aria-label="Back to top"
        >
          <ArrowUp size={18} className="transition-transform duration-200 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </footer>
  );
};
