"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    title: "LLM Apps",
    description: "Custom models for your domain",
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    title: "RAG Systems",
    description: "AI grounded in your data",
    gradient: "from-violet-600 to-purple-500",
  },
  {
    title: "AI Agents",
    description: "Autonomous task execution",
    gradient: "from-orange-500 to-pink-500",
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="py-24 lg:py-32">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start"
        >
          {/* Left - Sticky heading */}
          <div className="lg:sticky lg:top-32">
            <p className="text-sm text-indigo-400 font-medium mb-3">What we build</p>
            <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
              Production AI for regulated industries
            </h2>
            <p className="mt-4 text-zinc-400 max-w-sm">
              Finance. Healthcare. Enterprise. Systems that meet compliance requirements and actually ship.
            </p>

            <div className="mt-10 flex items-center gap-6 py-6 border-t border-white/10">
              <div>
                <p className="text-3xl font-bold">12<span className="text-indigo-400">w</span></p>
                <p className="text-xs text-zinc-500 mt-1">To production</p>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div>
                <p className="text-3xl font-bold">100<span className="text-purple-400">%</span></p>
                <p className="text-xs text-zinc-500 mt-1">Ship rate</p>
              </div>
            </div>
          </div>

          {/* Right - Service cards */}
          <div className="space-y-4">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-zinc-900 border border-white/5 hover:border-white/10 transition-all"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
                <div className="relative p-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                    <p className="text-sm text-zinc-300 mt-1">{service.description}</p>
                  </div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all`}>
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
