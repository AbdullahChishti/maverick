"use client";

import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { Brain, Database, Cloud, Bot, Rocket } from "lucide-react";
import { anchor } from "@/lib/utils";

interface Service {
  number: string;
  icon: React.ElementType;
  title: string;
  tagline: string;
  capabilities: string[];
  span: string;
}

const services: Service[] = [
  {
    number: "01",
    icon: Brain,
    title: "AI & Generative AI",
    tagline: "Strategy through production — LLMs, agents, and enterprise AI at scale.",
    capabilities: ["AI Strategy", "Generative Apps", "LLM Integration", "AI Agents"],
    span: "md:col-span-7 md:row-span-2",
  },
  {
    number: "02",
    icon: Database,
    title: "Data & Analytics",
    tagline: "Turn raw data into decisions with modern pipelines and real-time insight.",
    capabilities: ["Data Engineering", "Warehousing", "BI & Analytics"],
    span: "md:col-span-5",
  },
  {
    number: "03",
    icon: Cloud,
    title: "Cloud Solutions",
    tagline: "Cloud-native architecture, migration, and infrastructure that scales.",
    capabilities: ["Migration", "Multi-Cloud", "DevOps & K8s"],
    span: "md:col-span-4",
  },
  {
    number: "04",
    icon: Bot,
    title: "Intelligent Automation",
    tagline: "Automate workflows and operations with AI-driven process intelligence.",
    capabilities: ["RPA", "Workflow Automation", "Integration"],
    span: "md:col-span-4",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Digital Transformation",
    tagline: "Modernize platforms, products, and architecture for what's next.",
    capabilities: ["Modernization", "Product Engineering", "Innovation"],
    span: "md:col-span-4",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

interface ServiceCellProps {
  service: Service;
  index: number;
  isInView: boolean;
  featured?: boolean;
}

function ServiceCell({ service, index, isInView, featured }: ServiceCellProps) {
  const Icon = service.icon;

  return (
    <motion.article
      custom={0.08 + index * 0.07}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeUp}
      className={`group relative flex h-full flex-col justify-between bg-surface p-grid-5 sm:p-grid-6 ${service.span} ${
        featured ? "min-h-[280px] sm:min-h-[320px] lg:min-h-[360px]" : "min-h-[220px]"
      }`}
    >
      <div className="pointer-events-none absolute right-grid-4 top-grid-4 select-none font-semibold tabular-nums tracking-tighter text-foreground/[0.04] sm:right-grid-5 sm:top-grid-5">
        <span className={featured ? "text-[5rem] sm:text-[6.5rem] lg:text-[7.5rem]" : "text-[3.5rem] sm:text-[4.5rem]"}>
          {service.number}
        </span>
      </div>

      <div className="relative z-10">
        <div className="mb-grid-4 flex items-center gap-grid-2">
          <span className="text-caption font-medium tabular-nums text-accent">{service.number}</span>
          <span className="h-px flex-1 max-w-[48px] bg-border" />
          <Icon className="h-4 w-4 text-muted-foreground" strokeWidth={1.5} aria-hidden />
        </div>

        <h3
          className={`mb-grid-2 font-semibold tracking-tight text-foreground ${
            featured
              ? "text-[1.5rem] leading-[1.15] sm:text-[1.75rem] lg:text-[2rem]"
              : "text-h3"
          }`}
        >
          {service.title}
        </h3>

        <p
          className={`max-w-prose text-muted-foreground ${
            featured ? "text-body-lg" : "text-body-sm sm:text-body"
          }`}
        >
          {service.tagline}
        </p>
      </div>

      <div className="relative z-10 mt-grid-5 flex flex-wrap gap-grid-1.5">
        {service.capabilities.map((cap) => (
          <span
            key={cap}
            className="rounded-full border border-border-subtle bg-surface-subtle px-grid-2 py-grid-0.5 text-caption text-muted-foreground"
          >
            {cap}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export function Services() {
  const [sectionRef, isInView] = useInView<HTMLElement>({
    threshold: 0.08,
    rootMargin: "-40px",
    triggerOnce: true,
  });

  return (
    <section id="services" ref={sectionRef} className={`section bg-surface-subtle ${anchor}`}>
      <div className="container-wide">
        <div className="mb-grid-10 lg:mb-grid-12">
          <motion.div
            custom={0}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUp}
            className="mb-grid-6 flex items-end justify-between gap-grid-4 border-b border-border pb-grid-6"
          >
            <div className="flex items-end gap-grid-4 sm:gap-grid-6">
              <span
                className="font-semibold tabular-nums leading-none tracking-tighter text-foreground/10"
                aria-hidden
              >
                <span className="text-[3.5rem] sm:text-[4.5rem] lg:text-[5.5rem]">02</span>
              </span>
              <div>
                <p className="overline mb-grid-1.5">Capabilities</p>
                <h2 className="text-[1.75rem] sm:text-h2 lg:text-[2.5rem]">What We Do</h2>
              </div>
            </div>
            <p className="hidden max-w-xs text-right text-body-sm text-muted-foreground lg:block">
              Five disciplines. One partner for enterprise transformation.
            </p>
          </motion.div>

          <motion.p
            custom={0.05}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUp}
            className="max-w-content text-body-lg text-muted-foreground lg:hidden"
          >
            Comprehensive technology solutions to accelerate digital transformation
            and drive business innovation.
          </motion.p>
        </div>

        <div className="overflow-hidden rounded-xl border border-border">
          <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-12 md:grid-rows-2">
            {services.map((service, index) => (
              <ServiceCell
                key={service.title}
                service={service}
                index={index}
                isInView={isInView}
                featured={index === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
