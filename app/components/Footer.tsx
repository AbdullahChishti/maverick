export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden border-t border-[var(--rule-slate)] bg-slate-deep text-on-slate"
      aria-label="Site footer"
    >
      <div
        className="dot-grid-slate pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
      />
      <div className="container-wide relative z-10 py-grid-10 lg:py-grid-12">
        <div className="flex flex-col gap-grid-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <div className="flex items-center gap-2">
              <span
                className="h-2 w-2 rounded-full bg-accent-bright shadow-[0_0_8px_var(--accent-glow)]"
                aria-hidden="true"
              />
              <span className="font-display text-[1.35rem] font-semibold leading-none tracking-tight text-on-slate">
                Mavverik
              </span>
            </div>
            <p className="mt-grid-4 max-w-sm text-body-sm text-on-slate-soft">
              One senior team, accountable from architecture review to governed
              systems in production.
            </p>
          </div>

          <nav
            className="flex flex-col gap-grid-2 sm:flex-row sm:gap-grid-6"
            aria-label="Footer navigation"
          >
            {[
              { href: "#founders", label: "Founders" },
              { href: "#capabilities", label: "Capabilities" },
              { href: "#contact", label: "Contact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-on-slate-muted transition-colors duration-200 hover:text-accent-bright"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-grid-8 flex flex-col gap-grid-2 border-t border-[var(--rule-slate)] pt-grid-5 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-on-slate-muted sm:flex-row sm:items-center sm:justify-between">
          <span>AI-native consulting for the enterprise</span>
          <span className="tabular-nums">&copy; {year} Mavverik</span>
        </div>
      </div>
    </footer>
  );
}
