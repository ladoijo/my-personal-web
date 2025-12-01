import { CERTIFICATE_ENGLISH_URL, CERTIFICATE_QSD_URL, CERTIFICATE_REACT_URL } from '@/utils/env';

export interface IWorkExperience {
  id: number;
  company: string;
  position: string;
  start: string;
  end?: string;
  description?: string;
  tasks?: string[];
  stacks?: string[];
  color?: string; // Hex color code
}

export const WorkExperiences: IWorkExperience[] = [
  {
    id: 1,
    company: 'PT Lawencon Internasional',
    position: 'Java Programmer',
    start: 'Mar 2014',
    end: 'Sep 2017',
    description:
      'A company providing IT consulting and systems development services. Assigned to a client, PT Bank BTPN.',
    tasks: [
      'Maintained and enhanced backend features for core digital banking services',
      'Built internal dashboards and integrated monitoring pipelines using Mule ESB and Grails. Facilitating and improving a rapid and effective response to incident by 50%'
    ],
    stacks: [
      'CSS',
      'Grails',
      'Groovy',
      'HTML',
      'Hibernate',
      'Java',
      'MS SQL Server',
      'Maven',
      'Mule ESB',
      'MySQL',
      'Oracle',
      'Spring Boot',
      'Spring MVC'
    ],
    color: 'var(--color-5)'
  },
  {
    id: 2,
    company: 'PT Indodev Niaga Internet (DataOn)',
    position: 'Senior Software Developer',
    start: 'Oct 2017',
    end: 'Mar 2019',
    description:
      'A technology company that provides software solutions to enhance business operations.',
    tasks: [
      'Created VM/server monitoring tools using Spring Boot + MariaDB, reducing manual checks by 50%',
      'Improved infrastructure health visibility, enabling faster incident response by 50%'
    ],
    stacks: [
      'CSS',
      'Git',
      'HTML',
      'Hibernate',
      'JMX',
      'JQuery',
      'Java',
      'JavaScript',
      'MariaDB',
      'Maven',
      'Rancher',
      'Redis',
      'Spring Boot'
    ],
    color: 'var(--color-4)'
  },
  {
    id: 3,
    company: 'PT TaniHub Group Indonesia (TaniHub)',
    position: 'Front End Engineer',
    start: 'Mar 2019',
    end: 'Jan 2022',
    description: 'Agritech and e-commerce platform connecting farmers to consumers and businesses',
    tasks: [
      'Developed dynamic dashboards for account managers, improving order management efficiency by 15%.',
      'Modernized the e-commerce frontend using React and TypeScript, reducing page load time by 30%',
      'Built features across B2B and B2C modules, including product registration and scheduling tools. Improving  our team work by 30%'
    ],
    stacks: [
      'CI/CD',
      'CSS',
      'Docker',
      'GCP',
      'Git',
      'HTML',
      'JavaScript',
      'Material-UI',
      'NativeBase',
      'Next.js',
      'React Native',
      'React.js',
      'Redux',
      'RxJS',
      'TypeScript',
      'Vue.js',
      'Vuex',
      'styled-components'
    ],
    color: 'var(--color-3)'
  },
  {
    id: 4,
    company: 'PT ALAMI Fintek Sharia (ALAMI)',
    position: 'Senior Software Engineer',
    start: 'Jan 2022',
    end: 'Jan 2025',
    description: 'Sharia compliant fintech startup delivering digital banking services.',
    tasks: [
      'Develop an educational module on the ALAMI P2P product to increase user knowledge of our product to 50%',
      'Led development of the Time Deposit feature for Hijra Bank, adopted by 30K+ users in under 3 months',
      'Optimized Spring Boot microservices to increase transaction throughput by 20%',
      'Authored internal onboarding and technical documentation, reducing ramp up time by 60%'
    ],
    stacks: ['CI/CD', 'Docker', 'Git', 'Java', 'Maven', 'PostgreSQL', 'Spring Boot', 'Spring JPA'],
    color: 'var(--color-2)'
  },
  {
    id: 5,
    company: 'Freelance',
    description:
      'Worked with various clients on web and mobile development projects, delivering full-stack solutions using modern technologies.',
    position: 'Full Stack Developer',
    start: 'Jan 2025',
    end: 'Now',
    stacks: [
      'Java',
      'JavaScript',
      'Spring',
      'TypeScript',
      'React.js',
      'Next.js',
      'React Native',
      'Tailwind CSS'
    ],
    color: 'var(--color-1)'
  }
];

export interface IEducation {
  id: number;
  institution: string;
  degree: string;
  major: string;
  fieldOfStudy: string;
  start: string;
  end: string;
  grade: number;
}

export const Educations: IEducation[] = [
  {
    id: 1,
    institution: 'Padang State Polytechnic',
    degree: 'Associate Degree',
    major: 'Information Technology',
    fieldOfStudy: 'Computer Engineering',
    start: 'Aug 2008',
    end: 'Jan 2012',
    grade: 2.94
  },

  {
    id: 2,
    institution: 'Bandung Institute of Technology',
    degree: 'Bachelor Degree',
    major: 'Electrical Engineering',
    fieldOfStudy: 'Computer Network Engineering and Digital Media',
    start: 'Mar 2012',
    end: 'Nov 2013',
    grade: 3.38
  }
];

export interface ICertificate {
  id: number;
  name: string;
  institution: string;
  publishedDate: string;
  url: string;
  color?: string; // Hex color code
}

export const Certificates: ICertificate[] = [
  {
    id: 1,
    name: 'Quality Software Developer Foundation Certificate In Maintainability',
    institution: 'PeopleCert',
    publishedDate: 'May 2017',
    url: CERTIFICATE_QSD_URL,
    color: 'var(--color-3)'
  },
  {
    id: 2,
    name: 'EF Set Certificate: B2 Upper Intermediate',
    institution: 'English First (EF)',
    publishedDate: 'Jun 2025',
    url: CERTIFICATE_ENGLISH_URL,
    color: '#FDE4F9'
  },
  {
    id: 3,
    name: 'Frontend Developer (React)',
    institution: 'HackerRank',
    publishedDate: 'Jul 2025',
    url: CERTIFICATE_REACT_URL,
    color: 'var(--color-2)'
  }
];
