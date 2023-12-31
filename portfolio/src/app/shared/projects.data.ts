import { Project } from './models';

export const projects: Project[] = [
  {
    id: 1,
    name: 'Trypple A',
    tooltip: 'Trypple A',
    image: '/assets/Trypple A.png',
    description: 'Developers agency advertisement landing page.',
    deployLink: 'https://www.trypplea.com/',
    team: 'product owner, frontend, tester',
    technologies: {
      core: ['Wix', 'Botpress'],
    },
    personalImpact: [
      'content maker',
      'project design',
      'landing page implementation',
      'chatbot intergration',
    ],
  },
  {
    id: 2,
    name: 'GraphQL Playground',
    image: '/assets/graphql.png',
    tooltip: 'GraphQL Playground',
    description:
      'A platform that provides financial data and analytical tools to help private investors track their investments and stay up-to-date with market trends, news, and indicators.',
    deployLink: 'https://snazzy-crisp-5a7088.netlify.app/',
    team: '3 frontend developers under mentors supervision',
    technologies: {
      core: ['React 18', 'Typescript', 'ESLint', 'Redux', 'Redux Toolkit', 'Firebase', 'Vite'],
      styling: ['Material UI'],
      plugins: ['react-hook-form', 'react-localization'],
    },
    personalImpact: ['project design', 'landing page', 'localization', 'responsiveness'],
  },
  {
    id: 3,
    name: 'Finscraper',
    tooltip: 'Finscraper',
    image: '/assets/finscraper.png',
    description:
      'A platform that provides financial data and analytical tools to help private investors track their investments and stay up-to-date with market trends, news, and indicators.',
    deployLink: 'https://finscraper.com/',
    team: 'product manager, 2 backend developers, frontend developer, UX/UI designer',
    technologies: {
      core: ['HTML5/CSS3', 'Javascript', 'Django', 'Python'],
      styling: ['Bootstrap 5'],
    },
    personalImpact: [
      'landing page and dashboard views optimization',
      'responsiveness',
      'chatbot intergation and style customization',
    ],
  },
  {
    id: 4,
    name: 'Management System Dashboard',
    image: '/assets/management system.png',
    tooltip: 'Management System Dashboard',
    description: 'Freelance Project. Admin/Moderator Dashoboard Implementation',
    deployLink: 'https://management-system-09d549.netlify.app/',
    team: 'product owner, frontend, tester',
    technologies: {
      core: ['HTML5/CSS3', 'Typescript', 'ESLint', 'Webpack', 'Figma'],
      styling: ['Bootstrap 5'],
    },
    personalImpact: [
      'project architecture',
      'dashboards creation by Figma template',
      'responsiveness',
    ],
  },
  {
    id: 5,
    name: 'Task Manager',
    image: '/assets/project management.png',
    tooltip: 'Task Manager',
    description:
      'An agile project management tool designed to help visualize work, limit work-in-progress, and maximize efficiency (or flow). Based on Kanban boards visualization.',
    deployLink: 'https://rs-project-management-app-team111.netlify.app/',
    team: '3 frontend developers under mentors supervision',
    technologies: {
      core: ['Angular 2+', 'Typescript', 'RxJS', 'NgRx', 'ESLint'],
      styling: ['Angular Material'],
      plugins: ['ng-http-loader', 'swiper'],
    },
    personalImpact: [
      'team leader',
      'add light/dark mode',
      'localization',
      'store creation',
      'task board implementaion using "drag and drop"',
    ],
  },
];
