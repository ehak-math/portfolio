import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiGit,
  SiDocker,
  SiAmazonwebservices,
  SiFigma,
  SiGithubactions,
  SiJavascript,
  SiVuedotjs,
  SiSass,
  SiWebpack,
  SiRedis,
  SiRedux,
  SiSocketdotio,
  SiStripe,
  SiPrisma,
  SiOpenai,
  SiVercel,
  SiMapbox,
  SiD3Dotjs,
  SiChartdotjs,
  SiHtml5,
  SiCss3,
  SiExpress,
  SiNestjs,
  SiFlutter,
  SiFirebase,
  SiSupabase,
  SiThreedotjs,
  SiVite,
  SiJest,
  SiCypress,
  SiStorybook,
  SiLinux,
  SiNginx,
  SiKubernetes,
  SiTerraform,
  SiJenkins,
  SiGitlab,
  SiBitbucket,
  SiJira,
  SiNotion,
  SiSlack,
  SiDiscord,
} from "react-icons/si";
import { 
  FaJava,
  FaPhp,
  FaLaravel,
  FaWordpress,
  FaShopify,
  FaAws,
  FaAngular,
  FaSwift,
  FaRust,
  FaGolang,
} from "react-icons/fa6";
import { TbBrandCpp, TbBrandKotlin } from "react-icons/tb";
import { BiLogoSpringBoot } from "react-icons/bi";
import { Code } from "lucide-react";
import { IconBaseProps } from "react-icons";

// Map technology names to their icons
const techIconMap: Record<string, React.ComponentType<IconBaseProps>> = {
  // Frontend
  "React": SiReact,
  "Next.js": SiNextdotjs,
  "TypeScript": SiTypescript,
  "JavaScript": SiJavascript,
  "Tailwind CSS": SiTailwindcss,
  "Tailwind": SiTailwindcss,
  "Framer Motion": SiFramer,
  "Framer": SiFramer,
  "Vue.js": SiVuedotjs,
  "Vue": SiVuedotjs,
  "Angular": FaAngular,
  "HTML": SiHtml5,
  "HTML5": SiHtml5,
  "CSS": SiCss3,
  "CSS3": SiCss3,
  "SCSS": SiSass,
  "Sass": SiSass,
  "Redux": SiRedux,
  "Three.js": SiThreedotjs,
  "Vite": SiVite,
  
  // Backend
  "Node.js": SiNodedotjs,
  "Node": SiNodedotjs,
  "Python": SiPython,
  "Java": FaJava,
  "PHP": FaPhp,
  "Laravel": FaLaravel,
  "Express": SiExpress,
  "Express.js": SiExpress,
  "NestJS": SiNestjs,
  "Spring Boot": BiLogoSpringBoot,
  "GraphQL": SiGraphql,
  "REST": SiNodedotjs,
  "C++": TbBrandCpp,
  "Kotlin": TbBrandKotlin,
  "Swift": FaSwift,
  "Rust": FaRust,
  "Go": FaGolang,
  "Golang": FaGolang,
  
  // Databases
  "PostgreSQL": SiPostgresql,
  "Postgres": SiPostgresql,
  "MongoDB": SiMongodb,
  "Redis": SiRedis,
  "MySQL": SiPostgresql,
  "Firebase": SiFirebase,
  "Supabase": SiSupabase,
  
  // Tools & DevOps
  "Git": SiGit,
  "Docker": SiDocker,
  "AWS": SiAmazonwebservices,
  "Figma": SiFigma,
  "CI/CD": SiGithubactions,
  "GitHub Actions": SiGithubactions,
  "Webpack": SiWebpack,
  "Vercel": SiVercel,
  "Linux": SiLinux,
  "Nginx": SiNginx,
  "Kubernetes": SiKubernetes,
  "K8s": SiKubernetes,
  "Terraform": SiTerraform,
  "Jenkins": SiJenkins,
  "GitLab": SiGitlab,
  "Bitbucket": SiBitbucket,
  "Jira": SiJira,
  "Notion": SiNotion,
  
  // Testing
  "Jest": SiJest,
  "Cypress": SiCypress,
  "Storybook": SiStorybook,
  
  // Other Libraries
  "Socket.io": SiSocketdotio,
  "WebSocket": SiSocketdotio,
  "Stripe": SiStripe,
  "Prisma": SiPrisma,
  "OpenAI": SiOpenai,
  "OpenAI API": SiOpenai,
  "Vercel AI SDK": SiVercel,
  "Mapbox": SiMapbox,
  "D3.js": SiD3Dotjs,
  "Chart.js": SiChartdotjs,
  
  // Mobile
  "Flutter": SiFlutter,
  "React Native": SiReact,
  
  // CMS
  "WordPress": FaWordpress,
  "Shopify": FaShopify,
  
  // Communication
  "Slack": SiSlack,
  "Discord": SiDiscord,
};

// Color map for each technology (for colored mode)
const techColorMap: Record<string, string> = {
  "React": "#61DAFB",
  "Next.js": "#000000",
  "TypeScript": "#3178C6",
  "JavaScript": "#F7DF1E",
  "Tailwind CSS": "#06B6D4",
  "Tailwind": "#06B6D4",
  "Framer Motion": "#0055FF",
  "Framer": "#0055FF",
  "Vue.js": "#4FC08D",
  "Vue": "#4FC08D",
  "Angular": "#DD0031",
  "Node.js": "#339933",
  "Node": "#339933",
  "Python": "#3776AB",
  "PostgreSQL": "#4169E1",
  "MongoDB": "#47A248",
  "GraphQL": "#E10098",
  "Git": "#F05032",
  "Docker": "#2496ED",
  "AWS": "#FF9900",
  "Figma": "#F24E1E",
  "Redis": "#DC382D",
  "Redux": "#764ABC",
  "Stripe": "#008CDD",
  "Prisma": "#2D3748",
  "Vercel": "#000000",
  "Firebase": "#FFCA28",
  "Supabase": "#3FCF8E",
};

interface TechIconProps {
  name: string;
  className?: string;
  showLabel?: boolean;
  colored?: boolean;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "w-3.5 h-3.5",
  md: "w-4 h-4",
  lg: "w-5 h-5",
};

export default function TechIcon({ 
  name, 
  className = "", 
  showLabel = true,
  colored = false,
  size = "md",
}: TechIconProps) {
  const IconComponent = techIconMap[name];
  const iconColor = colored ? techColorMap[name] : undefined;
  
  if (!IconComponent) {
    // Fallback to generic code icon
    return showLabel ? (
      <span className={`inline-flex items-center gap-1.5 ${className}`}>
        <Code className={sizeClasses[size]} />
        <span>{name}</span>
      </span>
    ) : (
      <Code className={`${sizeClasses[size]} ${className}`} />
    );
  }

  return showLabel ? (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      <IconComponent 
        className={sizeClasses[size]} 
        style={iconColor ? { color: iconColor } : undefined}
      />
      <span>{name}</span>
    </span>
  ) : (
    <IconComponent 
      className={`${sizeClasses[size]} ${className}`}
      style={iconColor ? { color: iconColor } : undefined}
    />
  );
}

// Export for use in skill tags
export function getTechIcon(name: string): React.ComponentType<IconBaseProps> | null {
  return techIconMap[name] || null;
}

export { techIconMap, techColorMap };
