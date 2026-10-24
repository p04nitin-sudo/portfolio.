import { profile } from "../data.js";

export default function Footer() {
  return (
    <footer className="px-6 py-8">
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-4 font-display text-sm text-ink/70">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React and Tailwind CSS.
        </p>
        <a href="#top" className="underline underline-offset-4 hover:text-accent">
          Back to top
        </a>
      </div>
    </footer>
  );
}
