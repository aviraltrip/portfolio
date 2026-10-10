import { FileText } from "lucide-react";
import { cn } from "@/lib/utils";

const RESUME_PATH = "/assets/Resume.pdf";

export const ResumeButton = ({ variant = "full", className }) => {
  const isCompact = variant === "compact";

  const handleOpen = () => {
    window.open(RESUME_PATH, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      type="button"
      onClick={handleOpen}
      className={cn(
        "group flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95",
        isCompact
          ? "px-4 py-2 rounded-full text-sm font-medium border border-border/50 text-foreground bg-card hover:bg-secondary/40 shadow-sm"
          : "relative w-full sm:w-auto px-6 py-2 rounded-full border-2 border-primary text-primary hover:text-white overflow-hidden hover:shadow-lg hover:shadow-primary/30",
        className
      )}
    >
      {isCompact ? (
        <>
          <FileText size={14} />
          Resume
        </>
      ) : (
        <>
          <span className="relative z-10 flex items-center gap-2">
            <FileText size={16} className="group-hover:animate-bounce" />
            Resume
          </span>
          <span className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </>
      )}
    </button>
  );
};
