import type { Project, Certification, Experience, PortfolioInfo } from "@/types";

export const FALLBACK_PROJECTS: Project[] = [
  {
    _id: "1",
    title: "Student Grade Evaluation System",
    slug: "student-grade-evaluation-system",
    description:
      "Developed a Python-based Student Grade Evaluation System for managing academic records efficiently.",
    features: [
      "Add Student Record",
      "Update Student Record",
      "Delete Student Record",
      "Display Student Details",
      "Grade Classification",
      "Result Generation",
    ],
    technologies: ["Python"],
    imageUrl: "/images/projects/grade-system.svg",
    githubUrl: "https://github.com/Satnam-dev",
    liveDemoUrl: null,
    featured: true,
    order: 1,
  },
  {
    _id: "2",
    title: "Password Strength Checker",
    slug: "password-strength-checker",
    description:
      "Developed a GUI-based Password Strength Checker using Python Tkinter to evaluate password security.",
    features: [
      "User-Friendly GUI",
      "Password Strength Analysis",
      "Real-Time Validation",
    ],
    technologies: ["Python", "Tkinter"],
    imageUrl: "/images/projects/password-checker.svg",
    githubUrl: "https://github.com/Satnam-dev",
    liveDemoUrl: null,
    featured: true,
    order: 2,
  },
];

export const FALLBACK_CERTIFICATIONS: Certification[] = [
  {
    _id: "1",
    name: "Samsung Innovation Campus Certificate of Completion",
    slug: "samsung-innovation-campus-coding-programming",
    description:
      "Completed the Coding & Programming course at Samsung Innovation Campus, demonstrating proficiency in programming fundamentals and software development practices.",
    imageUrl: "/certificates/samsung-innovation-campus-certificate.png",
    certificateUrl: "/certificates/samsung-innovation-campus-certificate.png",
    downloadUrl: "/certificates/samsung-innovation-campus-certificate.png",
    issuer: "Samsung Innovation Campus",
    issuedDate: "2026-02-11",
    courseName: "Coding & Programming",
    programStartDate: "2025-11-27",
    programEndDate: "2026-02-11",
    affiliation: "Telecom Sector Skill Council",
    order: 1,
  },
];

export const FALLBACK_EXPERIENCES: Experience[] = [
  {
    _id: "1",
    title: "Python with AI Training",
    organization: "AI-LAB · GyanSetu One World AI",
    type: "training",
    currentLevel: "Level 1",
    status: "current",
    startDate: "2025-01-01",
    endDate: null,
    learning: [
      "Python Programming",
      "Artificial Intelligence Fundamentals",
      "Machine Learning Basics",
      "Backend Development",
      "Problem Solving",
    ],
    description:
      "Currently undergoing structured Python with AI training at AI-LAB, building foundational skills in programming, AI concepts, and backend development through hands-on lab sessions and mentorship.",
    images: [
      {
        url: "/images/experience/python-lab-session.png",
        alt: "Python with AI lab session at AI-LAB",
        layout: "landscape",
      },
      {
        url: "/images/experience/ai-lab-banner.png",
        alt: "AI-LAB training banner — GyanSetu One World AI",
        layout: "portrait",
      },
      {
        url: "/images/experience/python-team-photo.png",
        alt: "Team learning Python and AI together in the lab",
        layout: "landscape",
      },
    ],
    order: 1,
  },
];

export const FALLBACK_PORTFOLIO: PortfolioInfo = {
  _id: "1",
  name: "Satnam Kumar",
  title: "Aspiring Full-Stack Developer",
  tagline: "Building practical applications with modern technologies",
  about:
    "I am passionate about learning software development and continuously improving my technical skills. I enjoy solving programming problems, building practical applications, and exploring modern technologies.",
  education: {
    degree: "B.Tech in Computer Science Engineering",
    institution: "",
    status: "Currently in 4th Year",
  },
  roles: [
    "B.Tech Computer Science Engineering Student",
    "Aspiring Full-Stack Developer",
    "Python with AI Trainee",
    "Software Developer",
  ],
  skills: {
    programming: ["C", "C++", "Java (Basic)", "Python (Learning)"],
    web: ["HTML5", "JavaScript", "Node.js"],
    database: ["MongoDB"],
    tools: ["Git", "GitHub", "Visual Studio Code", "Postman"],
  },
  softSkills: [
    "Team Collaboration",
    "Quick Learning Ability",
    "Effective Communication",
    "Problem Solving",
    "Analytical Thinking",
    "Adaptability",
    "Time Management",
  ],
  socialLinks: {
    github: "https://github.com/Satnam-dev",
  },
  resumeUrl: "/resume/Satnam-Kumar-Resume.pdf",
  stats: {
    projectsCount: 2,
    skillsCount: 12,
    certificationsCount: 1,
  },
};
