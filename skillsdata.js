// Declare icons as variables
const ICONS = {
  html: "./assets/icons/html.svg",
  css: "./assets/icons/css.svg",
  bootstrap: "./assets/icons/bootstrap.svg",
  tailwind: "./assets/icons/tailwind.svg",
  js: "./assets/icons/js.svg",
  react: "./assets/icons/react.svg",
  wordpress: "./assets/icons/wordpress12.svg",
  api: "./assets/icons/API.svg",
  seo: "./assets/icons/seo.svg",
  php: "./assets/icons/phpicon.svg",
  postgre: "./assets/icons/postgre.svg",
  python: "./assets/icons/python.svg",
  fastapi: "./assets/icons/fastapi.svg",
  figma: "./assets/icons/figma.svg",



  // Service icons
  webDesign: "./assets/icons/WebDesign.svg",
  code: "./assets/icons/Code.svg",
  wp: "./assets/icons/WordPress345.svg",
  commercial: "./assets/icons/Commercial123.svg",
  positiveDynamic: "./assets/icons/Positivedynamic.svg",
  training: "./assets/icons/Training1.svg",
};

// Skills data
const skillsdata = [
  {
    id: 1,
    name: "HTML5 & CSS3",
    icon: ICONS.html,
    icon2: ICONS.css,
    classname: "html",
    description:
      "Building consistent and scalable user interfaces quickly with powerful utility classes and component-based frameworks.",
  },
  {
    id: 2,
    name: "BOOTSTRAP & TAILWIND",
    icon: ICONS.bootstrap,
    icon2: ICONS.tailwind,
    classname: "bootstrap",
    description:
      "Building consistent and scalable user interfaces quickly with powerful utility classes and component-based frameworks.",
  },
  {
    id: 3,
    name: "JAVASCRIPT & REACT",
    icon: ICONS.js,
    icon2: ICONS.react,
    classname: "javascript",
    description:
      "Adding interactivity, functionality, and seamless user experiences through dynamic, client-side scripting.",
  },
  {
    id: 4,
    name: "FIGMA",
    icon: ICONS.figma,
    classname:"figma",
    description: "Designing intuitive and responsive user interfaces, creating prototypes, and collaborating effectively on design projects with Figma’s powerful tools.",
  },
  {
    id: 5,
    name: "WORDPRESS",
    icon: ICONS.wordpress,
    classname: "wordpress",
    description:
      "Designing and customizing WordPress themes and plugins to deliver user-friendly, content-managed websites.",
  },
  {
    id: 6,
    name: "API DEVELOPMENT",
    icon: ICONS.api,
    classname: "api",
    description:
      "Creating and integrating robust, secure APIs for seamless data exchange between front-end and back-end systems.",
  },
  {
    id: 7,
    name: "SEO",
    icon: ICONS.seo,
    classname: "digital",
    description:
      "Driving online growth through SEO, social media strategies, and targeted digital campaigns.",
  },
];

// Services data
const servicedata = [
  {
    id: 1,
        icon: ICONS.code,
    title: "WEB DEVELOPMENT",
    description:
      "I build responsive, user-focused websites that are fast, secure, and scalable. From landing pages to complex apps, I use modern technologies and clean code to help you achieve your business goals.",

},
  {
    id: 2,
        icon: ICONS.positiveDynamic,
    title: "API DEVELOPMENT",
    description:
      "I optimize websites to rank higher on search engines, improving visibility, driving organic traffic, and helping you reach your target audience effectively.",

  },
  {
    id: 3,
    icon: ICONS.webDesign,
    title: "UI/UX",
    description:
      "Designing intuitive, user-centered interfaces that deliver seamless and engaging experiences. I focus on usability, accessibility, and aesthetic appeal to ensure products not only look great but also function flawlessly.",
  

},
  {
    id: 4,

        icon: ICONS.wp,
    title: "WORDPRESS",
    description:
      "I create and customize WordPress websites that are easy to manage, visually appealing, and optimized for performance. From theme development to plugin integration, I deliver flexible solutions tailored to your needs.",
  },
  {
    id: 5,
        icon: ICONS.commercial,
    title: "SEO",
    description:
      "I help businesses grow online through targeted digital strategies, including SEO, social media marketing, and content campaigns that drive traffic and boost engagement.",
  
  },
  {
    id: 6,
    icon: ICONS.training,
    title: "TRAINING",
    description:
      "I provide hands-on training in web development and digital skills, empowering individuals and teams with practical knowledge to build, manage, and grow their online presence.",
  },
];

