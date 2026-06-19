"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Cloud,
  Shield,
  TrendingUp,
  Zap,
  Briefcase,
  Target,
} from "lucide-react";
import { anchor } from "@/lib/utils";

const valuePropositions = [
  {
    icon: Brain,
    title: "AI-First Delivery",
    description:
      "Harness artificial intelligence at every stage of your digital transformation journey, from strategy to implementation.",
  },
  {
    icon: Cloud,
    title: "Cloud-Native Architecture",
    description:
      "Build scalable, resilient systems designed for the modern cloud ecosystem with microservices and containerization.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Protect your data with industry-leading security practices, compliance frameworks, and proactive threat monitoring.",
  },
  {
    icon: TrendingUp,
    title: "Future-Proof Solutions",
    description:
      "Architect systems that grow with your business, adapting to new technologies and market demands seamlessly.",
  },
  {
    icon: Zap,
    title: "Accelerated Delivery",
    description:
      "Rapid deployment methodologies and agile practices ensure you see results faster than traditional approaches.",
  },
  {
    icon: Briefcase,
    title: "Industry Expertise",
    description:
      "Deep domain knowledge across multiple sectors ensures solutions tailored to your unique industry challenges.",
  },
  {
    icon: Target,
    title: "Outcome-Driven",
    description:
      "We measure success by your business outcomes, not just project deliverables, ensuring real impact.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.35 } },
};

export function WhyMaverick() {
  return (
    <section id="why-maverick" className={`section bg-surface ${anchor}`}>
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.45 }}
          className="section-header"
        >
          <p className="overline mb-grid-2">Why Us</p>
          <h2>Why Maverick</h2>
          <p className="lead">
            We combine cutting-edge technology with deep industry expertise to
            deliver transformative results for your business.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 gap-x-grid-8 gap-y-grid-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {valuePropositions.map((prop) => (
            <motion.div key={prop.title} variants={itemVariants}>
              <div className="flex flex-col">
                <div className="mb-grid-2 text-muted">
                  <prop.icon className="h-8 w-8 stroke-[1.5]" />
                </div>
                <h3 className="mb-grid-1.5 text-h4">{prop.title}</h3>
                <p className="text-body-sm text-muted-foreground">{prop.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default WhyMaverick;
