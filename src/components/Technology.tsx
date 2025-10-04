import { Card } from "@/components/ui/card";
import { Cloud, Cpu, Database, GitBranch, Brain, Sparkles } from "lucide-react";

const technologies = [
  {
    title: "Cloud Architecture",
    description: "AWS, Azure, GCP - Building scalable, resilient cloud-native platforms",
    icon: Cloud
  },
  {
    title: "AI & GenAI",
    description: "Machine Learning, LLMs, AI platforms driving business transformation",
    icon: Brain
  },
  {
    title: "Data Engineering",
    description: "Big Data, Analytics, Real-time processing at enterprise scale",
    icon: Database
  },
  {
    title: "Platform Engineering",
    description: "Microservices, APIs, Developer experience optimization",
    icon: Cpu
  },
  {
    title: "DevOps & SRE",
    description: "CI/CD, Infrastructure as Code, Site reliability engineering",
    icon: GitBranch
  },
  {
    title: "Digital Transformation",
    description: "Legacy modernization, Agile adoption, Cultural change",
    icon: Sparkles
  }
];

export const Technology = () => {
  return (
    <section className="py-24 gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-6 animate-fade-in">Technology Focus</h2>
          <div className="h-1 w-24 bg-accent mx-auto mb-16 rounded-full" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <Card 
                  key={index} 
                  className="p-6 shadow-card hover:shadow-elegant transition-smooth hover:scale-[1.05] group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-smooth">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="font-bold">{tech.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {tech.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
