import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Building2, Home, Wrench, Hammer, ClipboardList, PenTool } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Commercial Construction",
      description: "From office fit-outs to multi-storey complexes, we deliver turnkey commercial solutions with strict quality control, minimal disruption to operations, and adherence to international building standards.",
      features: [
        "Office buildings & complexes",
        "Retail & shopping centers",
        "Hotels & hospitality",
        "Industrial facilities",
      ],
    },
    {
      icon: Home,
      title: "Residential Construction",
      description: "Building dream homes and residential complexes with attention to detail, modern design, and timely completion. We handle everything from luxury villas to large-scale housing developments.",
      features: [
        "Luxury villas & mansions",
        "Residential estates",
        "Apartment complexes",
        "Affordable housing",
      ],
    },
    {
      icon: Wrench,
      title: "Renovation & Refurbishment",
      description: "Breathing new life into existing structures with modern upgrades, structural improvements, and aesthetic enhancements while preserving historical and architectural integrity where needed.",
      features: [
        "Building modernization",
        "Structural repairs",
        "Interior renovations",
        "Facility upgrades",
      ],
    },
    {
      icon: Hammer,
      title: "Civil Works",
      description: "Infrastructure projects including roads, bridges, drainage systems, and utilities built to last. We bring expertise in both urban and rural development projects.",
      features: [
        "Roads & highways",
        "Bridges & flyovers",
        "Drainage systems",
        "Site development",
      ],
    },
    {
      icon: ClipboardList,
      title: "Project Management",
      description: "End-to-end project oversight ensuring on-time, on-budget delivery with transparent communication, risk management, and quality assurance throughout the construction lifecycle.",
      features: [
        "Cost management",
        "Timeline optimization",
        "Quality control",
        "Stakeholder coordination",
      ],
    },
    {
      icon: PenTool,
      title: "Design & Build",
      description: "Integrated design and construction services for seamless project execution. Our in-house architects and engineers work together to deliver cohesive, innovative solutions.",
      features: [
        "Architectural design",
        "Structural engineering",
        "MEP coordination",
        "3D visualization",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="font-heading text-4xl font-bold sm:text-5xl mb-6">
                Comprehensive Construction Solutions
              </h1>
              <p className="text-lg text-white/90 leading-relaxed">
                From concept to completion, we provide integrated construction services tailored to your unique needs. Our experienced team delivers excellence across every project type.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="grid gap-8 lg:gap-12">
              {services.map((service, index) => (
                <Card key={index} className="border-border hover:border-accent transition-colors duration-300">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-accent/10 flex-shrink-0">
                        <service.icon className="h-7 w-7 text-accent" strokeWidth={2} />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="font-heading text-2xl mb-3">{service.title}</CardTitle>
                        <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4 mt-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-accent mr-2"></div>
                          <span className="text-sm text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6">
                      <Button variant="link" className="text-accent hover:text-accent-hover p-0 h-auto font-semibold">
                        Request a consultation →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-secondary/50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading text-3xl font-bold mb-4">
                Not Sure Which Service You Need?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Our team will work with you to understand your requirements and recommend the best approach for your project.
              </p>
              <Button size="lg" className="bg-accent hover:bg-accent-hover">
                Schedule a Free Consultation
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
