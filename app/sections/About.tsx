"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { anchor } from "@/lib/utils";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const values = [
    {
      title: "Precision",
      description: "Meticulous attention to detail in every solution we deliver.",
    },
    {
      title: "Innovation",
      description: "Cutting-edge technology applied thoughtfully to solve real problems.",
    },
    {
      title: "Partnership",
      description: "We collaborate closely, invested in your long-term success.",
    },
  ];

  return (
    <section id="about" ref={ref} className={`section bg-surface ${anchor}`}>
      <motion.div
        className="container-section"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="section-header">
          <p className="overline mb-grid-2">About</p>
          <h2>Who We Are</h2>
        </motion.div>

        <div className="grid items-start gap-grid-8 lg:grid-cols-2 lg:gap-grid-12">
          <motion.div variants={itemVariants} className="space-y-grid-3">
            <p className="text-body-lg text-foreground">
              Maverick is a technology partner dedicated to accelerating digital
              transformation for enterprises and startups alike.
            </p>
            <p className="text-body text-muted-foreground">
              Our team of AI specialists, cloud architects, and data engineers
              work collaboratively to deliver solutions that meet today&apos;s
              needs while anticipating tomorrow&apos;s opportunities.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-grid-4">
            <p className="overline">Our Values</p>
            {values.map((value) => (
              <div key={value.title}>
                <h3 className="mb-grid-1 text-h4">{value.title}</h3>
                <p className="text-body-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="mt-grid-12 text-center">
          <a href="#contact" className="link-subtle">
            Let&apos;s discuss your project
            <span aria-hidden="true">→</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
