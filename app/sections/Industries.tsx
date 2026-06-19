"use client";

import { motion } from "framer-motion";
import {
  Landmark,
  HeartPulse,
  ShoppingCart,
  Factory,
  Wifi,
  Zap,
  Truck,
  Building2,
} from "lucide-react";
import { anchor } from "@/lib/utils";

const industries = [
  { icon: Landmark, name: "Financial Services", description: "Banking, insurance, and fintech" },
  { icon: HeartPulse, name: "Healthcare", description: "Digital health and pharma" },
  { icon: ShoppingCart, name: "Retail & E-Commerce", description: "Omnichannel commerce" },
  { icon: Factory, name: "Manufacturing", description: "Industry 4.0 solutions" },
  { icon: Wifi, name: "Telecommunications", description: "Network infrastructure" },
  { icon: Zap, name: "Energy & Utilities", description: "Smart grid and renewables" },
  { icon: Truck, name: "Logistics", description: "Supply chain optimization" },
  { icon: Building2, name: "Public Sector", description: "Government services" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04 },
  },
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.35 } },
};

export function Industries() {
  return (
    <section id="industries" className={`section bg-surface-subtle ${anchor}`}>
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.45 }}
          className="section-header"
        >
          <p className="overline mb-grid-2">Industries</p>
          <h2>Industries We Serve</h2>
          <p className="lead">
            Specialized expertise across diverse sectors, helping organizations
            navigate their unique digital transformation challenges.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 gap-grid-3 sm:grid-cols-2 lg:grid-cols-4"
        >
          {industries.map((industry) => (
            <motion.div key={industry.name} variants={itemVariants}>
              <div className="card-interactive flex items-start gap-grid-2 p-grid-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center text-muted">
                  <industry.icon className="h-5 w-5 stroke-[1.5]" />
                </div>
                <div>
                  <h3 className="mb-grid-0.5 text-body-sm font-medium text-foreground">
                    {industry.name}
                  </h3>
                  <p className="text-caption text-muted-foreground">{industry.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Industries;
