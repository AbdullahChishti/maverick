"use client";

import { motion } from "framer-motion";
import { BRIEF_MAILTO } from "@/lib/utils";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-[#0C0A09] pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* Gradient accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-violet-600/10 to-transparent pointer-events-none" />

      <div className="container-wide relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-violet-400 text-sm font-medium tracking-wide mb-6">
            AI Engineering Studio
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.1] tracking-tight max-w-4xl">
            We turn ambitious AI ideas into{" "}
            <span className="text-stone-500">production systems.</span>
          </h1>

          <p className="mt-8 text-lg text-stone-400 max-w-xl leading-relaxed">
            From concept to deployment—LLM applications, RAG systems, and AI agents built for scale, security, and compliance.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={BRIEF_MAILTO}
              className="inline-flex items-center gap-2 bg-white text-[#0C0A09] px-6 py-3 rounded-full font-medium text-sm hover:bg-stone-100 transition-colors"
            >
              Start a conversation
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 text-stone-400 px-6 py-3 font-medium text-sm hover:text-white transition-colors"
            >
              See what we build
            </a>
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-20 pt-10 border-t border-stone-800 grid grid-cols-3 gap-8"
        >
          <div>
            <p className="text-3xl lg:text-4xl font-semibold text-white">50+</p>
            <p className="text-sm text-stone-500 mt-1">Projects delivered</p>
          </div>
          <div>
            <p className="text-3xl lg:text-4xl font-semibold text-white">12 wks</p>
            <p className="text-sm text-stone-500 mt-1">Average delivery</p>
          </div>
          <div>
            <p className="text-3xl lg:text-4xl font-semibold text-white">100%</p>
            <p className="text-sm text-stone-500 mt-1">Production deployed</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
