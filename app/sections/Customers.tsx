"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { anchor } from "@/lib/utils";

const clients = [
  { id: "jpmorgan", name: "JPMorgan" },
  { id: "barclays", name: "Barclays" },
  { id: "almaghreb", name: "Almaghreb Bank" },
] as const;

export function Customers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.04 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 0.1, 0.22, 1] },
    },
  };

  const motionState = prefersReducedMotion
    ? "visible"
    : isInView
      ? "visible"
      : "hidden";

  return (
    <section
      id="customers"
      ref={ref}
      aria-labelledby="customers-heading"
      className={`border-y border-border-subtle bg-surface-subtle py-grid-8 sm:py-grid-10 ${anchor}`}
    >
      <motion.div
        className="container-wide"
        variants={containerVariants}
        initial={prefersReducedMotion ? "visible" : "hidden"}
        animate={motionState}
      >
        <motion.p
          id="customers-heading"
          variants={itemVariants}
          className="overline mb-grid-6 text-center text-muted sm:mb-grid-8"
        >
          Trusted by leading institutions
        </motion.p>

        <ul
          className="flex flex-col items-center justify-center gap-grid-6 sm:flex-row sm:gap-grid-12 lg:gap-grid-16"
          aria-label="Selected clients"
        >
          {clients.map((client) => (
            <motion.li
              key={client.id}
              variants={itemVariants}
            >
              <span className="text-[0.9375rem] font-medium tracking-[-0.02em] text-foreground/60 sm:text-base">
                {client.name}
              </span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
