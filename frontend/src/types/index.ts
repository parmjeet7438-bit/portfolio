export interface Project {
  _id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
  liveUrl: string;
  category: string;
  tags: string[];
  status: "completed" | "in-progress" | "planned";
  featured: boolean;
  order: number;
}

export interface Skill {
  _id: string;
  name: string;
  category: string;
  level: number;
  icon: string;
  order: number;
}

export interface Experience {
  _id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  technologies: string[];
  order: number;
}

export interface Certification {
  _id: string;
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate: string;
  credentialId: string;
  imageUrl: string;
  pdfUrl: string;
  description: string;
  order: number;
}

export interface TrainingImage {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  order: number;
}

export interface PortfolioInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  profileImage: string;
  typingTitles: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  updated_at: string;
}

export interface AnalyticsData {
  visits: number;
  downloads: number;
  contacts: number;
  recent: { type: string; createdAt: string }[];
}
