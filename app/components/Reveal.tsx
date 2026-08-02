"use client";

import { motion, type Transition } from "framer-motion";
import { ReactNode } from "react";

/*
  Reveal
  Reusable wrapper that fades + slides its children up when they scroll
  into view. Used across sections for consistent scroll animation.

  - whileInView: animates when the element enters the viewport.
  - viewport once:true: animation plays a single time (won't replay on scroll up).
  - delay prop: lets you stagger multiple Reveals in the same section.
*/
export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const transition: Transition = {
    duration: 0.5,
    ease: "easeOut",
    delay,
  };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}