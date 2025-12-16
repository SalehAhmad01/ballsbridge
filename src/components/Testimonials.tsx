import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Ballsbrige Construction delivered our office complex 3 weeks ahead of schedule and under budget. Their attention to safety and quality was exceptional.",
      author: "Chidi Okonkwo",
      position: "CEO, TechHub Nigeria",
      company: "TechHub Nigeria",
    },
    {
      quote: "Professional, reliable, and always transparent. They transformed our vision into reality with minimal disruption to our operations.",
      author: "Aisha Mohammed",
      position: "Facilities Director",
      company: "Federal Ministry of Works",
    },
    {
      quote: "The best construction partner we've worked with. Their project management and communication throughout the build was outstanding.",
      author: "Emeka Adeleke",
      position: "Property Developer",
      company: "Adeleke Properties Ltd",
    },
  ];

  return (
    <section className="py-20 bg-red-500 text-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trusted by leading organizations across Nigeria
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border hover:border-accent transition-colors duration-300">
              <CardContent className="pt-6">
                <Quote className="h-10 w-10 text-accent/30 mb-4" />
                <p className="text-foreground mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-heading font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
