import { Button } from "@/components/ui/button";
import { LinkedinIcon, ArrowRight } from "lucide-react";
import headshotPlaceholder from "@/assets/amitgandhi_cto_hshot.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="text-accent font-semibold text-lg tracking-wide uppercase">Technology Leader</span>
            </div>
            <h1 className="text-balance leading-tight">
              Amit Gandhi
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed text-balance">
              Co-Founder | CTO
            </p>
            <p className="text-lg text-white/80 leading-relaxed max-w-xl">
              Building scalable technology, AI platforms, and global teams that drive lasting business impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" variant="hero" onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}>
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white hover:text-primary backdrop-blur-sm" asChild>
                <a href="https://www.linkedin.com/in/agandhi5/" target="_blank" rel="noopener noreferrer">
                  <LinkedinIcon className="mr-2 h-5 w-5" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </div>

          {/* Headshot */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-accent rounded-full blur-2xl opacity-50" />
              <img
                src={headshotPlaceholder}
                alt="Amit Gandhi"
                className="relative rounded-full w-full shadow-elegant border-4 border-white/20"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};
