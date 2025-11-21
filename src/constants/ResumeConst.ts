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
        urlImage: 'https://drive.google.com/uc?export=view&id=1GzzZ0TLTPv6M8qD2HUwBWLTCbEgD2Wth',
        stacks: ['TypeScript', 'Node.js', 'Express.js', 'AWS Lambda'],
        urlLive: 'https://wonderful-quran.netlify.app/',
        urlGitHub: 'https://github.com/ladoijo/wonderful-quran-be'
      },
      {
        id: 2,
        slug: 'time-deposit-bank-account',
        title: 'Time Deposit Bank Account',
        description:
          'Developed Time Deposit backend service used by Hijra Bank customers for savings and investment.',
        stacks: ['Java', 'Spring Boot', 'PostgreSQL'],
        urlImage: 'https://drive.google.com/uc?export=view&id=1mQMnP_mKFERosn3AFoH1XrAK4dAMF3cz',
        urlLive:
          'https://play.google.com/store/apps/details?id=com.bank_hijra&pcampaignid=web_share'
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
        urlImage: 'https://drive.google.com/uc?export=view&id=1GJryAJzlHQ1c5IWEZEwREm38RYhO2SZk',
        stacks: ['Java', 'Spring Boot', 'PostgreSQL'],
        urlLive:
          'https://play.google.com/store/apps/details?id=com.alami_funder&pcampaignid=web_share'
      },
      {
        id: 5,
        slug: 'sfmonitor-agent-connector-amq',
        title: 'SFMonitor Agent, Connector & AMQ',
        description:
          'SFMonitor consists of three integrated modules. SFMonitor Agent, which listens to server activity, records request histories, monitors system and JVM resources, provides thread and stack-trace controls, and sends request/response events to RabbitMQ. SFMonitor AMQ, which consumes these messages from RabbitMQ and stores them as historical data in the database. And SFMonitor Bridge, which acts as a connector between the SFMonitor Dashboard and multiple SFMonitor Agents inside Docker containers, routing dashboard requests to the correct agent based on container IP or host.',
        urlImage: 'https://drive.google.com/uc?export=view&id=1bkEbAFrpg3E5wLeQdHha3CvLGZW5CDCX',
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
        urlImage: 'https://drive.google.com/uc?export=view&id=1GzzZ0TLTPv6M8qD2HUwBWLTCbEgD2Wth',
        stacks: ['TypeScript', 'React.js', 'Next.js', 'Tailwind CSS', 'Radix UI'],
        urlLive: 'https://wonderful-quran.netlify.app/',
        urlGitHub: 'https://github.com/ladoijo/wonderful-quran-fe'
      },
      {
        id: 2,
        slug: 'my-personal-web',
        title: 'My Personal Web',
        description:
          'A personal portfolio website showcasing my projects, skills, and professional experience. Built with modern web technologies.',
        urlImage: 'https://drive.google.com/uc?export=view&id=1URAWVxm1Haoae4itIgPwBEz_yh99HH1H',
        stacks: ['TypeScript', 'React.js', 'Next.js', 'Tailwind CSS'],
        urlLive: 'https://hdygidev.netlify.app/',
        urlGitHub: 'https://github.com/ladoijo/my-personal-web'
      },
      {
        id: 3,
        slug: 'sfmonitor-dashboard',
        title: 'SFMonitor Dashboard',
        description:
          'Designed and developed monitoring dashboard equipped with features to monitor requests, responses, resource usage, and more from every server, VM, and Docker container service related to Lucee and ColdFusion applications.',
        urlImage: 'https://drive.google.com/uc?export=view&id=1tNCpnJzKUCs3YiccZqjhkbU6u0KQSOyM',
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
        urlImage: 'https://drive.google.com/uc?export=view&id=1SIS7uIjIJ0Z9v5AEeV-KWPz9hiGdpRTY',
        stacks: ['TypeScript', 'React Native', 'Redux', 'RxJS', 'NativeBase'],
        urlLive: 'https://play.google.com/store/apps/details?id=com.navees&pcampaignid=web_share'
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
