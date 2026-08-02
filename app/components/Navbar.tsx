"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#beyond", label: "Beyond Code" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-bg/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / name */}
        <a href="#" className="font-heading font-medium text-lg">
          Al Ghazi <span className="text-accent">Basri</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-sm text-ink-muted">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:text-ink transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-border hover:bg-surface-2 transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? (
                <path d="M18 6 6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <ul className="md:hidden border-t border-border bg-bg px-6 py-4 flex flex-col gap-4 text-sm text-ink-muted">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block hover:text-ink transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}