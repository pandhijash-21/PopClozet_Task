import { Sparkles, Clock, Leaf, Shirt } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const benefits = [
  {
    icon: Sparkles,
    title: "Event-Ready 'Pop Looks'",
    description: "Got a date, party, or fest? Rent a complete, stylist-approved outfit with one tap. Your 'go-to' look for any event.",
    delay: "0ms"
  },
  {
    icon: Shirt,
    title: "The 'Mix & Match' Closet",
    description: "Just need a new top? Browse thousands of individual pieces to complete the look you already have. Total creative freedom.",
    delay: "150ms"
  },
  {
    icon: Clock,
    title: "Rent It ASAP",
    description: "Your plans are spontaneous, so we are too. Your outfit arrives at your door—fresh, clean, and ready to wear—in 60 minutes.",
    delay: "300ms"
  },
  {
    icon: Leaf,
    title: "Smart, Simple, Sustainable",
    description: "Look amazing for 10-15% of the retail price. When you're done, just use the free return bag. We handle all the dry cleaning.",
    delay: "450ms"
  },
];

const BenefitGrid = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="benefits" className="py-20 md:py-32 px-4 bg-gradient-to-b from-background via-background/95 to-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-headline mb-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Your Endless Closet, Explained
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
            Stages of Your Style Journey
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <div
                key={index}
                className={cn(
                  "group relative rounded-3xl p-8 transition-all duration-500 ease-out",
                  "bg-primary text-primary-foreground",
                  "hover:scale-[1.02] hover:shadow-2xl",
                  "border-2 border-primary/50 hover:border-secondary/50",
                  "animate-in fade-in slide-in-from-bottom-8 duration-1000",
                  "overflow-hidden cursor-pointer"
                )}
                style={{
                  animationDelay: benefit.delay,
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Subtle gradient overlay on hover */}
                <div 
                  className={cn(
                    "absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20 transition-opacity duration-500",
                    isHovered ? "opacity-100" : "opacity-0"
                  )}
                />
                
                {/* Shine effect on hover */}
                <div 
                  className={cn(
                    "absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent",
                    "transform -skew-x-12 translate-x-[-200%] transition-transform duration-1000",
                    isHovered && "translate-x-[200%]"
                  )}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={cn(
                      "w-20 h-20 rounded-2xl flex items-center justify-center",
                      "bg-white",
                      "transform transition-all duration-500",
                      isHovered && "scale-110 rotate-3"
                    )}>
                      <Icon className="w-10 h-10 text-primary" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4 transition-all duration-300 group-hover:translate-x-2">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-primary-foreground/80 leading-relaxed text-base transition-all duration-300 group-hover:translate-x-1">
                    {benefit.description}
                  </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-32 h-32 bg-secondary/5 rounded-full blur-2xl" />
                <div className="absolute bottom-4 left-4 w-24 h-24 bg-secondary/5 rounded-full blur-xl" />
              </div>
            );
          })}
        </div>

        {/* Mobile/Tablet Stack */}
        <div className="lg:hidden space-y-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <div
                key={index}
                className={cn(
                  "group relative rounded-3xl p-6 transition-all duration-500",
                  "bg-primary text-primary-foreground",
                  "border-2 border-primary/50",
                  "animate-in fade-in slide-in-from-bottom-8 duration-1000",
                  "overflow-hidden"
                )}
                style={{
                  animationDelay: benefit.delay,
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Subtle gradient overlay on hover */}
                <div 
                  className={cn(
                    "absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20 transition-opacity duration-500",
                    isHovered ? "opacity-100" : "opacity-0"
                  )}
                />

                <div className="relative z-10">
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className={cn(
                      "w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0",
                      "bg-white",
                      "transform transition-all duration-500",
                      isHovered && "scale-110 rotate-3"
                    )}>
                      <Icon className="w-8 h-8 text-primary" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary-foreground mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-primary-foreground/80 text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-2 right-2 w-24 h-24 bg-secondary/5 rounded-full blur-xl" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitGrid;
