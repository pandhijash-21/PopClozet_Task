import {
  CustomAccordion,
  CustomAccordionItem,
  CustomAccordionTrigger,
  CustomAccordionContent,
} from "@/components/ui/custom-faq-accordion";

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
      "We understand that fit is everything, and we've designed our service to solve this. Our goal is to ensure you look and feel amazing, with zero stress.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-16 md:py-20 px-4 bg-background">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-headline text-center mb-3 md:mb-4">
          Got Questions? We've Got Answers.
        </h2>
        <p className="text-muted-foreground text-center mb-8 md:mb-12 text-base md:text-lg">
          Everything you need to know about Popclozet
        </p>

        <CustomAccordion type="single" collapsible defaultValue="item-0" className="space-y-6">
          {faqs.map((faq, index) => (
            <CustomAccordionItem key={index} value={`item-${index}`}>
              <CustomAccordionTrigger>{faq.question}</CustomAccordionTrigger>
              <CustomAccordionContent>{faq.answer}</CustomAccordionContent>
            </CustomAccordionItem>
          ))}
        </CustomAccordion>
      </div>
    </section>
  );
};

export default FAQ;
