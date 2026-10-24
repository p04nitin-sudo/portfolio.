/** @type {import('tailwindcss').Config} */
// Colors read CSS variables (see src/index.css) so light/dark mode swaps the whole palette.
const c = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        paper: c("paper"),
        ink: c("ink"),
        accent: c("accent"),
        onaccent: c("onaccent"),
        sun: c("sun"),
        raised: c("raised"),
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', "ui-sans-serif", "system-ui", "sans-serif"],
        body: ['"Source Serif 4"', "Georgia", "serif"],
      },
      keyframes: {
        marquee: { to: { transform: "translateX(-50%)" } },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};
