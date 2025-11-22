const FounderNote = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-background/95 via-primary/5 to-background">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-4 md:space-y-6 text-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 rounded-3xl blur-3xl"></div>
          <div className="relative space-y-4 md:space-y-6 p-8 md:p-12 rounded-3xl bg-card/50 backdrop-blur-sm border border-primary/10 shadow-soft animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-headline">
              A Note from Our Founders
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground italic leading-relaxed px-4">
              "I started Popclozet from a simple, recurring panic: 'I have a closet full of clothes, but nothing to wear.' I was tired of spending money on trendy outfits I'd wear once... Popclozet is the solution I always wanted—an endless, sustainable closet that gives you the freedom to wear a new outfit for every new plan. Why limit your style?"
            </p>
            <p className="text-sm md:text-base lg:text-lg font-medium text-headline">
              — Viraj Pondkule & Vraj Shah, Founders of Popclozet
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderNote;
