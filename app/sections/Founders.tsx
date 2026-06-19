"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { anchor } from "@/lib/utils";

const fadeVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

export function Founders() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();

  const motionState = prefersReducedMotion
    ? "visible"
    : isInView
      ? "visible"
      : "hidden";

  return (
    <section
      id="founders"
      ref={sectionRef}
      aria-labelledby="founders-heading"
      className={`section-tight bg-surface ${anchor}`}
    >
      <motion.div
        className="container-content"
        variants={containerVariants}
        initial={prefersReducedMotion ? "visible" : "hidden"}
        animate={motionState}
      >
        <div className="mx-auto max-w-[38rem] text-center">
          <motion.p variants={fadeVariants} className="overline mb-grid-4">
            Leadership
          </motion.p>

          <motion.blockquote
            id="founders-heading"
            variants={fadeVariants}
            className="border-0 p-0"
          >
            <p className="text-body-lg font-normal leading-relaxed text-muted-foreground sm:text-[1.25rem] sm:leading-[1.6] text-balance">
              Our founders built AI and cloud systems at{" "}
              <span className="font-medium text-foreground">Microsoft</span>,{" "}
              <span className="font-medium text-foreground">OpenAI</span>, and{" "}
              <span className="font-medium text-foreground">Google</span>
              {" — "}experience they bring to every engagement.
            </p>
          </motion.blockquote>

          <motion.div
            variants={fadeVariants}
            className="divider mx-auto mt-grid-10 max-w-[4rem] lg:mt-grid-12"
            aria-hidden="true"
          />
        </div>
      </motion.div>
    </section>
  );
}
