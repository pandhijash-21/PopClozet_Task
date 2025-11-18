const CircularHowItWorks = () => {
  const steps = [
    {
      number: "01.",
      title: "Pick Your Look",
      description: "Browse endless styles for any occasion.",
      position: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
    },
    {
      number: "02.",
      title: "Delivered in 60 Mins",
      description: "Your outfit arrives, ready to wear.",
      position: "bottom-[15%] right-0 translate-x-[40%]",
    },
    {
      number: "03.",
      title: "Wear & Return",
      description: "Enjoy the moment. We handle the rest.",
      position: "bottom-[15%] left-0 -translate-x-[40%]",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="hidden md:block relative w-full max-w-md mx-auto aspect-square">
          {/* Circular path */}
          <div className="absolute inset-0 rounded-full border-2 border-gray-200"></div>
          
          {/* Central recycle symbol */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#16a34a"
              strokeWidth="1.5"
              className="w-full h-full"
            >
              <path d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7" />
              <path d="M12 7L14 5M12 7L10 5" />
              <path d="M7 12L5 10M7 12L5 14" />
              <path d="M17 12L19 14M17 12L19 10" />
            </svg>
          </div>

          {/* Curved arrows following the circular path */}
          <svg className="absolute inset-0 w-full h-full -rotate-30" viewBox="0 0 200 200">
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 10 3, 0 6" fill="#16a34a" />
              </marker>
            </defs>
            {/* Arrow from Step 1 to Step 2 */}
            <path
              d="M 100 20 A 70 70 0 0 1 160 130"
              fill="none"
              stroke="#16a34a"
              strokeWidth="2"
              markerEnd="url(#arrowhead)"
            />
            {/* Arrow from Step 2 to Step 3 */}
            <path
              d="M 160 135 A 70 70 0 0 1 40 135"
              fill="none"
              stroke="#16a34a"
              strokeWidth="2"
              markerEnd="url(#arrowhead)"
            />
            {/* Arrow from Step 3 to Step 1 */}
            <path
              d="M 35 130 A 70 70 0 0 1 95 20"
              fill="none"
              stroke="#16a34a"
              strokeWidth="2"
              markerEnd="url(#arrowhead)"
            />
          </svg>

          {/* Steps positioned around the circle */}
          {steps.map((step, index) => (
            <div
              key={index}
              className={`absolute ${step.position} text-center max-w-[200px]`}
            >
              <div className="bg-background p-5 rounded-lg shadow-sm">
                <div className="text-5xl font-bold text-primary/60 mb-2">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-headline mb-2">
                  {step.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Version - Stacked */}
        <div className="md:hidden space-y-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center space-y-3 p-6 rounded-2xl bg-card shadow-card border border-border/50"
            >
              <div className="text-4xl font-bold text-primary/60">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-headline">
                {step.title}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CircularHowItWorks;
