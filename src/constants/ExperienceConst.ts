interface IWorkExperience {
  id: number;
  company: string;
  position: string;
  start: string;
  end?: string;
  description?: string;
  technologies?: string[];
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
    technologies: [
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
    ]
  },
  {
    id: 2,
    company: 'PT Indodev Niaga Internet (DataOn)',
    position: 'Senior Software Developer',
    start: 'Oct 2017',
    end: 'Mar 2019',
    description:
      'A technology company that provides software solutions to enhance business operations.',
    technologies: [
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
    ]
  },
  {
    id: 3,
    company: 'PT TaniHub Group Indonesia (TaniHub)',
    position: 'Front End Engineer',
    start: 'Mar 2019',
    end: 'Jan 2022',
    description:
      'A startup focused on the agriculture, e-grocery and supply chain, An e-commerce platform that connects farmers with consumers.',
    technologies: [
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
    ]
  },
  {
    id: 4,
    company: 'PT ALAMI Fintek Sharia (ALAMI)',
    position: 'Senior Software Engineer',
    start: 'Jan 2022',
    end: 'Jan 2025',
    description: 'A financial technology company focused on sharia compliant solutions.',
    technologies: [
      'CI/CD',
      'Docker',
      'Git',
      'Java',
      'Maven',
      'PostgreSQL',
      'Spring Boot',
      'Spring JPA'
    ]
  },
  {
    id: 5,
    company: 'Freelance',
    position: 'Full Stack Developer',
    start: 'Jan 2025'
  }
];
