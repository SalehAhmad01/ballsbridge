import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";
import RequestQuoteForm from "@/components/RequestQuoteForm";

const CTASection = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary-light to-primary-dark text-white relative">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-white/90 mb-8 leading-relaxed">
            Get a free consultation and quote from our expert team. We'll turn
            your vision into reality with safety, quality, and on-time delivery
            guaranteed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => setShowForm(true)}
              size="lg"
              className="bg-accent hover:bg-accent-hover text-accent-foreground font-semibold text-base shadow-xl group"
            >
              Request Quote
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-accent hover:bg-white hover:text-primary font-semibold text-base"
            >
              Call Us: +234-XXX-XXXX-XXX
            </Button>
          </div>
        </div>
      </div>

      {/* 🔹 Modal Overlay */}
      {showForm && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white text-black rounded-2xl shadow-2xl max-w-lg w-full p-6 relative">
            {/* Close button */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
            >
              <X className="h-6 w-6" />
            </button>

            <RequestQuoteForm />
          </div>
        </div>
      )}
    </section>
  );
};

export default CTASection;
