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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
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
    title: "Technical Program Manager",
    icon: web,
  },
  {
    title: "Fullstack Developer",
    icon: mobile,
  },
  {
    title: "UI/UX and Product Designer",
    icon: backend,
  },
  {
    title: "Growth and Community Builder",
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
    title: "Technical Program Manager Intern",
    company_name: "Microsoft | Gaming (Xbox) Discovery and Ads Experiences",
    //icon: tesla,
    iconBg: "#E6DEDD",
    date: "May 2025 - August 2025",
    points: [
      "Designed product architecture for Xbox ad features on Console and PC, balancing UX, business goals, and technical constraints.",
      "Authored feature specs and definitions in 12 weeks; communicated technical challenges and progress to stakeholders, advocating for millions of users worldwide.",
      "Presented strategy and results to employees, including senior executives, communicating technical strategy and results to technical and non-technical audiences.",
      "Led cross-functional initiatives with engineering, product, design, user research, legal, and data science teams across global offices; applied quantitative and AI-supported analysis to improve delivery quality.",
    ],
  },
  {
    title: "Mobile Developer Intern",
    company_name: "American Fidelity Assurance Company",
    //icon: shopify,
    iconBg: "#383E56",
    date: "Sep 2024 - April 2025",
    points: [
      "Developed and tested Android applications in Java/Kotlin/XML using MVVM, Jetpack Compose, Gradle, and Azure Devops.",
      "Spearheaded UI redesign projects to improve app usability and visual appeal, supporting 100,000+ users worldwide.",
    ],
  },
  {
    title: "IT Operations Intern",
    company_name: "American Fidelity Assurance Company",
    //icon: meta,
    iconBg: "#E6DEDD",
    date: "July 2024 - Sep 2024",
    points: [
      "Resolved weekly ServiceNow tickets for IT executives, managers, clients, and technical teams through programming, testing, process analysis, troubleshooting, and inventory management, reducing ticket resolution time.",
      "Analyzed IT operations data through ServiceNow to track trends, system performance, and hardware/software metrics, delivering actionable insights to stakeholders and informing quarterly reports, demonstrating strong teamwork, problem-solving, and communication skills.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "DeafandHOH.com, LLC",
    //icon: meta,
    iconBg: "#E6DEDD",
    date: "May 2024 - July 2024",
    points: [
      "Developed end-to-end UI/UX improvements, website usability, accessibility, and brand presentation for sponsors using HTML/JavaScript/CSS; Increased engagement through technical landing pages.",
    ],
  },
  {
    title: "STEAM Instructor",
    company_name: "iCode School Franchise",
    //icon: meta,
    iconBg: "#E6DEDD",
    date: "May 2024 - July 2024",
    points: [
      "Delivered hands-on STEM programs to K–12 students per session, covering Java, Python, Lua, 3D printing, and game design (Unity, Unreal Engine, Modding, Lua), ensuring curriculum completion.",
      "Designed performance tracking and lab project optimization, improving student completion rates",
      "Collaborated with senior instructors to plan and optimize 10+ lab projects, managing resources, timelines, and technical setup."
    ],
  },
  {
    title: "Data Science Researcher",
    company_name: "University of Central Oklahoma",
    //icon: meta,
    iconBg: "#E6DEDD",
    date: "May 2024 - July 2024",
    points: [
      "Processed 200+ instructional videos using C++ programs to process large datasets to generate actionable insights, organized data and analyzed results in Excel; presented findings to a 100+ attendees at the University of Central Oklahoma Tri-Center Symposium.",
    ],
  },
];

const testimonials = [
  // {
  //   testimonial:
  //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //   name: "Sara Lee",
  //   designation: "CFO",
  //   company: "Acme Co",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  // },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "Augury",
    description:
      "Augury is a streamlined web application designed to centralize task organization and scheduling in one accessible platform. Developed by a 4-person team, it leverages HTML/JavaScript/CSS, Bootstrap, Firebase, and MVC to deliver a secure, responsive, and user-friendly experience. The system enhances productivity with an intuitive interface for managing and tracking tasks, supported by robust planning and version control processes.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/monique7579/Augury",
  },
  // {
  //   name: "Job IT",
  //   description:
  //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "restapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: jobit,
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };