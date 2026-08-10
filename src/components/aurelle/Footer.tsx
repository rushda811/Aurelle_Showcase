export function Footer() {
  return (
    <footer className="border-t border-border px-5 py-8 sm:px-8 lg:px-12">
      <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="font-block text-[11px] tracking-[0.35em]">Aurelle Vows</p>
        <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          © MMXXVI — Crafted with devotion
        </p>
        <a
          href="https://www.instagram.com/aurellevows"
          target="_blank"
          rel="noreferrer"
          className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-rose"
        >
          Instagram
        </a>
      </div>
    </footer>
  );
}