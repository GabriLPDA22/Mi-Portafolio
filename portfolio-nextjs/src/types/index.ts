// Tipos globales del portfolio

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
  featured?: boolean;
  year?: number;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  icon?: string;
  category: "frontend" | "backend" | "mobile" | "tools" | "other";
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  description: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  technologies: string[];
  logo?: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location?: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

export interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export interface AnimationConfig {
  initial?: object;
  animate?: object;
  exit?: object;
  transition?: object;
}
