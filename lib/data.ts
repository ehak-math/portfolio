import { image } from "framer-motion/client";

// Site configuration and data
export const siteConfig = {
  name: "Ehak Math",
  role: "Full Stack Developer",
  tagline: "Building digital experiences that matter",
  description: "I am a Full Stack Developer specializing in creating modern, responsive web applications with a focus on performance and user experience.",
  email: "ehakmath@gmail.com",
  location: "Phnom Penh, Cambodia",
  // Profile image - place your image in /public/images/ folder
  profileImage: "/images/profile.jpg",
  // Open Graph image for social sharing (recommended: 1200x630px)
  ogImage: "/images/og-image.jpg",
  // Website URL (for SEO and social sharing)
  siteUrl: "https://portfolio.ehakmath.codes/",
  social: {
    github: "https://github.com/ehak-math",
    linkedin: "https://www.linkedin.com/in/ehak-math-1a5b4a2b4/",
    twitter: "https://twitter.com/mathehak",
    telegram: "https://t.me/ehak_math"
  },
  resumeUrl: "https://drive.google.com/file/d/1aejap38y4WDvxWVXX1ntNHuNYYm2TwpU/view?usp=sharing",
};

export const skills = {
  frontend: [
    { name: "React", level: 80 },
    { name: "Next.js", level: 88 },
    { name: "Vue.js", level: 70 },
    { name: "Nuxt.js", level: 80 },
    { name: "Flutter", level: 85 },
    { name: "Tailwind CSS", level: 90 },
  ],
  backend: [
    { name: "Node.js", level: 85 },
    { name: "Express", level: 82 },
    { name: "MySQL", level: 80 },
    { name: "MongoDB", level: 78 },
    { name: "Firebase", level: 75 },
    { name: "Laravel", level: 75 },
  ],
  tools: [
    { name: "Git", level: 88 },
    { name: "Docker", level: 70 },
    { name: "Figma", level: 75 },
    { name: "Vercel", level: 85 },
    { name: "VS Code", level: 90 },
  ],
};

export const experience = [
  {
    id: 1,
    role: "Mobile App Developer",
    company: "Baksey Mobile Phone Accessories",
    location: "Phnom Penh, Cambodia",
    period: "Jan 2026 - Present",
    description: "Developing and maintaining the company's mobile application for both iOS and Android platforms. Collaborating with cross-functional teams to design user-friendly interfaces and implement new features based on customer feedback.",
    technologies: ["Flutter", "Bloc", "Dart", "Firebase", "REST API", "Git", "Figma", "GitLab"],
  },
  {
    id: 2,
    role: "Full Stack Developer - Internship",
    company: "IDRI - Institute of Digital Research & Innovation",
    location: "Phnom Penh, Cambodia",
    period: "May 2025 - Jul 2025",
    description: "Developed multiple web projects including portfolio websites, landing pages, and web applications. Focused on creating clean, user-friendly interfaces with modern design principles.",
    technologies: ["React", "Laravel", "MySQL", "Tailwind CSS", "Git", "GitHub"],
  },
];

export const education = [
  {
    id: 1,
    degree: "Bachelor's Degree in Information Technology",
    school: "Cambodia Academy of Digital Technology",
    location: "Phnom Penh, Cambodia",
    period: "2022 - 2026",
    description: "Studying Information Technology with focus on web development and software engineering. Active participant in coding competitions and tech community events.",
  },
];

export const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A modern, responsive personal portfolio website built with Next.js 14, featuring smooth animations with Framer Motion, dark/light mode, and contact form with email integration.",
    image: "/projects/portfolio.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/ehak-math/portfolio-next",
    demo: "https://portfolio.ehakmath.codes",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A full-stack task management application with user authentication, real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/projects/taskapp.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
    github: "https://github.com/ehak-math/task-app",
    demo: "https://task-app.ehakmath.codes",
    featured: true,
  },
  {
    id: 3,
    title: "E-Commerce Store",
    description: "A complete e-commerce solution with product catalog, shopping cart, user authentication, payment integration, and admin dashboard for inventory management.",
    image: "/projects/ecommerce.jpg",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Prisma", "Tailwind CSS"],
    github: "https://github.com/ehak-math/ecommerce",
    demo: "https://shop.ehakmath.codes",
    featured: true,
  },
  {
    id: 4,
    title: "Race Tracking App",
    description: "A web application that allows users to track real-time weather conditions for races, including temperature, humidity, wind speed, and precipitation.",
    image: "/projects/race-tracking.png",
    technologies: ["Flutter", "Dart", "Firebase", "GitHub", "Git"],
    github: "https://github.com/ehak-math/weather-app",
    demo: "https://weather.ehakmath.codes",
    featured: false,
  },
  {
    id: 5,
    title: "Blog Platform",
    description: "A full-featured blog platform with markdown support, categories, tags, search functionality, and an admin panel for content management.",
    image: "/projects/blog.jpg",
    technologies: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
    github: "https://github.com/ehak-math/blog",
    demo: "https://blog.ehakmath.codes",
    featured: false,
  },
  {
    id: 6,
    title: "Chat Application",
    description: "A real-time chat application with private messaging, group chats, file sharing, and online status indicators.",
    image: "/projects/chat.jpg",
    technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
    github: "https://github.com/ehak-math/chat-app",
    demo: "https://chat.ehakmath.codes",
    featured: false,
  },
];

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
];
