import { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import PageTransition from "@/components/PageTransition";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore my portfolio of web development projects, featuring modern applications built with React, Next.js, and more.",
};

export default function ProjectsPage() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <PageTransition>
      <div className="pt-24 pb-20">
        {/* Header Section */}
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <AnimatedSection>
                <span className="text-primary font-medium mb-4 block">My Work</span>
                <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                  Projects & Portfolio
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <p className="text-muted-foreground text-lg">
                  A collection of projects I&apos;ve worked on. Each project represents
                  unique challenges and learning experiences. Click on any project to
                  see more details or visit the live demo.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="mb-12">
              <h2 className="text-2xl font-bold text-foreground">Featured Projects</h2>
              <p className="text-muted-foreground mt-2">
                Highlighted work that showcases my best skills and most impactful contributions.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Other Projects */}
        <section className="py-12 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="mb-12">
              <h2 className="text-2xl font-bold text-foreground">More Projects</h2>
              <p className="text-muted-foreground mt-2">
                Other interesting projects I&apos;ve built along the way.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <AnimatedSection delay={0.1} className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">
                    {projects.length}+
                  </div>
                  <div className="text-muted-foreground text-sm">Projects Completed</div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.2} className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground text-sm">Happy Clients</div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.3} className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">3+</div>
                  <div className="text-muted-foreground text-sm">Years Experience</div>
                </AnimatedSection>
                
                <AnimatedSection delay={0.4} className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-muted-foreground text-sm">Satisfaction Rate</div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
