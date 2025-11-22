import Navigation from "@/components/Navigation";
import { FeatureWithImageComparison } from "@/components/ui/feature-with-image-comparison";
import CircularHowItWorks from "@/components/CircularHowItWorks";
import BenefitGrid from "@/components/BenefitGrid";
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";
import FAQ from "@/components/FAQ";
import FounderNote from "@/components/FounderNote";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const Index = () => {

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section with Image Comparison */}
      <FeatureWithImageComparison
        badgeText="Fashion Revolution"
        title="New Outfit Everyday, Delivered in 60 Minutes."
        description="Why own it when you can rent it? Get the perfect outfit for dates, parties, and trips from your endless closet—on demand, no commitment necessary. Drag to see the transformation!"
        beforeImage="https://images.unsplash.com/photo-1445205170230-053b83016050?w=1920&q=80"
        afterImage="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80"
        beforeImageAlt="Before - Limited wardrobe options"
        afterImageAlt="After - Endless closet with Popclozet"
      />

      {/* Benefit Grid */}
      <BenefitGrid />

      {/* Testimonials */}
      <section id="testimonials" className="py-16 md:py-24 px-4 bg-gradient-to-b from-accent/20 via-accent/15 to-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-headline text-center mb-4 md:mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Why Our Users Love Popclozet
          </h2>
          <p className="text-muted-foreground text-center mb-12 md:mb-16 text-base md:text-lg lg:text-xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
            Real stories from our early testers
          </p>
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            <StaggerTestimonials />
          </div>
        </div>
      </section>

      {/* How It Works - Circular Design */}
      <CircularHowItWorks />

      {/* FAQ */}
      <FAQ />

      {/* Founder's Note */}
      <FounderNote />

      {/* Final CTA */}
      <FinalCTA />

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Index;
