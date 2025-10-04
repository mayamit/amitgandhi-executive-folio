import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";

const articles = [
  {
    title: "AI in the Enterprise: Beyond the Hype",
    summary: "Practical strategies for implementing AI that delivers measurable business value, not just technological novelty.",
    category: "Artificial Intelligence",
    readTime: "8 min read"
  },
  {
    title: "Scaling Global Engineering Teams",
    summary: "Lessons learned from building and leading distributed teams across three continents and multiple time zones.",
    category: "Leadership",
    readTime: "6 min read"
  },
  {
    title: "Building Data-Driven Organizations",
    summary: "How to transform company culture and infrastructure to make data-driven decisions at every level.",
    category: "Data Strategy",
    readTime: "10 min read"
  },
  {
    title: "The CTO's Guide to Technical Debt",
    summary: "Strategic approaches to managing, prioritizing, and eliminating technical debt while maintaining velocity.",
    category: "Engineering",
    readTime: "7 min read"
  },
  {
    title: "Platform Engineering for Business Impact",
    summary: "Moving beyond infrastructure to build platforms that accelerate product development and innovation.",
    category: "Platform Engineering",
    readTime: "9 min read"
  },
  {
    title: "Leading Through Digital Transformation",
    summary: "Navigating organizational change, stakeholder management, and cultural shifts in large-scale transformations.",
    category: "Transformation",
    readTime: "11 min read"
  }
];

export const ThoughtLeadership = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-6 animate-fade-in">Thought Leadership</h2>
          <div className="h-1 w-24 bg-accent mx-auto mb-16 rounded-full" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <Card 
                key={index} 
                className="p-6 shadow-card hover:shadow-elegant transition-smooth flex flex-col animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-4 h-4 text-accent" />
                  <span className="text-xs font-semibold text-accent uppercase tracking-wide">
                    {article.category}
                  </span>
                </div>
                <h3 className="font-bold mb-3 text-lg leading-tight">{article.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">
                  {article.summary}
                </p>
                <div className="flex items-center justify-between pt-4 border-t">
                  <span className="text-xs text-muted-foreground">{article.readTime}</span>
                  <Button variant="ghost" size="sm" className="group">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
