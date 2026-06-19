"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { anchor } from "@/lib/utils";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 0.1, 0.22, 1] },
    },
  };

  return (
    <section
      id="hero"
      className={`relative flex min-h-[100dvh] items-center justify-center bg-white ${anchor}`}
    >
      <motion.div
        className="container-content relative z-10 py-16 text-center sm:py-24 lg:py-32"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="mx-auto max-w-4xl text-[2rem] font-semibold leading-[1.1] tracking-tight text-foreground sm:text-[2.75rem] lg:text-[3.25rem] text-balance"
        >
          AI-Native and Cloud-First Solutions
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mx-auto mt-5 max-w-xl text-base font-normal leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg sm:leading-relaxed"
        >
          Enterprise technology consulting that helps forward-thinking organizations
          transform with intelligent systems and modern cloud architecture.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-8 sm:mt-10">
          <a
            href="#contact"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-foreground px-7 text-sm font-medium text-white transition-colors duration-200 hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground min-w-[180px]"
          >
            Schedule a Consultation
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mx-auto mt-16 sm:mt-20 lg:mt-24"
        >
          <div className="flex justify-center gap-8 sm:gap-16 lg:gap-20">
            {[
              { value: "150+", label: "Projects" },
              { value: "98%", label: "Satisfaction" },
              { value: "10+", label: "Years" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-lg font-semibold tracking-tight text-foreground sm:text-xl tabular-nums">
                  {stat.value}
                </div>
                <div className="mt-0.5 text-xs font-normal text-muted-foreground sm:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
