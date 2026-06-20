"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { href: "#founders", label: "Founders" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#contact", label: "Contact" },
] as const;

const sectionIds = ["hero", "founders", "capabilities", "contact"] as const;

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] =
    useState<(typeof sectionIds)[number]>("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
      for (const section of [...sectionIds].reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 88) {
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

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const isDarkNav = activeSection === "founders";

  return (
    <>
      <header
        className={`nav-surface fixed inset-x-0 top-0 z-50 ${
          isScrolled || isMobileMenuOpen ? "nav-surface-scrolled" : ""
        } ${isDarkNav && isScrolled ? "!border-[var(--rule-slate)] !bg-[color-mix(in_srgb,var(--slate-deep)_92%,transparent)]" : ""}`}
      >
        <nav className="container-wide" aria-label="Main navigation">
          <div className="flex h-[var(--nav-h)] items-center justify-between">
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, "#hero")}
              className="group inline-flex items-center gap-2"
              aria-label="Mavverik — home"
              aria-current={activeSection === "hero" ? "location" : undefined}
            >
              <span
                className={`h-2 w-2 rounded-full bg-accent-bright shadow-[0_0_8px_var(--accent-glow)] transition-transform duration-300 group-hover:scale-125 ${isDarkNav && isScrolled ? "opacity-100" : ""}`}
                aria-hidden="true"
              />
              <span
                className={`font-display text-[1.25rem] font-semibold leading-none tracking-tight transition-colors duration-200 ${isDarkNav && isScrolled ? "text-on-slate" : "text-ink"}`}
              >
                Mavverik
              </span>
            </a>

            <div className="hidden items-center gap-grid-1 md:flex">
              {navLinks.map((link) => {
                const sectionId = link.href.slice(
                  1
                ) as (typeof sectionIds)[number];
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative inline-flex min-h-[44px] items-center rounded-md px-grid-3 font-mono text-[0.7rem] uppercase tracking-[0.12em] transition-colors duration-200 ${
                      isDarkNav && isScrolled
                        ? isActive
                          ? "text-on-slate"
                          : "text-on-slate-muted hover:text-on-slate"
                        : isActive
                          ? "text-ink"
                          : "text-ink-muted hover:text-ink"
                    }`}
                    aria-current={isActive ? "location" : undefined}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute inset-x-grid-3 -bottom-px h-0.5 rounded-full bg-accent-bright"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 32,
                        }}
                      />
                    )}
                  </a>
                );
              })}
            </div>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="group hidden min-h-[42px] items-center gap-1.5 rounded-md bg-accent-deep px-grid-4 font-mono text-[0.68rem] font-medium uppercase tracking-[0.12em] text-white transition-all duration-200 hover:bg-[#006658] md:inline-flex"
            >
              Start a brief
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`flex min-h-[44px] min-w-[44px] items-center justify-center md:hidden ${
                isDarkNav && isScrolled
                  ? "text-on-slate-soft hover:text-on-slate"
                  : "text-ink-muted hover:text-ink"
              }`}
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
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
            transition={{ duration: 0.18 }}
            className="fixed inset-x-0 top-[var(--nav-h)] z-40 md:hidden"
          >
            <div className="nav-surface nav-surface-scrolled border-b border-rule px-grid-3 pb-grid-4 pt-grid-2">
              <div className="flex flex-col">
                {navLinks.map((link) => {
                  const sectionId = link.href.slice(
                    1
                  ) as (typeof sectionIds)[number];
                  const isActive = activeSection === sectionId;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`flex min-h-[52px] items-center border-b border-rule font-mono text-[0.78rem] uppercase tracking-[0.12em] ${
                        isActive ? "text-ink" : "text-ink-muted"
                      }`}
                      aria-current={isActive ? "location" : undefined}
                    >
                      {isActive && (
                        <span className="mr-grid-2 h-1.5 w-1.5 rounded-full bg-accent-bright" />
                      )}
                      {link.label}
                    </a>
                  );
                })}
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="mt-grid-3 inline-flex min-h-[50px] items-center justify-center gap-1.5 rounded-md bg-accent-deep px-grid-4 font-mono text-[0.72rem] font-medium uppercase tracking-[0.12em] text-white"
                >
                  Start a brief
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
