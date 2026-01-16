

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Building2, Home, Wrench, Hammer, ClipboardList, PenTool, X } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import general from "@/assets/images/general.jpg";
import last from "@/assets/images/last.webp";
import Maintenance from "@/assets/images/Maintenance.jpg";
import solar from "@/assets/images/solar.jpg";
import supply from "@/assets/images/supply.jpeg";
import blueprint from "@/assets/images/blueprint.webp";
import ball from "@/assets/images/ball.jpeg";



const services = [
  {
    icon: Building2,
    title: "General Contracting",
    description:
      "As experienced general contractors, we manage all aspects of construction projects from start to finish, ensuring timely delivery, cost efficiency, and the highest quality standards.",
    features: [
      "Project planning and scheduling",
      "Budget management and cost control",
      "Site supervision and coordination",
      "Quality control and assurance",
      "Safety management",
    ],
  },
  {
    icon: Wrench,
    title: "Street Solar Light Supply & Installation",
    description:
      "We specialize in the supply and installation of street solar lighting systems, delivering sustainable, energy-efficient solutions for public and private spaces.",
    features: [
      "Design and planning of solar lighting systems",
      "Procurement of high-quality solar components",
      "Installation and system setup",
      "Testing and commissioning",
    ],
  },
  {
    icon: ClipboardList,
    title: "Supply Chain Management",
    description:
      "Our supply chain management services optimize operations by ensuring timely delivery of materials and equipment while reducing operational costs.",
    features: [
      "Sourcing and procurement of construction materials",
      "Vendor evaluation and management",
      "Inventory control and management",
      "Logistics and transportation coordination",
      "Supply chain risk management",
    ],
  },
  {
    icon: PenTool,
    title: "Engineering & Design",
    description:
      "Our engineering and design team collaborates closely with clients to deliver innovative, efficient, and practical solutions tailored to project requirements.",
    features: [
      "Architectural design and planning",
      "Structural engineering",
      "Mechanical, electrical, and plumbing (MEP) engineering",
      "Civil engineering and site development",
      "Renewable energy system design",
    ],
  },
  {
    icon: Hammer,
    title: "Maintenance & Support",
    description:
      "To ensure long-term performance and durability, we provide comprehensive maintenance and technical support services for all installations.",
    features: [
      "Preventive maintenance programs",
      "Emergency repair services",
      "System performance monitoring",
      "Technical support and troubleshooting",
      "Spare parts and replacement services",
    ],
  },
  {
    icon: Home,
    title: "Consulting & Advisory",
    description:
      "Leverage our industry expertise to make informed decisions and achieve successful project outcomes through our professional consulting services.",
    features: [
      "Strategic project planning and development",
      "Market analysis and feasibility studies",
      "Regulatory compliance and permitting",
      "Contract negotiation and management",
      "Performance improvement and cost reduction",
    ],
  },
];

const Services = () => {
  const [showForm, setShowForm] = useState(false);

  const heroVariants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <motion.section
          className="bg-gradient-to-br from-primary to-primary-dark text-white py-20"
          variants={heroVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
        >
          <div className="container">
            <div className="max-w-3xl">
              <motion.h1 className="font-heading text-4xl font-bold sm:text-5xl mb-6">Comprehensive Construction Solutions</motion.h1>
              <motion.p className="text-lg text-white/90 leading-relaxed">
                From concept to completion, we provide integrated construction services tailored to your unique needs. Our experienced team delivers excellence across every project type.
              </motion.p>
            </div>
          </div>
        </motion.section>

        {/* Services (brochure style) */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="space-y-12">
              {services.map((service, index) => {
                const images = [ball, solar, supply, blueprint, Maintenance, last];
                const img = images[index] || ball;
                return (
                  <motion.div key={service.title} variants={cardVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className={`grid gap-6 md:grid-cols-2 items-center overflow-hidden rounded-lg shadow-sm bg-white`}>
                    <div className={`relative ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
                      <img src={img} alt={service.title} className="w-full h-64 md:h-[360px] object-cover" />
                      <svg className="absolute left-0 bottom-0 -translate-y-6 md:-translate-y-8" width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 120 L120 120 L120 0 Z" fill="var(--primary)" />
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
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-secondary">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading text-3xl font-bold mb-4">Not Sure Which Service You Need?</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Our team will work with you to understand your requirements and recommend the best approach for your project.
              </p>
              <Button onClick={() => setShowForm(true)} size="lg" className="bg-accent hover:bg-accent-hover">
                Schedule a Free Consultation
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
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

            <ContactForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;

