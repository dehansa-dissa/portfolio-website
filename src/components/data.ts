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
    name: "CorpoVinculo",
    desc: "Multi-tenant sponsorship management platform with role-based dashboards and dynamic data integration",
    stack: ["Next.js", "React", "Jira", "Frontend Development"],
    github: "#",
    demo: "#",
  },
  {
    name: "HabitFlow",
    desc: "Full-stack habit tracker with secure authentication, streak tracking, and real-time progress insights.",
    stack: ["Spring Boot", "React", "PostgreSQL", "Asgardeo", "REST API"],
    github: "#",
    demo: "#",
  },
  {
    name: "Job Listing backend API",
    desc: "RESTful job listing API with CRUD operations, search functionality, and Dockerized deployment.",
    stack: ["Spring Boot", "PostgreSQL", "Docker", "REST API", "Postman"],
    github: "#",
    demo: "#",
  },
  {
    name: "Movie Signal",
    desc: "Netflix-style movie streaming web app with dynamic search, filtering, and trending content using TMDb API..",
    stack: ["React", "JavaScript", "Appwrite", "TMDb API"],
    github: "#",
    demo: "#",
  },
  {
    name: "Save Marine Life",
    desc: "Awareness website for marine conservation.",
    stack: ["JavaScript", "HTML", "CSS"],
    github: "#",
    demo: "#",
  },
  {
    name: "Traffic Data Analysis",
    desc: "Analysis of traffic patterns from CSV files.",
    stack: ["Python", "Tkinter"],
    github: "#",
    demo: "#",
  },
];

export const CERTS = [
  { name: "TypeScript Essential Training", issuer: "LinkedIn Learning", date: "2025", verify: "#" },
  { name: "Python for Beginners", issuer: "University of Moratuwa", date: "2024", verify: "#" },
  { name: "Algokit Workshop Sri Lanka", issuer: "Algorand Foundation", date: "2025", verify: "#" },
];

export const AWARDS = [
  { title: "3rd Place — Startup Today", desc: "Organized by the KDU Entrepreneurship Club." },
  { title: "IEEE Extreme 2025", desc: "Organized by the IEEE." },
  { title: "Hult Prize 2025", desc: "Organized by the Hult Prize Foundation." },
];

export const POSTS = [
  { title: "OOP Concepts in Java Explained Simply", date: "Mar 202", read: "6 min", tag: "OOP", Link: "https://medium.com/@deha.dissa/oop-concepts-in-java-explained-simply-with-examples-for-beginners-990f27d75d12" },
  { title: "Asgardeo by WSO2: A Simple Guide to Modern Authentication", date: "April 2026", read: "5 min", tag: "Asgardeo", Link: "https://medium.com/@deha.dissa/asgardeo-by-wso2-a-simple-guide-to-modern-authentication-0615997f0eb9" },
  // { title: "Shipping Side Projects in 2 Weekends", date: "Jan 2025", read: "4 min", tag: "career", Link: "#" },
];

export const SPORTS = [
  { title: "Team Captain", org: "IIT Women's Cricket Team", date: "2026 — Present", desc: "Rotaract champions League 2025 - Champions." },
  { title: "All-rounder", org: "MCA Women's Cricket Team", date: "2024 - Present", desc: "Inter house Tournament 2025 - Champions." },
];

export const VOLUNTEER = [
  { title: "Treasurer", org: "Interact Club of Viharamahadevi Balika Vidyalaya", date: "2023 — 2024", desc: "Managed club finances and organized fundraising events." },
  { title: "Secretarial Team - Vertex'25", org: "IEEE Robotics and Automation Society", date: "2025", desc: "Assisted in organizing the Vertex'25." },
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
    degree: "Ordinary Level (O/L)",
    date: "2023 — 2024",
    note: "9 A's",
  },
];

export const SOCIALS = [
  { icon: FaGithub, href: "https://github.com/dehansa-dissa", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com/in/dehansadissa", label: "LinkedIn" },
  { icon: Mail, href: "mailto:dehansa.dev@gmail.com", label: "Email" },
];
