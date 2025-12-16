// import { Building2, Home, Wrench, Hammer, ClipboardList, PenTool } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Link } from "react-router-dom";

// const ServicesSection = () => {
//   const services = [
//     {
//       icon: Building2,
//       title: "General Contracting",
//       description: "Complete project delivery from planning to execution,ensuring quality, safety, and on-time completion.",
     
//     },
//     {
//       icon: Home,
//       title: "Residential Construction",
//       description: "Building dream homes and residential complexes with attention to detail, modern design, and timely completion. We handle everything from luxury villas to large-scale housing developments.",
//       features: [
//         "Luxury villas & mansions",
//         "Residential estates",
//         "Apartment complexes",
//         "Affordable housing",
//       ],
//     },
//     {
//       icon: Wrench,
//       title: "Renovation & Refurbishment",
//       description: "Breathing new life into existing structures with modern upgrades, structural improvements, and aesthetic enhancements while preserving historical and architectural integrity where needed.",
//       features: [
//         "Building modernization",
//         "Structural repairs",
//         "Interior renovations",
//         "Facility upgrades",
//       ],
//     },
//     {
//       icon: Hammer,
//       title: "Civil Works",
//       description: "Infrastructure projects including roads, bridges, drainage systems, and utilities built to last. We bring expertise in both urban and rural development projects.",
//       features: [
//         "Roads & highways",
//         "Bridges & flyovers",
//         "Drainage systems",
//         "Site development",
//       ],
//     },
//     {
//       icon: ClipboardList,
//       title: "Project Management",
//       description: "End-to-end project oversight ensuring on-time, on-budget delivery with transparent communication, risk management, and quality assurance throughout the construction lifecycle.",
//       features: [
//         "Cost management",
//         "Timeline optimization",
//         "Quality control",
//         "Stakeholder coordination",
//       ],
//     },
//     {
//       icon: PenTool,
//       title: "Design & Build",
//       description: "Integrated design and construction services for seamless project execution. Our in-house architects and engineers work together to deliver cohesive, innovative solutions.",
//       features: [
//         "Architectural design",
//         "Structural engineering",
//         "MEP coordination",
//         "3D visualization",
//       ],
//     },
//   ];

//   return (
//     <section className="py-20 bg-background">
//       <div className="container">
//         <div className="text-center mb-12">
//           <h2 className="font-heading text-3xl font-bold sm:text-4xl mb-4">
//             Our Services
//           </h2>
//           <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
//             Comprehensive construction solutions tailored to your needs
//           </p>
//         </div>

//         <div className="grid gap-8 lg:gap-12 md:grid-cols-2">
//           {services.map((service, index) => (
//             <Card key={index} className="border-border hover:border-accent transition-colors duration-300">
//               <CardHeader>
//                 <div className="flex items-start gap-4">
//                   <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-accent/10 flex-shrink-0">
//                     <service.icon className="h-7 w-7 text-accent" strokeWidth={2} />
//                   </div>
//                   <div className="flex-1">
//                     <CardTitle className="font-heading text-2xl mb-3">{service.title}</CardTitle>
//                     <p className="text-muted-foreground leading-relaxed">{service.description}</p>
//                   </div>
//                 </div>
//               </CardHeader>
//               <CardContent>
//                 <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4 mt-4">
//                   {service.features.map((feature, idx) => (
//                     <div key={idx} className="flex items-center">
//                       <div className="h-1.5 w-1.5 rounded-full bg-accent mr-2"></div>
//                       <span className="text-sm text-foreground">{feature}</span>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="mt-6">
//                   <Button variant="link" className="text-accent hover:text-accent-hover p-0 h-auto font-semibold">
//                     Request a consultation →
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;
  import {
  Building2,
  Sun,
  Truck,
  PenTool,
  Wrench,
  ClipboardList,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      icon: Building2,
      title: "General Contracting",
      description:
        "End-to-end construction project delivery from planning to completion, ensuring quality, safety, and on-time execution.",
      features: [
        "Project planning & scheduling",
        "Budget & cost control",
        "Site supervision",
        "Quality & safety management",
      ],
    },
    {
      icon: Sun,
      title: "Solar & Street Lighting",
      description:
        "Sustainable solar panel and street lighting solutions for public and private spaces, designed for efficiency and durability.",
      features: [
        "Solar system design",
        "Street solar lights",
        "Installation & setup",
        "Energy-efficient solutions",
      ],
    },
    {
      icon: Truck,
      title: "Supply Chain Management",
      description:
        "Optimized sourcing, procurement, and logistics services to ensure timely delivery of materials and equipment.",
      features: [
        "Material procurement",
        "Vendor management",
        "Inventory control",
        "Logistics coordination",
      ],
    },
    {
      icon: PenTool,
      title: "Engineering & Design",
      description:
        "Innovative and practical engineering solutions delivered through close collaboration with clients.",
      features: [
        "Architectural design",
        "Structural engineering",
        "MEP engineering",
        "Civil & site development",
      ],
    },
    {
      icon: Wrench,
      title: "Maintenance & Support",
      description:
        "Comprehensive maintenance and technical support services to ensure long-term system performance.",
      features: [
        "Preventive maintenance",
        "Emergency repairs",
        "System monitoring",
        "Spare parts replacement",
      ],
    },
    {
      icon: ClipboardList,
      title: "Consulting & Advisory",
      description:
        "Expert consulting services to support informed decision-making and successful project outcomes.",
      features: [
        "Project planning",
        "Feasibility studies",
        "Regulatory compliance",
        "Cost & performance optimization",
      ],
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
            Comprehensive contracting, engineering, and renewable energy
            solutions tailored to your project needs.
          </p>
        </div>

        <div className="grid gap-8 lg:gap-12 md:grid-cols-2">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-border hover:border-accent transition-colors duration-300"
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-accent/10 flex-shrink-0">
                    <service.icon
                      className="h-7 w-7 text-accent"
                      strokeWidth={2}
                    />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="font-heading text-2xl mb-3">
                      {service.title}
                    </CardTitle>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4 mt-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent mr-2"></div>
                      <span className="text-sm text-foreground">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <Button
                    asChild
                    variant="link"
                    className="text-accent hover:text-accent-hover p-0 h-auto font-semibold"
                  >
                    <Link to="/services">Learn more →</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

