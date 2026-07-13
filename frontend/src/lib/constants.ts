export const SITE_CONFIG = {
  name: "Parmjeet Singh",
  title: "Full Stack Developer Portfolio",
  description:
    "Parmjeet Singh - Final Year B.Tech CSE student, Full Stack & Backend Developer specializing in Node.js, Java, React, and AI.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  email: "parmjeet7438@gmail.com",
  github: "https://github.com/parmjeet7438-bit",
  linkedin: "https://www.linkedin.com/in/parmjeet-singh-17b713397",
  resumeUrl: "/resume/parmjeet-singh-resume.pdf",
};

export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#journey", label: "Journey" },
  { href: "#certifications", label: "Certifications" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export const TYPING_TITLES = [
  "Full Stack Developer",
  "Backend Developer",
  "Java Developer",
  "Node.js Developer",
  "AI Learner",
];

export const SOFT_SKILLS = [
  { title: "Quick Learner", icon: "Zap" },
  { title: "Problem Solving", icon: "Puzzle" },
  { title: "Team Collaboration", icon: "Users" },
  { title: "Adaptability", icon: "RefreshCw" },
  { title: "Emotional Intelligence", icon: "Heart" },
  { title: "Time Management", icon: "Clock" },
];

export const COLLEGE_JOURNEY = {
  title: "College Journey",
  institution: "Rayat-Bahra University",
  degree: "B.Tech — Computer Science & Engineering",
  status: "Final Year",
  description:
    "Building strong CS foundations through coursework, labs, and projects — with a focus on software development and AI.",
  highlights: [
    "Core CS fundamentals & programming",
    "Software engineering & web development",
    "Hands-on labs and academic projects",
  ],
};

export const TRAINING_COURSE = {
  title: "AI Training Journey",
  name: "Python with AI — Unlocking Intelligence with ML",
  level: "Level 1",
  tagline: "Beginner friendly · Practical · Internship included",
  partners: ["Apple AI-LAB", "Gyansetu One World AI", "Ruhil Future Technologies"],
  location: "Apple AI Lab, Lab 105, Ground Floor, Engineering Department",
  duration: "3 Months",
  phases: [
    { title: "Training by Experts", duration: "2 Months" },
    { title: "Industry Internship", duration: "1 Month" },
  ],
};

export const TRAINING_TOPICS = [
  "Python Programming",
  "Artificial Intelligence",
  "Machine Learning",
  "Hands-on Projects",
  "Industry Internship",
];

export const TRAINING_HIGHLIGHTS = [
  "Learn AI from scratch",
  "No coding experience required",
  "Hands-on projects every week",
  "Real internship included",
  "Portfolio + GitHub projects",
  "Industry-ready skills in 3 months",
];

export const EDUCATION = [
  {
    degree: "Bachelor of Technology",
    field: "Computer Science & Engineering",
    status: "Final Year",
    description:
      "Pursuing B.Tech in Computer Science & Engineering at Rayat-Bahra University, with focus on software development, Python, and Artificial Intelligence.",
  },
];

export const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:6000/api";
