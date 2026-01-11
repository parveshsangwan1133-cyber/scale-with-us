import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { StaggeredList } from "@/components/animations/StaggeredList";

const caseStudies = [
  {
    title: "White-Label CRM for Marketing Agencies",
    category: "CRM Solution",
    client: "Marketing Agency Network",
    challenge: "Multiple agencies needed a unified CRM that could be branded individually for each agency.",
    solution: "Built a multi-tenant CRM with complete white-labeling, custom domains, and agency-specific branding.",
    results: ["40% increase in client retention", "3x faster lead management", "Zero attribution to our team"],
    image: "from-primary/20 to-accent/20",
  },
  {
    title: "E-commerce Platform with Shipping Integration",
    category: "E-commerce",
    client: "Fashion Retail Chain",
    challenge: "Client needed a custom e-commerce solution with integration to multiple Indian shipping providers.",
    solution: "Developed a headless e-commerce platform with Shiprocket, Delhivery, and BlueDart integrations.",
    results: ["50% reduction in shipping costs", "Real-time tracking for customers", "Automated order fulfillment"],
    image: "from-accent/20 to-primary/20",
  },
  {
    title: "AI Support Chatbot for Sales Teams",
    category: "AI Automation",
    client: "SaaS Company",
    challenge: "High volume of repetitive support queries overwhelming the sales team.",
    solution: "Implemented an AI chatbot trained on product knowledge with seamless handoff to humans.",
    results: ["70% of queries resolved automatically", "24/7 customer support", "30% more qualified leads"],
    image: "from-primary/20 to-accent/30",
  },
  {
    title: "Manufacturing ERP System",
    category: "ERP Solution",
    client: "Textile Manufacturing Unit",
    challenge: "Managing production, inventory, and orders across 3 manufacturing facilities.",
    solution: "Custom ERP with production planning, inventory management, and real-time analytics.",
    results: ["20% reduction in inventory costs", "Real-time production visibility", "Integrated supplier management"],
    image: "from-accent/30 to-primary/20",
  },
];

const CaseStudies = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(217_91%_60%/0.12),transparent_50%)]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              Case Studies
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Real Projects. <span className="text-gradient">Real Results.</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              See how we've helped agencies and businesses deliver exceptional software solutions to their clients.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <StaggeredList className="space-y-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.01 }}
                className="group grid md:grid-cols-5 gap-8 p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                {/* Image */}
                <div className="md:col-span-2">
                  <div className={`aspect-video rounded-xl bg-gradient-to-br ${study.image} flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,hsl(var(--background)/0.5))]" />
                    <span className="relative z-10 font-display text-lg font-semibold text-primary/60">
                      {study.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-3">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium">
                      {study.category}
                    </span>
                    <span className="text-sm text-muted-foreground">{study.client}</span>
                  </div>
                  
                  <h3 className="font-display text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {study.title}
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground mb-1">Challenge</h4>
                      <p className="text-foreground">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground mb-1">Solution</h4>
                      <p className="text-foreground">{study.solution}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.results.map((result, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 text-sm rounded-lg bg-accent/10 text-accent border border-accent/20"
                      >
                        {result}
                      </span>
                    ))}
                  </div>

                  <Button variant="ghost" className="group/btn p-0 h-auto text-primary">
                    Read Full Case Study
                    <ExternalLink className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
                  </Button>
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
              Want Similar <span className="text-gradient">Results?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let's discuss your project and see how we can help you achieve your goals.
            </p>
            <Link to="/contact">
              <Button size="lg" className="btn-glow bg-primary hover:bg-primary/90">
                Start Your Project
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudies;
