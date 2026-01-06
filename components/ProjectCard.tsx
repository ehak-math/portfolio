"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink, Folder } from "lucide-react";
import TechIcon from "./TechIcon";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
  featured?: boolean;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
    >
      {/* Image Container */}
      <div className="relative h-48 sm:h-56 overflow-hidden bg-secondary">
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent z-10" />
        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
          <Folder className="w-16 h-16 opacity-20" />
        </div>
        {/* Placeholder for actual project image */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/50" />
        
        {/* Hover overlay with links */}
        <div className="absolute inset-0 bg-foreground/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-background rounded-full text-foreground hover:text-primary hover:scale-110 transition-all duration-200"
            aria-label={`View ${project.title} on GitHub`}
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-background rounded-full text-foreground hover:text-primary hover:scale-110 transition-all duration-200"
            aria-label={`View ${project.title} live demo`}
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full inline-flex items-center gap-1.5"
            >
              <TechIcon name={tech} size="sm" showLabel={true} />
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-3 py-1 text-xs font-medium bg-secondary text-muted-foreground rounded-full">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 z-30">
          <span className="px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
            Featured
          </span>
        </div>
      )}
    </motion.article>
  );
}
