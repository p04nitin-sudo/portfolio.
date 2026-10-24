import { experience } from "../data.js";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-12 md:grid-cols-12">
        <h2 className="font-display text-5xl font-medium leading-[1.02] tracking-tight md:col-span-5 md:text-7xl">
          Experience and education
        </h2>

        <ol className="space-y-14 border-l border-ink/20 pl-8 md:col-span-7">
          {experience.map((item) => (
            <li key={item.role} className="relative">
              <span className="absolute -left-[2.4rem] top-2 h-3 w-3 rounded-full bg-accent ring-4 ring-paper" />
              <p className="font-display text-ink/60">{item.period}</p>
              <h3 className="mt-1 font-display text-2xl font-medium md:text-3xl">{item.role}</h3>
              <p className="text-lg text-ink/70">{item.org}</p>
              <ul className="mt-5 list-disc space-y-2 pl-5 text-lg leading-relaxed text-ink/80 marker:text-accent">
                {item.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
