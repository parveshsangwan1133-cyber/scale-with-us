import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, Cpu, MessageSquare, Building2, Zap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { StaggeredList } from "@/components/animations/StaggeredList";

const services = [
  {
    icon: Code2,
    title: "White-Label Software Development",
    description: "We work as your backend tech team while you stay client-facing.",
  },
  {
    icon: Building2,
    title: "Custom CRM & ERP Systems",
    description: "Sales, operations, inventory, HR, billing — fully customized.",
  },
  {
    icon: Cpu,
    title: "AI Agents & Automation",
    description: "Customer support, sales bots, internal automation.",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp API Solutions",
    description: "Lead handling, order updates, support bots using WhatsApp API.",
  },
  {
    icon: Globe,
    title: "LMS & EdTech Platforms",
    description: "Complete learning management and e-learning solutions.",
  },
  {
    icon: Zap,
    title: "E-commerce & Marketplace",
    description: "Full-featured online stores and multi-vendor marketplaces.",
  },
];

const steps = [
  { number: "01", title: "You bring the client", description: "Present the opportunity and requirements" },
  { number: "02", title: "We design & build", description: "Under your brand with your specifications" },
  { number: "03", title: "You deliver & earn", description: "Recurring revenue without the overhead" },
];

const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 30, suffix: "+", label: "Agency Partners" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 2, suffix: "x", label: "Faster Delivery" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(217_91%_60%/0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(142_71%_45%/0.1),transparent_50%)]" />
        
        {/* Animated grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        {/* Floating elements */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-[15%] w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border border-primary/20"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/3 left-[10%] w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 backdrop-blur-sm border border-accent/20"
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                🚀 Your White-Label Tech Partner
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6"
            >
              Scale Your Agency{" "}
              <span className="text-gradient">Without Hiring</span>{" "}
              Developers
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
            >
              We build custom software, CRMs, AI agents and automation under your brand
              — so you can deliver more without the overhead.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/contact">
                <Button size="lg" className="btn-glow bg-primary hover:bg-primary/90 text-lg px-8">
                  Get Free Consultation
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 border-accent text-accent hover:bg-accent/10"
                >
                  <MessageSquare className="mr-2" size={20} />
                  WhatsApp Now
                </Button>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Social Proof */}
      <section className="py-12 border-y border-border bg-card/50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center">
            <p className="text-muted-foreground">
              <span className="text-primary font-semibold">Trusted by agencies and businesses</span>{" "}
              across India for fast, reliable software delivery.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-background to-card">
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

      {/* Services Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to{" "}
              <span className="text-gradient">Scale Delivery</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Full-stack development services that let you expand your offerings without expanding your team.
            </p>
          </AnimatedSection>

          <StaggeredList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="text-primary" size={28} />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </StaggeredList>

          <AnimatedSection delay={0.4} className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" size="lg" className="group">
                View All Services
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(217_91%_60%/0.08),transparent_60%)]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              How It <span className="text-gradient">Works</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              A simple partnership model that lets you focus on clients while we handle the tech.
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Connection line */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary -translate-y-1/2 z-0" />
              
              <div className="grid md:grid-cols-3 gap-8 relative z-10">
                {steps.map((step, index) => (
                  <AnimatedSection
                    key={index}
                    delay={index * 0.2}
                    className="text-center"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-background rounded-2xl p-8 border border-border relative"
                    >
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                        {step.number}
                      </div>
                      <h3 className="font-display text-xl font-semibold mt-4 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {step.description}
                      </p>
                    </motion.div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              Ready to Scale{" "}
              <span className="text-gradient">Without the Overhead?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Book a free strategy call and discover how we can help you deliver more
              projects without hiring developers.
            </p>
            <Link to="/contact">
              <Button size="lg" className="btn-glow bg-primary hover:bg-primary/90 text-lg px-10">
                Book Strategy Call
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
