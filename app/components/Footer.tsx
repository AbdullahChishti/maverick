import { CONTACT_EMAIL } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="container-wide">
        <div className="h-px bg-[#E4E4E7]" />
        <div className="flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-6">
            <span className="text-sm font-medium text-[#18181B]">Mavverik</span>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-sm text-[#A1A1AA] transition-colors duration-200 hover:text-[#18181B]"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
          <span className="text-sm text-[#A1A1AA]">
            © {new Date().getFullYear()} Mavverik
          </span>
        </div>
      </div>
    </footer>
  );
}
