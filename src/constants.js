// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import tataSteelLogo from './assets/company_logo/tataSteelLogo.png';
import kunaliTechnologyLogo from './assets/company_logo/kunaliTechnologyLogo.png';

// Education Section Logo's
import akpLogo from './assets/education_logo/al-kabir_logo.jpg';
import bhsLogo from './assets/education_logo/bhs_logo.jpg';
import rgpvLogo from './assets/education_logo/rgpv_logo.png';
import sdsmLogo from './assets/education_logo/sdsm_logo.png';

// Project Section Logo's
import busTracking from './assets/work_logo/busTracking.jpg';
import todolist from './assets/work_logo/todolist.jpg';
import twitter from './assets/work_logo/twitter.png';
import calculator from './assets/work_logo/calculator.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: tataSteelLogo,
      role: "Fullstack Developer Intern",
      company: "Tata Steel",
      date: "September 2025 - October 2025",
      desc: "During my internship, I developed a full stack Bus Tracking System using Node.js, Express, MongoDB, and EJS. The project included secure authentication, real time bus location tracking with Google Maps API, user dashboards, and profile management. I also focused on deployment, security best practices, and scalable project architecture.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Node.JS",
        "MongoDb",
        "Next Js",
      ],
    },
    {
      id: 1,
      img: kunaliTechnologyLogo,
      role: "Frontend Intern",
      company: "Kunal i Technology",
      date: "June 2022 - January 2023",
      desc: "Completed a Frontend Development internship at Kunal i Technology in 2022, gaining hands on experience with HTML, CSS, JavaScript, and Bootstrap. Worked on building responsive user interfaces, improving web layouts, and understanding real world development workflows with practical project-based learning.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: rgpvLogo,
      school: "Rajiv Gandhi Proudyogiki Vishwavidyalaya",
      date: "September 2023 - July 2026",
      grade: "7.85 CGPA",
      desc: "I have completed my B.Tech in Computer Science and Engineering from Kailash Narayan Patidar College of Science and Technology, Bhopal, affiliated with Rajiv Gandhi Proudyogiki Vishwavidyalaya. Alongside my diploma background, the program strengthened my understanding of software development, data structures, algorithms, and web technologies, while enhancing my analytical thinking, problem solving abilities, and practical exposure through academic projects.",
      degree: "Bachelor of Technology - B.Tech",
    },
    {
      id: 1,
      img: akpLogo,
      school: "AL-Kabir Polytechnic, Jamshedpur",
      date: "November 2020 - June 2023",
      grade: "70.25%",
      desc: "I have completed my Diploma in Computer Science and Engineering from AK-Kabir Polytechnic, Jamshedpur. During my studies, I gained strong foundational knowledge in programming, data structures, web development, and software fundamentals. The program helped me develop problem solving skills, logical thinking, and hands on experience through practical labs and academic projects, preparing me for real world technical challenges.",
      degree: "Diploma in Computer Science and Engineering",
    },
    {
      id: 2,
      img: sdsmLogo,
      school: "S.D.S.M School For Excellence, Jamshedpur",
      date: "April 2019 - July 2020",
      grade: "70%",
      desc: "I completed my class 12 education from S.D.S.M School For Excellence, Jamshedpur, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 3,
      img: bhsLogo,
      school: "Baridih High School, Jamshedpur",
      date: "April 2017 - June 2018",
      grade: "77.2%",
      desc: "I completed my class 10 education from Baridih High School, Jamshedpur, under the JAC (Jharkhand Academic Council) board, where I studied Science with Computer.",
      degree: "JAC(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Bus Tracking Application",
      description:
        "Bus Tracking System is a web app that lets employees sign up, log in, view their profile, and track company buses in real time using Google Maps. Built with Node.js, Express, MongoDB, and EJS, it offers a secure, responsive, and user friendly platform for efficient employee transportation management.",
      image: busTracking,
      tags: ["Node.Js", "Express", "EJS", "API", "MongoDB"],
      github: "https://github.com/satyam1436/Bus-Tracking.git",
      webapp: "https://bus-tracking-6y1h.onrender.com",
    },
    {
      id: 1,
      title: "To-Do-List",
      description:
        "A simple To-Do-List web app built with HTML, CSS, and JavaScript. It allows users to add, edit, and delete tasks dynamically. This project is perfect for beginners to practice DOM manipulation and event handling in JavaScript.",
      image: todolist,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/satyam1436/To-Do-List.git",
      webapp: "https://satyam1436.github.io/To-Do-List/",
    },
    {
      id: 2,
      title: "Twitter User Home Page Clone",
      description:
        "This project is a clone of the Twitter user homepage, created using HTML and Tailwind CSS. It replicates the look and feel of a Twitter profile page with a responsive layout, profile section, navigation bar, and tweets feed. Built as a front-end practice project to sharpen UI development skills.",
      image: twitter,
      tags: ["HTML", "Tailwind CSS",],
      github: "https://github.com/satyam1436/Twitter-User-Home-Page-Clone.git",
      webapp: "https://satyam1436.github.io/Twitter-User-Home-Page-Clone/",
    },
    {
      id: 3,
      title: "Calculator",
      description:
        "A simple & responsive Calculator Web App built with HTML, CSS, and JavaScript. Perfect beginner project to learn frontend development.",
      image: calculator,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/satyam1436/Calculator.git",
      webapp: "https://satyam1436.github.io/Calculator/",
    },
  ];  
