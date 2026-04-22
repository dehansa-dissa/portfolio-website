import {
  // Github,
  // Linkedin,
  Mail,
  Code2,
  Database,
  Wrench,
  Layers,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const NAV = [
  { id: "skills", label: "skills" },
  { id: "projects", label: "projects" },
  { id: "certs", label: "certs" },
  { id: "blog", label: "blog" },
  { id: "extracurricular", label: "extracurricular" },
  { id: "education", label: "education" },
  { id: "contact", label: "contact" },
];

export const TYPE_ROLES = [
  "Full-Stack Developer",
  "Software Engineering Undergrad",
];

export const SKILL_GROUPS = [
  {
    title: "Languages",
    icon: Code2,
    items: ["Java", "TypeScript", "JavaScript", "Python", "SQL" ],
  },
  {
    title: "Frameworks",
    icon: Layers,
    items: ["React", "Next.js", "Spring Boot"],
  },
  {
    title: "Databases",
    icon: Database,
    items: ["PostgreSQL", "MySQL", "AppWrite"],
  },
  {
    title: "Tools",
    icon: Wrench,
    items: ["Git", "GitHub", "Docker", "Vite", "Figma", "Postman"],
  },
];

export const PROJECTS = [
  {
    name: "Inkwell",
    desc: "Collaborative markdown editor with live cursors and version history.",
    stack: ["React", "Node", "Postgres", "WebSockets"],
    github: "#",
    demo: "#",
  },
  {
    name: "Pulse Analytics",
    desc: "Privacy-first product analytics dashboard for indie developers.",
    stack: ["Next.js", "ClickHouse", "tRPC"],
    github: "#",
    demo: "#",
  },
  {
    name: "Chime",
    desc: "Voice-channel app for small communities, no accounts required.",
    stack: ["React", "WebRTC", "Go"],
    github: "#",
    demo: "#",
  },
  {
    name: "Sift CLI",
    desc: "Fast file search & ripgrep wrapper with fuzzy ranking.",
    stack: ["Rust", "CLI"],
    github: "#",
    demo: "#",
  },
  {
    name: "Atlas Notes",
    desc: "Local-first notes app with end-to-end encrypted sync.",
    stack: ["Svelte", "SQLite", "CRDT"],
    github: "#",
    demo: "#",
  },
  {
    name: "Forge UI",
    desc: "Headless component library focused on accessibility primitives.",
    stack: ["TypeScript", "React"],
    github: "#",
    demo: "#",
  },
];

export const CERTS = [
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon", date: "2024", verify: "#" },
  { name: "Meta Front-End Developer", issuer: "Meta", date: "2024", verify: "#" },
  { name: "MongoDB Associate Developer", issuer: "MongoDB", date: "2023", verify: "#" },
];

export const AWARDS = [
  { title: "1st Place — University Hackathon", desc: "Built an offline-first study tool in 36 hours." },
  { title: "Dean's List — 4 semesters", desc: "Top 5% academic standing." },
  { title: "Open Source Contributor", desc: "Merged PRs into 6+ widely-used libraries." },
];

export const POSTS = [
  { title: "Why I Stopped Reaching for useEffect", date: "Mar 2025", read: "6 min", tag: "react" },
  { title: "A Quiet Tour of Postgres CTEs", date: "Feb 2025", read: "8 min", tag: "databases" },
  { title: "Shipping Side Projects in 2 Weekends", date: "Jan 2025", read: "4 min", tag: "career" },
];

export const SPORTS = [
  { title: "University Football Team", org: "Striker", date: "2022 — Present", desc: "Inter-faculty league finalists 2024." },
  { title: "Marathon Runner", org: "City Half-Marathon", date: "2023", desc: "Finished top 10% of age group." },
];

export const VOLUNTEER = [
  { title: "Code Mentor", org: "Local high school", date: "2023 — Present", desc: "Weekly intro-to-programming sessions." },
  { title: "Open Source Maintainer", org: "Community libraries", date: "2022 — Present", desc: "Triaging issues and reviewing PRs." },
];

export const EDUCATION = [
  {
    school: "University of Westminster",
    degree: "B.Eng. Software Engineering",
    date: "2024 — 2028 (expected)",
    note: "GPA 3.9 / 4.0 · Dean's List",
  },
  {
    school: "Informatics Institute of Technology",
    degree: "Foundation Certification",
    date: "2023 — 2024",
    note: "Distinction",
  },
];

export const SOCIALS = [
  { icon: FaGithub, href: "https://github.com/dehansa-dissa", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com/in/dehansadissa", label: "LinkedIn" },
  { icon: Mail, href: "mailto:dehansa.dev@gmail.com", label: "Email" },
];
