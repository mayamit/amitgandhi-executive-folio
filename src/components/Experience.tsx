import { Card } from "@/components/ui/card";
import { Building2, TrendingUp, Users, Zap } from "lucide-react";

const experiences = [
  {
    title: "Co-Founder & CTO",
    company: "Parkar Digital",
    period: "2015 - Present",
    achievements: [
      "$10M+ revenue impact through AI-driven solutions",
      "Led 200+ person global engineering organization",
      "Built scalable cloud platforms serving Fortune 500 clients",
      "40% faster time-to-market through DevOps transformation"
    ],
    icon: Building2
  },
  {
    title: "Sr. Engineering Manager",
    company: "Sears Global",
    period: "2012 - 2015",
    achievements: [
      "80% improvement in customer satisfaction scores",
      "Led digital transformation initiatives",
      "Managed cross-functional teams across 3 continents",
      "Reduced operational costs by 35% through automation"
    ],
    icon: TrendingUp
  },
  {
    title: "Technical Leadership",
    company: "Oracle, Neustar, Fannie Mae, AOL",
    period: "2000 - 2012",
    achievements: [
      "Architected enterprise-scale data platforms",
      "Led cloud migration strategies",
      "Built high-performing engineering teams",
      "Delivered mission-critical systems for millions of users"
    ],
    icon: Users
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-6 animate-fade-in">Experience & Impact</h2>
          <div className="h-1 w-24 bg-accent mx-auto mb-16 rounded-full" />
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border transform -translate-x-1/2" />
            
            <div className="space-y-12">
              {experiences.map((exp, index) => {
                const Icon = exp.icon;
                return (
                  <div 
                    key={index} 
                    className="relative animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Timeline dot */}
                    <div className="hidden md:block absolute left-1/2 top-8 w-4 h-4 bg-accent rounded-full transform -translate-x-1/2 border-4 border-background" />
                    
                    <div className={`md:grid md:grid-cols-2 gap-8 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                      <div className={index % 2 === 0 ? 'md:text-right' : 'md:col-start-2'}>
                        <Card className="p-6 shadow-card hover:shadow-elegant transition-smooth hover:scale-[1.02]">
                          <div className="flex items-start gap-4 md:flex-row-reverse md:justify-end">
                            <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center ${index % 2 === 0 ? 'md:order-first' : ''}`}>
                              <Icon className="w-6 h-6 text-accent" />
                            </div>
                            <div className={index % 2 === 0 ? 'md:text-right' : ''}>
                              <h3 className="font-bold mb-1">{exp.title}</h3>
                              <p className="text-accent font-semibold mb-1">{exp.company}</p>
                              <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
                              <ul className={`space-y-2 text-sm ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                                {exp.achievements.map((achievement, i) => (
                                  <li key={i} className="flex items-start gap-2">
                                    {index % 2 === 0 ? (
                                      <>
                                        <span className="md:order-2">{achievement}</span>
                                        <Zap className="w-4 h-4 text-accent flex-shrink-0 mt-0.5 md:order-1" />
                                      </>
                                    ) : (
                                      <>
                                        <Zap className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                                        <span>{achievement}</span>
                                      </>
                                    )}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </Card>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
