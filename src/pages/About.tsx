import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Shield, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { StaggeredList } from "@/components/animations/StaggeredList";

const values = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "We move fast without compromising quality. Most projects launch in weeks, not months.",
  },
  {
    icon: Shield,
    title: "Secure Systems",
    description: "Enterprise-grade security is built into everything we create. Your clients' data is always protected.",
  },
  {
    icon: Users,
    title: "Long-Term Partnerships",
    description: "We're not just vendors — we're your extended tech team. We grow together.",
  },
  {
    icon: Target,
    title: "Business-First Approach",
    description: "Technology serves business goals. We focus on ROI and measurable outcomes.",
  },
];

const stats = [
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 30, suffix: "+", label: "Happy Partners" },
  { value: 15, suffix: "+", label: "Industries Served" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,hsl(217_91%_60%/0.15),transparent_50%)]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              About ScaleX360
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Built by Developers, <span className="text-gradient">For Agencies</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              We understand the challenges agencies face. That's why we built ScaleX360 — to be the tech partner you always wished you had.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <motion.div
                whileHover={{ rotate: 1 }}
                className="relative aspect-square rounded-2xl bg-gradient-to-br from-card to-secondary border border-border overflow-hidden"
              >
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(217_91%_60%/0.1),transparent_60%)]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-8xl font-bold text-primary/10">SX</span>
                </div>
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute top-1/4 right-1/4 w-16 h-16 rounded-xl bg-primary/20 backdrop-blur-sm border border-primary/30"
                />
                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 6, repeat: Infinity, delay: 1 }}
                  className="absolute bottom-1/4 left-1/4 w-12 h-12 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30"
                />
              </motion.div>
            </AnimatedSection>

            <AnimatedSection direction="right" className="space-y-6">
              <h2 className="font-display text-3xl md:text-4xl font-bold">
                Our <span className="text-gradient">Story</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  ScaleX360 was born from a simple observation: agencies everywhere were struggling 
                  to deliver technical projects. They had great client relationships but lacked the 
                  development capacity to execute.
                </p>
                <p>
                  Our founders, experienced developers and AI automation specialists, saw an opportunity. 
                  What if agencies could offer world-class software solutions without building internal 
                  tech teams?
                </p>
                <p>
                  Today, we partner with marketing agencies, consultancies, and businesses across India 
                  to deliver custom software, CRMs, AI agents, and automation — all under their brand.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={index} delay={index * 0.1} className="text-center">
                <div className="font-display text-4xl md:text-5xl font-bold text-gradient mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              These principles guide everything we do.
            </p>
          </AnimatedSection>

          <StaggeredList className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <value.icon className="text-primary" size={28} />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </StaggeredList>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Ready to <span className="text-gradient">Partner Up?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let's explore how we can help your agency deliver more without the overhead.
            </p>
            <Link to="/contact">
              <Button size="lg" className="btn-glow bg-primary hover:bg-primary/90">
                Get In Touch
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default About;
