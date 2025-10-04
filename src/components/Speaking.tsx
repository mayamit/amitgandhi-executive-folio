import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Mic } from "lucide-react";

const speakingEngagements = [
  {
    event: "NVIDIA AI Summit 2024",
    topic: "Building Production-Ready AI Platforms",
    location: "San Jose, CA",
    date: "March 2024",
    type: "Keynote"
  },
  {
    event: "Databricks AI World Cup",
    topic: "Enterprise Data Strategy for AI",
    location: "San Francisco, CA",
    date: "June 2024",
    type: "Panel Discussion"
  },
  {
    event: "GCC Leadership Forum",
    topic: "Leading Global Engineering Centers",
    location: "Bangalore, India",
    date: "August 2024",
    type: "Workshop"
  },
  {
    event: "AWS re:Invent",
    topic: "Cloud-Native Architecture at Scale",
    location: "Las Vegas, NV",
    date: "November 2024",
    type: "Technical Talk"
  },
  {
    event: "CTO Summit",
    topic: "The Future of Technical Leadership",
    location: "New York, NY",
    date: "September 2024",
    type: "Fireside Chat"
  },
  {
    event: "DevOps Enterprise Summit",
    topic: "Platform Engineering Success Stories",
    location: "Virtual",
    date: "October 2024",
    type: "Case Study"
  }
];

export const Speaking = () => {
  return (
    <section className="py-24 gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center mb-6 animate-fade-in">Speaking & Media</h2>
          <div className="h-1 w-24 bg-accent mx-auto mb-16 rounded-full" />
          
          <div className="grid md:grid-cols-2 gap-6">
            {speakingEngagements.map((engagement, index) => (
              <Card 
                key={index} 
                className="p-6 shadow-card hover:shadow-elegant transition-smooth hover:scale-[1.02] animate-fade-in"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Mic className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-accent uppercase tracking-wide">
                        {engagement.type}
                      </span>
                    </div>
                    <h3 className="font-bold mb-2 leading-tight">{engagement.event}</h3>
                    <p className="text-sm text-foreground mb-3">
                      {engagement.topic}
                    </p>
                    <div className="flex flex-col gap-1 text-xs text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3" />
                        <span>{engagement.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                        <span>{engagement.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
