"use client";

import { motion } from "framer-motion";
import { anchor, BRIEF_MAILTO } from "@/lib/utils";

export function Hero() {
  return (
    <section
      id="hero"
      className={`relative min-h-[100dvh] overflow-hidden bg-black ${anchor}`}
    >
      {/* Gradient accent line */}
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-1/4 -top-1/4 h-[60vh] w-[60vh] rounded-full bg-emerald-500/[0.07] blur-[120px]" />
        <div className="absolute -bottom-1/4 -left-1/4 h-[40vh] w-[40vh] rounded-full bg-emerald-500/[0.05] blur-[100px]" />
      </div>

      <div className="container-wide relative flex min-h-[100dvh] flex-col justify-between py-12">
        {/* Top - Eyebrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30">
            AI Advisory
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30">
            Est. 2024
          </span>
        </motion.div>

        {/* Center - Main content */}
        <div className="flex flex-col gap-16 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <h1 className="text-[clamp(3.5rem,12vw,9rem)] font-semibold leading-[0.9] tracking-[-0.05em] text-white">
              We ship
              <br />
              <span className="bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent">
                production AI
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-xs"
          >
            <p className="text-base leading-relaxed text-white/40">
              Enterprise systems for regulated industries. From prototype to production in 12 weeks.
            </p>
          </motion.div>
        </div>

        {/* Bottom - CTA and credentials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col gap-8 border-t border-white/10 pt-8 lg:flex-row lg:items-center lg:justify-between"
        >
          <a
            href={BRIEF_MAILTO}
            className="group inline-flex items-center gap-4"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:border-emerald-400 group-hover:bg-emerald-400 group-hover:scale-110">
              <svg
                className="h-4 w-4 text-white transition-all duration-300 group-hover:-rotate-45 group-hover:text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
            <span className="text-lg font-medium text-white transition-colors duration-300 group-hover:text-emerald-400">
              Start a project
            </span>
          </a>

          <div className="flex gap-8 font-mono text-[10px] uppercase tracking-[0.25em] text-white/25 lg:gap-12">
            <span>Ex-Microsoft</span>
            <span>Ex-OpenAI</span>
            <span>Ex-Google</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
