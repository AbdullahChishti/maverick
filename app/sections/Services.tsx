"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { anchor } from "@/lib/utils";

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section
      id="services"
      ref={ref}
      className={`flex min-h-[70vh] items-center bg-neutral-950 ${anchor}`}
    >
      <div className="container-wide py-24">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl text-[clamp(2rem,5vw,4rem)] font-medium leading-[1.15] tracking-[-0.03em] text-white"
        >
          We design, build, and deploy
          <span className="text-white/40"> AI systems, data platforms, and cloud infrastructure </span>
          for regulated industries.
        </motion.p>
      </div>
    </section>
  );
}
