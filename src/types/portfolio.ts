export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: 'web' | 'mobile' | 'desktop' | 'backend' | 'other';
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface ProjectCategory {
  id: string;
  label: string;
  count: number;
}
