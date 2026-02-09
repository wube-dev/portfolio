const ICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

export const TECH_STACK = [
  {
    category: "Frontend Engineering",
    skills: [
      {
        name: "React",
        icon: `${ICON_BASE}/react/react-original.svg`,
        level: 95,
      },
      {
        name: "JavaScript",
        icon: `${ICON_BASE}/javascript/javascript-original.svg`,
        level: 90,
      },
      {
        name: "Tailwind CSS",
        icon: `${ICON_BASE}/tailwindcss/tailwindcss-original.svg`,
        level: 95,
      },
      {
        name: "Bootstrap",
        icon: `${ICON_BASE}/bootstrap/bootstrap-original.svg`,
        level: 85,
      },
    ],
  },
  {
    category: "Backend & Cloud Architecture",
    skills: [
      {
        name: "Node.js",
        icon: `${ICON_BASE}/nodejs/nodejs-original.svg`,
        level: 88,
      },
      {
        name: "Express",
        icon: `${ICON_BASE}/express/express-original.svg`,
        level: 85,
      },
      {
        name: "MySQL",
        icon: `${ICON_BASE}/mysql/mysql-original.svg`,
        level: 82,
      },
      {
        name: "MongoDB",
        icon: `${ICON_BASE}/mongodb/mongodb-original.svg`,
        level: 80,
      },
      {
        name: "Firebase",
        icon: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
        level: 85,
      },
      {
        name: "JWT Auth",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/jsonwebtokens.svg",
        level: 90,
      },
    ],
  },
  {
    category: "DevOps & Other Tools",
    skills: [
      { name: "Git", icon: `${ICON_BASE}/git/git-original.svg`, level: 90 },
      {
        name: "GitHub",
        icon: `${ICON_BASE}/github/github-original.svg`,
        level: 95,
      },
      { name: "Vite", icon: `${ICON_BASE}/vite/vite-original.svg`, level: 92 },
      {
        name: "Postman",
        icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
        level: 88,
      },
      {
        name: "Figma",
        icon: `${ICON_BASE}/figma/figma-original.svg`,
        level: 75,
      },
    ],
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Netflix Cinema Engine",
    clue: "Performance Orchestration",
    desc: "A high-fidelity cinematic streaming interface optimized for state-persistence and rapid content delivery.",
    role: "Architected a modular component library and implemented advanced memoization techniques to reduce re-renders.",
    challenge:
      "Engineered a custom content-scaling algorithm that reduced DOM paint times by 40% during scroll.",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/wube-dev/Netflix-clone",
    live: "https://wube-dev.github.io/Netflix-clone/",
    image:
      "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=1169&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Amazon Core Ecosystem",
    clue: "Full-Stack System Design",
    desc: "A distributed e-commerce architecture featuring real-time synchronization and secure transaction pipelines.",
    role: "Led the development of the checkout micro-service, integrating Stripe and Firebase real-time listeners.",
    challenge:
      "Solved race conditions in inventory management using optimized MySQL transactions and JWT middleware.",
    tech: ["React", "Node.js", "Express", "MySQL", "Firebase", "Stripe"],
    github: "https://github.com/wube-dev/Amazon-Clone",
    live: "https://e-clone-6c5eb.web.app/",
    image:
      "https://images.unsplash.com/photo-1649734926695-1b1664e98842?q=80&w=1162&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Apple Concept Store",
    clue: "UI/UX Engineering",
    desc: "Frontend rebuild focusing on responsive layout, smooth animations, and Apple-like minimalist design.",
    role: "Recreated UI with React + Bootstrap, ensured mobile responsiveness and reusable components, implemented interactive animations.",
    challenge:
      "Maintained design fidelity while improving load times and component scalability.",
    tech: ["React", "Bootstrap", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/wube-dev/Apple-Clone",
    live: "https://wube-dev.github.io/Apple-Clone/",
    image:
      "https://images.unsplash.com/photo-1621768216002-5ac171876625?w=500&auto=format&fit=crop",
  },
];
