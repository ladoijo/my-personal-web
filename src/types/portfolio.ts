export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: 'web' | 'mobile' | 'desktop' | 'design' | 'other';
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface PortfolioCategory {
  id: string;
  label: string;
  count: number;
}
