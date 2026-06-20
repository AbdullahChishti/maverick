"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { anchor } from "@/lib/utils";

const services = [
  { num: "01", name: "AI Systems" },
  { num: "02", name: "Data Platforms" },
  { num: "03", name: "Cloud Infrastructure" },
  { num: "04", name: "Automation" },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section
      id="services"
      ref={ref}
      className={`bg-black ${anchor}`}
    >
      <div className="container-wide py-32 lg:py-48">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="text-sm font-medium text-white/40"
            >
              Services
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-4 text-[clamp(2rem,5vw,4rem)] font-medium leading-[1] tracking-[-0.03em] text-white"
            >
              What we build
            </motion.h2>
          </div>

          <div className="flex flex-col">
            {services.map((service, i) => (
              <motion.div
                key={service.num}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className="flex items-baseline gap-8 border-b border-white/10 py-8 last:border-b-0"
              >
                <span className="text-sm font-medium text-white/30">{service.num}</span>
                <span className="text-2xl font-medium text-white lg:text-3xl">{service.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
