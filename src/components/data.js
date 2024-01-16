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
        desc:"1.Crawler Function Advancement: Collaborated with senior partners to advance crawler function development in different static websites by adding different languages via Python, which improved working efficiency by 20%. 2.Arabic Language Crawler Optimization: Spearheaded the development of a new Arabic language crawler and optimized word segmentation results via NLTK natural language processing. Contributed to function expansion and enhancement at the Institute of Software Chinese Academy of Sciences.",
        time:'12/2020',
    },
    {
        key:3,
        title:'Web Design --ablibaba',
        desc:'1.Strategic User-Centric Analysis:Accomplished in-depth research on desktop hardware needs, utilizing customer interviews to inform design strategies effectively. 2.Comprehensive Design Blueprint Execution: Developed an online PC component store blueprint, focusing on user-centric design with advanced Figma prototypes. 3.Innovative 3D Simulation for UI Enhancement: Crafted detailed 3D simulations using Figma, providing a unique visual experience and enhancing the user interface at Alibaba Group.',
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
        desc:'1.Project Preparation and Execution: Utilized Figma for design, achieving a 40% faster development cycle and a visually cohesive user interface. 2.Web Development:Enhanced user interaction and efficiency by developing a vanilla JavaScript-based CRUD web page, which streamlined task management process, resulting in a 25% increase in user task completion.',
        link:'https://github.com/PINKDDDD/js-crud.git',
    },
    {
        key:2,
        title:'Portfolio React',
        media:web,
        desc:'1.Frontend Development: Revolutionized web presence by developing a personalized, responsive portfolio website using HTML, CSS, and React, leading to a 30% surge in user engagement through enhanced features like adaptable light/dark mode and captivating CSS animations. 2.Data Handle:Expedited content updates by 40%, leveraging React for efficiency.',
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
