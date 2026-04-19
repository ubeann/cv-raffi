export interface HeroData {
  name: [string, string, string];
  description: string;
  email: string;
  linkedin: string;
  github: string;
  metrics: string[];
}

export interface Education {
  institution: string;
  degree: string;
  gpa?: string;
  period: string;
}

export interface TechStackCategory {
  category: string;
  skills: string[];
}

export interface FoundationData {
  education: Education[];
  techStack: TechStackCategory[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  points: string[];
}

export interface Leadership {
  title: string;
  year: string;
  role: string;
  description: string;
}

export interface ProjectLink {
  live: string;
  github: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  links: ProjectLink;
  image: string;
}

export interface ContactData {
  heading: string;
  subheading: string;
  email: string;
}

export interface CVDataStructure {
  hero: HeroData;
  foundation: FoundationData;
  experience: Experience[];
  leadership: Leadership[];
  projects: Project[];
  contact: ContactData;
}