const webdev = [
{
  id: 1,
  image: "./assets/images/project1.png",
  url: "https://kitabservices.com/",
  icon: ICONS.html,
  icon2: ICONS.css,
  icon3: ICONS.js,
  projectname: "K-I.T.A.B Services",
  description: " A responsive business website developed for KITAB Services, designed using HTML CSS. The project showcases the company’s consulting, advertising, and property services with a clean, professional design."
},
{
    id: 2,
  image: "./assets/images/project2.png",
  url: "https://flushmaster.vercel.app/",
  icon: ICONS.react,
  icon2: ICONS.bootstrap,
  projectname: "FlushMaster",
  description: "A responsive plumbing services website developed for FlushMaster, showcasing the organization’s range of plumbing solutions, service details, and contact information. Built with React and Bootstrap, the site provides a modern interface that ensures easy navigation and accessibility for clients."
},
{
  id: 3,
  image: "./assets/images/project3.png",
  url: "https://kayroute-olalere-sherifdeen-abioduns-projects.vercel.app/",
  icon: ICONS.html,
  icon2: ICONS.css,
  icon3: ICONS.js,
  projectname: "KAYROUTE LOGISTICS",
  description: "A responsive logistics website developed for Kayroute Logistics, built with HTML, CSS, and JavaScript. The platform highlights the company’s delivery and transportation services, making it easy for customers to access information, track services, and connect with the business"

}
]
const api = [ {
  id: 1,
  image: "./assets/images/api.jpg",
  url: "https://github.com/olalere-abiodun/doctorappointmentAPI",
  icon: ICONS.fastapi,
  icon2: ICONS.postgre,
  projectname: "HOSPITAL MANAGEMENT API",
  description:"An API build to manage hospital records and doctor's appointment management",
},
{
  id: 2,
  image: "./assets/images/api.jpg",
  url: "https://github.com/olalere-abiodun/assignmentSubmission",
  icon: ICONS.fastapi,
  icon2: ICONS.postgre,
  projectname: "ASSIGNMENT SUBMISSION API",
  description:"An API developed to manage students assignemt submission",
},
{
  id: 3,
  image: "./assets/images/api.jpg",
  url: "https://github.com/olalere-abiodun/Swift-Send",
  icon: ICONS.fastapi,
  icon2: ICONS.postgre,
  projectname: "SWIFT SEND API",
  description:"A Delivery application designed to make sending and receiving packages simple, fast, and reliable. ",
},
{
  id: 4,
  image: "./assets/images/api.jpg",
  url:"https://github.com/olalere-abiodun/Currency_converter",
  icon: ICONS.fastapi,
  icon2: ICONS.postgre,
  projectname: "cURRENCY CONVERTER API",
  description:"A simple and efficient Currency Converter API built with FastAPI. It allows users to convert between different currencies in real time, with alert functionality to notify users when their target exchange rate is reached. ",
},
{
  id: 5,
  image: "./assets/images/api.jpg",
  url: "https://github.com/olalere-abiodun/Crowdsourced-crime-alert",
  icon: ICONS.fastapi,
  icon2: ICONS.postgre,
  projectname: "CROWD SOURCE CRIME ALERT",
  description: "A location-based crime alert system built with FastAPI and PostgreSQL. The platform leverages crowdsourced reports to notify users about nearby incidents in real time, promoting community safety and quick response through reliable data sharing."
},

]
const ux = [
  {
    id: 1,
    image: "./assets/images/filecover.png",
    url: "https://www.figma.com/proto/MJ8nd3Bjc5YCDhogABSv1H/Task-Flow?node-id=253-47&t=eLPxPjbg63Mp3ROI-1",
    icon: ICONS.html,
    projectname: "AbbyTech Joke",
    description: "Just A Placeholder"
  

  }
]

export default skillsdata;
export { servicedata, webdev, api, ux };
