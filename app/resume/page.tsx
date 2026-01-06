import { Metadata } from "next";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import PageTransition from "@/components/PageTransition";
import Timeline from "@/components/Timeline";
import { SkillTag } from "@/components/SkillBar";
import { siteConfig, skills, experience, education } from "@/lib/data";
import {
  Download,
  Briefcase,
  GraduationCap,
  Code,
  Server,
  Wrench,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "View and download Alex Chen's professional resume. Full Stack Developer with expertise in React, Next.js, and modern web technologies.",
};

export default function ResumePage() {
  const allSkills = [
    ...skills.frontend.map((s) => s.name),
    ...skills.backend.map((s) => s.name),
    ...skills.tools.map((s) => s.name),
  ];

  return (
    <PageTransition>
      <div className="pt-24 pb-20">
        {/* Header Section */}
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
                <div>
                  <span className="text-primary font-medium mb-4 block">
                    Resume
                  </span>
                  <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                    {siteConfig.name}
                  </h1>
                  <p className="text-xl text-muted-foreground">
                    {siteConfig.role}
                  </p>
                </div>
                <a
                  href={siteConfig.resumeUrl}
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 shrink-0"
                >
                  <Download className="w-5 h-5" />
                  Download CV
                </a>
              </AnimatedSection>

              {/* Contact Info Bar */}
              <AnimatedSection delay={0.1}>
                <div className="bg-card rounded-xl p-6 border border-border flex flex-wrap gap-6 items-center justify-center md:justify-start">
                  <span className="text-sm text-muted-foreground">
                    {siteConfig.location}
                  </span>
                  <span className="hidden sm:block text-border">|</span>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-sm text-primary hover:underline"
                  >
                    {siteConfig.email}
                  </a>
                  <span className="hidden sm:block text-border">|</span>
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                  >
                    LinkedIn
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <span className="hidden sm:block text-border">|</span>
                  <a
                    href={siteConfig.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                  >
                    GitHub
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Summary Section */}
        <section className="py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection>
                <div className="bg-secondary/30 rounded-xl p-6">
                  <h2 className="text-lg font-semibold text-foreground mb-3">
                    Professional Summary
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {siteConfig.description} With a strong foundation in both
                    frontend and backend technologies, I excel at building
                    full-stack applications that are not only visually appealing
                    but also robust and scalable. My expertise includes React,
                    Next.js, Node.js, and various database systems. I am
                    passionate about writing clean, maintainable code and
                    continuously improving my skills to stay updated with the
                    latest industry trends.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection className="mb-8">
                <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
                  <Code className="w-6 h-6 text-primary" />
                  Technical Skills
                </h2>
              </AnimatedSection>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Frontend */}
                <AnimatedSection delay={0.1}>
                  <div className="bg-card rounded-xl p-6 border border-border h-full">
                    <h3 className="text-sm font-medium text-muted-foreground mb-4 flex items-center gap-2">
                      <Code className="w-4 h-4" />
                      Frontend
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.frontend.map((skill, index) => (
                        <SkillTag
                          key={skill.name}
                          name={skill.name}
                          index={index}
                        />
                      ))}
                    </div>
                  </div>
                </AnimatedSection>

                {/* Backend */}
                <AnimatedSection delay={0.2}>
                  <div className="bg-card rounded-xl p-6 border border-border h-full">
                    <h3 className="text-sm font-medium text-muted-foreground mb-4 flex items-center gap-2">
                      <Server className="w-4 h-4" />
                      Backend
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.backend.map((skill, index) => (
                        <SkillTag
                          key={skill.name}
                          name={skill.name}
                          index={index}
                        />
                      ))}
                    </div>
                  </div>
                </AnimatedSection>

                {/* Tools */}
                <AnimatedSection delay={0.3}>
                  <div className="bg-card rounded-xl p-6 border border-border h-full">
                    <h3 className="text-sm font-medium text-muted-foreground mb-4 flex items-center gap-2">
                      <Wrench className="w-4 h-4" />
                      Tools & Others
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.tools.map((skill, index) => (
                        <SkillTag
                          key={skill.name}
                          name={skill.name}
                          index={index}
                        />
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-12 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection className="mb-12">
                <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
                  <Briefcase className="w-6 h-6 text-primary" />
                  Work Experience
                </h2>
              </AnimatedSection>

              <Timeline items={experience} />
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection className="mb-12">
                <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
                  <GraduationCap className="w-6 h-6 text-primary" />
                  Education
                </h2>
              </AnimatedSection>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <AnimatedSection key={edu.id} delay={index * 0.1}>
                    <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-colors">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-card-foreground">
                            {edu.degree}
                          </h3>
                          <p className="text-primary font-medium">
                            {edu.school}
                          </p>
                        </div>
                        <div className="text-sm text-muted-foreground shrink-0">
                          {edu.period}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {edu.description}
                      </p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-primary/10 to-secondary rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Interested in working together?
                </h3>
                <p className="text-muted-foreground mb-6">
                  I&apos;m always open to discussing new opportunities and
                  interesting projects.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300"
                  >
                    Contact Me
                  </Link>
                  <a
                    href={siteConfig.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80 transition-all duration-300"
                  >
                    <Download className="w-4 h-4" />
                    Download CV
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
