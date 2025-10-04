import { Card } from "@/components/ui/card";
import { GraduationCap, Heart, Lightbulb, Users } from "lucide-react";

const advisoryRoles = [
  {
    title: "FirstTimeCEO Mentor",
    description: "Guiding first-time founders through the challenges of building technology companies and scaling engineering teams.",
    icon: GraduationCap,
    impact: "20+ founders mentored"
  },
  {
    title: "FTC Leadership Development",
    description: "Coaching emerging technical leaders on navigating the transition from individual contributor to engineering management.",
    icon: Users,
    impact: "50+ leaders coached"
  },
  {
    title: "Startup Technical Advisor",
    description: "Providing strategic guidance on technology architecture, team building, and scaling challenges for early-stage startups.",
    icon: Lightbulb,
    impact: "10+ startups advised"
  },
  {
    title: "Executive Coaching",
    description: "One-on-one coaching for CTOs and VPs of Engineering on leadership effectiveness and organizational transformation.",
    icon: Heart,
    impact: "100+ sessions delivered"
  }
];

export const Advisory = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-6 animate-fade-in">Advisory & Mentoring</h2>
          <div className="h-1 w-24 bg-accent mx-auto mb-8 rounded-full" />
          
          <div className="text-center mb-16 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <p className="text-xl italic text-muted-foreground max-w-3xl mx-auto">
              "Helping emerging leaders grow through clarity, curiosity, and accountability."
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {advisoryRoles.map((role, index) => {
              const Icon = role.icon;
              return (
                <Card 
                  key={index} 
                  className="p-8 shadow-card hover:shadow-elegant transition-smooth hover:scale-[1.02] animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="font-bold text-xl">{role.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {role.description}
                    </p>
                    <div className="pt-2 border-t w-full">
                      <span className="text-sm font-semibold text-accent">{role.impact}</span>
                    </div>
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
