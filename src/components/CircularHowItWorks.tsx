import StepsWithDescriptions from "@/components/ui/demo";

const CircularHowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Pick Your Look",
      description: "Browse endless styles for any occasion. Find the perfect outfit that matches your event, mood, or style preference from our curated collection.",
    },
    {
      number: "02",
      title: "Delivered in 60 Mins",
      description: "Your outfit arrives, ready to wear. We deliver fresh, clean, and perfectly styled pieces directly to your door in just 60 minutes.",
    },
    {
      number: "03",
      title: "Wear & Return",
      description: "Enjoy the moment. We handle the rest. After your event, simply use the free return bag—we take care of all the dry cleaning.",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 px-4 bg-gradient-to-b from-background/95 to-background">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-headline text-center mb-4 md:mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          How It Works
        </h2>
        <p className="text-muted-foreground text-center mb-12 md:mb-20 text-lg md:text-xl max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
          Three simple steps to your perfect outfit
        </p>
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 xl:gap-20 items-center lg:items-start">
          {/* Left Side - Step Explanations */}
          <div className="w-full lg:w-1/2 space-y-6 lg:space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000 delay-200">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-headline mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Circular Diagram - Hidden on mobile */}
          <div className="hidden lg:flex w-full lg:w-1/2 justify-center animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
            <StepsWithDescriptions />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CircularHowItWorks;
