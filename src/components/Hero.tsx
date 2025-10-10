import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-construction.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern construction site with workers and crane"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20 lg:py-32">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl mb-6 leading-tight">
            Building landmarks. Delivering on time.
          </h1>
          <p className="text-lg text-white/90 sm:text-xl mb-8 max-w-2xl leading-relaxed">
            Commercial, residential and civil construction across Nigeria. Safety-first, budget-focused, quality guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent-hover text-accent-foreground font-semibold text-base shadow-xl"
            >
              Request a Quote
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold text-base"
            >
              See Projects
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
