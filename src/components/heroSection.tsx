const HeroSection = () => {
  return (
    <section className="text-foreground flex items-start justify-center">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
          {"Welcome to my Codnity home assignment"}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          {
            "Here is the simple react app done for a frontend developer posiontion"
          }
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
