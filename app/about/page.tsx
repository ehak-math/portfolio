import { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import PageTransition from "@/components/PageTransition";
import Timeline from "@/components/Timeline";
import SkillCategory from "@/components/SkillBar";
import { siteConfig, skills, experience } from "@/lib/data";
import { MapPin, Mail, Calendar, Coffee } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Alex Chen, a Full Stack Developer passionate about building modern web applications.",
};

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="pt-24 pb-20">
        {/* Header Section */}
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection>
                <span className="text-primary font-medium mb-4 block">About Me</span>
                <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                  I&apos;m {siteConfig.name}, a passionate developer creating digital experiences
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    I&apos;m a Full Stack Developer based in {siteConfig.location} with over 6 years 
                    of experience building web applications. My journey in tech started when I 
                    built my first website in high school, and I&apos;ve been hooked ever since.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    I specialize in JavaScript/TypeScript ecosystems, particularly React and Node.js, 
                    but I&apos;m always eager to learn new technologies. I believe in writing clean, 
                    maintainable code and creating intuitive user experiences that solve real problems.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    When I&apos;m not coding, you&apos;ll find me exploring hiking trails, experimenting 
                    with coffee brewing techniques, or contributing to open-source projects. I&apos;m 
                    passionate about the developer community and regularly share my knowledge through 
                    blog posts and mentoring.
                  </p>
                </div>
              </AnimatedSection>

              {/* Quick Info */}
              <AnimatedSection delay={0.2} className="mt-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm">{siteConfig.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm truncate">{siteConfig.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm">6+ Years Exp</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Coffee className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm">Coffee Lover</span>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-12 lg:py-20 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Skills & Technologies
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Here are the technologies and tools I work with regularly.
                I&apos;m always learning and adding new skills to my toolkit.
              </p>
            </AnimatedSection>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              <AnimatedSection delay={0.1}>
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <SkillCategory title="Frontend" skills={skills.frontend} variant="bars" />
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.2}>
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <SkillCategory title="Backend" skills={skills.backend} variant="bars" />
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.3}>
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <SkillCategory title="Tools & Others" skills={skills.tools} variant="bars" />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Work Experience
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A timeline of my professional journey and the companies I&apos;ve had the 
                pleasure of working with.
              </p>
            </AnimatedSection>

            <div className="max-w-4xl mx-auto">
              <Timeline items={experience} />
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
