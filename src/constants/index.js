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
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    ecostruct
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
      skills:["html","css","github","netlify","wordpress"]
    },
    {
      title: "Web designer",
      icon: mobile,
      skills:["figma","tailwind", "bootstrap"]
    },
    {
      title: "Frontend Developer",
      icon: backend,
      skills:["react","javascript","node.js"]
    },
    {
      title: "Graphic Designer",
      icon: creator,
      skills:["ps","ai","inkscape","midjourney"]
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
   /* {
      name: "Redux Toolkit",
      icon: redux,
    },*/
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
   /* {
      name: "MongoDB",
      icon: mongodb,
    },*/
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
   /* {
      name: "docker",
      icon: docker,
    },*/
  ];
  
  const experiences = [
    {
      title: "Web Developer/Front-End Developer: React.js Specialist",
      company_name: "Freelance",
      icon: starbucks,
      iconBg: "#383E56",
      date: "April 2022 - Now",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with clients, designers, product managers, and developers for quality products.",
        "Implementing responsive design and ensure cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to peers.",
      ],
    },
    {
      title: "Graphic Designer",
      company_name: "Freelance",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Now",
      points: [
        "Designing visually appealing web content for diverse clients and industries.",
        "Creating engaging marketing materials to drive brand awareness and conversions.",
        "Crafting unique and eye-catching NFTs for digital art collectors and enthusiasts.",
        "Designing professional and memorable business cards for various professionals.",
      ],
    },
    {
      title: "Online Tech/French Teacher",
      company_name: "United Nations / Alliance Française",
      icon: shopify,
      iconBg: "#383E56",
      date: "July 2018 - Jan 2023",
      points: [
        "Delivering engaging Tech and French lessons to students of all levels through digital platforms.",
        "Utilizing cutting-edge technology and online resources to enhance the learning experience.",
        "Monitoring student progress and providing tailored feedback using digital assessment tools.",
        "Collaborating with fellow educators and participating in virtual professional development sessions.",
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
      name: "Ecostruct Holdings",
      description:
        " Remodeled website to provide a simple and efficient way for customers to contact the company and learn more about its products and services. The website features a clear and concise contact form and an informative news page, making it easy for customers to get the information they need.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: ecostruct,
      source_code_link: "https://github.com/lea-chefson/ecostruct",
      source_code_link2: "https://lea-chefson.github.io/ecostruct/",
    },
    {
      name: "Voice Over Agency",
      description:
        " Modern landing page of a voice talent agency that allows clients to book voice-over services from a pool of talented artists.The website was developed using modern technologies like Tailwind CSS and Style Components, resulting in a dynamic and visually appealing design.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "styled components",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/lea-chefson/voice-over-agency-project",
      source_code_link2: "https://voice-over-project.netlify.app/",
    },
    {
      name: "Tech Start-up Website",
      description:
        " Website remodeling for a tech start-up delivering a modern and streamlined platform for customers to engage with client's products and services. With intuitive navigation and seamless integration, the website provides a convenient and efficient solution for all technology needs..",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "strapi",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/lea-chefson/tech-startup-project",
      source_code_link2: "https://lea-chefson.github.io/tech-startup-project/",
    },
    /*{
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },*/
  ];
  
  export { services, technologies, experiences, testimonials, projects };