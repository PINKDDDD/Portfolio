import { faHtml5, faCss3Alt, faJs, faReact,faPython,faGitAlt,faJava } from '@fortawesome/free-brands-svg-icons';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import fastapi from '../images/fastapi.png';
import data from '../images/data.png';
import js from '../images/js.png';
import web from '../images/logo_p.jpg';
export const personalInfo = {
    name:'Zihui Yuan',
    introduction:"I am currently a grad student at Washington University in St. Louis",
    bachelor_degree :'The University of California, Irvine: Bachelor of Science in Informatics',
    master_degree:'Washington University in St. Louis: Master of Science in Information System Management.',
    email:'alfredyuan0317@gmail.com',
    phone:'9493728477',
    linkedIn: 'https://www.linkedin.com/in/zihui-yuan/',
    github:'https://github.com/PINKDDDD',
  }

export const frontEndSkills = [
    {
      key:'HTML',
      name:'HTML',
      icon:faHtml5,
      alt:'HTML',
    },
    {
      key:'CSS',
      name:'CSS',
      icon:faCss3Alt,
      alt:'CSS',
    },
    {
      key:'JavaScript',
      name:'JavaScript',
      icon:faJs,
      alt:'JavaScript',
    },
    {
      key:'React',
      name:'React',
      icon:faReact,
      alt:'React',
    }
  ]


export const othersSkills = [
    {
      key:'Python',
      name:'Python',
      icon:faPython,
      alt:'Python',
    },
    {
      key:'FastAPI',
      name:'FastAPI',
      icon:faBolt,
      alt:'FastAPI',
    },
    {
      key:'Git',
      name:'Git',
      icon:faGitAlt,
      alt:'Git',
    },
    {
      key:'Java',
      name:'Java',
      icon:faJava,
      alt:'Java',
    }
  ]

export const information =   [
    {
        key:1,
        title:'The University of California, Irvine',
        desc:'Bachelor of Science in Informatics',
        time:'',
    },
    {
        key:2,
        title:'Lab Assistant',
        desc:"• Proof of Concept: Collaborated with senior partners to advance crawler function development in different static websites by adding different languages via Python, which improved working efficiency by 20%.• Function Expansion and Optimization: Implemented the new function development of the Arabic language crawler and optimized the word segmentation results via NLTK natural language processing.",
        time:'12/2020',
    },
    {
        key:3,
        title:'Data Internship --ablibaba',
        desc:'• User and Market Analysis: Analyzed the needs of the hardware of the desktop for target customers. Research the customers, needs with some interview questions.  • Design: Designed the online pc component store blueprint and completed related prototypes timely which included product searching, ranking, and key indicator comparison to facilitate customer decisions via Figma.• Product Design Development: Used Figma to draw 3d simulation scenarios based on customer installation conditions to offer a direct display for customers effectively.',
        time:'3/2021',
    },
    {
        key:4,
        title:'Washington University in St. Louis',
        desc:'Master of Science in Information System Management',
        time:'',
    },
]

export const frontEndProjects = [
    {
        key:1,
        title:'Java vacation List',
        media:js,
        desc:'1. Utilized Figma for design, achieving a 40% faster development cycle and a visually cohesive user interface. 2.Enhanced user interaction and efficiency by developing a vanilla JavaScript-based CRUD web page, which streamlined the task management process, resulting in a 25% increase in user task completion. ',
        link:'https://github.com/PINKDDDD/js-crud.git',
    },
    {
        key:2,
        title:'Portfolio React',
        media:web,
        desc:'1. Revolutionized web presence by developing a dynamic, responsive portfolio website using HTML, CSS, and React, leading to a 30% surge in user engagement through enhanced features like adaptable light/dark mode and captivating CSS animations. 2.Expedited content updates by 40%, leveraging React for efficiency. 3. Used Heroku and GitHub to deploy the web.',
        link:'https://github.com/PINKDDDD/Portfolio.git',
    },

]

export const otherProjects = [
    {
        key:1,
        title:'FastAPI CRUD',
        media:fastapi,
        desc:'1. Developed a robust CRUD API with user authentication using Python and FastAPI, resulting in streamlined data management. 4. Implemented a PostgreSQL SQL database, managed via ORM SQLAlchemy, enhancing database efficiency. 3. The deployment on a Linux server and integration of CI/CD pipelines through GitHub significantly improved operational reliability.',
        link:'https://github.com/PINKDDDD/fastapi-project.git',
    },
    {
        key:2,
        title:'Data Cleaning',
        media:data,
        desc:' Use Python and the isolation forest model to find outliers. Replace the outlier with the None value, then use a neural network to get the predicted value and replace the None value by using Keras, TensorFlow, and Python. And the average MSE that a lower value means higher accuracy for all outliers is around 0.25.',
        link:'https://github.com/PINKDDDD/data_cleaning.git',
    },
    
]
