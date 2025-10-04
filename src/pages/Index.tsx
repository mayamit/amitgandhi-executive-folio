import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Technology } from "@/components/Technology";
import { ThoughtLeadership } from "@/components/ThoughtLeadership";
import { Speaking } from "@/components/Speaking";
import { Advisory } from "@/components/Advisory";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Experience />
      <Technology />
      <ThoughtLeadership />
      <Speaking />
      <Advisory />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Amit Gandhi. Built with passion for technology and leadership.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
