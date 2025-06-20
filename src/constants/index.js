import { address } from "framer-motion/client";
import project1 from "../assets/projects/Project-1.png";
import project2 from "../assets/projects/Project-2.png";
import project3 from "../assets/projects/Project-3.png";
import project4 from "../assets/projects/Project-4.png";

export const HERO_CONTENT = `I’m a Full Stack Developer with hands-on experience in building responsive and scalable web applications using React, Node.js, Express.js, MongoDB, and TailwindCSS. With strong problem-solving skills and a foundation in both frontend and backend development, I focus on crafting user-centric solutions that drive engagement and growth.`;

export const ABOUT_TEXT = `Hi, I'm Vijay Nand Dhyani, a passionate and detail-oriented Full-Stack Developer from Uttarakhand, India. I specialize in building responsive and interactive web applications using modern technologies like ReactJS, Node.js, MongoDB, and MySQL. With a strong academic background and hands-on project experience, I enjoy turning complex problems into clean, scalable solutions.

I’ve completed my MCA from Integral University and hold multiple degrees in computer science, which have strengthened my understanding of software development. During my internship at Techjochey Infotech Pvt. Ltd., I honed my skills in product management and web operations.

When I'm not coding, you’ll find me playing cricket, exploring new places, or listening to music. I'm actively seeking opportunities to contribute to dynamic teams and grow as a developer.`;

export const INTERNSHIP = [
  {
    year: "Apr 2024 - Oct 2024",
    role: "Product Catalogue Intern",
    company: "TechJockey Pvt Ltd",
    description: ` During my internship as a Product Catalogue Intern at Techjochey Infotech Pvt. Ltd. (April 2024 – October 2024), I was responsible for managing and organizing detailed product information for digital platforms. My role involved preparing accurate product descriptions, specifications, and images to ensure consistency and clarity across listings. I also updated existing entries to reflect changes in inventory, pricing, and promotional campaigns. This experience enhanced my attention to detail and gave me hands-on exposure to working in a fast-paced, content-driven environment, improving my ability to collaborate with teams and manage structured data effectively.`,
    technologies: ["PhotoShop", "Canva", "MS Excel", "Product Analysis"],
  },
];

export const PROJECTS = [
 
  {
    title: "Instagram Clone",
    image: project1,
    description: ` A fully responsive Instagram-like social media platform where users can sign up, upload photos, like, and comment on posts. Features real-time feed updates and user profile pages. State management is handled using React Context API, and routing is implemented via React Router for a seamless user experience.`,
    link: "",
    technologies: ["React.js", "TailwindCSS", "MongoDB", "Express", "Node.js", "Context API"],
  },
  {
    title: "Personal Portfolio",
    image: project2,
    description: ` A single-page personal portfolio built using ReactJS to showcase my skills, education, and projects. Designed with responsiveness in mind to deliver a clean experience across all devices. Includes links to my GitHub, LinkedIn, and resume.`,
    link: "",
    technologies: ["React.js", "TailwindCSS", "JavaScript", "HTML5", "CSS"],
  },
  {
    title: "LeetCode Tracker",
    image: project3,
    description: ` A minimalist web app to track LeetCode problem-solving progress. Users can manually input and monitor their coding journey. The app features a clean UI with color-coded problem tags and basic analytics to visualize improvement over time.`,
    link: "https://leet-code-tracker-one.vercel.app/",
    technologies: ["HTML5", "CSS", "JavaScript"],
  },
];

export const CONTACT = {
  title: "Contact",
  subtitle: "Feel free to reach out to me for any questions or opportunities!",
  address: "New Delhi",
  phoneNo: "+91 7505377116",
  email: "vijayndhyai.dev@gmail.com"
};
