import bcrypt from "bcryptjs";
import { Admin } from "../models/Admin";
import { Skill } from "../models/Skill";
import { Certification } from "../models/Certification";
import { Project } from "../models/Project";
import { PortfolioInfo } from "../models/PortfolioInfo";
import { env } from "../config/env";

const skills = [
  { name: "Java", category: "Programming Languages", level: 85, order: 1 },
  { name: "C", category: "Programming Languages", level: 80, order: 2 },
  { name: "C++", category: "Programming Languages", level: 78, order: 3 },
  { name: "JavaScript", category: "Programming Languages", level: 88, order: 4 },
  { name: "Python", category: "Programming Languages", level: 70, order: 5 },
  { name: "HTML5", category: "Frontend", level: 90, order: 1 },
  { name: "CSS3", category: "Frontend", level: 85, order: 2 },
  { name: "React", category: "Frontend", level: 85, order: 3 },
  { name: "Next.js", category: "Frontend", level: 82, order: 4 },
  { name: "Tailwind CSS", category: "Frontend", level: 88, order: 5 },
  { name: "Node.js", category: "Backend", level: 85, order: 1 },
  { name: "Express.js", category: "Backend", level: 85, order: 2 },
  { name: "REST APIs", category: "Backend", level: 88, order: 3 },
  { name: "JWT Authentication", category: "Backend", level: 80, order: 4 },
  { name: "MongoDB", category: "Database", level: 82, order: 1 },
  { name: "Mongoose", category: "Database", level: 80, order: 2 },
  { name: "Git", category: "Developer Tools", level: 88, order: 1 },
  { name: "GitHub", category: "Developer Tools", level: 90, order: 2 },
  { name: "VS Code", category: "Developer Tools", level: 92, order: 3 },
  { name: "Postman", category: "Developer Tools", level: 85, order: 4 },
];

export async function seedDatabase(): Promise<void> {
  const adminExists = await Admin.findOne({ email: env.admin.email });
  if (!adminExists) {
    const hashed = await bcrypt.hash(env.admin.password, 12);
    await Admin.create({ email: env.admin.email, password: hashed, name: "Parmjeet Singh" });
    console.log("Admin user seeded");
  }

  if ((await Skill.countDocuments()) === 0) {
    await Skill.insertMany(skills);
    console.log("Skills seeded");
  }

  if ((await Certification.countDocuments()) === 0) {
    await Certification.create({
      title: "Coding and Programming",
      issuer: "Samsung Innovation Campus",
      issueDate: "2025-11-24",
      expiryDate: "2026-02-11",
      description: "Completed Samsung Innovation Campus program in Coding and Programming.",
      imageUrl: "/certificates/samsung-innovation-campus.png",
      pdfUrl: "/certificates/samsung-innovation-campus.pdf",
      order: 1,
    });
    console.log("Certifications seeded");
  }

  if ((await Project.countDocuments()) === 0) {
    await Project.insertMany([
      {
        title: "Project Strength Check",
        description:
          "Password and project strength checker built during Samsung Innovation Campus — analyzes input strength and helps improve secure coding practices.",
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
    ]);
    console.log("Projects seeded");
  }

  if (!(await PortfolioInfo.findOne())) {
    await PortfolioInfo.create({
      name: "Parmjeet Singh",
      title: "Full Stack Developer",
      email: "parmjeet7438@gmail.com",
      bio: "I am Parmjeet Singh, a Final Year B.Tech Computer Science & Engineering student with a strong passion for backend development and modern web technologies.",
      github: "https://github.com/parmjeet7438-bit",
      linkedin: "https://www.linkedin.com/in/parmjeet-singh-17b713397",
      resumeUrl: "/resume/parmjeet-singh-resume.pdf",
      typingTitles: [
        "Full Stack Developer",
        "Backend Developer",
        "Java Developer",
        "Node.js Developer",
        "AI Learner",
      ],
    });
    console.log("Portfolio info seeded");
  }
}
