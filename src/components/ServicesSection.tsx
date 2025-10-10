import { Building2, Home, Wrench, Hammer, ClipboardList, PenTool } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: Building2,
      title: "Commercial Construction",
      description: "From office fit-outs to multi-storey complexes — turnkey delivery with strict quality control.",
    },
    {
      icon: Home,
      title: "Residential Construction",
      description: "Building dream homes and residential complexes with attention to detail and timely completion.",
    },
    {
      icon: Wrench,
      title: "Renovation & Refurbishment",
      description: "Breathing new life into existing structures with modern upgrades and structural improvements.",
    },
    {
      icon: Hammer,
      title: "Civil Works",
      description: "Infrastructure projects including roads, bridges, and utilities built to last.",
    },
    {
      icon: ClipboardList,
      title: "Project Management",
      description: "End-to-end project oversight ensuring on-time, on-budget delivery.",
    },
    {
      icon: PenTool,
      title: "Design & Build",
      description: "Integrated design and construction services for seamless project execution.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive construction solutions tailored to your needs
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="border-border hover:border-accent transition-colors duration-300 group">
              <CardHeader>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="h-7 w-7 text-accent" strokeWidth={2} />
                </div>
                <CardTitle className="font-heading text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  {service.description}
                </CardDescription>
                <Button variant="link" className="text-accent hover:text-accent-hover p-0 h-auto font-semibold">
                  Learn more →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
