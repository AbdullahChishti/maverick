"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { BRIEF_MAILTO } from "@/lib/utils";

const links = [
  { href: "#founders", label: "Team" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);

  const update = useCallback(() => {
    const hero = document.getElementById("hero");
    const services = document.getElementById("services");
    const contact = document.getElementById("contact");

    const heroBottom = hero?.getBoundingClientRect().bottom ?? 0;
    const servicesTop = services?.getBoundingClientRect().top ?? Infinity;
    const servicesBottom = services?.getBoundingClientRect().bottom ?? 0;
    const contactTop = contact?.getBoundingClientRect().top ?? Infinity;

    const inHero = heroBottom > 60;
    const inServices = servicesTop <= 60 && servicesBottom > 60;
    const inContact = contactTop <= 60;

    setDark(inHero || inServices || inContact);
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [update]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <nav className="container-wide flex h-20 items-center justify-between">
          <a
            href="#hero"
            onClick={(e) => handleClick(e, "#hero")}
            className={`text-lg font-medium ${dark ? "text-white" : "text-neutral-900"}`}
          >
            Mavverik
          </a>

          <div className="hidden items-center gap-10 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`text-sm ${dark ? "text-white/60 hover:text-white" : "text-neutral-500 hover:text-neutral-900"}`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={BRIEF_MAILTO}
              className={`text-sm font-medium ${dark ? "text-white" : "text-neutral-900"}`}
            >
              Get in touch
            </a>
          </div>

          <button
            onClick={() => setOpen(true)}
            className={`lg:hidden ${dark ? "text-white" : "text-neutral-900"}`}
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black lg:hidden"
          >
            <div className="container-wide flex h-20 items-center justify-between">
              <span className="text-lg font-medium text-white">Mavverik</span>
              <button onClick={() => setOpen(false)} className="text-white">
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="container-wide flex flex-col gap-6 pt-12">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="text-3xl font-medium text-white"
                >
                  {link.label}
                </a>
              ))}
              <a href={BRIEF_MAILTO} className="mt-8 text-lg text-white/60">
                {BRIEF_MAILTO.replace("mailto:", "")}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
