import { useEffect, useState } from "react";
import { profile, navLinks } from "../data.js";
import useActiveSection from "../hooks/useActiveSection.js";
import ThemeToggle from "./ThemeToggle.jsx";
import { Icon } from "./Icons.jsx";

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(navLinks.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const initials = profile.name
    .split(" ")
    .map((w) => w[0])
    .join("");

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled || menuOpen ? "border-ink/10 bg-paper/80 backdrop-blur-md" : "border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6" aria-label="Main">
        <a href="#top" className="flex items-center gap-3 font-display text-lg font-semibold tracking-tight">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-sm text-onaccent">
            {initials}
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                aria-current={active === l.id ? "true" : undefined}
                className={`font-display text-[15px] underline-offset-[10px] transition-colors hover:text-accent ${
                  active === l.id ? "text-accent underline decoration-2" : "text-ink/80"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <a
            href={profile.resume}
            download
            className="hidden items-center gap-2 rounded-full border border-ink/20 px-5 py-2.5 font-display text-[15px] font-medium transition-colors hover:bg-ink hover:text-paper md:inline-flex"
          >
            Résumé
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-ink/20 md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <Icon.Close className="h-5 w-5" /> : <Icon.Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <ul className="flex flex-col gap-1 border-t border-ink/10 px-6 pb-6 pt-3 md:hidden">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={() => setMenuOpen(false)}
                className="block py-3 font-display text-2xl font-medium"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href={profile.resume} download className="block py-3 font-display text-2xl font-medium text-accent">
              Résumé
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
