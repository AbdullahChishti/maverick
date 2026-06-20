"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { anchor } from "@/lib/utils";

const capabilities = [
  {
    id: "01",
    title: "AI Systems",
    scope: "LLM Applications / RAG Pipelines / Agent Frameworks / MLOps",
  },
  {
    id: "02",
    title: "Data Infrastructure",
    scope: "Real-time Analytics / Data Lakes / ETL Pipelines / Warehousing",
  },
  {
    id: "03",
    title: "Cloud Architecture",
    scope: "AWS / GCP / Azure / Kubernetes / Terraform / SOC 2",
  },
  {
    id: "04",
    title: "Automation",
    scope: "Workflow Orchestration / CI/CD / Testing / Monitoring",
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section
      id="services"
      ref={ref}
      className={`bg-black ${anchor}`}
    >
      <div className="container-wide py-24 lg:py-40">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col gap-6 lg:mb-24 lg:flex-row lg:items-end lg:justify-between"
        >
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-white">
            Capabilities
          </h2>
          <p className="max-w-sm text-base leading-relaxed text-white/35">
            Full-stack AI development. From strategy to production deployment.
          </p>
        </motion.div>

        <div className="space-y-0">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="group grid gap-4 border-t border-white/10 py-10 transition-all duration-300 hover:bg-white/[0.04] lg:grid-cols-12 lg:gap-8 lg:py-12"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/20 transition-colors duration-300 group-hover:text-emerald-400/60 lg:col-span-1">
                {cap.id}
              </span>
              <h3 className="text-2xl font-medium text-white transition-all duration-300 group-hover:translate-x-2 group-hover:text-emerald-400 lg:col-span-3 lg:text-3xl">
                {cap.title}
              </h3>
              <p className="text-base leading-relaxed text-white/35 transition-colors duration-300 group-hover:text-white/50 lg:col-span-8">
                {cap.scope}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
