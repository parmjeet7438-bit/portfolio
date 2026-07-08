export const SITE = {
  name: "Satnam Kumar",
  github: "https://github.com/Satnam-dev",
  githubUsername: "Satnam-dev",
  resumeUrl: "/resume/Satnam-Kumar-Resume.pdf",
};

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
] as const;

export const API_BASE =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:6000/api/v1";

export const TYPING_ROLES = [
  "B.Tech Computer Science Engineering Student",
  "Aspiring Full-Stack Developer",
  "Python with AI Trainee",
  "Software Developer",
];

export const FALLBACK_SKILLS = {
  programming: ["C", "C++", "Java (Basic)", "Python (Learning)"],
  web: ["HTML5", "JavaScript", "Node.js"],
  database: ["MongoDB"],
  tools: ["Git", "GitHub", "Visual Studio Code", "Postman"],
};

export const FALLBACK_SOFT_SKILLS = [
  "Team Collaboration",
  "Quick Learning Ability",
  "Effective Communication",
  "Problem Solving",
  "Analytical Thinking",
  "Adaptability",
  "Time Management",
];

export const FALLBACK_ABOUT =
  "I am passionate about learning software development and continuously improving my technical skills. I enjoy solving programming problems, building practical applications, and exploring modern technologies. My current focus areas include Full-Stack Development, Artificial Intelligence, Backend Development, and Software Engineering.";

export const FOCUS_AREAS = [
  "Full-Stack Development",
  "Artificial Intelligence",
  "Backend Development",
  "Software Engineering",
];
