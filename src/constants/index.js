import {
  analyst,
  android,
  backend,
  coverhunt,
  css,
  dart,
  dcc,
  figma,
  flutter,
  frontend,
  git,
  html,
  javascript,
  kelhel,
  map,
  microverse,
  movie,
  nodejs,
  nyeusi,
  python,
  rank,
  reactjs,
  redux,
  shikisha,
  tailwind,
  typescript,
  ux,
  vue
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Data Analyst',
    icon: analyst,
  },
  {
    title: 'App Developement',
    icon: android,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'Vue',
    icon: vue,
  },
  {
    name: 'Flutter',
    icon: flutter,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'Dart',
    icon: dart,
  },
];

const experiences = [
  {
    title: 'Front-End Developer',
    company_name: 'Taquana Ltd',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'May 2022 - Nov 2022',
  },
  {
    title: 'Chief Technology Officer',
    company_name: 'Taquana Ltd',
    icon: microverse,
    iconBg: '#333333',
    date: 'Nov 2022 - April 2023',
  },
  {
    title: 'Junior Software Engineer',
    company_name: 'Upwork Freelance',
    icon: kelhel,
    iconBg: '#333333',
    date: 'May 2022 - Oct 2022',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Upwork Freelance',
    icon: dcc,
    iconBg: '#333333',
    date: 'Jan 2023 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Car rank',
    description: 'A website that ranks used vhicles based on their specificatiosn',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: rank,
    repo: 'https://github.com/Brian-mula/Car-Rank',
    demo: 'https://tresornkuba.netlify.app/',
  },
  {
    id: 'project-2',
    name: 'Shikisha App',
    description:
      'An app an equivalent to Jumia but deals with second hand products',
    tags: [
      {
        name: 'Dart',
        color: 'blue-text-gradient',
      },
      {
        name: 'Firebase',
        color: 'green-text-gradient',
      },
      {
        name: 'Flutter',
        color: 'pink-text-gradient',
      },
    ],
    image: shikisha,
    repo: 'https://github.com/Brian-mula/shikisha_admin',
    demo: 'unavailable',
  },
  {
    id: 'project-3',
    name: 'Employee location finder',
    description: 'An employer\'s app for locating his employees in the field',
    tags: [
      {
        name: 'Dart',
        color: 'blue-text-gradient',
      },
      {
        name: 'Firebase',
        color: 'green-text-gradient',
      },
      {
        name: 'Flutter',
        color: 'pink-text-gradient',
      },
    ],
    image: map,
    repo: 'https://github.com/shaqdeff/Math-Magicians',
    demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  },
  {
    id: 'project-4',
    name: 'Game repository',
    description: `A web application that fetches all the games from an API and displays them`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'Vuex',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/shaqdeff/Movie-Metro',
    demo: 'https://movie-metro.netlify.app/',
  },
  {
    id: 'project-5',
    name: 'Nyeusi Fest Site',
    description:
      'This is a demo concert website for a music festival called Nyeusi.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
    demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  },
];

export { services, technologies, experiences, projects };
