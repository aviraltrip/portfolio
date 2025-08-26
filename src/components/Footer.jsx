import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-background relative border-t border-border mt-12 pt-8 flex items-center">
      <p className="text-sm text-muted-foreground mx-auto text-center">
        &copy; {new Date().getFullYear()} Aviral Tripathi. All rights reserved.
      </p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
