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
import {
  PORTFOLIO_MY_PERSONAL_WEB_GITHUB_URL,
  PORTFOLIO_MY_PERSONAL_WEB_IMAGE_URL,
  PORTFOLIO_MY_PERSONAL_WEB_LIVE_URL,
  PORTFOLIO_NAVEES_IMAGE_URL,
  PORTFOLIO_NAVEES_LIVE_URL,
  PORTFOLIO_P2P_EDUCATION_MODULE_IMAGE_URL,
  PORTFOLIO_P2P_EDUCATION_MODULE_LIVE_URL,
  PORTFOLIO_SFMONITOR_AGENT_CONNECTOR_AMQ_IMAGE_URL,
  PORTFOLIO_TIME_DEPOSIT_BANK_ACCOUNT_IMAGE_URL,
  PORTFOLIO_TIME_DEPOSIT_BANK_ACCOUNT_LIVE_URL,
  PORTFOLIO_WONDERFUL_QURAN_API_GITHUB_URL,
  PORTFOLIO_WONDERFUL_QURAN_API_IMAGE_URL,
  PORTFOLIO_WONDERFUL_QURAN_API_LIVE_URL,
  PORTFOLIO_WONDERFUL_QURAN_WEB_GITHUB_URL,
  PORTFOLIO_WONDERFUL_QURAN_WEB_IMAGE_URL,
  PORTFOLIO_WONDERFUL_QURAN_WEB_LIVE_URL
} from '@/utils/env';

export interface IPortfolioProject {
  label: string;
  items: {
    id: number;
    slug: string;
    title: string;
    description: string;
    urlImage: string;
    stacks: string[];
    urlLive?: string;
    urlGitHub?: string;
  }[];
}

export const PortfolioProjects: Record<string, IPortfolioProject> = {
  backend: {
    label: 'Backend',
    items: [
      {
        id: 1,
        slug: 'wonderful-quran-api',
        title: 'Wonderful Quran API',
        description:
          'Designed and developed Wonderful Quran API service used by Wonderful Quran web.',
        urlImage: PORTFOLIO_WONDERFUL_QURAN_API_IMAGE_URL,
        stacks: ['TypeScript', 'Node.js', 'Express.js', 'AWS Lambda'],
        urlLive: PORTFOLIO_WONDERFUL_QURAN_API_LIVE_URL,
        urlGitHub: PORTFOLIO_WONDERFUL_QURAN_API_GITHUB_URL
      },
      {
        id: 2,
        slug: 'time-deposit-bank-account',
        title: 'Time Deposit Bank Account',
        description:
          'Developed Time Deposit backend service used by Hijra Bank customers for savings and investment.',
        stacks: ['Java', 'Spring Boot', 'PostgreSQL'],
        urlImage: PORTFOLIO_TIME_DEPOSIT_BANK_ACCOUNT_IMAGE_URL,
        urlLive: PORTFOLIO_TIME_DEPOSIT_BANK_ACCOUNT_LIVE_URL
      },
      // {
      //   id: 3,
      //   slug: 'otp-service',
      //   title: 'OTP Service',
      //   description:
      //     'Designed and developed OTP backend service used by ALAMI app users for security purposes.',
      //   urlImage: '',
      //   stacks: ['Java', 'Spring Boot', 'PostgreSQL'],
      //   urlLive:
      //     'https://play.google.com/store/apps/details?id=com.alami_funder&pcampaignid=web_share'
      // },
      {
        id: 4,
        slug: 'p2p-education-module',
        title: 'P2P Education Module',
        description:
          'Designed and developed P2P Education module backend service used by ALAMI app users to help educate users about ALAMI P2P.',
        urlImage: PORTFOLIO_P2P_EDUCATION_MODULE_IMAGE_URL,
        stacks: ['Java', 'Spring Boot', 'PostgreSQL'],
        urlLive: PORTFOLIO_P2P_EDUCATION_MODULE_LIVE_URL
      },
      {
        id: 5,
        slug: 'sfmonitor-agent-connector-amq',
        title: 'SFMonitor Agent, Connector & AMQ',
        description:
          'SFMonitor consists of three integrated modules. SFMonitor Agent, which listens to server activity, records request histories, monitors system and JVM resources, provides thread and stack-trace controls, and sends request/response events to RabbitMQ. SFMonitor AMQ, which consumes these messages from RabbitMQ and stores them as historical data in the database. And SFMonitor Bridge, which acts as a connector between the SFMonitor Dashboard and multiple SFMonitor Agents inside Docker containers, routing dashboard requests to the correct agent based on container IP or host.',
        urlImage: PORTFOLIO_SFMONITOR_AGENT_CONNECTOR_AMQ_IMAGE_URL,
        stacks: ['Java', 'Spring Boot', 'RabbitMQ', 'MySQL']
      }
    ]
  },
  web: {
    label: 'Web',
    items: [
      {
        id: 1,
        slug: 'wonderful-quran-web',
        title: 'Wonderful Quran Web',
        description:
          'Designed and developed Wonderful Quran web with fast navigation, verse exploration, and a clean study interface',
        urlImage: PORTFOLIO_WONDERFUL_QURAN_WEB_IMAGE_URL,
        stacks: ['TypeScript', 'React.js', 'Next.js', 'Tailwind CSS', 'Radix UI'],
        urlLive: PORTFOLIO_WONDERFUL_QURAN_WEB_LIVE_URL,
        urlGitHub: PORTFOLIO_WONDERFUL_QURAN_WEB_GITHUB_URL
      },
      {
        id: 2,
        slug: 'my-personal-web',
        title: 'My Personal Web',
        description:
          'A personal portfolio website showcasing my projects, skills, and professional experience. Built with modern web technologies.',
        urlImage: PORTFOLIO_MY_PERSONAL_WEB_IMAGE_URL,
        stacks: ['TypeScript', 'React.js', 'Next.js', 'Tailwind CSS'],
        urlLive: PORTFOLIO_MY_PERSONAL_WEB_LIVE_URL,
        urlGitHub: PORTFOLIO_MY_PERSONAL_WEB_GITHUB_URL
      },
      {
        id: 3,
        slug: 'sfmonitor-dashboard',
        title: 'SFMonitor Dashboard',
        description:
          'Designed and developed monitoring dashboard equipped with features to monitor requests, responses, resource usage, and more from every server, VM, and Docker container service related to Lucee and ColdFusion applications.',
        urlImage: PORTFOLIO_SFMONITOR_AGENT_CONNECTOR_AMQ_IMAGE_URL,
        stacks: ['Spring MVC', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap']
      }
    ]
  },
  mobile: {
    label: 'Mobile',
    items: [
      {
        id: 1,
        slug: 'navees',
        title: 'Navees',
        description:
          'Developed app specializing in the buying and selling of gold bars, facilitates online gold trading using the wakalah contract, ensuring transactions align with Sharia principles for a secure and ethical experience.',
        urlImage: PORTFOLIO_NAVEES_IMAGE_URL,
        stacks: ['TypeScript', 'React Native', 'Redux', 'RxJS', 'NativeBase'],
        urlLive: PORTFOLIO_NAVEES_LIVE_URL
      }
    ]
  }
};

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
    color: 'var(--color-2)',
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
    color: 'var(--color-3)',
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
    color: 'var(--color-4)',
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
    color: 'var(--color-5)',
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
