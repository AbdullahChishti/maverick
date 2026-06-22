export function Footer() {
  return (
    <footer className="py-6 border-t border-stone-300">
      <div className="container-wide flex items-center justify-between">
        <span className="text-xs text-stone-500">© {new Date().getFullYear()} Mavverik</span>
        <span className="text-xs text-stone-500 uppercase tracking-wide">AI Engineering Studio</span>
      </div>
    </footer>
  );
}
