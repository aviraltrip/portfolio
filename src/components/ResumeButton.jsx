import { FileText, Download, ExternalLink, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const RESUME_PATH = "/assets/Resume.pdf";

export const ResumeButton = ({ variant = "full", className }) => {
  const [downloading, setDownloading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    const handleEscape = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleOpen = () => {
    setMenuOpen(false);
    window.open(RESUME_PATH, "_blank", "noopener,noreferrer");
  };

  const handleDownload = () => {
    setMenuOpen(false);
    try {
      setDownloading(true);
      const link = document.createElement("a");
      link.href = RESUME_PATH;
      link.download = "Resume.pdf";
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

  const isCompact = variant === "compact";

  return (
    <div ref={menuRef} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setMenuOpen((open) => !open)}
        disabled={downloading}
        aria-haspopup="menu"
        aria-expanded={menuOpen}
        className={
          isCompact
            ? "group flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-medium border border-primary/40 text-primary bg-primary/5 hover:bg-primary/15 hover:border-primary/60 hover:scale-105 active:scale-95 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            : "group relative px-6 py-2 rounded-full border-2 border-primary text-primary hover:text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
        }
      >
        {isCompact ? (
          <>
            <FileText size={14} className={downloading ? "animate-bounce" : ""} />
            {downloading ? "Downloading..." : "Resume"}
            <ChevronDown
              size={12}
              className={cn("transition-transform duration-300", menuOpen && "rotate-180")}
            />
          </>
        ) : (
          <>
            <span className="relative z-10 flex items-center gap-2">
              <FileText
                size={16}
                className={downloading ? "animate-bounce" : "group-hover:animate-bounce"}
              />
              {downloading ? "Downloading..." : "Resume"}
              <ChevronDown
                size={14}
                className={cn("transition-transform duration-300", menuOpen && "rotate-180")}
              />
            </span>
            <span className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </>
        )}
      </button>

      {menuOpen && (
        <div
          role="menu"
          className={cn(
            "absolute mt-2 rounded-xl border border-border/60 bg-card/95 backdrop-blur-md shadow-lg shadow-primary/10 overflow-hidden z-50 animate-fade-in",
            isCompact
              ? "right-0 min-w-[180px]"
              : "left-0 right-0 sm:right-auto min-w-full sm:min-w-[200px]"
          )}
        >
          <button
            type="button"
            role="menuitem"
            onClick={handleOpen}
            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left text-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-200"
          >
            <ExternalLink size={15} />
            Open Resume
          </button>
          <div className="h-px bg-border/60" />
          <button
            type="button"
            role="menuitem"
            onClick={handleDownload}
            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left text-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-200"
          >
            <Download size={15} />
            Download
          </button>
        </div>
      )}
    </div>
  );
};
