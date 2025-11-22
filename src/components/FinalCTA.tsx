import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const FinalCTA = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      try {
        const { error } = await supabase
          .from('email_signups')
          .insert({ email, source: 'cta' });
        
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

  return (
    <section id="cta" className="py-16 md:py-24 px-4 bg-gradient-to-br from-primary via-primary/95 to-primary/90 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,rgba(255,255,255,0.05)_50%,transparent_100%)] animate-pulse"></div>
      <div className="container mx-auto max-w-4xl text-center space-y-8 md:space-y-10 relative z-10">
        <div className="space-y-4 md:space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-background px-4 drop-shadow-lg">
            Ready to Unlock Your Endless Closet?
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-background/95 max-w-3xl mx-auto px-4 drop-shadow-md">
            Be the first to know when we launch and get 50% off your first rental. Don't miss out.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto px-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 min-h-[48px] h-12 md:h-16 text-base md:text-lg bg-background/95 backdrop-blur-sm border-2 border-background/20 focus:ring-2 focus:ring-background/50 focus:border-background rounded-xl px-4 transition-all duration-300 hover:border-background/40"
            />
            <Button
              type="submit"
              size="lg"
              className="min-h-[48px] h-12 md:h-16 px-6 md:px-10 bg-background hover:bg-background/95 text-headline font-bold text-base md:text-lg shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 rounded-xl w-full sm:w-auto hover:shadow-2xl"
            >
              Join the Early Bird List
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FinalCTA;
