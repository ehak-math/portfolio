"use client";

import { motion } from "framer-motion";
import TechIcon from "./TechIcon";

interface Skill {
  name: string;
  level: number;
}

interface SkillBarProps {
  skill: Skill;
  index: number;
}

export function SkillBar({ skill, index }: SkillBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <TechIcon name={skill.name} size="sm" className="text-sm font-medium text-foreground" />
        <span className="text-xs text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.05 + 0.2, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
        />
      </div>
    </motion.div>
  );
}

interface SkillTagProps {
  name: string;
  index: number;
}

export function SkillTag({ name, index }: SkillTagProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      whileHover={{ scale: 1.05 }}
      className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
    >
      <TechIcon name={name} size="sm" />
    </motion.span>
  );
}

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
  variant?: "bars" | "tags";
}

export default function SkillCategory({ title, skills, variant = "bars" }: SkillCategoryProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      {variant === "bars" ? (
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <SkillBar key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <SkillTag key={skill.name} name={skill.name} index={index} />
          ))}
        </div>
      )}
    </div>
  );
}
