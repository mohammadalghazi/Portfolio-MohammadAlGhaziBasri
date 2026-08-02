"use client";

import { useEffect, useState } from "react";

/*
  ThemeToggle
  - Default theme is dark (no "light" class on <html>).
  - On first mount, reads the saved choice from localStorage and applies it.
    This runs during hydration, so any flash is minimal; because dark is the
    default and most visitors stay on dark, the common case never flashes.
  - Toggling flips the "light" class on <html> and saves the choice.
*/
export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const light = saved === "light";
    document.documentElement.classList.toggle("light", light);
    setIsLight(light);
    setMounted(true);
  }, []);

  function toggle() {
    const root = document.documentElement;
    const nextIsLight = !root.classList.contains("light");
    root.classList.toggle("light", nextIsLight);
    localStorage.setItem("theme", nextIsLight ? "light" : "dark");
    setIsLight(nextIsLight);
  }

  if (!mounted) {
    return <div className="w-9 h-9" aria-hidden="true" />;
  }

  return (
    <button
      onClick={toggle}
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      className="w-9 h-9 flex items-center justify-center rounded-lg border border-border hover:bg-surface-2 transition-colors"
    >
      {isLight ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      )}
    </button>
  );
}