export function Footer() {
  return (
    <footer className="border-t border-brand-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 px-6 py-8 text-sm text-gray-400 md:flex-row md:items-center md:px-10">
        <p>© {new Date().getFullYear()} FORGE Performance. All rights reserved.</p>
        <p className="uppercase tracking-[0.2em] text-xs">Built for serious outcomes.</p>
      </div>
    </footer>
  );
}
