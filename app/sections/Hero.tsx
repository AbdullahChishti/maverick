"use client";

import { motion } from "framer-motion";
import { BRIEF_MAILTO } from "@/lib/utils";

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-[100dvh] flex-col justify-end bg-[#0B0B0F] pb-24 pt-32 lg:pb-32">
      {/* Subtle gradient accent */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 50% 50% at 70% 20%, rgba(124, 107, 245, 0.08) 0%, transparent 60%),
            radial-gradient(ellipse 40% 40% at 20% 80%, rgba(45, 212, 191, 0.04) 0%, transparent 50%)
          `,
        }}
      />

      <div className="container-wide relative">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="label label-accent mb-8"
        >
          AI Engineering Studio
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-4xl text-[clamp(2.5rem,7vw,5.5rem)] font-medium leading-[1.05] tracking-[-0.03em] text-[#F4F4F5]"
        >
          AI that
          <br />
          <span className="text-[#A1A1AA]">actually</span> ships.
        </motion.h1>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 flex items-center gap-6"
        >
          <a href={BRIEF_MAILTO} className="btn btn-dark">
            Start a conversation
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
