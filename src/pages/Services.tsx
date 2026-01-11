import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, Building2, Cpu, MessageSquare, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { StaggeredList } from "@/components/animations/StaggeredList";

const services = [
  {
    icon: Code2,
    title: "White-Label Development",
    description: "We work as your backend tech team while you stay client-facing. Your clients never know about us.",
    features: [
      "Custom web applications",
      "Mobile app development",
      "API integrations",
      "Full-stack solutions",
      "Your branding throughout",
    ],
  },
  {
    icon: Building2,
    title: "CRM & ERP Solutions",
    description: "Sales, operations, inventory, HR, billing — fully customized to your clients' specific needs.",
    features: [
      "Sales pipeline management",
      "Inventory tracking",
      "HR & payroll systems",
      "Custom reporting",
      "Multi-location support",
    ],
  },
  {
    icon: Cpu,
    title: "AI Agents & Automation",
    description: "Customer support bots, sales assistants, and internal automation that work 24/7.",
    features: [
      "AI-powered chatbots",
      "Workflow automation",
      "Lead qualification bots",
      "Document processing",
      "Predictive analytics",
    ],
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Automation",
    description: "Lead handling, order updates, support bots using the official WhatsApp Business API.",
    features: [
      "Broadcast messaging",
      "Automated responses",
      "Order notifications",
      "Customer support bots",
      "Lead capture flows",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(217_91%_60%/0.15),transparent_50%)]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              Our Services
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Full-Stack <span className="text-gradient">Tech Solutions</span> Under Your Brand
            </h1>
            <p className="text-lg text-muted-foreground">
              Everything you need to expand your agency's capabilities without expanding your team.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <StaggeredList className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.01 }}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <service.icon className="text-primary" size={32} />
                  </div>
                  <h2 className="font-display text-3xl font-bold mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                          <Check size={12} className="text-accent" />
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button className="btn-glow bg-primary hover:bg-primary/90">
                      Get Started
                      <ArrowRight className="ml-2" size={18} />
                    </Button>
                  </Link>
                </div>

                <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <motion.div
                    whileHover={{ rotate: 2 }}
                    className="relative aspect-square rounded-2xl bg-gradient-to-br from-card to-secondary border border-border overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(217_91%_60%/0.1),transparent_60%)]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <service.icon className="text-primary/20" size={200} />
                    </div>
                    {/* Floating elements */}
                    <motion.div
                      animate={{ y: [0, -15, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="absolute top-1/4 right-1/4 w-12 h-12 rounded-lg bg-primary/20 backdrop-blur-sm border border-primary/30"
                    />
                    <motion.div
                      animate={{ y: [0, 15, 0] }}
                      transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                      className="absolute bottom-1/4 left-1/4 w-8 h-8 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30"
                    />
                  </motion.div>
                </div>
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
              Need Something <span className="text-gradient">Custom?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We specialize in building exactly what your clients need. Let's discuss your requirements.
            </p>
            <Link to="/contact">
              <Button size="lg" className="btn-glow bg-primary hover:bg-primary/90">
                Book Free Consultation
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
