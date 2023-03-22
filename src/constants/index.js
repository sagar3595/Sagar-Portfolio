import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    cognizant,
    Nike,
    currency,
    crypto,
    gym,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Programmer Trainee",
      company_name: "Cognizant",
      icon: cognizant,
      iconBg: "#383E56",
      date: "September 2021 - March 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Worked in fast paced environment supporting my coworkers to help them succeed",
      ],
    },
 ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Nike E-commerce",
      description:
        "Web based e-commerce application which offers some of best shoes prices which are available and can checkout using stripe payment gateway",
      tags: [
        {
          name: "Next Js",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "Strapi",
          color: "pink-text-gradient",
        },
      ],
      image: Nike,
      source_code_link: "https://github.com/sagar3595/shoe-store-frontend",
      vercel_live_link: "https://shoe-store-frontend-flame.vercel.app/",
    },
    {
      name: "CryptoApp",
      description:
        "Web application that enables users to search for desired crypto coins and get the current price exchange rates availaible in the market with included price charts ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "chakra ui",
          color: "pink-text-gradient",
        },
      ],
      image: crypto,
      source_code_link: "https://github.com/sagar3595/cyptocoins",
      vercel_live_link: "https://cyptocoins.vercel.app/",
    },
    {
      name: "Currency Convertor App",
      description:
        "Web based currency convertor app which allows users to get exchange rates and convert one currency to another with options of choosing different countries",
      tags: [
        {
          name: "Next Js",
          color: "blue-text-gradient",
        },
        {
          name: "react query",
          color: "green-text-gradient",
        },
        {
          name: "Rest Api",
          color: "pink-text-gradient",
        },
      ],
      image: currency,
      source_code_link: "https://github.com/sagar3595/Currency-Convertor",
      vercel_live_link: "https://currency-convertor-orpin.vercel.app/",
    },

    {
      name: "Gym Landing Page",
      description:
        "Web based currency convertor app which allows users to get exchange rates and convert one currency to another with options of choosing different countries",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Framer Motion",
          color: "green-text-gradient",
        },
        {
          name: "Typescript",
          color: "pink-text-gradient",
        },
      ],
      image: gym,
      source_code_link: "https://github.com/sagar3595/gym-typescript",
      vercel_live_link: "https://gym-typescript-red.vercel.app/"
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };