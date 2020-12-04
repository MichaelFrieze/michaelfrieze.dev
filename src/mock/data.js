import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Michael Frieze | Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Michael Frieze',
  subtitle: 'I love all things Javascript.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: "Slick's Slices",
    info: '',
    info2: '',
    url: 'https://slicksslices-michaelfrieze.netlify.app/',
    repo: 'https://github.com/MichaelFrieze/slicks-slices', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'CRWN Clothing',
    info: '',
    info2: '',
    url: 'https://michaelfrieze-crwn-live.herokuapp.com/',
    repo: 'https://github.com/MichaelFrieze/crown-clothing', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'Loruki',
    info: '',
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
    // {
    //   id: nanoid(),
    //   name: 'linkedin',
    //   url: '',
    // },
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
