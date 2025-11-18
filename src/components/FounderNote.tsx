const FounderNote = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-4 md:space-y-6 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-headline">
            A Note from Our Founders
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground italic leading-relaxed px-4">
            "I started Popclozet from a simple, recurring panic: 'I have a closet full of clothes, but nothing to wear.' I was tired of spending money on trendy outfits I'd wear once... Popclozet is the solution I always wanted—an endless, sustainable closet that gives you the freedom to wear a new outfit for every new plan. Why limit your style?"
          </p>
          <p className="text-sm md:text-base lg:text-lg font-medium text-headline">
            — Viraj Pondkule & Vraj Shah, Founders of Popclozet
          </p>
        </div>
      </div>
    </section>
  );
};

export default FounderNote;
