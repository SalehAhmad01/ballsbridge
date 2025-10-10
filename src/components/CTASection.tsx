import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary-light to-primary-dark text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-white/90 mb-8 leading-relaxed">
            Get a free consultation and quote from our expert team. We'll turn your vision into reality with safety, quality, and on-time delivery guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent-hover text-accent-foreground font-semibold text-base shadow-xl group"
            >
              Request a Quote
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold text-base"
            >
              Call Us: +234-XXX-XXXX-XXX
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
