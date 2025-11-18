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
    <section id="cta" className="py-16 md:py-24 px-4 bg-primary">
      <div className="container mx-auto max-w-4xl text-center space-y-8 md:space-y-10">
        <div className="space-y-4 md:space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-background px-4">
            Ready to Unlock Your Endless Closet?
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-background/90 max-w-3xl mx-auto px-4">
            Be the first to know when we launch and get 50% off your first rental. Don't miss out.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto px-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 min-h-[48px] h-12 md:h-16 text-base md:text-lg bg-background border-0 focus:ring-2 focus:ring-background/50 rounded-xl px-4"
            />
            <Button
              type="submit"
              size="lg"
              className="min-h-[48px] h-12 md:h-16 px-6 md:px-10 bg-background hover:bg-background/90 text-headline font-bold text-base md:text-lg shadow-lg transition-all hover:scale-105 rounded-xl w-full sm:w-auto"
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
