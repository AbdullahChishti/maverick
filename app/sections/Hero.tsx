"use client";

import { motion } from "framer-motion";
import { BRIEF_MAILTO } from "@/lib/utils";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-indigo-600/30 rounded-full blur-[128px] animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] animate-float" style={{ animationDelay: "-3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[128px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container-wide relative py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight max-w-5xl text-white">
            We ship AI
            <br />
            <span className="text-zinc-400">that works.</span>
          </h1>

          <p className="mt-8 text-xl text-zinc-300 max-w-xl leading-relaxed">
            Your AI. Live in production.{" "}
            <span className="relative inline-block">
              <span className="text-white font-semibold">12 weeks</span>
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
            </span>
            {" "}or less.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href={BRIEF_MAILTO}
              className="group inline-flex items-center gap-2 bg-white text-zinc-900 px-6 py-4 rounded-full font-semibold hover:bg-zinc-200 transition-all hover:gap-3"
            >
              Start a project
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 text-zinc-300 px-6 py-4 font-medium hover:text-white transition-colors"
            >
              See our work
            </a>
          </div>
        </motion.div>

        {/* Client logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-24 pt-12 border-t border-white/10"
        >
          <p className="text-xs text-zinc-400 uppercase tracking-widest mb-6">Trusted by</p>
          <div className="flex flex-wrap items-center gap-x-12 gap-y-4">
            {["JPMorgan", "Barclays", "Siemens", "Audi"].map((client) => (
              <span key={client} className="text-xl font-semibold text-zinc-400 hover:text-white transition-colors cursor-default">
                {client}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
