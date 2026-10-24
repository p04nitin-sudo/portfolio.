import { useState } from "react";
import { profile } from "../data.js";
import { Icon } from "./Icons.jsx";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const pill =
    "inline-flex items-center gap-2 rounded-full border border-current/40 px-6 py-3 font-display font-medium transition-colors hover:bg-onaccent hover:text-accent";

  return (
    <section id="contact" className="bg-accent px-6 py-24 text-onaccent md:py-36">
      <div className="mx-auto max-w-[1400px]">
        <h2 className="max-w-4xl font-display text-5xl font-medium leading-[0.98] tracking-tight md:text-8xl">
          Have a project or a role in mind? Let’s talk.
        </h2>

        <a
          href={`mailto:${profile.email}`}
          className="mt-12 inline-block break-all font-display text-2xl font-medium underline decoration-2 underline-offset-8 transition-all hover:decoration-4 md:text-5xl"
        >
          {profile.email}
        </a>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={copyEmail}
            className="inline-flex items-center gap-2 rounded-full bg-onaccent px-6 py-3 font-display font-medium text-accent transition-transform hover:-translate-y-0.5"
          >
            {copied ? <Icon.Check className="h-5 w-5" /> : <Icon.Copy className="h-5 w-5" />}
            <span role="status">{copied ? "Copied" : "Copy email"}</span>
          </button>
          <a href={profile.github} target="_blank" rel="noreferrer" className={pill}>
            <Icon.Github className="h-5 w-5" />
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className={pill}>
            <Icon.Linkedin className="h-5 w-5" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
