import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";
import Link from "next/link";
import { ArrowRight, Code2, Palette, Rocket } from "lucide-react";

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);
  
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Featured Work Section */}
      <section className="py-20 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of my recent work. Each project represents a unique challenge
              and showcases different aspects of my expertise.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300"
            >
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              What I Do
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I specialize in building modern, performant web applications
              with a focus on user experience and clean code.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Frontend Development */}
            <AnimatedSection delay={0.1}>
              <div className="p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-colors group">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Code2 className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">
                  Frontend Development
                </h3>
                <p className="text-muted-foreground text-sm">
                  Building responsive, accessible, and performant user interfaces
                  with React, Next.js, and modern CSS frameworks.
                </p>
              </div>
            </AnimatedSection>

            {/* UI/UX Design */}
            <AnimatedSection delay={0.2}>
              <div className="p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-colors group">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Palette className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">
                  UI/UX Design
                </h3>
                <p className="text-muted-foreground text-sm">
                  Creating intuitive and beautiful designs with a focus on
                  user experience, accessibility, and brand consistency.
                </p>
              </div>
            </AnimatedSection>

            {/* Full Stack */}
            <AnimatedSection delay={0.3}>
              <div className="p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-colors group">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Rocket className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">
                  Full Stack Solutions
                </h3>
                <p className="text-muted-foreground text-sm">
                  Developing end-to-end applications with robust backends,
                  APIs, and database architecture.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 noise-bg" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Let&apos;s Work Together
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              I&apos;m currently available for freelance work and interesting projects.
              If you have a project in mind or just want to say hi, feel free to reach out!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
              >
                Get In Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/resume"
                className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80 transition-all duration-300 hover:-translate-y-0.5"
              >
                View Resume
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
