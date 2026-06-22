"use client";

import { motion } from "framer-motion";
import { BRIEF_MAILTO } from "@/lib/utils";

export function Hero() {
  return (
    <section id="hero" className="pt-24 pb-12 lg:pt-32 lg:pb-16">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Main headline - editorial style */}
          <h1 className="text-[clamp(3rem,12vw,12rem)] font-bold leading-[0.85] tracking-tighter uppercase">
            AI
            <br />
            <span className="text-stone-400">Engineering</span>
          </h1>

          {/* Info row */}
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 border-t border-stone-300 pt-8">
            <div>
              <p className="text-xs text-stone-500 uppercase tracking-wide">Focus</p>
              <p className="mt-2 text-sm">Production AI systems for enterprise</p>
            </div>
            <div>
              <p className="text-xs text-stone-500 uppercase tracking-wide">Clients</p>
              <p className="mt-2 text-sm">JPMorgan, Barclays, Siemens, Audi</p>
            </div>
            <div>
              <p className="text-xs text-stone-500 uppercase tracking-wide">Timeline</p>
              <p className="mt-2 text-sm">Prototype to production in 12 weeks</p>
            </div>
            <div>
              <p className="text-xs text-stone-500 uppercase tracking-wide">Contact</p>
              <a href={BRIEF_MAILTO} className="mt-2 text-sm underline hover:no-underline block">
                Start a project →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
