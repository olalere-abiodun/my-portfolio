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
    name: "WORDPRESS",
    icon: ICONS.wordpress,
    classname: "wordpress",
    description:
      "Designing and customizing WordPress themes and plugins to deliver user-friendly, content-managed websites.",
  },
  {
    id: 5,
    name: "API DEVELOPMENT",
    icon: ICONS.api,
    classname: "api",
    description:
      "Creating and integrating robust, secure APIs for seamless data exchange between front-end and back-end systems.",
  },
  {
    id: 6,
    name: "DIGITAL MARKETING",
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
    icon: ICONS.webDesign,
    title: "UI/UX",
    description:
      "Designing intuitive, user-centered interfaces that deliver seamless and engaging experiences. I focus on usability, accessibility, and aesthetic appeal to ensure products not only look great but also function flawlessly.",
  },
  {
    id: 2,
    icon: ICONS.code,
    title: "WEB DEVELOPMENT",
    description:
      "I build responsive, user-focused websites that are fast, secure, and scalable. From landing pages to complex apps, I use modern technologies and clean code to help you achieve your business goals.",
  },
  {
    id: 3,
    icon: ICONS.wp,
    title: "WORDPRESS",
    description:
      "I create and customize WordPress websites that are easy to manage, visually appealing, and optimized for performance. From theme development to plugin integration, I deliver flexible solutions tailored to your needs.",
  },
  {
    id: 4,
    icon: ICONS.commercial,
    title: "DIGITAL MARKETING",
    description:
      "I help businesses grow online through targeted digital strategies, including SEO, social media marketing, and content campaigns that drive traffic and boost engagement.",
  },
  {
    id: 5,
    icon: ICONS.positiveDynamic,
    title: "API DEVELOPMENT",
    description:
      "I optimize websites to rank higher on search engines, improving visibility, driving organic traffic, and helping you reach your target audience effectively.",
  },
  {
    id: 6,
    icon: ICONS.training,
    title: "TRAINING",
    description:
      "I provide hands-on training in web development and digital skills, empowering individuals and teams with practical knowledge to build, manage, and grow their online presence.",
  },
];

export default skillsdata;
export { servicedata };
