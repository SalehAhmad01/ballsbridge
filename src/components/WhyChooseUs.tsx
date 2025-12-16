// import { CheckCircle2, Clock, DollarSign, Shield } from "lucide-react";

// const WhyChooseUs = () => {
//   const features = [
//     {
//       icon: Shield,
//       title: "Safety First",
//       description: "Zero Lost Time Injury (LTI) record with comprehensive safety protocols on every site.",
//     },
//     {
//       icon: Clock,
//       title: "On-Time Delivery",
//       description: "95% of projects completed on schedule through expert project management.",
//     },
//     {
//       icon: DollarSign,
//       title: "Budget Focused",
//       description: "Average 5% cost savings through efficient resource management and planning.",
//     },
//     {
//       icon: CheckCircle2,
//       title: "Quality Guaranteed",
//       description: "ISO 9001 certified with rigorous quality control at every construction phase.",
//     },
//   ];

//   return (
//     <section className="py-20 bg-background">
//       <div className="container">
//         <div className="text-center mb-12">
//           <h2 className="font-heading text-3xl font-bold sm:text-4xl mb-4">
//             Why Choose Ballsbrige Constructors LTD
//           </h2>
//           <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
//             Trusted by corporate, government, and residential clients nationwide
//           </p>
//         </div>

//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
//           {features.map((feature, index) => (
//             <div key={index} className="text-center group">
//               <div className="mb-4 flex justify-center">
//                 <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
//                   <feature.icon className="h-8 w-8 text-accent" strokeWidth={2} />
//                 </div>
//               </div>
//               <h3 className="font-heading text-xl font-bold mb-2">{feature.title}</h3>
//               <p className="text-muted-foreground text-sm">{feature.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;
import {
  ShieldCheck,
  Users,
  ClipboardCheck,
  Layers
} from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Layers,
      title: "End-to-End Services",
      description:
        "As a full-service contractor and supplier, we deliver construction, procurement, project management, and maintenance solutions under one trusted partner.",
    },
    {
      icon: Users,
      title: "Experienced Team",
      description:
        "Our professionals bring deep industry knowledge, technical expertise, and dedication to every project, delivering innovative and cost-effective results.",
    },
    {
      icon: ShieldCheck,
      title: "Quality Assurance",
      description:
        "We integrate rigorous quality assurance processes into every stage of our operations, ensuring compliance, reliability, and client satisfaction.",
    },
    {
      icon: ClipboardCheck,
      title: "Quality Supply & Inspection",
      description:
        "We source high-quality materials from reputable suppliers and conduct regular inspections to ensure durability, performance, and safety.",
    },
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Why Choose Ballsbridge Contractors Ltd
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Delivering reliable, high-quality contracting and supply services
            through experience, integrity, and proven systems.
          </p>
        </div>

        {/* Features */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition border-2 border-accent hover:border-accent-hover"
            >
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <feature.icon
                    className="h-8 w-8 text-primary"
                    strokeWidth={2}
                  />
                </div>
              </div>

              <h3 className="text-xl font-semibold text-primary mb-2">
                {feature.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
