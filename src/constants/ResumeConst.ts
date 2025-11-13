import ActiveMQIcon from '@/assets/icons/activemq.svg';
import BackendIcon from '@/assets/icons/backend.svg';
import CodeIcon from '@/assets/icons/code.svg';
import CSSIcon from '@/assets/icons/css.svg';
import DatabaseIcon from '@/assets/icons/database.svg';
import DockerIcon from '@/assets/icons/docker.svg';
import ExpressIcon from '@/assets/icons/expressjs.svg';
import FrontendIcon from '@/assets/icons/frontend.svg';
import GcpIcon from '@/assets/icons/gcp.svg';
import GitIcon from '@/assets/icons/git.svg';
import HibernateIcon from '@/assets/icons/hibernate.svg';
import HTMLIcon from '@/assets/icons/html.svg';
import JavaIcon from '@/assets/icons/java.svg';
import JavaScriptIcon from '@/assets/icons/javascript.svg';
import JenkinsIcon from '@/assets/icons/jenkins.svg';
import JMeterIcon from '@/assets/icons/jmeter.svg';
import LambdaIcon from '@/assets/icons/lambda.svg';
import MariaDBIcon from '@/assets/icons/mariadb.svg';
import MaterialIcon from '@/assets/icons/materialui.svg';
import MongoDBIcon from '@/assets/icons/mongodb.svg';
import MySQLIcon from '@/assets/icons/mysql.svg';
import NextJSIcon from '@/assets/icons/nextjs.svg';
import NodeIcon from '@/assets/icons/nodejs.svg';
import PostgreSQLIcon from '@/assets/icons/postgresql.svg';
import RabbitMQIcon from '@/assets/icons/rabbitmq.svg';
import RancherIcon from '@/assets/icons/rancher.svg';
import ReactJSIcon from '@/assets/icons/reactjs.svg';
import RedisIcon from '@/assets/icons/redis.svg';
import ReduxIcon from '@/assets/icons/redux.svg';
import SpringIcon from '@/assets/icons/spring.svg';
import TailwindIcon from '@/assets/icons/tailwindcss.svg';
import ToolsIcon from '@/assets/icons/tools.svg';
import TypeScriptIcon from '@/assets/icons/typescript.svg';
import { IconComponent } from '@/types/icon';
import { ProjectCategory, ProjectItem } from '@/types/portfolio';

export const portfolioItems: ProjectItem[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, inventory management, and admin dashboard.',
    image:
      'https://img.freepik.com/free-photo/cartoon-lifestyle-summertime-scene_23-2151068217.jpg?semt=ais_incoming&w=740&q=80',
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
    image:
      'https://img.freepik.com/free-photo/cartoon-lifestyle-summertime-scene_23-2151068217.jpg?semt=ais_incoming&w=740&q=80',
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
    image:
      'https://img.freepik.com/free-photo/cartoon-lifestyle-summertime-scene_23-2151068217.jpg?semt=ais_incoming&w=740&q=80',
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
    image:
      'https://img.freepik.com/free-photo/cartoon-lifestyle-summertime-scene_23-2151068217.jpg?semt=ais_incoming&w=740&q=80',
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
    image:
      'https://img.freepik.com/free-photo/cartoon-lifestyle-summertime-scene_23-2151068217.jpg?semt=ais_incoming&w=740&q=80',
    technologies: ['Figma', 'Storybook', 'CSS', 'Design Tokens'],
    category: 'backend',
    liveUrl: 'https://design-system.example.com',
    featured: false
  },
  {
    id: '6',
    title: 'AI Chatbot Platform',
    description:
      'An intelligent chatbot platform with natural language processing, multi-language support, and analytics dashboard.',
    image:
      'https://img.freepik.com/free-photo/cartoon-lifestyle-summertime-scene_23-2151068217.jpg?semt=ais_incoming&w=740&q=80',
    technologies: ['Python', 'TensorFlow', 'FastAPI', 'React'],
    category: 'web',
    liveUrl: 'https://chatbot.example.com',
    githubUrl: 'https://github.com/username/ai-chatbot',
    featured: true
  }
];

export const projectCategories: ProjectCategory[] = [
  { id: 'all', label: 'All Projects', count: portfolioItems.length },
  {
    id: 'backend',
    label: 'Backend',
    count: portfolioItems.filter((item) => item.category === 'backend').length
  },
  {
    id: 'web',
    label: 'Website',
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
  }
];

export interface ISkill {
  [key: string]: {
    name: string;
    Icon: IconComponent;
    color: string; // Hex color code
    items: {
      name: string;
      Icon: IconComponent;
    }[];
  };
}

export const Skills: ISkill = {
  language: {
    name: 'Language',
    Icon: CodeIcon,
    color: '#fdebc3',
    items: [
      {
        name: 'Java',
        Icon: JavaIcon
      },
      {
        name: 'JavaScript',
        Icon: JavaScriptIcon
      },
      {
        name: 'TypeScript',
        Icon: TypeScriptIcon
      }
    ]
  },
  backend: {
    name: 'Backend',
    Icon: BackendIcon,
    color: '#E3F2FF',
    items: [
      {
        name: 'Spring',
        Icon: SpringIcon
      },
      {
        name: 'Node.js',
        Icon: NodeIcon
      },
      {
        name: 'Express.js',
        Icon: ExpressIcon
      },
      {
        name: 'Hibernate',
        Icon: HibernateIcon
      },
      {
        name: 'RabbitMQ',
        Icon: RabbitMQIcon
      },
      {
        name: 'ActiveMQ',
        Icon: ActiveMQIcon
      }
    ]
  },
  frontend: {
    name: 'Frontend',
    Icon: FrontendIcon,
    color: '#F3FFe3',
    items: [
      {
        name: 'HTML',
        Icon: HTMLIcon
      },
      {
        name: 'CSS',
        Icon: CSSIcon
      },
      {
        name: 'Tailwind CSS',
        Icon: TailwindIcon
      },
      {
        name: 'Material UI',
        Icon: MaterialIcon
      },
      {
        name: 'React.js',
        Icon: ReactJSIcon
      },
      {
        name: 'React Native',
        Icon: ReactJSIcon
      },
      {
        name: 'Next.js',
        Icon: NextJSIcon
      },
      {
        name: 'Redux',
        Icon: ReduxIcon
      }
    ]
  },
  database: {
    name: 'Database',
    Icon: DatabaseIcon,
    color: '#f9c9c9',
    items: [
      {
        name: 'MySQL',
        Icon: MySQLIcon
      },
      {
        name: 'MariaDB',
        Icon: MariaDBIcon
      },
      {
        name: 'PostgreSQL',
        Icon: PostgreSQLIcon
      },
      {
        name: 'MongoDB',
        Icon: MongoDBIcon
      },
      {
        name: 'Redis',
        Icon: RedisIcon
      }
    ]
  },
  others: {
    name: 'Others',
    Icon: ToolsIcon,
    color: '#a2cef1',
    items: [
      {
        name: 'Docker',
        Icon: DockerIcon
      },
      {
        name: 'Jenkins',
        Icon: JenkinsIcon
      },
      {
        name: 'Git',
        Icon: GitIcon
      },
      {
        name: 'GCP',
        Icon: GcpIcon
      },
      {
        name: 'Lambda',
        Icon: LambdaIcon
      },
      {
        name: 'Rancher',
        Icon: RancherIcon
      },
      {
        name: 'JMeter',
        Icon: JMeterIcon
      }
    ]
  }
};
