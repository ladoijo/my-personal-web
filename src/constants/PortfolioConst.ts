import { PortfolioItem, PortfolioCategory } from '@/types/portfolio';

export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, inventory management, and admin dashboard.',
    image: '/placeholder-project-1.webp',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    category: 'web',
    liveUrl: 'https://example-ecommerce.com',
    githubUrl: 'https://github.com/username/ecommerce-platform',
    featured: true
  },
  {
    id: '2',
    title: 'Mobile Banking App',
    description:
      'A secure mobile banking application for iOS and Android with biometric authentication, transaction history, and real-time notifications.',
    image: '/placeholder-project-2.webp',
    technologies: ['React Native', 'TypeScript', 'Firebase', 'Redux'],
    category: 'mobile',
    liveUrl: 'https://apps.apple.com/banking-app',
    githubUrl: 'https://github.com/username/banking-app',
    featured: true
  },
  {
    id: '3',
    title: 'Task Management Dashboard',
    description:
      'A collaborative task management tool with real-time updates, team collaboration features, and project tracking capabilities.',
    image: '/placeholder-project-3.webp',
    technologies: ['Vue.js', 'Express', 'Socket.io', 'PostgreSQL'],
    category: 'web',
    liveUrl: 'https://taskmanager.example.com',
    githubUrl: 'https://github.com/username/task-manager',
    featured: false
  },
  {
    id: '4',
    title: 'Weather Desktop App',
    description:
      'A cross-platform desktop application for weather forecasting with location-based services and customizable widgets.',
    image: '/placeholder-project-4.webp',
    technologies: ['Electron', 'JavaScript', 'OpenWeather API'],
    category: 'desktop',
    githubUrl: 'https://github.com/username/weather-app',
    featured: false
  },
  {
    id: '5',
    title: 'UI/UX Design System',
    description:
      'A comprehensive design system with reusable components, style guide, and documentation for consistent user experiences.',
    image: '/placeholder-project-5.webp',
    technologies: ['Figma', 'Storybook', 'CSS', 'Design Tokens'],
    category: 'design',
    liveUrl: 'https://design-system.example.com',
    featured: false
  },
  {
    id: '6',
    title: 'AI Chatbot Platform',
    description:
      'An intelligent chatbot platform with natural language processing, multi-language support, and analytics dashboard.',
    image: '/placeholder-project-6.webp',
    technologies: ['Python', 'TensorFlow', 'FastAPI', 'React'],
    category: 'web',
    liveUrl: 'https://chatbot.example.com',
    githubUrl: 'https://github.com/username/ai-chatbot',
    featured: true
  }
];

export const portfolioCategories: PortfolioCategory[] = [
  { id: 'all', label: 'All Projects', count: portfolioItems.length },
  {
    id: 'web',
    label: 'Web Applications',
    count: portfolioItems.filter((item) => item.category === 'web').length
  },
  {
    id: 'mobile',
    label: 'Mobile Apps',
    count: portfolioItems.filter((item) => item.category === 'mobile').length
  },
  {
    id: 'desktop',
    label: 'Desktop Apps',
    count: portfolioItems.filter((item) => item.category === 'desktop').length
  },
  {
    id: 'design',
    label: 'Design',
    count: portfolioItems.filter((item) => item.category === 'design').length
  }
];
