import { marqueeItems } from "../data.js";

const Star = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="currentColor" aria-hidden="true">
    <path d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5z" />
  </svg>
);

// Decorative strip, so it is hidden from screen readers (skills are listed again below).
export default function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];
  return (
    <div className="select-none overflow-hidden bg-accent py-5 text-onaccent" aria-hidden="true">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none">
        {items.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-8 whitespace-nowrap pr-8 font-display text-2xl font-medium md:text-3xl"
          >
            {item}
            <Star />
          </span>
        ))}
      </div>
    </div>
  );
}
