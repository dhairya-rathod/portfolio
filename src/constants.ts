import { IconsEnum } from "src/types";

export const METADATA = {
  title: "Dhairya Rathod | Software Engineer",
  description: "Dhairya Rathod is a Full Stack Developer from India.",
  siteUrl: "https://dhairya-rathod.netlify.app/",
  twitterHandle: "@dhairya0o7",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "A pragmatic Full Stack Developer",
  "I build things for the web",
  "I create aesthetic and modern apps",
];

export const SOCIAL_LINKS = [
  {
    key: IconsEnum.MAIL,
    name: "mail",
    url: "mailto: dhairya.rathod.us@gmail.com",
  },
  {
    key: IconsEnum.LINKEDIN,
    name: "linkedin",
    url: "https://www.linkedin.com/in/dhairya-rathod/",
  },
  {
    key: IconsEnum.GITHUB,
    name: "github",
    url: "https://github.com/dhairya-rathod",
  },
  {
    key: IconsEnum.INSTAGRAM,
    name: "instagram",
    url: "https://www.instagram.com/dhairya0o7/",
  },
  {
    key: IconsEnum.TWITTER,
    name: "twitter",
    url: "https://twitter.com/dhairya0o7",
  },
];

export const SKILLS = {
  languagesAndTools: [
    "html",
    "css",
    "javascript",
    "typescript",
    "sass",
    "python",
    "firebase",
    "stripe",
  ],
  librariesAndFrameworks: [
    "react",
    "redux",
    "nextjs",
    "tailwindcss",
    "styledcomponents",
    "mui",
    "chakra-ui",
  ],
  databases: ["mysql", "mongodb"],
  other: ["nodejs", "git"],
};

export const PROJECTS = [
  // {
  //   name: "Portfolio",
  //   image: "/projects/airbnb.webp",
  //   blurImage: "/projects/blur/airbnb-blur.webp",
  //   description: "Airbnb UI clone using NextJS + Tailwind CSS 🛏️",
  //   gradient: ["#F14658", "#DC2537"],
  //   url: "",
  //   tech: ["react", "nextjs", "tailwindcss", "mapbox"],
  // },
];

export const WORK = [
  // {
  //   company: "Spacenos",
  //   title: "Web Developer Intern",
  //   location: "Bangalore, Karnataka",
  //   range: "September - December 2021",
  //   responsibilities: [
  //     "Led the Full Stack revamp on the Admin Portal.",
  //     "Developed app integration with REST APIs, Google Maps, User Auth, Stripe and other libraries.",
  //     "Implemented CRUD features for all the services and providers.",
  //   ],
  //   url: "https://spacenos.com/",
  // },
];

export const RESUME_LINK = process.env.NEXT_PUBLIC_RESUME_LINK;

export const GTAG = "";
