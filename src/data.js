// ============================================================
//  EDIT THIS FILE: sab content yahin se aata hai.
//  Naam, email, links, projects, experience sab apne se badlo.
// ============================================================

export const profile = {
  name: "Nitin Pandey",
  role: "Full-stack developer",
  location: "Delhi, India",
  email: "p04nitin@gmail.com",
  github: "https://github.com/p04nitin-sudo",
  linkedin: " https://www.linkedin.com/in/nitin-pandey-82ab79398?utm_source=share_via&utm_content=profile&utm_medium=member_android,
  resume: "Nitin_Pandey_Resume.pdf",
  status: "Open to full-time roles",
  intro:
    "I’m a full-stack developer in Delhi. I build web apps end to end, from the MongoDB schema to the last pixel of the button, and I care that they feel fast.",
};

export const navLinks = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const marqueeItems = [
  "React",
  "Node.js",
  "MongoDB",
  "Tailwind CSS",
  "Socket.io",
  "Express",
  "JavaScript",
  "REST APIs",
  "Git",
];

export const about = {
  heading: "Good software feels obvious. Getting it there takes a lot of small decisions.",
  paragraphs: [
    "I’m a full-stack developer who likes owning a feature from start to finish: the data model, the API, the interface and the deploy. Most of my work is in React, Node.js and MongoDB.",
    "I started by building small tools to fix my own annoyances, and the habit stuck. These days I spend my time on real-time features, clean component design, and making pages load quickly on ordinary phones.",
  ],
  facts: [
    { label: "Based in", value: "Delhi, India" },
    { label: "Focus", value: "Full-stack web development" },
    { label: "Works with", value: "React, Node.js, MongoDB, Tailwind CSS" },
    { label: "Languages", value: "English, Hindi" },
    { label: "Open to", value: "Full-time roles and freelance projects" },
  ],
};

export const projects = [
  {
    name: "Realtime Chat",
    year: "2026",
    stack: ["React", "Node.js", "Socket.io", "MongoDB"],
    description:
      "A multi-room chat app with live online users, typing indicators and message history saved in MongoDB Atlas, so conversations survive a server restart.",
    live: "#",
    repo: "https://github.com/your-username/realtime-chat-app",
  },
  {
    name: "Kart",
    year: "2026",
    stack: ["React", "Express", "MongoDB", "Stripe"],
    description:
      "An online store with product search, a persistent cart, secure checkout and an admin dashboard for managing orders and stock.",
    live: "#",
    repo: "https://github.com/your-username/kart",
  },
  {
    name: "Taskboard",
    year: "2025",
    stack: ["React", "dnd-kit", "Tailwind CSS"],
    description:
      "A Kanban board with drag-and-drop cards, editable columns and filters. Everything is saved in the browser, so it works offline.",
    live: "#",
    repo: "https://github.com/your-username/taskboard",
  },
  {
    name: "Skyline",
    year: "2025",
    stack: ["React", "Open-Meteo API", "Recharts"],
    description:
      "A weather dashboard with city search, a five-day forecast and hourly temperature charts that adapt to any screen size.",
    live: "#",
    repo: "https://github.com/your-username/skyline",
  },
  {
    name: "ResumeLens",
    year: "2025",
    stack: ["React", "Node.js", "OpenAI API"],
    description:
      "Upload a resume and a job description to get a match score and concrete suggestions for what to add or reword.",
    live: "#",
    repo: "https://github.com/your-username/resumelens",
  },
];

export const skills = [
  { group: "Frontend", items: ["React", "JavaScript (ES6+)", "Tailwind CSS", "HTML and CSS", "Vite"] },
  { group: "Backend", items: ["Node.js", "Express", "REST APIs", "Socket.io", "JWT authentication"] },
  { group: "Data and tools", items: ["MongoDB and Mongoose", "Git and GitHub", "Postman", "Docker (basics)", "Vercel and Render"] },
];

export const experience = [
  {
    period: "Jun 2025 to Aug 2025",
    role: "Software developer intern",
    org: "Your Company Name",
    points: [
      "Built reusable React components that cut page build time for the product team.",
      "Wrote Express endpoints with validation and pagination for the admin panel.",
      "Fixed 20+ bugs and improved the load time of the main dashboard.",
    ],
  },
  {
    period: "2022 to 2026",
    role: "B.Tech in Computer Science",
    org: "Your University Name",
    points: [
      "Coursework in data structures, databases, operating systems and web technologies.",
      "Led the college tech club’s web team and ran two beginner workshops on React.",
    ],
  },
];
