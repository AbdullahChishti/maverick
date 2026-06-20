"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { anchor } from "@/lib/utils";

const metrics = [
  { value: "$200M+", label: "AI systems deployed" },
  { value: "57", label: "Enterprise clients" },
  { value: "12", label: "Weeks to production" },
];

const clients = ["JPMorgan", "Barclays", "Siemens", "Audi", "myToys", "Navan"];

export function Founders() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section
      id="founders"
      ref={ref}
      className={`relative bg-white ${anchor}`}
    >
      {/* Dot grid backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.07) 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="container-wide relative py-24 lg:py-40">
        {/* Metrics row */}
        <div className="grid gap-12 border-b border-black/10 pb-16 sm:grid-cols-3 lg:gap-8 lg:pb-24">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Accent bar */}
              <div className="absolute -left-4 top-0 hidden h-full w-0.5 bg-gradient-to-b from-emerald-500 to-transparent opacity-50 lg:block" />
              <p className="text-[clamp(3.5rem,10vw,7rem)] font-semibold leading-none tracking-[-0.05em] text-black">
                {metric.value}
              </p>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.3em] text-black/40">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Clients */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="pt-16 lg:pt-24"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-black/40">
            Trusted by
          </p>
          <div className="mt-10 flex flex-wrap gap-x-16 gap-y-6">
            {clients.map((client, i) => (
              <motion.span
                key={client}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.05 }}
                className="text-[clamp(1.25rem,3vw,2rem)] font-medium tracking-[-0.02em] text-black/15 transition-colors duration-300 hover:text-black"
              >
                {client}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
