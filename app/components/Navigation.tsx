"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#proof", label: "Proof" },
  { href: "#contact", label: "Contact" },
] as const;

const sectionIds = ["hero", "services", "proof", "contact"] as const;

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<(typeof sectionIds)[number]>("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);

      for (const section of [...sectionIds].reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.slice(1);
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? "nav-surface shadow-xs"
            : "border-b border-transparent bg-white/70 backdrop-blur-md"
        }`}
      >
        <nav className="container-wide" aria-label="Main navigation">
          <div className="flex h-16 items-center justify-between">
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, "#hero")}
              className="font-[family-name:var(--font-display)] text-body font-medium tracking-[-0.02em] text-foreground transition-opacity hover:opacity-80"
              aria-label="Maverick — home"
            >
              Maverick
            </a>

            <div className="hidden items-center gap-grid-1 md:flex">
              {navLinks.map((link) => {
                const sectionId = link.href.slice(1) as (typeof sectionIds)[number];
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative rounded-md px-grid-3 py-grid-1.5 text-body-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute inset-x-grid-2 -bottom-px h-0.5 rounded-full bg-accent"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </div>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="hidden min-h-[44px] items-center rounded-full bg-foreground px-grid-4 text-caption font-medium text-white transition-colors hover:bg-neutral-800 lg:inline-flex"
            >
              Get in touch
            </a>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-md p-grid-1.5 text-muted-foreground hover:text-foreground md:hidden"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-x-0 top-16 z-40 md:hidden"
          >
            <div className="nav-surface border-b border-border-subtle px-grid-3 py-grid-3">
              <div className="flex flex-col gap-grid-1">
                {navLinks.map((link) => {
                  const sectionId = link.href.slice(1) as (typeof sectionIds)[number];
                  const isActive = activeSection === sectionId;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`rounded-lg px-grid-3 py-grid-2 text-body font-medium ${
                        isActive
                          ? "bg-accent-subtle text-accent"
                          : "text-muted-foreground hover:bg-surface-subtle hover:text-foreground"
                      }`}
                    >
                      {link.label}
                    </a>
                  );
                })}
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="mt-grid-1 inline-flex min-h-[44px] items-center justify-center rounded-full bg-foreground px-grid-4 text-body-sm font-medium text-white"
                >
                  Get in touch
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
