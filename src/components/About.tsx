export const About = () => {
  return (
    <section className="py-24 gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-6 animate-fade-in">Leadership Story</h2>
          <div className="h-1 w-24 bg-accent mx-auto mb-12 rounded-full" />
          
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <p>
              With over two decades of experience bridging strategy with execution, I've built my career at the intersection of technology, business, and leadership. As a Co-Founder and CTO, I don't just architect systems—I architect organizations that scale.
            </p>
            <p>
              My journey spans continents and cultures, from building AI platforms in Silicon Valley to leading global engineering teams across the US, India, and Europe. This cross-cultural experience has shaped my philosophy: great technology isn't just about elegant code or cutting-edge AI—it's about understanding people, markets, and the human context in which technology operates.
            </p>
            <p>
              Whether it's scaling a startup to $10M+ in revenue, transforming legacy systems at Fortune 500 companies, or mentoring the next generation of technical leaders, my approach remains the same: blend visionary thinking with pragmatic execution, lead with empathy and accountability, and never lose sight of the business impact behind every technical decision.
            </p>
            <p className="text-xl font-semibold text-foreground pt-4 italic">
              "Technology is only as powerful as the teams that build it and the problems it solves."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
