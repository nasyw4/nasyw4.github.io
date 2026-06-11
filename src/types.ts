export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  status?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  points: string[];
}

export interface SkillGroup {
  id: string;
  name: string;
  icon: string; // Will match a Lucide icon key
  tags: string[];
  borderColorClass: string;
  gradientClass: string;
}

export interface StatItem {
  value: string;
  label: string;
}
