"use client";

import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { Brain, Database, Cloud, Bot, Rocket } from "lucide-react";
import { anchor } from "@/lib/utils";

interface Service {
  icon: React.ElementType;
  title: string;
  description: string[];
}

const services: Service[] = [
  {
    icon: Brain,
    title: "AI & Generative AI",
    description: [
      "Enterprise AI Strategy",
      "Generative AI Applications",
      "LLM Integration",
      "AI Agents",
      "Conversational AI",
    ],
  },
  {
    icon: Database,
    title: "Data & Analytics",
    description: [
      "Data Engineering",
      "Data Warehousing",
      "Real-Time Analytics",
      "Business Intelligence",
      "Predictive Analytics",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: [
      "Cloud Strategy & Migration",
      "Multi-Cloud Architecture",
      "Cloud-Native Development",
      "DevOps & Kubernetes",
      "Infrastructure as Code",
    ],
  },
  {
    icon: Bot,
    title: "Intelligent Automation",
    description: [
      "Robotic Process Automation",
      "Workflow Automation",
      "Process Optimization",
      "AI-Driven Operations",
      "Enterprise Integration",
    ],
  },
  {
    icon: Rocket,
    title: "Digital Transformation",
    description: [
      "Technology Modernization",
      "Enterprise Architecture",
      "Product Engineering",
      "Application Modernization",
      "Innovation Consulting",
    ],
  },
];

interface ServiceCardProps {
  service: Service;
  index: number;
  isInView: boolean;
}

function ServiceCard({ service, index, isInView }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.45,
        delay: index * 0.08,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <div className="card h-full p-grid-4">
        <div className="mb-grid-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-surface-subtle text-muted-foreground">
          <Icon className="h-5 w-5" strokeWidth={1.5} />
        </div>

        <h3 className="mb-grid-2 text-h4">{service.title}</h3>

        <ul className="space-y-grid-1">
          {service.description.map((item) => (
            <li key={item} className="flex items-start gap-grid-1.5 text-body-sm text-muted-foreground">
              <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-border" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export function Services() {
  const [sectionRef, isInView] = useInView<HTMLElement>({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="services" ref={sectionRef} className={`section bg-surface-subtle ${anchor}`}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="section-header"
        >
          <p className="overline mb-grid-2">Services</p>
          <h2>What We Do</h2>
          <p className="lead">
            Comprehensive technology solutions to accelerate your digital
            transformation and drive business innovation.
          </p>
        </motion.div>

        <div className="space-y-grid-3">
          <div className="grid grid-cols-1 gap-grid-3 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>

          <div className="mx-auto grid max-w-section grid-cols-1 gap-grid-3 md:grid-cols-2">
            {services.slice(3).map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                index={index + 3}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
