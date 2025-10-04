import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { LinkedinIcon, GithubIcon, MailIcon } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message received!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-24 gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-6 animate-fade-in">Let's Connect</h2>
          <div className="h-1 w-24 bg-accent mx-auto mb-8 rounded-full" />
          
          <p className="text-center text-lg text-muted-foreground mb-16 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Interested in collaboration, speaking opportunities, or advisory work? Let's start a conversation.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a href="https://www.linkedin.com/in/amitgandhi/" target="_blank" rel="noopener noreferrer">
              <Card className="p-6 shadow-card hover:shadow-elegant transition-smooth hover:scale-[1.05] cursor-pointer animate-fade-in flex flex-col items-center text-center space-y-3 h-full">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <LinkedinIcon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold">LinkedIn</h3>
                <p className="text-sm text-muted-foreground">Professional network</p>
              </Card>
            </a>

            <a href="https://github.com/amitgandhi" target="_blank" rel="noopener noreferrer">
              <Card className="p-6 shadow-card hover:shadow-elegant transition-smooth hover:scale-[1.05] cursor-pointer animate-fade-in flex flex-col items-center text-center space-y-3 h-full" style={{ animationDelay: "0.1s" }}>
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <GithubIcon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold">GitHub</h3>
                <p className="text-sm text-muted-foreground">Code & projects</p>
              </Card>
            </a>

            <a href="mailto:amit@example.com">
              <Card className="p-6 shadow-card hover:shadow-elegant transition-smooth hover:scale-[1.05] cursor-pointer animate-fade-in flex flex-col items-center text-center space-y-3 h-full" style={{ animationDelay: "0.2s" }}>
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <MailIcon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold">Email</h3>
                <p className="text-sm text-muted-foreground">Direct contact</p>
              </Card>
            </a>
          </div>

          <Card className="p-8 shadow-card animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or how I can help..."
                  className="min-h-[150px]"
                  required
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};
