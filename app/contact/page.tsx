import { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import PageTransition from "@/components/PageTransition";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/data";
import { Mail, MapPin, Github, Linkedin, Clock, Send } from "lucide-react";
import { SiTelegram } from "react-icons/si";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Ehak Math. Let's discuss your project or just say hello!",
};

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="pt-24 pb-20">
        {/* Header Section */}
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <AnimatedSection>
                <span className="text-primary font-medium mb-4 block">Contact</span>
                <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                  Let&apos;s Work Together
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <p className="text-muted-foreground text-lg">
                  Have a project in mind or just want to chat? Feel free to reach out.
                  I&apos;m always open to discussing new opportunities, creative ideas,
                  or ways to help bring your vision to life.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-2 space-y-8">
                <AnimatedSection>
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Get In Touch
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Whether you have a question, want to start a project, or simply
                    want to connect, feel free to send me a message. I typically
                    respond within 24-48 hours.
                  </p>
                </AnimatedSection>

                {/* Contact Details */}
                <div className="space-y-6">
                  <AnimatedSection delay={0.1}>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors group"
                    >
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-card-foreground">Email</h3>
                        <p className="text-sm text-muted-foreground">{siteConfig.email}</p>
                      </div>
                    </a>
                  </AnimatedSection>

                  <AnimatedSection delay={0.15}>
                    <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-card-foreground">Location</h3>
                        <p className="text-sm text-muted-foreground">{siteConfig.location}</p>
                      </div>
                    </div>
                  </AnimatedSection>

                  <AnimatedSection delay={0.2}>
                    <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-card-foreground">Response Time</h3>
                        <p className="text-sm text-muted-foreground">Usually within 24-48 hours</p>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>

                {/* Social Links */}
                <AnimatedSection delay={0.25}>
                  <h3 className="font-medium text-foreground mb-4">Connect with me</h3>
                  <div className="flex gap-3">
                    <a
                      href={siteConfig.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-card rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={siteConfig.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-card rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={siteConfig.social.telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-card rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
                      aria-label="Telegram"
                    >
                      <SiTelegram className="w-5 h-5" />
                    </a>
                  </div>
                </AnimatedSection>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3">
                <AnimatedSection delay={0.1}>
                  <div className="bg-card rounded-2xl p-8 border border-border">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Send className="w-5 h-5 text-primary" />
                      </div>
                      <h2 className="text-xl font-semibold text-card-foreground">
                        Send a Message
                      </h2>
                    </div>
                    <ContactForm />
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 lg:py-20 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-2xl font-bold text-foreground">
                Frequently Asked Questions
              </h2>
            </AnimatedSection>

            <div className="max-w-3xl mx-auto grid gap-6">
              <AnimatedSection delay={0.1}>
                <div className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="font-semibold text-card-foreground mb-2">
                    What types of projects do you work on?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    I work on a variety of web projects including e-commerce platforms,
                    SaaS applications, marketing websites, and custom web applications.
                    I&apos;m particularly interested in projects that involve modern React/Next.js
                    development.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.15}>
                <div className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="font-semibold text-card-foreground mb-2">
                    What is your typical project timeline?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Project timelines vary based on scope and complexity. A simple marketing
                    website might take 2-4 weeks, while a complex web application could take
                    2-6 months. I&apos;ll provide a detailed timeline estimate after understanding
                    your requirements.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="font-semibold text-card-foreground mb-2">
                    Do you offer ongoing maintenance and support?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Yes! I offer ongoing maintenance packages for projects I&apos;ve built.
                    This includes bug fixes, security updates, performance optimization,
                    and feature enhancements. Let&apos;s discuss what works best for your needs.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.25}>
                <div className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="font-semibold text-card-foreground mb-2">
                    Are you available for remote work?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Absolutely! I&apos;ve been working remotely for years and am comfortable
                    collaborating with teams across different time zones. I use tools like
                    Slack, Zoom, and GitHub for seamless communication and collaboration.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
