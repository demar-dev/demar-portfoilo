import { FaAward } from "react-icons/fa6";
import { GoProjectSymlink } from "react-icons/go";

// End of aboutCards imports

import { MdOutlineEmail } from "react-icons/md";

// End of contactOption imports

import { FaGithub } from "react-icons/fa";

// End of Socials imports

import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { BsBriefcase } from "react-icons/bs";
import { LiaToolsSolid } from "react-icons/lia";
import { BiMessageDetail } from "react-icons/bi";

// End of navLink imports

import {
    hst,
    eLearning,
    realestate,
    edutech,
} from "./assets/images";

// End of portfolio imports

// End of imports

export const aboutCards = [
    {
        id: 1,
        logo: <FaAward />,
        heading: "Experience",
        description: "8 years",
    },
    {
        id: 2,
        logo: <GoProjectSymlink />,
        heading: "Projects",
        description: "30+",
    },
]

// End of About

export const contactOption = [
    {
        id: 1,
        logo: <MdOutlineEmail />,
        option: "Email",
        info: "demar.cassius@gmail.com",
        address: "mailto:demar.cassius@gmail.com",
    },
]

// End of Contact

export const frontEnd = [
    {
        id: 1,
        language: "ReactJS",
        status: "Experienced",
    },
    {
        id: 2,
        language: "NextJS",
        status: "Experienced",
    },
    {
        id: 3,
        language: "Angular",
        status: "Experienced",
    },
    {
        id: 4,
        language: "TypeScript",
        status: "Experienced",
    },
    {
        id: 4,
        language: "JavaScript",
        status: "Experienced",
    },
    {
        id: 5,
        language: "Material UI",
        status: "Experienced",
    },
    {
        id: 6,
        language: "Bootstrap",
        status: "Experienced",
    },
    {
        id: 7,
        language: "Tailwind CSS",
        status: "Experienced",
    },
    {
        id: 8,
        language: "Daisy UI",
        status: "Experienced",
    },
    {
        id: 9,
        language: "Styled-Component",
        status: "Experienced",
    },
    {
        id: 10,
        language: "Storybook",
        status: "Experienced",
    },
    {
        id: 11,
        language: "Redux/NGXS/RxJS/NgRx",
        status: "Experienced",
    },
]

export const backEnd = [
    {
        id: 1,
        language: "Node.Js",
        status: "Experienced",
    },
    {
        id: 2,
        language: "Express.js",
        status: "Experienced",
    },
    {
        id: 3,
        language: "Koa",
        status: "Experienced",
    },
    {
        id: 4,
        language: "GraphQL",
        status: "Experienced",
    },
    {
        id: 5,
        language: "RESTful APIs",
        status: "Experienced",
    },
    {
        id: 6,
        language: "Socket.io",
        status: "Experienced",
    },
    {
        id: 7,
        language: "MongoDB",
        status: "Experienced",
    },
    {
        id: 8,
        language: "SQL",
        status: "Experienced",
    },
    {
        id: 9,
        language: "Swagger",
        status: "Experienced",
    },
    {
        id: 10,
        language: "C#",
        status: "Intermediate",
    },

]

export const tools = [
    {
        id: 1,
        language: "Git",
        status: "Experienced",
    },
    {
        id: 2,
        language: "GitHub",
        status: "Experienced",
    },
    {
        id: 3,
        language: "Bitbucket",
        status: "Experienced",
    },
    {
        id: 4,
        language: "Azure DevOps",
        status: "Experienced",
    },
    {
        id: 5,
        language: "Figma",
        status: "Experienced",
    },
    {
        id: 6,
        language: "Vercel",
        status: "Experienced",
    },
    {
        id: 7,
        language: "AWS",
        status: "Experienced",
    },
    {
        id: 8,
        language: "CI/CD Pipelines",
        status: "Experienced",
    },
    {
        id: 9,
        language: "TeamCity",
        status: "Experienced",
    },
    {
        id: 10,
        language: "VSTS",
        status: "Experienced",
    },
    {
        id: 11,
        language: "Octopus",
        status: "Experienced",
    },
    {
        id: 12,
        language: "Miro",
        status: "Experienced",
    },
    {
        id: 13,
        language: "Agile Methodologies",
        status: "Experienced",
    },
    {
        id: 14,
        language: "TDD/BDD",
        status: "Experienced",
    },
]

export const other = [
    {
        id: 1,
        language: "Prompt Engineering",
        status: "Experienced",
    },
    {
        id: 2,
        language: "Karma/Jasmine",
        status: "Experienced",
    },
    {
        id: 3,
        language: "Jest",
        status: "Experienced",
    },
    {
        id: 4,
        language: "Chai/Mocha",
        status: "Experienced",
    },
    {
        id: 5,
        language: "Cypress",
        status: "Experienced",
    },
    {
        id: 6,
        language: "Webpack",
        status: "Experienced",
    },
    {
        id: 7,
        language: " Babel",
        status: "Experienced",
    },
    {
        id: 8,
        language: " ESLint/Prettier/Husky",
        status: "Experienced",
    },
]

