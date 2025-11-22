import { useState, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { GripVertical } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface FeatureWithImageComparisonProps {
  badgeText?: string;
  title?: string;
  description?: string;
  beforeImage?: string;
  afterImage?: string;
  beforeImageAlt?: string;
  afterImageAlt?: string;
}

function FeatureWithImageComparison({
  badgeText = "Platform",
  title = "Something new!",
  description = "Managing a small business today is already tough.",
  beforeImage = "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&q=80",
  afterImage = "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80",
  beforeImageAlt = "Before",
  afterImageAlt = "After",
}: FeatureWithImageComparisonProps) {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [onMouseDown, setOnMouseDown] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const containerRef = useRef<HTMLDivElement>(null);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      try {
        const { error } = await supabase
          .from('email_signups')
          .insert({ email, source: 'hero' });
        
        if (error) throw error;
        
        toast.success("You're on the list! We'll be in touch soon.", {
          description: "Get ready for your endless closet experience.",
        });
        setEmail("");
      } catch (error) {
        toast.error("Oops! Something went wrong.", {
          description: "Please try again later.",
        });
      }
    }
  };

  const onMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!onMouseDown || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    let x = 0;

    if ("touches" in e && e.touches.length > 0) {
      x = e.touches[0].clientX - rect.left;
    } else if ("clientX" in e) {
      x = e.clientX - rect.left;
    }

    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  // Initial state at center (50%): 
  // - Left: colored background (primary) with white text
  // - Right: shows afterImage (full)
  
  // Moving left (<50%): 
  // - Left: gradually transitions from colored to white bg, white to black text
  // - Right: NO CHANGE (stays as afterImage)
  
  // Moving right (>50%):
  // - Left: stays colored
  // - Right: image changes (shows beforeImage more)
  
  // Calculate interpolation factor for LEFT movement (0 to 1)
  // At 50%: factor = 0 (colored bg, white text)
  // At 0%: factor = 1 (white bg, black text)
  const getLeftInterpolationFactor = () => {
    if (sliderPosition >= 50) return 0; // At or right of center, keep colored
    // Map 50-0% to 0-1 interpolation factor
    return (50 - sliderPosition) / 50;
  };

  const leftFactor = getLeftInterpolationFactor();

  // Interpolate background color from primary color (at 50%) to white (at 0%)
  // Primary: hsl(42, 56%, 29%)
  // White: hsl(0, 0%, 100%)
  const getBackgroundColor = () => {
    if (leftFactor === 0) return "hsl(var(--primary))"; // At center or right, keep colored
    
    // Interpolate HSL values from primary to white
    const h = 42 * (1 - leftFactor); // 42 to 0
    const s = 56 * (1 - leftFactor); // 56 to 0
    const l = 29 + (71 * leftFactor); // 29 to 100
    
    return `hsl(${h}, ${s}%, ${l}%)`;
  };

  // Interpolate text color from white (at 50%) to black (at 0%)
  const getTextColor = (opacity: number = 1) => {
    if (leftFactor === 0) {
      return `rgba(255, 255, 255, ${opacity})`; // At center or right, keep white
    }
    // Interpolate from white (255,255,255) to black (0,0,0)
    const value = Math.round(255 * (1 - leftFactor));
    return `rgba(${value}, ${value}, ${value}, ${opacity})`;
  };

  // Calculate image clip position for RIGHT side
  // At 50% or less: show full afterImage (clipPath = 100%, hide beforeImage)
  // At >50%: gradually show more beforeImage as we move right
  const getImageClipPosition = () => {
    if (sliderPosition <= 50) return 100; // Show full afterImage
    // Map 50-100% to 100-0% clipPath
    return 100 - ((sliderPosition - 50) * 2);
  };

  // Calculate right side background expansion
  // At 50% or less: white background (no colored overlay)
  // At >50%: colored background expands from left edge of right section
  // When moving back to center: gradually fades back to white
  const getRightBackgroundOverlay = () => {
    if (sliderPosition <= 50) {
      // At center or left, no colored overlay
      return {
        width: "0%",
        opacity: 0,
      };
    }
    // Calculate how much the colored bg should expand
    // At 50%: 0% width, 0 opacity
    // At 100%: 100% width (full right section), full opacity
    const expansionFactor = (sliderPosition - 50) / 50; // 0 to 1
    return {
      width: `${expansionFactor * 100}%`, // Expand to fill right section
      opacity: expansionFactor,
    };
  };

  return (
    <div className="w-full pt-16 pb-8 lg:pt-24 lg:pb-16 overflow-x-hidden">
      <div
        ref={containerRef}
        className="relative flex flex-col lg:flex-row rounded-none overflow-hidden shadow-2xl min-h-[800px] lg:min-h-[1000px] w-full max-w-full"
        onMouseMove={onMouseMove}
        onMouseUp={() => setOnMouseDown(false)}
        onMouseLeave={() => setOnMouseDown(false)}
        onTouchMove={onMouseMove}
        onTouchEnd={() => setOnMouseDown(false)}
      >
          {/* Slider Divider Line - Centered between left and right */}
          <div
            className="hidden lg:block absolute top-0 bottom-0 w-1 bg-white z-30 pointer-events-none shadow-lg"
            style={{
              left: sliderPosition + "%",
              transform: "translateX(-50%)",
            }}
          >
            <button
              className="bg-white rounded hover:scale-110 transition-all w-5 h-10 select-none absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-40 cursor-ew-resize flex justify-center items-center shadow-lg border border-gray-200 pointer-events-auto"
              onTouchStart={(e) => {
                setOnMouseDown(true);
                onMouseMove(e);
              }}
              onMouseDown={(e) => {
                setOnMouseDown(true);
                onMouseMove(e);
              }}
              onTouchEnd={() => setOnMouseDown(false)}
              onMouseUp={() => setOnMouseDown(false)}
              aria-label="Drag to compare"
            >
              <GripVertical className="h-4 w-4 text-gray-600 select-none" />
            </button>
          </div>

          {/* Left Side - Text Content with Dynamic Background */}
          <div
            className="flex-1 p-4 sm:p-6 lg:p-12 xl:p-16 flex flex-col justify-center gap-4 sm:gap-6 lg:gap-8 relative overflow-hidden w-full min-w-0 max-w-full"
            style={{
              background: getBackgroundColor(),
            }}
          >
            {badgeText && (
              <div className="w-full">
                <Badge 
                  variant="secondary" 
                  className="bg-secondary text-secondary-foreground"
                >
                  {badgeText}
                </Badge>
              </div>
            )}
            <div className="flex gap-3 sm:gap-4 flex-col w-full max-w-full">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight font-bold leading-tight break-words overflow-wrap-anywhere"
                style={{
                  color: getTextColor(1),
                  wordBreak: 'break-word',
                }}
              >
                {title}
              </h2>
              <p
                className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed break-words overflow-wrap-anywhere"
                style={{
                  color: getTextColor(0.9),
                  wordBreak: 'break-word',
                }}
              >
                {description}
              </p>
            </div>
            
            {/* Email Input Section */}
            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-2 w-full max-w-md mt-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 max-w-xs px-4 py-3 text-sm md:text-base rounded-xl border border-gray-200/50 bg-white/95 backdrop-blur-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all shadow-sm hover:shadow-md"
              />
              <button
                type="submit"
                className="relative px-4 py-2 text-sm rounded-lg bg-black text-white font-semibold hover:bg-gray-800 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-gray-900/50 hover:scale-105 active:scale-95 whitespace-nowrap transform overflow-hidden group"
                style={{
                  backgroundColor: leftFactor === 0 ? '#000' : '#000',
                }}
              >
                {/* Shine effect on hover */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
                
                {/* Button text with slide animation */}
                <span className="relative inline-block transition-transform duration-300 group-hover:translate-x-1">
                  Unlock my closet
                </span>
              </button>
            </form>
          </div>

          {/* Right Side - Image Comparison with Light Background */}
          <div className="flex-1 bg-background p-4 sm:p-6 lg:p-12 xl:p-16 flex items-center justify-center relative overflow-hidden w-full min-w-0 max-w-full">
            {/* Colored background overlay that expands from left edge of right section - only on desktop */}
            <div
              className="hidden lg:block absolute left-0 top-0 bottom-0 z-0"
              style={{
                width: getRightBackgroundOverlay().width,
                background: "hsl(var(--primary))",
                opacity: getRightBackgroundOverlay().opacity,
              }}
            />
            
            {/* Image container - above the background overlay */}
            <div className="relative w-full max-w-full overflow-hidden rounded-2xl select-none shadow-lg z-10" style={{ aspectRatio: '16/9' }}>
              <img
                src={beforeImage}
                alt={beforeImageAlt}
                className="absolute left-0 top-0 z-10 w-full h-full rounded-2xl select-none object-cover"
                style={{
                  clipPath: "inset(0 0 0 " + Math.max(0, Math.min(100, getImageClipPosition())) + "%)",
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
              <img
                src={afterImage}
                alt={afterImageAlt}
                className="absolute left-0 top-0 w-full h-full rounded-2xl select-none object-cover"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>
          </div>
      </div>
    </div>
  );
}

export { FeatureWithImageComparison };

