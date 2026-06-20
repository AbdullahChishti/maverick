import { CONTACT_EMAIL } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="bg-black">
      <div className="container-wide py-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="space-y-4">
            <span className="text-xl font-medium tracking-[-0.02em] text-white">
              Mavverik
            </span>
            <p className="max-w-xs text-sm leading-relaxed text-white/35">
              Enterprise AI systems for regulated industries.
            </p>
          </div>

          <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
            <div className="space-y-3">
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/25">
                Contact
              </span>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="block font-mono text-[11px] uppercase tracking-[0.2em] text-white/50 transition-colors duration-300 hover:text-emerald-400"
              >
                {CONTACT_EMAIL}
              </a>
            </div>

            <div className="space-y-3">
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/25">
                Compliance
              </span>
              <div className="flex gap-4 font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">
                <span>SOC 2</span>
                <span>GDPR</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex items-center justify-between border-t border-white/10 pt-8">
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/20">
            © {new Date().getFullYear()} Mavverik
          </span>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/25 transition-colors duration-300 hover:text-emerald-400"
            aria-label="LinkedIn"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
