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
  { id: "projects", label: "projects" },
  { id: "skills", label: "skills" },
  { id: "blog", label: "blog" },
  { id: "certs", label: "certs" },
  { id: "education", label: "education" },
  { id: "extracurricular", label: "extracurricular" },
  { id: "contact", label: "contact" },
];

export const TYPE_ROLES = [
  "Full-Stack Developer",
  "Software Engineering Undergrad",
];


export const PROJECTS = [
  {
    name: "CorpoVinculo",
    desc: "Multi-tenant sponsorship management platform with role-based dashboards and dynamic data integration",
    stack: ["Next.js", "React", "Jira", "Frontend Development"],
    github: "https://github.com/dehansa-dissa",
    demo: "https://corpovinculo.com",
  },
  {
    name: "HabitFlow",
    desc: "Full-stack habit tracker with secure authentication, streak tracking, and real-time progress insights.",
    stack: ["Spring Boot", "React", "PostgreSQL", "Asgardeo", "REST API"],
    github: "https://github.com/dehansa-dissa/habit-tracker-frontend",
    demo: "https://github.com/dehansa-dissa/habit-tracker-frontend",
  },
  {
    name: "Job Listing backend API",
    desc: "RESTful job listing API with CRUD operations, search functionality, and Dockerized deployment.",
    stack: ["Spring Boot", "PostgreSQL", "Docker", "REST API", "Postman"],
    github: "https://github.com/dehansa-dissa/job-listing-api",
    demo: "https://github.com/dehansa-dissa/job-listing-api",
  },
  {
    name: "Movie Signal",
    desc: "Netflix-style movie streaming web app with dynamic search, filtering, and trending content using TMDb API..",
    stack: ["React", "JavaScript", "Appwrite", "TMDb API"],
    github: "https://github.com/dehansa-dissa/MovieSignal",
    demo: "https://github.com/dehansa-dissa/MovieSignal",
  },
  {
    name: "Save Marine Life",
    desc: "Awareness website for marine conservation.",
    stack: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/dehansa-dissa/save-marine-life-website",
    demo: "https://github.com/dehansa-dissa/save-marine-life-website",
  },
  {
    name: "Traffic Data Analysis",
    desc: "Analysis of traffic patterns from CSV files.",
    stack: ["Python", "Tkinter"],
    github: "https://github.com/dehansa-dissa",
    demo: "https://github.com/dehansa-dissa",
  },
];

export const CERTS = [
  { name: "TypeScript Essential Training", issuer: "LinkedIn Learning", date: "2025", verify: "#" },
  { name: "Algokit Workshop Sri Lanka", issuer: "Algorand Foundation", date: "2025", verify: "#" },
  { name: "Learning Java", issuer: "LinkedIn Learning", date: "2025", verify: "#" },
  { name: "Learning Git and Github", issuer: "LinkedIn Learning", date: "2025", verify: "#" },
  { name: "Python for Beginners", issuer: "University of Moratuwa", date: "2024", verify: "#" },
];

export const AWARDS = [
  { title: "Startup Today — 3rd Place", desc: "Organized by the KDU Entrepreneurship Club." },
  { title: "IX 2026 — Participation", desc: "Organized by the IEEE of IIT." },
  { title: "IEEE Extreme 2025 — Participation", desc: "Organized by the IEEE." },
  { title: "Hult Prize 2025 — Participation", desc: "Organized by the Hult Prize Foundation." },
];


export const POSTS = [
  {
    title: "OOP Concepts in Java Explained Simply",
    date: "Mar 202",
    read: "6 min",
    tag: "OOP",
    Link: "https://medium.com/@deha.dissa/oop-concepts-in-java-explained-simply-with-examples-for-beginners-990f27d75d12",
    img: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*496BD93kFtz2ipAmco7PyQ.png"
  },
  {
    title: "Asgardeo by WSO2: A Simple Guide to Modern Authentication",
    date: "April 2026",
    read: "5 min",
    tag: "Asgardeo",
    Link: "https://medium.com/@deha.dissa/asgardeo-by-wso2-a-simple-guide-to-modern-authentication-0615997f0eb9",
    img: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*DukOlnyca-hwP2S4Y7yWbA.jpeg"
  },
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

export const EDUCATION = [
  {
    school: "University of Westminster",
    degree: "B.Eng. Software Engineering",
    date: "2024 — 2028 (expected)",
    // note: "GPA 3.9 / 4.0 · Dean's List",
  },
  {
    school: "Informatics Institute of Technology",
    degree: "Foundation Certification",
    date: "2023 — 2024",
    note: "Distinction",
  },
  {
    school: "Viharamahadevi Balika Vidyalaya",
    degree: "G.C.E. Ordinary Level",
    date: "2023 — 2024",
    note: "9 A's",
  },
];

export const SPORTS = [
  { title: "Team Captain", org: "IIT Women's Cricket Team", date: "2026 — Present", desc: ["Rotaract Champions League 2025 - Champions.", "Rotaract Champions League 2026 - 3rd Place.", "CIMA Cricket Tournament 2025 - Champions."] },
  { title: "All-rounder", org: "MCA Women's Cricket Team", date: "2024 - Present", desc: ["Inter house Tournament 2025 - Champions."] },
  { title: "Athlete", org: "IIT Inter-House Sportsmeet - Gamini House", date: "2024 - Present", desc: ["Women’s Cricket 2024 - Runners up.", "Women’s Football 2025 - Champions.", "Women’s High Jump 2025 - 3rd Place", "Women’s High Jump 2024 - 3rd Place", "Women’s 100x4 Relay 2024 - 2nd Place", "Women’s 100m 2024 - Finalist"] },
];

export const VOLUNTEER = [
  { title: "Treasurer", org: "Interact Club of Viharamahadevi Balika Vidyalaya", date: "2023 — 2024", },
  { title: "Membership Development Team - TechTrek", org: "IEEE Robotics and Automation Society", date: "2026", },
  { title: "Secretarial Team - Vertex'25", org: "IEEE Robotics and Automation Society", date: "2025", },
  { title: "Green-life Director", org: "Interact Club of Viharamahadevi Balika Vidyalaya", date: "2022-2023", },
];


export const SOCIALS = [
  { icon: FaGithub, href: "https://github.com/dehansa-dissa", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com/in/dehansadissa", label: "LinkedIn" },
  { icon: Mail, href: "mailto:dehansa.dev@gmail.com", label: "Email" },
];
