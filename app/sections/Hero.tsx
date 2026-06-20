"use client";

import { motion } from "framer-motion";
import { HeroVideoBackground } from "../components/HeroVideoBackground";
import { anchor, BRIEF_MAILTO } from "@/lib/utils";

export function Hero() {
  return (
    <section
      id="hero"
      className={`relative min-h-[100dvh] bg-black ${anchor}`}
    >
      <HeroVideoBackground />

      {/* Overlay */}
      <div className="absolute inset-0 z-[1] bg-black/50" />

      <div className="container-wide relative z-10 flex min-h-[100dvh] items-center">
        <div className="w-full py-32 lg:py-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-sm font-medium text-white/60"
          >
            Enterprise AI
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="mt-4 max-w-4xl text-[clamp(3rem,10vw,8rem)] font-medium leading-[0.9] tracking-[-0.04em] text-white"
          >
            AI that ships.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-8 max-w-md text-xl text-white/60"
          >
            Production-ready systems for regulated industries.
          </motion.p>

          <motion.a
            href={BRIEF_MAILTO}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-12 inline-block border-b-2 border-white pb-1 text-lg font-medium text-white transition-opacity hover:opacity-70"
          >
            Get in touch
          </motion.a>
        </div>
      </div>
    </section>
  );
}
