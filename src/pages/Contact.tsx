import { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    project_requirement: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("leads").insert([formData]);

      if (error) throw error;

      setIsSubmitted(true);
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us via WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(217_91%_60%/0.12),transparent_50%)]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              Get In Touch
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Let's Build <span className="text-gradient">Together</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Ready to scale your agency? Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <AnimatedSection direction="left">
              <div className="p-8 rounded-2xl bg-card border border-border">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="text-accent" size={40} />
                    </div>
                    <h3 className="font-display text-2xl font-bold mb-4">
                      Thank You!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Your message has been received. We'll get back to you within 24 hours.
                    </p>
                    <Button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: "",
                          company: "",
                          email: "",
                          phone: "",
                          project_requirement: "",
                        });
                      }}
                      variant="outline"
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <>
                    <h2 className="font-display text-2xl font-bold mb-6">
                      Get Free Consultation
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="bg-secondary border-border"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company">Company</Label>
                          <Input
                            id="company"
                            name="company"
                            placeholder="Your company"
                            value={formData.company}
                            onChange={handleChange}
                            className="bg-secondary border-border"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="you@company.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="bg-secondary border-border"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input
                            id="phone"
                            name="phone"
                            placeholder="+91 98765 43210"
                            value={formData.phone}
                            onChange={handleChange}
                            className="bg-secondary border-border"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="project_requirement">Project Requirement *</Label>
                        <Textarea
                          id="project_requirement"
                          name="project_requirement"
                          placeholder="Tell us about your project..."
                          value={formData.project_requirement}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="bg-secondary border-border resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full btn-glow bg-primary hover:bg-primary/90"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2" size={18} />
                          </>
                        )}
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection direction="right" className="space-y-8">
              <div>
                <h2 className="font-display text-2xl font-bold mb-6">
                  Or Reach Out Directly
                </h2>
                <p className="text-muted-foreground mb-8">
                  Prefer a quick chat? We're always happy to jump on a call or WhatsApp message.
                </p>
              </div>

              <div className="space-y-6">
                <motion.a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-accent/10 border border-accent/20 hover:border-accent/40 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                    <MessageSquare className="text-accent" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-accent">WhatsApp</p>
                    <p className="text-sm text-muted-foreground">Chat with us instantly</p>
                  </div>
                </motion.a>

                <motion.a
                  href="mailto:hello@scalex360.com"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-sm text-muted-foreground">hello@scalex360.com</p>
                  </div>
                </motion.a>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-sm text-muted-foreground">+91 98765 43210</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-sm text-muted-foreground">Bangalore, India</p>
                  </div>
                </motion.div>
              </div>

              {/* Response time badge */}
              <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
                <p className="text-sm text-muted-foreground mb-1">Average response time</p>
                <p className="font-display text-2xl font-bold text-gradient">Under 2 Hours</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
