"use client";

import { Steps } from "@ark-ui/react/steps";
import { Check, Shirt, Truck } from "lucide-react";
import { useState, useEffect } from "react";

export default function StepsWithDescriptions() {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { 
      title: "Pick Your Look", 
      description: "Browse endless styles for any occasion.",
      position: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
    },
    { 
      title: "Delivered in 60 Mins", 
      description: "Your outfit arrives, ready to wear.",
      position: "bottom-[15%] right-0 translate-x-[40%]"
    },
    { 
      title: "Wear & Return", 
      description: "Enjoy the moment. We handle the rest.",
      position: "bottom-[15%] left-0 -translate-x-[40%]"
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        // Cycle through steps: 1 -> 2 -> 3 -> 1
        return prev >= 3 ? 1 : prev + 1;
      });
    }, 3000); // Change step every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full px-4 py-12 flex items-center justify-center">
      {/* Desktop Circular Layout */}
      <div className="hidden md:block relative w-full max-w-md mx-auto aspect-square">
        {/* Circular path indicator */}
        <div className="absolute inset-0 rounded-full border-2 border-border/30"></div>
        
        {/* Curved lines following the circular path */}
        <svg className="absolute inset-0 w-full h-full -rotate-30" viewBox="0 0 200 200">
          {/* Line from Step 1 to Step 2 */}
          <path
            d="M 100 20 A 70 70 0 0 1 160 130"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth={currentStep === 1 ? "3" : "2"}
            className={`transition-all duration-500 ${currentStep === 1 ? 'opacity-100' : 'opacity-40'}`}
          />
          {/* Line from Step 2 to Step 3 */}
          <path
            d="M 160 135 A 70 70 0 0 1 40 135"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth={currentStep === 2 ? "3" : "2"}
            className={`transition-all duration-500 ${currentStep === 2 ? 'opacity-100' : 'opacity-40'}`}
          />
          {/* Line from Step 3 to Step 1 */}
          <path
            d="M 35 130 A 70 70 0 0 1 95 20"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth={currentStep === 3 ? "3" : "2"}
            className={`transition-all duration-500 ${currentStep === 3 ? 'opacity-100' : 'opacity-40'}`}
          />
        </svg>

        {/* Central icon - changes based on current step */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 flex flex-col items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full transition-all duration-500">
          {currentStep === 1 && (
            <div className="flex flex-col items-center gap-1 animate-in fade-in zoom-in-95 duration-500">
              <Shirt className="w-10 h-10 text-primary" strokeWidth={1.5} />
            </div>
          )}
          {currentStep === 2 && (
            <div className="flex flex-col items-center gap-1 animate-in fade-in zoom-in-95 duration-500">
              <Truck className="w-10 h-10 text-primary animate-bounce" strokeWidth={1.5} />
            </div>
          )}
          {currentStep === 3 && (
            <div className="flex flex-col items-center gap-1 animate-in fade-in zoom-in-95 duration-500">
              <span className="text-5xl">😀</span>
            </div>
          )}
        </div>

        <Steps.Root count={3} step={currentStep} className="w-full h-full">
          <Steps.List className="relative w-full h-full">
            {steps.map((step, index) => {
              const isCurrent = currentStep === index + 1;
              const isComplete = currentStep > index + 1;
              
              return (
                <Steps.Item
                  key={index}
                  index={index}
                  className={`absolute ${step.position} text-center max-w-[200px] transition-all duration-500`}
                >
                  <Steps.Trigger className="flex flex-col items-center gap-3 text-center rounded-md group w-full">
                    <Steps.Indicator className={`flex justify-center items-center shrink-0 rounded-full font-semibold w-12 h-12 text-base border-2 relative mb-2 transition-all duration-500 ${
                      isCurrent 
                        ? 'bg-primary text-primary-foreground border-primary scale-110 shadow-lg' 
                        : isComplete
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'bg-muted text-muted-foreground border-border'
                    }`}>
                      {isComplete ? (
                        <Check className="w-5 h-5" />
                      ) : (
                        <span>{index + 1}</span>
                      )}
                    </Steps.Indicator>
                    <div className={`flex flex-col items-center bg-background p-4 rounded-lg shadow-card border transition-all duration-500 ${
                      isCurrent 
                        ? 'border-primary/50 shadow-lg scale-105' 
                        : 'border-border/50'
                    }`}>
                      <span className={`text-base font-bold mb-1 transition-colors duration-500 ${
                        isCurrent ? 'text-primary' : 'text-headline'
                      }`}>
                        {step.title}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {step.description}
                      </span>
                    </div>
                  </Steps.Trigger>
                </Steps.Item>
              );
            })}
          </Steps.List>
        </Steps.Root>
      </div>

      {/* Mobile Version - Stacked */}
      <div className="md:hidden w-full max-w-2xl">
        <Steps.Root count={3} step={currentStep} className="w-full">
          <Steps.List className="inline-flex w-full flex-col space-y-8">
            {steps.map((step, index) => {
              const isCurrent = currentStep === index + 1;
              const isComplete = currentStep > index + 1;
              
              return (
                <Steps.Item
                  key={index}
                  index={index}
                  className="flex items-start relative flex-1 transition-all duration-500 mb-2"
                >
                  <Steps.Trigger className="flex items-start gap-5 text-left rounded-md group w-full">
                    <Steps.Indicator className={`flex justify-center items-center shrink-0 rounded-full font-semibold w-12 h-12 text-sm border-2 relative transition-all duration-500 z-10 ${
                      isCurrent 
                        ? 'bg-primary text-primary-foreground border-primary scale-105' 
                        : isComplete
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'bg-muted text-muted-foreground border-border'
                    }`}>
                      {isComplete ? (
                        <Check className="w-5 h-5" />
                      ) : (
                        <span>{index + 1}</span>
                      )}
                    </Steps.Indicator>
                    <div className={`flex flex-col flex-1 bg-background p-4 rounded-lg shadow-card border transition-all duration-500 min-w-0 ${
                      isCurrent 
                        ? 'border-primary/50 shadow-lg' 
                        : 'border-border/50'
                    }`}>
                      <span className={`text-base font-bold mb-1 transition-colors duration-500 ${
                        isCurrent ? 'text-primary' : 'text-headline'
                      }`}>
                        {step.title}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {step.description}
                      </span>
                    </div>
                  </Steps.Trigger>
                </Steps.Item>
              );
            })}
          </Steps.List>
        </Steps.Root>
      </div>
    </div>
  );
}

