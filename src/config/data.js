import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Michael Frieze | Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Come check out the portfolio of Michael Frieze.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Michael Frieze',
  subtitle: 'I love all things JavaScript.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "My name is Michael and I am based in Clinton Township, MI. I found my passion for programming about 11 years ago and went to college soon after. I've dedicated countless hours to learning and expanding this passion while developing an avid work ethic and disciplinary skills along the way. Strong creative and critical thinking skills have helped me to excel in areas like web development as well as functional and object-oriented programming.",

  paragraphTwo:
    'In my professional career, I started out as a Java developer working at Oakland University. During my time there, the team decided to implement ReactJS and this sparked my interest in JavaScript. I spent the next few years working on various JavaScript and CSS projects while continuing to work as a back-end developer. Now, I am shifting my focus towards JavaScript and frontend development in general.',

  paragraphThree:
    'When I am not coding, I enjoy playing guitar, watching "The Great Courses", playing PC games, reading, and spending time with my partner (since 2010).',
  resume:
    'https://drive.google.com/file/d/1frLY2ebxKNMudDrk0vBPu9eqaUhs6ONL/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: "Slick's Slices",
    info: 'This is a jamstack pizza shop built with GatsbyJS.',
    info2:
      'I used Sanity.io for the headless CMS, Netlify serverless functions to handle orders and emails, and CSS-in-JS for responsive design.',
    url: 'https://slicksslices-michaelfrieze.netlify.app/',
    repo: 'https://github.com/MichaelFrieze/slicks-slices', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'CRWN Clothing',
    info:
      'This is a clothing shop built with ReactJS. I used Heroku free tier for deployment so please be patient if it takes some time to load.',
    info2:
      'Redux was used for state management. Firebase was used for authentication and clothing data. Stripe was used to handle payments. CSS-in-JS was used for responsive design.',
    url: 'https://michaelfrieze-crwn-live.herokuapp.com/',
    repo: 'https://github.com/MichaelFrieze/crown-clothing', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'Natours',
    info:
      "This is a simple and responsive website that is used to display CSS and SASS skills. There is no Javascript and no navigation (it has a button but doesn't work).",
    info2:
      'This site does not use CSS Grid or Flexbox because I wanted to show that I could also do it the old way using floats. Please see Loruki for CSS Grid and Flexbox examples.',
    url: 'https://michaelfrieze.github.io/natours-css-project/',
    repo: 'https://github.com/MichaelFrieze/natours-css-project', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project4.jpg',
    title: 'Loruki',
    info:
      'A simple and responsive website inspired by Heroku to display CSS, CSS Grid, and Flexbox skills',
    info2: '',
    url: 'https://michaelfrieze-loruki.netlify.app/',
    repo: 'https://github.com/MichaelFrieze/loruki', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'contact@michaelfrieze.dev',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/michaelfrieze',
    },
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/michaelfrieze88/',
    },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/michaelfrieze/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/MichaelFrieze',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
