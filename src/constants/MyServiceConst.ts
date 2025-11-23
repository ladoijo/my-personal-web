import ApiIcon from '@/assets/icons/api.svg';
import BackendIcon from '@/assets/icons/backend.svg';
import ConsultantIcon from '@/assets/icons/consultant.svg';
import DashboardIcon from '@/assets/icons/dashboard.svg';
import DeployIcon from '@/assets/icons/deploy.svg';
import DesignIcon from '@/assets/icons/design.svg';
import DevelopmentIcon from '@/assets/icons/development.svg';
import MobileIcon from '@/assets/icons/mobile.svg';
import RequirementsIcon from '@/assets/icons/requirements.svg';
import TestingIcon from '@/assets/icons/testing.svg';
import WebIcon from '@/assets/icons/web.svg';
import { IconComponent } from '@/types/icon';

export interface IService {
  id: number;
  name: string;
  description: string;
  Icon: IconComponent;
  color: string; // Hex color code
}

export const Services: IService[] = [
  {
    id: 1,
    name: 'Backend Development',
    description:
      'I build reliable and secure APIs for your website or mobile app, so your system runs smoothly and can grow as your business grows.',
    Icon: BackendIcon,
    color: 'var(--color-1)'
  },
  {
    id: 2,
    name: 'Web Development',
    description:
      'I create modern, responsive web interfaces that look good, work fast, and feel great to use on both desktop and mobile.',
    Icon: WebIcon,
    color: 'var(--color-2)'
  },
  {
    id: 3,
    name: 'Mobile App Development',
    description:
      'I develop mobile apps for Android and iOS from a single codebase, helping you reach more users with lower development cost.',
    Icon: MobileIcon,
    color: 'var(--color-3)'
  },
  {
    id: 4,
    name: 'Architecture & Technical Consultation',
    description:
      'I advise you on system design, tech stack choices, and best practices so you can build a solution that’s scalable, secure, and future proof.',
    Icon: ConsultantIcon,
    color: 'var(--color-4)'
  },
  {
    id: 5,
    name: 'API Development & System Integration',
    description:
      'I design clean, well documented APIs and connect your product with payment gateways, third party services, and existing systems so everything works seamlessly together.',
    Icon: ApiIcon,
    color: 'var(--color-5)'
  },
  {
    id: 6,
    name: 'Performance Optimization',
    description:
      'I review and tune your system so pages load faster, servers handle more users, and errors are reduced.',
    Icon: DashboardIcon,
    color: 'var(--color-6)'
  }
];

export interface IWorkflow {
  id: number;
  name: string;
  description: string;
  Icon: IconComponent;
  color: string; // Hex color code
}

export const Workflows: IWorkflow[] = [
  {
    id: 1,
    name: 'Discovery & Requirements',
    description:
      'I start by understanding your business goals, current challenges, and what success looks like. We clarify the scope, features, timelines, and any existing systems we need to integrate with.',
    Icon: RequirementsIcon,
    color: 'var(--color-1)'
  },
  {
    id: 2,
    name: 'Solution Design & Planning',
    description:
      'I design the system architecture (backend, frontend, database, integrations) and propose a clear plan: tech stack, milestones, and deliverables. ',
    Icon: DesignIcon,
    color: 'var(--color-2)'
  },
  {
    id: 3,
    name: 'Development',
    description:
      'I develop the solution in small, reviewable chunks whether it’s a backend service, web app, mobile app, or internal tool using technologies that best fit your needs, with a focus on clean, maintainable, and secure code.',
    Icon: DevelopmentIcon,
    color: 'var(--color-3)'
  },
  {
    id: 4,
    name: 'Testing, Review & Iteration',
    description:
      'I test features (functional tests, edge cases, basic performance checks) and share demos with you. Your feedback is incorporated early so we can refine behavior, UX, and flows before going live.',
    Icon: TestingIcon,
    color: 'var(--color-4)'
  },
  {
    id: 5,
    name: 'Deployment & Monitoring Setup',
    description:
      'I prepare production deployment, configure environment variables, and set up basic monitoring/logging so we can track system health after launch.',
    Icon: DeployIcon,
    color: 'var(--color-5)'
  },
  {
    id: 6,
    name: 'Post Launch Support & Improvements',
    description:
      'After go live, I’m available for bug fixes, small enhancements, performance tuning, and new feature development based on real user feedback and usage data.',
    Icon: ConsultantIcon,
    color: 'var(--color-6)'
  }
];
