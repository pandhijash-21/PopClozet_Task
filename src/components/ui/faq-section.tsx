import { PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "How does the 60-minute delivery work?",
    answer:
      "Once you place your order, our team picks, quality-checks, and packs your outfit from our local micro-warehouse. We partner with reliable delivery services to ensure your outfit arrives within 60 minutes. You'll get real-time tracking so you know exactly when it's arriving!",
  },
  {
    question: "What about hygiene and cleaning?",
    answer:
      "Every single outfit is professionally dry-cleaned and sanitized after each rental. We use eco-friendly cleaning methods and seal each item in a protective bag. Your outfit will arrive fresh, clean, and ready to wear - it's like getting brand new clothes every time.",
  },
  {
    question: "What if I spill something or damage an item?",
    answer:
      "Life happens! Minor wear and tear is completely covered - that's normal use. For accidental stains or damage, we have a simple damage protection fee (much cheaper than buying the item). Just let us know what happened when you return it, and we'll take care of the rest.",
  },
  {
    question: "How long is a standard rental?",
    answer:
      "Our standard rental is 48 hours, giving you plenty of time to wear and enjoy your outfit. Need it longer? You can easily extend your rental through the app. We'll arrange a convenient pickup time when you're done - no washing required!",
  },
  {
    question: "Is this really more sustainable than buying?",
    answer:
      "Absolutely! By sharing clothes instead of everyone buying their own, we dramatically reduce fashion waste and overproduction. One outfit can be worn by dozens of people instead of sitting in a closet unused. Plus, our eco-friendly cleaning process and local delivery minimize environmental impact.",
  },
  {
    question: "What happens if my outfit doesn't fit?",
    answer:
      "We understand that fit is everything. If your outfit doesn't fit perfectly, just let us know within 2 hours of delivery and we'll send a replacement size immediately - no extra charge. Our goal is to ensure you look and feel amazing, with zero stress.",
  },
  {
    question: "Can I rent multiple items at once?",
    answer:
      "Yes! You can rent complete outfits or mix and match individual pieces. Our 'Pop Looks' feature lets you rent a complete stylist-approved outfit, or you can browse our 'Mix & Match' closet to pick individual pieces that work with what you already own.",
  },
  {
    question: "What's the return process like?",
    answer:
      "Super simple! When you're done, just put everything back in the free return bag we provide, and schedule a pickup through the app. We'll come collect it at your convenience. No washing, no dry cleaning, no hassle - we handle everything!",
  },
];

function FAQ() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="flex gap-10 flex-col">
            <div className="flex gap-4 flex-col">
              <div>
                <Badge variant="outline">FAQ</Badge>
              </div>
              <div className="flex gap-2 flex-col">
                <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-regular">
                  Got Questions? We've Got Answers.
                </h4>
                <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                  Everything you need to know about Popclozet. From delivery times to cleaning processes, we've covered all your questions about renting the perfect outfit.
                </p>
              </div>
              <div className="">
                <Button className="gap-4" variant="outline">
                  Any questions? Reach out <PhoneCall className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export { FAQ };

