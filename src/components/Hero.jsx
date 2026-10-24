import { profile } from "../data.js";
import { Icon } from "./Icons.jsx";

const STEP = 55; // ms between letters in the entrance

function Word({ text, start }) {
  return (
    <span aria-hidden="true" className="-mb-[0.12em] inline-block overflow-hidden pb-[0.12em] align-bottom">
      {[...text].map((ch, i) => (
        <span key={i} className="letter" style={{ animationDelay: `${start + i * STEP}ms` }}>
          {ch}
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const [first, ...rest] = profile.name.split(" ");
  const last = rest.join(" ");

  return (
    <section id="top" className="px-6 pb-16 pt-14 md:pb-24 md:pt-20">
      <div className="mx-auto max-w-[1400px]">
        <p className="inline-flex items-center gap-2.5 rounded-full border border-ink/15 bg-raised px-4 py-2 font-display text-sm">
          <span className="h-2.5 w-2.5 rounded-full bg-sun ring-1 ring-ink/30" />
          {profile.status}
        </p>

        <h1
          aria-label={profile.name}
          className="mt-10 flex flex-wrap gap-x-[0.25em] font-display text-[length:clamp(4rem,15.5vw,14rem)] font-medium leading-[0.9] tracking-tighter"
        >
          <Word text={first} start={0} />
          {last && <Word text={last} start={first.length * STEP + 150} />}
        </h1>

        <div className="mt-12 grid items-end gap-8 md:mt-16 md:grid-cols-12">
          <div className="md:col-span-7 lg:col-span-6">
            <p className="font-display text-lg font-medium text-ink/70">{profile.role}</p>
            <p className="mt-3 text-xl leading-relaxed md:text-2xl">{profile.intro}</p>
          </div>

          <div className="flex flex-wrap gap-3 md:col-span-5 md:justify-end lg:col-span-6">
            <a
              href="#work"
              className="inline-flex items-center rounded-full bg-accent px-7 py-3.5 font-display font-medium text-onaccent transition-transform hover:-translate-y-0.5"
            >
              See my work
            </a>
            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-2 rounded-full border border-ink/25 px-7 py-3.5 font-display font-medium transition-colors hover:bg-ink hover:text-paper"
            >
              <Icon.Download className="h-5 w-5" />
              Download résumé
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
