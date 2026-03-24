import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="mt-12 border-t border-border bg-background">
      <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center gap-4 text-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Aviral Tripathi. All rights reserved.
        </p>
        <a
          href="#hero"
          className="inline-flex items-center justify-center rounded-full bg-primary/10 p-2 text-primary transition-colors hover:bg-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};
