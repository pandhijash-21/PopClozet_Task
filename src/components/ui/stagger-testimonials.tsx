import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial: "Perfect for my last-minute date! Got the perfect dress delivered before my cab even arrived.",
    by: "Riya S., Verified Early Tester • Juhu",
    imgSrc: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop"
  },
  {
    tempId: 1,
    testimonial: "I'm obsessed. I get to wear new, trendy clothes every week without going broke or cluttering my wardrobe.",
    by: "Aman K., Verified Early Tester • Bandra",
    imgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
  },
  {
    tempId: 2,
    testimonial: "Popclozet saved my life during wedding season! Rented 5 different outfits for different events.",
    by: "Priya M., Verified Early Tester • Andheri",
    imgSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
  },
  {
    tempId: 3,
    testimonial: "The quality is amazing and the delivery is so fast. I can't imagine going back to buying clothes.",
    by: "Sneha R., Verified Early Tester • Powai",
    imgSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
  },
  {
    tempId: 4,
    testimonial: "Best decision I made this year! My wardrobe is now endless without the clutter.",
    by: "Arjun P., Verified Early Tester • Versova",
    imgSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
  },
  {
    tempId: 5,
    testimonial: "SO SO SO HAPPY WE FOUND POPCLOZET! I've saved so much money and space.",
    by: "Kavya N., Verified Early Tester • Lokhandwala",
    imgSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop"
  },
  {
    tempId: 6,
    testimonial: "Took some convincing, but now that I'm on Popclozet, I'm never going back to buying clothes.",
    by: "Rohan D., Verified Early Tester • Goregaon",
    imgSrc: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop"
  },
  {
    tempId: 7,
    testimonial: "The convenience is unmatched. I get designer outfits for a fraction of the price.",
    by: "Ananya T., Verified Early Tester • Khar",
    imgSrc: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop"
  },
  {
    tempId: 8,
    testimonial: "It's just the best. Period.",
    by: "Vikram S., Verified Early Tester • Santacruz",
    imgSrc: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop"
  },
  {
    tempId: 9,
    testimonial: "I switched 3 months ago and never looked back. My friends are all jealous!",
    by: "Meera K., Verified Early Tester • Malad",
    imgSrc: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&h=150&fit=crop"
  },
  {
    tempId: 10,
    testimonial: "I've been searching for a solution like Popclozet for YEARS. So glad I finally found one!",
    by: "Rahul M., Verified Early Tester • Borivali",
    imgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
  },
  {
    tempId: 11,
    testimonial: "It's so simple and intuitive. I got my first outfit delivered in 60 minutes!",
    by: "Isha B., Verified Early Tester • Vile Parle",
    imgSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop"
  },
  {
    tempId: 12,
    testimonial: "Popclozet's customer support is unparalleled. They're always there when I need them.",
    by: "Neha R., Verified Early Tester • Dadar",
    imgSrc: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop"
  },
  {
    tempId: 13,
    testimonial: "The efficiency gains I've seen since using Popclozet are off the charts!",
    by: "Aditya G., Verified Early Tester • Chembur",
    imgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
  },
  {
    tempId: 14,
    testimonial: "Popclozet has revolutionized how I handle my wardrobe. It's a game-changer!",
    by: "Shreya L., Verified Early Tester • Thane",
    imgSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
  },
  {
    tempId: 15,
    testimonial: "The scalability is impressive. I can rent anything from casual to formal wear seamlessly.",
    by: "Karan J., Verified Early Tester • Navi Mumbai",
    imgSrc: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop"
  },
  {
    tempId: 16,
    testimonial: "I appreciate how Popclozet continually adds new styles. They're always one step ahead.",
    by: "Pooja V., Verified Early Tester • Kurla",
    imgSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop"
  },
  {
    tempId: 17,
    testimonial: "The ROI I've seen with Popclozet is incredible. It's paid for itself many times over.",
    by: "Siddharth A., Verified Early Tester • BKC",
    imgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
  },
  {
    tempId: 18,
    testimonial: "Popclozet's platform is so robust, yet easy to use. It's the perfect balance.",
    by: "Tanvi M., Verified Early Tester • Worli",
    imgSrc: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop"
  },
  {
    tempId: 19,
    testimonial: "We've tried many solutions, but Popclozet stands out in terms of reliability and performance.",
    by: "Varun S., Verified Early Tester • Lower Parel",
    imgSrc: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop"
  }
];

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  position, 
  testimonial, 
  handleMove, 
  cardSize 
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter 
          ? "z-10 bg-primary text-primary-foreground border-primary" 
          : "z-0 bg-card text-card-foreground border-border hover:border-primary/50"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px hsl(var(--border))" : "0px 0px 0px 0px transparent"
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-border"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2
        }}
      />
      <img
        src={testimonial.imgSrc}
        alt={`${testimonial.by.split(',')[0]}`}
        className="mb-4 h-14 w-12 bg-muted object-cover object-top"
        style={{
          boxShadow: "3px 3px 0px hsl(var(--background))"
        }}
      />
      <h3 className={cn(
        "text-base sm:text-xl font-medium",
        isCenter ? "text-primary-foreground" : "text-foreground"
      )}>
        "{testimonial.testimonial}"
      </h3>
      <p className={cn(
        "absolute bottom-8 left-8 right-8 mt-2 text-sm italic",
        isCenter ? "text-primary-foreground/80" : "text-muted-foreground"
      )}>
        - {testimonial.by}
      </p>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);
  const [isPaused, setIsPaused] = useState(false);

  const handleMove = useCallback((steps: number) => {
    setIsPaused(true);
    setTestimonialsList((prevList) => {
      const newList = [...prevList];
      if (steps > 0) {
        for (let i = steps; i > 0; i--) {
          const item = newList.shift();
          if (!item) return prevList;
          newList.push({ ...item, tempId: Math.random() });
        }
      } else {
        for (let i = steps; i < 0; i++) {
          const item = newList.pop();
          if (!item) return prevList;
          newList.unshift({ ...item, tempId: Math.random() });
        }
      }
      return newList;
    });
    
    // Resume auto-rotation after 5 seconds of inactivity
    setTimeout(() => {
      setIsPaused(false);
    }, 5000);
  }, []);

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Auto-rotation effect
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      handleMove(1);
    }, 500); // Rotate every 0.5 seconds

    return () => clearInterval(interval);
  }, [isPaused, handleMove]);

  return (
    <div
      className="relative w-full overflow-hidden bg-muted/30"
      style={{ height: 600 }}
    >
      {testimonialsList.map((testimonial, index) => {
        const position = testimonialsList.length % 2
          ? index - (testimonialsList.length + 1) / 2
          : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <button
        onClick={() => handleMove(-1)}
        className={cn(
          "absolute left-4 top-1/2 -translate-y-1/2 z-50",
          "flex h-14 w-14 items-center justify-center text-2xl transition-colors rounded-full",
          "bg-background border-2 border-border hover:bg-primary hover:text-primary-foreground",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          "shadow-lg"
        )}
        aria-label="Previous testimonial"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={() => handleMove(1)}
        className={cn(
          "absolute right-4 top-1/2 -translate-y-1/2 z-50",
          "flex h-14 w-14 items-center justify-center text-2xl transition-colors rounded-full",
          "bg-background border-2 border-border hover:bg-primary hover:text-primary-foreground",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          "shadow-lg"
        )}
        aria-label="Next testimonial"
      >
        <ChevronRight />
      </button>
    </div>
  );
};

