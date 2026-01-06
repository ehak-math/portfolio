// Site configuration and data
export const siteConfig = {
  name: "Ehak Math",
  role: "Full Stack Developer",
  tagline: "Building digital experiences that matter",
  description: "I craft modern web applications with clean code and thoughtful design. Passionate about creating performant, accessible, and user-friendly solutions.",
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
    linkedin: "https://linkedin.com/in/mathehak",
    twitter: "https://twitter.com/mathehak",
  },
  resumeUrl: "https://drive.google.com/file/d/1aejap38y4WDvxWVXX1ntNHuNYYm2TwpU/view?usp=sharing",
};

export const skills = {
  frontend: [
    { name: "React", level: 95 },
    { name: "Next.js", level: 90 },
    { name: "TypeScript", level: 88 },
    { name: "Tailwind CSS", level: 92 },
    { name: "Framer Motion", level: 85 },
  ],
  backend: [
    { name: "Node.js", level: 88 },
    { name: "Python", level: 82 },
    { name: "PostgreSQL", level: 85 },
    { name: "MongoDB", level: 80 },
    { name: "GraphQL", level: 78 },
  ],
  tools: [
    { name: "Git", level: 90 },
    { name: "Docker", level: 75 },
    { name: "AWS", level: 72 },
    { name: "Figma", level: 80 },
    { name: "CI/CD", level: 78 },
  ],
};

export const experience = [
  {
    id: 1,
    role: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description: "Leading frontend development for enterprise SaaS products. Architected and implemented a design system used across 5 products. Improved application performance by 40% through code optimization and lazy loading strategies.",
    technologies: ["React", "TypeScript", "Next.js", "GraphQL"],
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "StartupXYZ",
    location: "Remote",
    period: "2020 - 2022",
    description: "Built and maintained multiple full-stack applications from scratch. Developed RESTful APIs serving 100k+ daily requests. Implemented real-time features using WebSockets for collaborative tools.",
    technologies: ["Node.js", "React", "PostgreSQL", "Redis"],
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "Digital Agency Co.",
    location: "Los Angeles, CA",
    period: "2018 - 2020",
    description: "Developed responsive web applications for diverse clients. Collaborated with designers to implement pixel-perfect UIs. Introduced modern frontend tooling that reduced build times by 60%.",
    technologies: ["JavaScript", "Vue.js", "SCSS", "Webpack"],
  },
];

export const education = [
  {
    id: 1,
    degree: "Master of Science in Computer Science",
    school: "Stanford University",
    location: "Stanford, CA",
    period: "2016 - 2018",
    description: "Specialized in Human-Computer Interaction and Web Technologies. Thesis on optimizing web application performance.",
  },
  {
    id: 2,
    degree: "Bachelor of Science in Software Engineering",
    school: "UC Berkeley",
    location: "Berkeley, CA",
    period: "2012 - 2016",
    description: "Graduated with honors. Active member of the Web Development Club and Hackathon organizer.",
  },
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with real-time inventory management, secure payments via Stripe, and an admin dashboard. Built with performance and scalability in mind.",
    image: "/projects/ecommerce.jpg",
    technologies: ["Next.js", "TypeScript", "Prisma", "Stripe", "Tailwind CSS"],
    github: "https://github.com/alexchen/ecommerce",
    demo: "https://ecommerce-demo.vercel.app",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team workspace features. Includes Kanban boards and calendar views.",
    image: "/projects/taskapp.jpg",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Redux"],
    github: "https://github.com/alexchen/taskapp",
    demo: "https://taskapp-demo.vercel.app",
    featured: true,
  },
  {
    id: 3,
    title: "AI Writing Assistant",
    description: "An AI-powered writing assistant that helps users improve their content with grammar suggestions, style recommendations, and tone analysis using OpenAI's GPT API.",
    image: "/projects/aiwriter.jpg",
    technologies: ["Next.js", "OpenAI API", "Vercel AI SDK", "PostgreSQL"],
    github: "https://github.com/alexchen/aiwriter",
    demo: "https://aiwriter-demo.vercel.app",
    featured: true,
  },
  {
    id: 4,
    title: "Portfolio Template",
    description: "A modern, customizable portfolio template for developers. Features dark mode, smooth animations, and easy content management through a simple configuration file.",
    image: "/projects/portfolio.jpg",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/alexchen/portfolio-template",
    demo: "https://portfolio-template.vercel.app",
    featured: false,
  },
  {
    id: 5,
    title: "Weather Dashboard",
    description: "A beautiful weather dashboard with location-based forecasts, interactive maps, and severe weather alerts. Integrates with multiple weather APIs for accurate data.",
    image: "/projects/weather.jpg",
    technologies: ["React", "OpenWeather API", "Mapbox", "Chart.js"],
    github: "https://github.com/alexchen/weather-dashboard",
    demo: "https://weather-dash.vercel.app",
    featured: false,
  },
  {
    id: 6,
    title: "Social Media Analytics",
    description: "A comprehensive analytics dashboard for social media managers. Track engagement, follower growth, and content performance across multiple platforms.",
    image: "/projects/analytics.jpg",
    technologies: ["Vue.js", "D3.js", "Node.js", "PostgreSQL"],
    github: "https://github.com/alexchen/social-analytics",
    demo: "https://social-analytics.vercel.app",
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
