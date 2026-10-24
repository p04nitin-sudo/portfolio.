import { skills } from "../data.js";

export default function Skills() {
  return (
    <section id="skills" className="bg-raised px-6 py-24 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <h2 className="font-display text-5xl font-medium tracking-tight md:text-7xl">What I work with</h2>

        <div className="mt-14 grid gap-12 md:grid-cols-3">
          {skills.map((s) => (
            <div key={s.group}>
              <h3 className="font-display text-2xl font-medium text-accent">{s.group}</h3>
              <ul className="mt-4 divide-y divide-ink/15 border-y border-ink/15">
                {s.items.map((item) => (
                  <li key={item} className="py-3.5 text-xl">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
