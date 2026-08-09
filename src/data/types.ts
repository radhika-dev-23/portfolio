export interface ProfileData {
  name: string;
  role: string;
  subRole: string;
  tagline: string;
  supporting: string;
  location: string;
  github: string;
  githubHandle: string;
  linkedin: string;
  email: string;
  resumeUrl: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ExperienceHighlight {
  title: string;
  description: string;
}

export interface ExperienceData {
  company: string;
  role: string;
  period: string;
  location: string;
  context: string;
  highlights: ExperienceHighlight[];
  technologies: string[];
}

export interface ProjectData {
  id: string;
  name: string;
  badge: string | null;
  summary: string;
  description: string;
  keyTechnologies: string[];
  keyFeatures: string[];
  technologies: string[];
  features: string[];
  github: string | null;
  architecture?: string[];
  contribution: string | null;
  learningOutcome: string | null;
}

export interface SkillCategory {
  name: string;
  items: string[];
}

export interface SkillsData {
  categories: SkillCategory[];
}

export interface AboutData {
  paragraphs: string[];
  currentlyLearning: string[];
}

export interface EducationData {
  institution: string;
  degree: string;
  period: string;
  location: string;
}

export interface CertificationData {
  title: string;
  subtitle: string;
}

export interface ContactData {
  headline: string;
  supporting: string;
  email: string;
  github: string;
  linkedin: string;
}
