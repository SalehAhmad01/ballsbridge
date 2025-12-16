import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Building2, Home, Wrench, Hammer, ClipboardList, PenTool } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import residentialImage from "@/assets/residential-project.jpg";
import craftsmanshipImage from "@/assets/craftsmanship.jpg";
import solarImage from "@/assets/images/solor-pic.jpg";
import roadImage from "@/assets/images/road-cons.jpg";

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

        {/* Services (brochure style) */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="space-y-12">
              {services.map((service, index) => {
                const images = [residentialImage, craftsmanshipImage, solarImage, roadImage, residentialImage, craftsmanshipImage];
                const img = images[index] || residentialImage;
                return (
                  <div key={service.title} className={`grid gap-6 md:grid-cols-2 items-center overflow-hidden rounded-lg shadow-sm bg-white`}>
                    <div className={`relative ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
                      <img src={img} alt={service.title} className="w-full h-64 md:h-[360px] object-cover" />
                      <svg className="absolute left-0 bottom-0 -translate-y-6 md:-translate-y-8" width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 120 L120 120 L120 0 Z" fill="var(--primary)" />
                      </svg>
                      <svg className="absolute right-0 bottom-0 -translate-y-6 md:-translate-y-8" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M80 0 L80 80 L0 80 Z" fill="var(--accent)" />
                      </svg>
                    </div>

                    <div className={`p-8 ${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
                      <div className="flex items-center gap-4 mb-4">
                        <span className="inline-block bg-accent text-white px-2 py-1 rounded text-sm font-semibold">Our</span>
                        <h3 className="text-2xl md:text-3xl font-serif text-primary">Services</h3>
                      </div>

                      <h4 className="text-xl font-heading font-bold mb-3">{service.title}</h4>
                      <p className="text-gray-700 mb-4">{service.description}</p>

                      <ul className="space-y-3 mb-6">
                        {service.features.map((p, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0"></span>
                            <span className="text-gray-700 text-sm">{p}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex gap-4 items-center">
                        <Link to="/projects" className="text-primary font-semibold hover:underline">View case study →</Link>
                        <Link to="/contact">
                          <Button size="sm" className="bg-accent text-white">Request a Quote</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
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
