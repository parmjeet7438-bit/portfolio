import type { Certification, Project, Skill } from "@/types";

export const FALLBACK_SKILLS: Skill[] = [
  { _id: "1", name: "Java", category: "Programming Languages", level: 85, icon: "", order: 1 },
  { _id: "2", name: "C", category: "Programming Languages", level: 80, icon: "", order: 2 },
  { _id: "3", name: "C++", category: "Programming Languages", level: 78, icon: "", order: 3 },
  { _id: "4", name: "JavaScript", category: "Programming Languages", level: 88, icon: "", order: 4 },
  { _id: "5", name: "Python", category: "Programming Languages", level: 70, icon: "", order: 5 },
  { _id: "6", name: "HTML5", category: "Frontend", level: 90, icon: "", order: 1 },
  { _id: "7", name: "CSS3", category: "Frontend", level: 85, icon: "", order: 2 },
  { _id: "8", name: "React", category: "Frontend", level: 85, icon: "", order: 3 },
  { _id: "9", name: "Next.js", category: "Frontend", level: 82, icon: "", order: 4 },
  { _id: "10", name: "Tailwind CSS", category: "Frontend", level: 88, icon: "", order: 5 },
  { _id: "11", name: "Node.js", category: "Backend", level: 85, icon: "", order: 1 },
  { _id: "12", name: "Express.js", category: "Backend", level: 85, icon: "", order: 2 },
  { _id: "13", name: "REST APIs", category: "Backend", level: 88, icon: "", order: 3 },
  { _id: "14", name: "JWT Authentication", category: "Backend", level: 80, icon: "", order: 4 },
  { _id: "15", name: "MongoDB", category: "Database", level: 82, icon: "", order: 1 },
  { _id: "16", name: "Mongoose", category: "Database", level: 80, icon: "", order: 2 },
  { _id: "17", name: "Git", category: "Developer Tools", level: 88, icon: "", order: 1 },
  { _id: "18", name: "GitHub", category: "Developer Tools", level: 90, icon: "", order: 2 },
  { _id: "19", name: "VS Code", category: "Developer Tools", level: 92, icon: "", order: 3 },
  { _id: "20", name: "Postman", category: "Developer Tools", level: 85, icon: "", order: 4 },
];

export const FALLBACK_PROJECTS: Project[] = [
  {
    _id: "1",
    title: "Project Strength Check",
    description:
      "Password and project strength checker built during Samsung Innovation Campus — analyzes input strength and helps improve secure coding practices.",
    image: "",
    technologies: ["Python", "HTML", "CSS", "JavaScript"],
    features: ["Strength analysis", "Interactive UI", "Team collaboration"],
    githubUrl: "https://github.com/focalytsic/SIC-25-26-Team143",
    liveUrl: "",
    category: "fullstack",
    tags: ["security", "sic", "python"],
    status: "completed",
    featured: true,
    order: 1,
  },
];

export const FALLBACK_CERTIFICATIONS: Certification[] = [
  {
    _id: "1",
    title: "Coding and Programming",
    issuer: "Samsung Innovation Campus",
    issueDate: "2025-11-24",
    expiryDate: "2026-02-11",
    credentialId: "",
    imageUrl: "/certificates/samsung-innovation-campus.png",
    pdfUrl: "/certificates/samsung-innovation-campus.pdf",
    description: "Completed Samsung Innovation Campus program in Coding and Programming.",
    order: 1,
  },
];

export const ABOUT_TEXT =
  "I am Parmjeet Singh, a Final Year B.Tech Computer Science & Engineering student with a strong passion for backend development and modern web technologies. I enjoy designing scalable applications, solving real-world problems, and continuously learning emerging technologies. I am committed to writing clean, maintainable, and efficient code while improving my software engineering skills through hands-on projects and continuous learning. Currently, I am building my journey through college at Rayat-Bahra University and Python with AI training at the Apple AI-LAB (Gyansetu One World AI / Ruhil Future Technologies).";
