"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { anchor } from "@/lib/utils";

interface Step {
  number: number;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: 1,
    title: "Discover",
    description: "Assess business objectives, technology landscape, and opportunities",
  },
  {
    number: 2,
    title: "Design",
    description: "Architect scalable AI and cloud solutions",
  },
  {
    number: 3,
    title: "Build",
    description: "Develop and deploy secure, enterprise-grade solutions",
  },
  {
    number: 4,
    title: "Scale",
    description: "Optimize, monitor, and continuously improve",
  },
];

export function Approach() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="approach" ref={sectionRef} className={`section bg-surface ${anchor}`}>
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="section-header"
        >
          <p className="overline mb-grid-2">Process</p>
          <h2>Our Approach</h2>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:absolute lg:left-[12%] lg:right-[12%] lg:top-6 lg:block lg:h-px lg:bg-border">
            <motion.div
              className="absolute inset-y-0 left-0 bg-accent"
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : {}}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
            />
          </div>

          <div className="grid grid-cols-1 gap-grid-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-grid-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.45,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: 0.15 + index * 0.08,
                }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="mb-grid-4 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface">
                  <span className="text-body font-medium text-accent">{step.number}</span>
                </div>

                <div className="space-y-grid-1">
                  <h3 className="text-h4">{step.title}</h3>
                  <p className="mx-auto max-w-[280px] text-body-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
