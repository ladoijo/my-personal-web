interface IWorkExperience {
  id: number;
  company: string;
  position: string;
  start: string;
  end?: string;
  description?: string;
  stacks?: string[];
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
    ]
  },
  {
    id: 4,
    company: 'PT ALAMI Fintek Sharia (ALAMI)',
    position: 'Senior Software Engineer',
    start: 'Jan 2022',
    end: 'Jan 2025',
    description: 'A financial technology company focused on sharia compliant solutions.',
    stacks: ['CI/CD', 'Docker', 'Git', 'Java', 'Maven', 'PostgreSQL', 'Spring Boot', 'Spring JPA']
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
    ]
  }
];

interface IEducation {
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
