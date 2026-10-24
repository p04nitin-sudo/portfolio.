import { useState } from "react";
import { projects } from "../data.js";
import { Icon } from "./Icons.jsx";

const hasHover = () => typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches;

function ProjectRow({ project }) {
  const [open, setOpen] = useState(false);
  const hover = hasHover();

  return (
    <li
      className="border-t border-ink/15 last:border-b"
      onMouseEnter={() => hover && setOpen(true)}
      onMouseLeave={() => hover && setOpen(false)}
      // keyboard users: open on focus-visible only, so a touch tap doesn't open-then-close
      onFocus={(e) => e.target.matches(":focus-visible") && setOpen(true)}
      onBlur={(e) => !e.currentTarget.contains(e.relatedTarget) && setOpen(false)}
    >
      <div className={`transition-colors duration-300 ${open ? "bg-accent text-onaccent" : ""}`}>
        <button
          type="button"
          aria-expanded={open}
          onClick={() => !hover && setOpen((o) => !o)}
          className="grid w-full grid-cols-12 items-baseline gap-x-4 gap-y-2 px-4 py-8 text-left md:px-8 md:py-10"
        >
          <span className="col-span-12 font-display text-4xl font-medium tracking-tight md:col-span-7 md:text-6xl">
            {project.name}
          </span>
          <span className="col-span-9 text-base opacity-80 md:col-span-4 md:text-lg">
            {project.stack.join(", ")}
          </span>
          <span className="col-span-3 text-right font-display md:col-span-1">{project.year}</span>
        </button>

        <div
          className={`grid transition-[grid-template-rows] duration-500 ease-out ${
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <div className="grid grid-cols-12 gap-6 px-4 pb-10 md:px-8">
              <p className="col-span-12 max-w-xl text-lg leading-relaxed md:col-span-7">{project.description}</p>
              <div className="col-span-12 flex flex-wrap items-start gap-6 md:col-span-5 md:justify-end">
                {project.live && project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 border-b border-current pb-0.5 font-display font-medium"
                  >
                    Live demo
                    <Icon.ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 border-b border-current pb-0.5 font-display font-medium"
                >
                  Source code
                  <Icon.ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default function Projects() {
  return (
    <section id="work" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-12 grid items-end gap-4 md:grid-cols-12">
          <h2 className="font-display text-5xl font-medium tracking-tight md:col-span-7 md:text-7xl">
            Selected work
          </h2>
          <p className="text-lg text-ink/70 md:col-span-5 md:text-right">
            Hover over a project, or tap it on your phone, to see what’s inside.
          </p>
        </div>

        <ul>
          {projects.map((p) => (
            <ProjectRow key={p.name} project={p} />
          ))}
        </ul>
      </div>
    </section>
  );
}
