import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { flushSync } from "react-dom";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() =>
    typeof document !== "undefined" &&
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const handleThemeChange = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };
    window.addEventListener("theme-changed", handleThemeChange);
    return () => window.removeEventListener("theme-changed", handleThemeChange);
  }, []);

  const toggleTheme = (event) => {
    const root = document.documentElement;
    const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const newDarkMode = !isDarkMode;

    const updateDOM = () => {
      if (newDarkMode) {
        root.classList.add("dark");
        root.style.colorScheme = "dark";
        localStorage.setItem("theme", "dark");
      } else {
        root.classList.remove("dark");
        root.style.colorScheme = "light";
        localStorage.setItem("theme", "light");
      }
      setIsDarkMode(newDarkMode);
      window.dispatchEvent(new Event("theme-changed"));
    };

    if (!document.startViewTransition || isReducedMotion) {
      updateDOM();
      return;
    }

    const x = event.clientX ?? window.innerWidth / 2;
    const y = event.clientY ?? window.innerHeight / 2;
    const r = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    root.style.setProperty("--x", `${x}px`);
    root.style.setProperty("--y", `${y}px`);
    root.style.setProperty("--r", `${r}px`);

    root.classList.add("view-transitioning");

    const transition = document.startViewTransition(() => {
      flushSync(() => {
        updateDOM();
      });
    });

    transition.finished.finally(() => {
      root.classList.remove("view-transitioning");
      root.style.removeProperty("--x");
      root.style.removeProperty("--y");
      root.style.removeProperty("--r");
    });
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={cn(
        "p-2 rounded-full bg-card shadow-md",
        "transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary",
        "hover:bg-card/80"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-5 w-5 text-yellow-300" />
      ) : (
        <Moon className="h-5 w-5 text-blue-900" />
      )}
    </button>
  );
};