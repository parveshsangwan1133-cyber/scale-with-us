import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Factory, Heart, GraduationCap, ShoppingCart, TrendingUp, Building, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { StaggeredList } from "@/components/animations/StaggeredList";

const industries = [
  {
    icon: Factory,
    name: "Manufacturing",
    description: "ERP systems, inventory management, production tracking, and supply chain optimization.",
    solutions: ["Production ERP", "Inventory Systems", "Quality Control"],
  },
  {
    icon: Heart,
    name: "Healthcare",
    description: "Patient management, appointment scheduling, telemedicine platforms, and health records.",
    solutions: ["HMS", "Telemedicine", "Patient Portals"],
  },
  {
    icon: GraduationCap,
    name: "Education",
    description: "Learning management systems, student portals, online course platforms, and EdTech solutions.",
    solutions: ["LMS Platforms", "Student Portals", "E-Learning"],
  },
  {
    icon: ShoppingCart,
    name: "E-commerce",
    description: "Online stores, multi-vendor marketplaces, order management, and shipping integrations.",
    solutions: ["Custom Stores", "Marketplaces", "Order Systems"],
  },
  {
    icon: TrendingUp,
    name: "Finance & Forex",
    description: "Trading platforms, portfolio management, payment processing, and financial analytics.",
    solutions: ["Trading Platforms", "CRM Systems", "Analytics"],
  },
  {
    icon: Building,
    name: "Real Estate",
    description: "Property listings, CRM for agents, virtual tours, and property management systems.",
    solutions: ["Listing Portals", "Agent CRM", "Management Tools"],
  },
  {
    icon: Users,
    name: "Co-working Spaces",
    description: "Booking systems, member management, access control, and community platforms.",
    solutions: ["Booking Systems", "Member Apps", "Access Control"],
  },
];

const Industries = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(142_71%_45%/0.1),transparent_50%)]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
              Industries We Serve
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Solutions for <span className="text-gradient">Every Industry</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              We've built successful software solutions across diverse sectors. Whatever your client's industry, we've got you covered.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <StaggeredList className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <industry.icon className="text-primary" size={32} />
                </div>
                <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {industry.name}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {industry.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {industry.solutions.map((solution, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground"
                    >
                      {solution}
                    </span>
                  ))}
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
              Don't See Your <span className="text-gradient">Industry?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We love tackling new challenges. Tell us about your niche and we'll create a solution tailored to your needs.
            </p>
            <Link to="/contact">
              <Button size="lg" className="btn-glow bg-primary hover:bg-primary/90">
                Discuss Your Project
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Industries;
