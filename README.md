# Personal Portfolio (React + Tailwind CSS)

Single-page portfolio: React (JSX) + Vite + Tailwind CSS v3. Backend ya database ki zaroorat nahi.

## Features
- Hero me bada animated naam (letters upar uthte hain, hover par bold hote hain)
- Light / Dark mode (system theme follow karta hai, choice save hoti hai)
- Skills ka scrolling strip, About, Projects (hover/tap par expand), Skills, Experience timeline, Contact
- "Copy email" button, active nav highlight, mobile menu
- Fully responsive, keyboard friendly, reduced-motion support

## Run kaise kare
1. Node.js v18+ install hona chahiye.
2. Is folder me terminal kholo:
   ```bash
   npm install
   npm run dev
   ```
3. Browser me kholo: http://localhost:5173

Fonts Google Fonts se aate hain, isliye pehli baar internet chahiye.

## how to change content
- `profile`: naam, email, GitHub / LinkedIn links, status line
- `about`: heading, paragraphs, facts
- `projects`: naam, year, stack, description, `live` aur `repo` links
- `skills`, `experience`: apni details


## Colors / fonts badalna
- Colors: `src/index.css` ke upar `:root` (light) aur `.dark` (dark) variables
- Fonts: `index.html` ka Google Fonts link + `tailwind.config.js` ka `fontFamily`


## Folder structure
```
portfolio/
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── public/            # favicon, resume.pdf
└── src/
    ├── data.js        # <- yahan se content badlo
    ├── index.css      # colors + animations
    ├── App.jsx
    ├── hooks/         # useTheme, useActiveSection
    └── components/    # Navbar, Hero, Marquee, About, Projects, Skills, Experience, Contact, Footer
```
