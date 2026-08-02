"use client";

import { motion } from "framer-motion";

/*
  Hero
  - The opening section: intro, name, tagline, CTAs, quick tech tags.
  - "use client" because Framer Motion animations run in the browser.
  - Staggered fade-up entrance: each element animates in slightly after the last.

  NOTE: replace the CV link and social URLs with your real ones.
  Put your profile photo at /public/profile.jpg (or update the src below).
*/

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const TAGS = ["React", "Next.js", "TypeScript", "Node.js"];

export default function Hero() {
  return (
    <section
      id="hero"
      className="max-w-6xl mx-auto px-6 min-h-[calc(100vh-4rem)] flex items-center"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full flex flex-col items-center text-center gap-5"
      >
        {/* Profile photo — replace src with your real image in /public */}
        <motion.div variants={item}>
          <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-accent/40 bg-surface">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/profile.jpg"
              alt="Mohammad Al Ghazi Basri"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.p variants={item} className="text-ink-muted text-sm">
          Hello, I&apos;m
        </motion.p>

        <motion.h1
          variants={item}
          className="text-4xl sm:text-6xl font-medium leading-tight"
        >
          Mohammad Al <span className="text-accent">Ghazi</span> Basri
        </motion.h1>

        <motion.p variants={item} className="text-lg sm:text-xl text-ink-muted">
          Full-stack Web Developer
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap justify-center gap-3 mt-2">
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener"
            className="bg-accent text-black font-medium px-6 py-3 rounded-lg hover:bg-accent-600 transition-colors"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="border border-border px-6 py-3 rounded-lg hover:bg-surface-2 transition-colors"
          >
            Contact Info
          </a>
        </motion.div>

        <motion.div variants={item} className="flex flex-wrap justify-center gap-2 mt-3">
          {TAGS.map((tag) => (
            <span
              key={tag}
              className="text-xs text-accent-100 border border-border px-3 py-1.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Social links — replace with your real URLs */}
        <motion.div variants={item} className="flex gap-4 mt-3 text-ink-muted">
          <a
            href="https://www.linkedin.com/in/alghazibasri/"
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
            className="hover:text-accent transition-colors"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.76-2.05C21.4 8.65 22 11 22 14.1V21h-4v-6.1c0-1.45-.03-3.3-2-3.3-2.01 0-2.32 1.57-2.32 3.2V21h-4z" />
            </svg>
          </a>
          <a
            href="https://github.com/mohammadalghazi"
            target="_blank"
            rel="noopener"
            aria-label="GitHub"
            className="hover:text-accent transition-colors"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.85 9.73.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.79.62-3.38-1.37-3.38-1.37-.46-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.36 9.36 0 0 1 12 6.84c.85 0 1.71.12 2.51.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.01 10.01 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}