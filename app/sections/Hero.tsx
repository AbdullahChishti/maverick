"use client";

import { motion } from "framer-motion";
import { HeroVideoBackground } from "../components/HeroVideoBackground";
import { anchor, BRIEF_MAILTO } from "@/lib/utils";

export function Hero() {
  return (
    <section
      id="hero"
      className={`relative flex min-h-[100dvh] items-center bg-black ${anchor}`}
    >
      <HeroVideoBackground />
      <div className="absolute inset-0 z-[1] bg-black/60" />

      <div className="container-wide relative z-10">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="max-w-4xl text-[clamp(3rem,10vw,8rem)] font-medium leading-[0.95] tracking-[-0.04em] text-white"
        >
          AI that
          <br />
          <span className="text-white/40">actually</span>
          <br />
          ships.
        </motion.h1>

        <motion.a
          href={BRIEF_MAILTO}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 inline-block text-lg text-white/60 underline underline-offset-4 transition-colors hover:text-white"
        >
          Start a conversation
        </motion.a>
      </div>
    </section>
  );
}
