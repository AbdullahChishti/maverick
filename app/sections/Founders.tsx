"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const companies = [
  { name: "Google", description: "ML infrastructure" },
  { name: "OpenAI", description: "LLM systems" },
  { name: "Microsoft", description: "Azure AI" },
  { name: "Meta", description: "Recommendation AI" },
  { name: "Stripe", description: "Production systems" },
];

const stats = [
  { value: "15+", label: "Years combined experience" },
  { value: "50M+", label: "Users served" },
  { value: "100%", label: "Ship rate" },
];

export function Founders() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="founders" ref={ref} className="relative min-h-screen flex items-center py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-indigo-600/15 rounded-full blur-[128px]" />
      </div>

      <div className="container-wide relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <p className="text-sm text-indigo-400 font-medium mb-4 uppercase tracking-wider">About us</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
            We've built AI at
            <br />
            <span className="text-zinc-400">the companies you know.</span>
          </h2>
          <p className="mt-8 text-xl text-zinc-300 leading-relaxed max-w-2xl">
            Our founders come from the teams that built the AI systems behind the world's most demanding products. We bring that same expertise to every engagement.
          </p>

          {/* Company badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 flex flex-wrap gap-4"
          >
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-3 bg-zinc-900/80 border border-white/10 rounded-full px-5 py-3"
              >
                <span className="text-white font-semibold">{company.name}</span>
                <span className="text-zinc-500 text-sm">{company.description}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats */}
          <div className="mt-16 flex flex-wrap gap-12 pt-8 border-t border-white/10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-zinc-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
