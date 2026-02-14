
export interface Project {
  title: string;
  description: string;
  tools: string[];
  link?: string;
  github?: string;
  highlights: string[];
}

export interface Achievement {
  title: string;
  description: string;
  link?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}
