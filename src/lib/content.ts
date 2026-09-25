export const profile = {
  name: "Akshay Kalbhor",
  role: "Frontend Developer & Creative Technologist",
  location: "Delhi, India",
  email: "akshaykalbhor342@gmail.com",
  github: "https://github.com/akshaykalbhor192",
  linkedin: "https://www.linkedin.com/in/akshay-kalbhor-795634275/",
  resumeHref: "https://drive.google.com/file/d/1eTHk-OXBd7Bvc70k61IVg2f1-3aQSr_g/view?usp=sharing",
  blurb:
    "IT graduate passionate about Data Engineering, Data Analytics, and Software Development I build data-driven solutions, ETL pipelines, dashboards, and scalable applications using modern technologies.",
};

export const stats = [
  { value: "2", label: "Internships" },
  { value: "5+", label: "Projects shipped" },
  { value: "100+", label: "DSA problems solved" },
  { value: "8.36", label: "CGPA / 10" },
];

export const badges = [
  "B.Tech IT — Class of 2026",
  "Global Rank 11,716 · TCS CodeVita",
  "React & Next.js — Udemy Certified",
];

export const services = [
  {
    title: "Frontend Development",
    tags: ["React", "Next.js", "TypeScript", "Tailwind"],
    description:
      "Building fast, accessible interfaces that feel considered down to the last pixel.",
    tone: "ink" as const,
  },
  {
    title: "Full-Stack & APIs",
    tags: ["Node.js", "Express", "FastAPI", "Firebase"],
    description:
      "Wiring up backends and REST APIs that keep the frontend fed with real data.",
    tone: "accent" as const,
  },
  {
    title: "Data & AI",
    tags: ["Python", "Pandas", "Power BI", "PyTorch"],
    description:
      "Turning raw datasets into visualizations, models and actual insight.",
    tone: "ink" as const,
  },
  {
    title: "UI/UX & Prototyping",
    tags: ["Figma", "Git", "Agile"],
    description: "Prototyping the interface, then shipping the real thing.",
    tone: "accent" as const,
  },
];

export const education = [
  {
    institution: "Bharati Vidyapeeth (Deemed to be University) College of Engineering, Pune",
    degree: "Bachelor of Engineering, Information Technology",
    period: "Aug 2022 – Jun 2026",
    stat: { value: "8.36", label: "CGPA / 10" },
    mark: "BVP",
    logo: "/bharati logo.png",
  },
  {
    institution: "National Institute of Open Schooling (NIOS)",
    degree: "Higher Secondary Education (12th)",
    period: "2021",
    stat: { value: "64%", label: "Percentage" },
    mark: "NIOS",
    logo: "/NIOS Logo.png",
  },
];

export const experience = [
  {
    role: "Associate Software Engineer Intern — Frontend (React.js)",
    org: "Thynk Technology India, Pune",
    period: "Jan 2026 – Mar 2026",
    points: [
      "Engineered 10+ reusable UI components in React.js, cutting development time by 25%.",
      "Integrated REST APIs to fetch and render dynamic data, improving responsiveness by 30%.",
      "Optimized frontend performance, reducing page load time by 20%.",
      "Enhanced cross-device compatibility for a consistent experience across platforms.",
    ],
  },
  {
    role: "Data Analysis Intern",
    org: "Cognifyz Technologies",
    period: "Sep 2025 – Oct 2025",
    points: [
      "Processed 5,000+ records with Python (Pandas), improving data accuracy by 25%.",
      "Ran exploratory data analysis to surface trends and actionable insights.",
      "Built 5+ visualizations in Matplotlib and Seaborn for stakeholder presentations.",
      "Automated repetitive data-processing tasks, cutting manual effort significantly.",
    ],
  },
];

export const projects = [
  {
    title: "Trahdo Dashboard",
    date: "Sep 2026",
    stack: ["Next.js", "NestJS", "PostgreSQL", "Redis", "WebSocket"],
    description:
      "A real-time Indian equity dashboard — NestJS streams live ticks from the Upstox API over WebSocket while a Next.js frontend renders market pulse, movers, and a sector heatmap, backed by Postgres and Redis.",
    flow: "Upstox API → NestJS (WebSocket + REST) → Postgres/Redis → Next.js Dashboard",
    github: "#",
    live: "https://dashboard.trahdo.com/",
  },
  {
    title: "AI-Powered Centralized Resource System",
    date: "Sep 2025",
    stack: ["React.js", "Node.js", "MongoDB", "AI"],
    description:
      "A scalable full-stack web app with REST APIs for frontend-backend communication, built on OOP principles and a modular architecture, following the full SDLC from requirements to deployment.",
    github: "https://github.com/akshaykalbhor192/AI-Powered-Centralized-Resource-System.git",
    live: "#",
  },
  {
    title: "Retail Data Engineering Pipeline",
    date: null,
    stack: ["Python", "Pandas", "MySQL", "SQL", "Power BI"],
    description:
      "An ETL pipeline that cleans raw retail data (missing values, duplicates, data types) in Python/Pandas, loads it into MySQL, and surfaces SQL-based analysis through a Power BI dashboard.",
    flow: "CSV Retail Data → Python/Pandas ETL → MySQL → SQL Analytics → Power BI Dashboard",
    github: "https://github.com/akshaykalbhor192/Retail_Data_engineering_pipeline.git",
    live: "#",
  },
  {
    title: "AI Food Chatbot",
    date: "Jan 2025",
    stack: ["Python", "FastAPI", "Dialogflow", "Firebase"],
    description:
      "A FastAPI backend with Dialogflow integration for conversational ordering, RESTful APIs between frontend and backend, and Firebase-based real-time response handling.",
    github: "#",
    live: "#",
  },
  {
    title: "Galaxy Guardian Website",
    date: "Feb 2024",
    stack: ["React.js", "Firebase"],
    description:
      "A React app for exploring space-related media, with a fully responsive UI and optimized media loading and retrieval across devices.",
    github: "#",
    live: "#",
  },

  {
    title: "Trahdo Website",
    date: "Sep 2026",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    description:
      "The marketing site for Trahdo — one place to research, trade, and track a portfolio across Trahdo Market Intelligence and the Trahdo app.",
    github: "#",
    live: "https://trahdo-website.vercel.app/",
  },
];

export const skillGroups = [
  {
    label: "Frontend",
    items: ["React.js", "Next.js", "React Native", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express.js", "FastAPI", "Firebase", "REST APIs"],
  },
  {
    label: "Data & Databases",
    items: ["MySQL", "MongoDB", "PostgreSQL / Supabase", "Power BI", "SQL", "Pandas"],
  },
  {
    label: "AI / ML",
    items: ["Python", "Sentence Transformers", "FAISS", "Hugging Face", "PyTorch"],
  },
  {
    label: "Tools & Practice",
    items: ["Git", "GitHub", "Figma", "Postman", "Agile / SDLC", "OOP & DSA"],
  },
];
