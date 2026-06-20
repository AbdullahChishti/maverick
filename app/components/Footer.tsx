import { CONTACT_EMAIL } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="container-wide flex flex-col gap-4 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-8">
          <span className="text-base font-medium text-white">Mavverik</span>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-sm text-white/40 hover:text-white"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
        <span className="text-sm text-white/40">
          © {new Date().getFullYear()} Mavverik. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