// End of Experience

export const footerLink = [
    {
        id: 1,
        section: "Home",
    },
    {
        id: 2,
        section: "About",
    },
    {
        id: 3,
        section: "Experience",
    },
    {
        id: 4,
        section: "Portfolio",
    },
    {
        id: 5,
        section: "Contact",
    },
]

// End of Footer

export const Socials = [
    {
        id: 1,
        link: "https://github.com",
        icon: <FaGithub />,
    },
]

// End of Socials

export const navLink = [
    {
        id: 1,
        icon: <IoHomeOutline />,
        section: "home",
        tooltip: "Home",
    },
    {
        id: 2,
        icon: <FaRegUser />,
        section: "about",
        tooltip: "about",
    },
    {
        id: 3,
        icon: <BsBriefcase />,
        section: "experience",
        tooltip: "experience",
    },
    {
        id: 4,
        icon: <LiaToolsSolid />,
        section: "portfolio",
        tooltip: "portfolio",
    },
    {
        id: 5,
        icon: <BiMessageDetail />,
        section: "contact",
        tooltip: "contact",
    },
]

// End of NavLink

export const data = [
    {
        id: 1,
        image: hst,
        title: "Healthcare Management Application",
        desc: "Developed a scalable healthcare management application to streamline operations for providers and patients. The platform offers tools for appointment scheduling, patient record management, inventory tracking, financial oversight, and treatment planning, with dedicated modules for IPD, OPD, and EPD care.",
        technologies: ["Angular", "NodeJs", "RxJS", "D3.JS", "Karma", "Jasmine", "AWS"],
        github: "https://github.com/",
    },
    {
        id: 2,
        image: edutech,
        title: "FinTech SaaS Platform",
        desc: "Engineered a FinTech SaaS platform (A fast-growing SaaS startup in the financial services.) for investment portfolio management, serving 50,000+ users with real-time market insights, analytics, and financial data visualization tools.",
        technologies: ["React", "Angular", "NodeJs","ExpressJs", "RxJS", "D3.JS", "Jest", "AWS", "Docker", "RESTful APIs", "MongoDB"],
        github: "https://github.com/",
    },
    {
        id: 3,
        image: realestate,
        title: "Real Estate Management System",
        desc: "Developed a comprehensive Real Estate Management System using React and Node.js, handling property listings, client management, and financial tracking for realtors.",
        technologies: ["ReactJS", "NextJS", "NodeJs","ExpressJs", "Tailwind CSS", "D3.JS", "Jest", "Stripe","RESTful APIs", "MongoDB", "Passport.js"],
        github: "https://github.com/",
    },
    {
        id: 4,
        image: eLearning,
        title: "E-Learning Platform",
        desc: "Led the development of an E-Learning Platform for over 200,000 students and educators, built with React, Next.js, and Node.js to ensure fast, scalable performance. Integrated a custom-built content management system (CMS), allowing educators to upload and organize course materials efficiently.",
        technologies: ["ReactJS", "NextJS", "NodeJs","ExpressJs", "Tailwind CSS", "Jest", "Cypress", "Socket.io","RESTful APIs", "GraphQL", "MongoDB"],
        github: "https://github.com/",
    },
];

// End of Portfolio

export const design = [
    {
        id: 1,
        description: "Create user-centered designs that focus on clear, intuitive interactions.",
    },
    {
        id: 2,
        description: "Use basic editing skills to enhance design presentations.",
    },
    {
        id: 3,
        description: "Experiment with color schemes, typography, and layouts to align with brand identity.",
    },
];

export const webDev = [
    {
        id: 1,
        description: " Build responsive and interactive pages using HTML, CSS, and JavaScript with advanced proficiency.",
    },
    {
        id: 2,
        description: "Utilize React at an intermediate level to create reusable, dynamic UI components.",
    },
    {
        id: 3,
        description: "Implement responsive design techniques for optimal viewing on all device types.",
    },
    {
        id: 4,
        description: "Apply version control practices with Git to track and manage project changes.",
    },
    {
        id: 5,
        description: "Use foundational Python and C skills to support logic development and simple automation tasks.",
    },
];

export const contentCreation = [
    {
        id: 1,
        description: "Design mockups and prototypes to showcase ideas and enhance communication with stakeholders.",
    },
    {
        id: 2,
        description: "Produce visually appealing image-based content for various digital platforms.",
    },
    {
        id: 3,
        description: "Create simple video content to support marketing or instructional objectives.",
    },
    {
        id: 4,
        description: "Bring a creative approach to each project, crafting content that resonates with target audiences.",
    },
];

// End of Services