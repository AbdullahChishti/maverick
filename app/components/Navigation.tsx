"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { BRIEF_MAILTO } from "@/lib/utils";

const links = [
  { href: "#services", label: "Services" },
  { href: "#founders", label: "Clients" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [inHero, setInHero] = useState(true);

  const update = useCallback(() => {
    const hero = document.getElementById("hero");
    if (hero) {
      const heroBottom = hero.getBoundingClientRect().bottom;
      setInHero(heroBottom > 80);
    }
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
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          inHero ? "" : "bg-white/80 backdrop-blur-md"
        }`}
      >
        <div className={`h-px ${inHero ? "bg-[#26262E]" : "bg-[#E4E4E7]"}`} />
        <nav className="container-wide flex h-16 items-center justify-between">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={`text-base font-medium transition-colors duration-300 ${
              inHero ? "text-[#F4F4F5]" : "text-[#18181B]"
            }`}
          >
            Mavverik
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`text-sm transition-colors duration-200 ${
                  inHero
                    ? "text-[#A1A1AA] hover:text-[#F4F4F5]"
                    : "text-[#71717A] hover:text-[#18181B]"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={BRIEF_MAILTO}
              className="text-sm text-[#7C6BF5] transition-colors duration-200 hover:text-[#6355D8]"
            >
              Get in touch
            </a>
          </div>

          <button
            onClick={() => setOpen(true)}
            className={`lg:hidden ${inHero ? "text-[#F4F4F5]" : "text-[#18181B]"}`}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-white lg:hidden"
          >
            <div className="h-px bg-[#E4E4E7]" />
            <div className="container-wide flex h-16 items-center justify-between">
              <span className="text-base font-medium text-[#18181B]">Mavverik</span>
              <button
                onClick={() => setOpen(false)}
                className="text-[#18181B]"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="container-wide flex flex-col gap-1 pt-8">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="py-3 text-2xl font-medium text-[#18181B]"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-8 border-t border-[#E4E4E7] pt-8">
                <a href={BRIEF_MAILTO} className="text-sm text-[#7C6BF5]">
                  {BRIEF_MAILTO.replace("mailto:", "")}
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
