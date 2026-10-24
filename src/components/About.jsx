import { about } from "../data.js";

export default function About() {
  return (
    <section id="about" className="px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-12 md:grid-cols-12">
        <h2 className="font-display text-4xl font-medium leading-[1.05] tracking-tight md:col-span-5 md:text-5xl lg:text-6xl">
          {about.heading}
        </h2>

        <div className="max-w-2xl md:col-span-7">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="mb-6 text-lg leading-[1.75] text-ink/80 md:text-xl">
              {p}
            </p>
          ))}

          <dl className="mt-12 divide-y divide-ink/15 border-y border-ink/15">
            {about.facts.map((f) => (
              <div key={f.label} className="grid grid-cols-3 gap-4 py-4">
                <dt className="font-display text-ink/60">{f.label}</dt>
                <dd className="col-span-2 text-lg">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
