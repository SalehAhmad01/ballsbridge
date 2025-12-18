import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShieldCheck, Users, FileSearch, ClipboardCheck, PackageCheck, Smile } from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import imperative from "@/assets/images/imperative.jpg";
import team from "@/assets/images/team.jpg";
import compliance from "@/assets/images/Compliance.png";
import skill from "@/assets/images/skill.png";


const assuranceItems: { icon: ComponentType<SVGProps<SVGSVGElement>>; title: string; description: string; image?: string }[] = [
  {
    icon: ShieldCheck,
    title: "Regulatory Compliance",
    description:
      "All projects and materials meet or exceed legal requirements, industry benchmarks, and safety standards.",
    image: undefined,
  },
  {
    icon: Users,
    title: "Skilled & Experienced Team",
    description:
      "Our professionals include contractors, engineers, architects, and project managers with proven industry expertise.",
                     
  },
  {
    icon: FileSearch,
    title: "Detailed Planning & Design",
    description:
      "Comprehensive planning identifies risks early and ensures efficient, high-quality project execution.",
  },
  {
    icon: ClipboardCheck,
    title: "Inspection & Quality Control",
    description:
      "Regular inspections and testing throughout the project lifecycle ensure compliance and excellence.",
  },
  {
    icon: PackageCheck,
    title: "Quality Supply & Materials",
    description:
      "We source durable, high-performance materials from reputable suppliers to ensure long-term reliability.",
  },
  {
    icon: Smile,
    title: "Customer Satisfaction",
    description:
      "We prioritize client needs and feedback to deliver solutions that exceed expectations and build trust.",
  },
];

const projects = [
  {
    title: "Imperative Services",
    description:
      "As a full-service contractor and Team supplier company, we offer a widerange of services to meet our clients' diverse needs .",
    image: imperative,
  },
  {
    title: "Experienced Team",
    description:
      "Our team members bring a wealth of knowledge,expertise, and dedicationto every project, ensuring that we deliver results thatare innovative, cost-effective,and sustainable.",
    image: team,
  },
  {
    title: "Compliance with Regulation",
    description:
      "Our projects and supplied materials meet or exceed legal requirements and industry benchmarks to ensure compliance and safety.",
    image: compliance,
  },
  {
    title: "Skilled Team",
    description:
      "We have a team of highly skilled and experienced professionals in various fields, including contractors, project managers, architects, engineers, and suppliers.",
    image: skill,
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="font-heading text-4xl font-bold sm:text-5xl mb-6">
                Why Choose BallsBridge
              </h1>
              <p className="text-lg text-white/90 leading-relaxed">
                At Balsbridge Contractors, we are a leading provider of 
                reliable and high-quality services in the construction and 
                procurement industry.With a strong emphasis on safety, quality,
                and customer satisfaction, we have established ourselves as a 
                trusted partner for clients seeking excellence in project delivery. 
                Here's why you should choose Ballsbridge Contractors for your 
                next project</p>

            </div>
          </div>
        </section>

        {/* Quality Assurance Section */}
        <section className="py-20 bg-background">
          <div className="container">
            {/* Header */}
            <div className="max-w-3xl mx-auto mb-16 text-center">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary mb-4">
                Quality Assurance
              </h2>
              <p className="text-muted-foreground text-lg">
                At BallsBridge Contractors Limited, we understand the critical 
                 importance of quality assurance in ensuring the success of our 
                 projects and the satisfaction of our clients. Our commitment to 
                 excellence is reflected in our rigorous quality assurance processes
                 that are integrated into every aspectof our operations, from 
                 contracting to supply services. Here's how we uphold our 
                 standards of quality
              </p>
            </div>

            {/* Grid */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {assuranceItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-sm p-6 border border-border hover:shadow-md transition overflow-hidden"
                  >
                    {item.image && (
                      <div className="mb-4 h-40 rounded-lg overflow-hidden">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                      </div>
                    )}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-heading text-lg font-semibold">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
                Why Choose Our Services
              </h2>
              <p className="text-muted-foreground text-lg">
                Comprehensive construction solutions tailored to your unique needs.
              </p>
            </div>

            <div className="space-y-16">
              {projects.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  className={`grid gap-6 md:grid-cols-2 items-center ${
                    i % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image column */}
                  <div className="flex justify-center md:justify-start">
                    <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden shadow-lg bg-gradient-to-br from-primary/20 to-accent/20">
                      {p.image ? (
                        <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                          <span>Image</span>
                        </div>
                      )}
                      {/* Decorative accents (red/blue arcs) */}
                      <svg
                        className="absolute -left-4 -bottom-4"
                        width="120"
                        height="120"
                        viewBox="0 0 120 120"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 120 L120 120 L120 0 Z" fill="var(--primary)" />
                      </svg>
                      <svg
                        className="absolute -right-4 -top-4"
                        width="80"
                        height="80"
                        viewBox="0 0 80 80"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M80 0 L80 80 L0 80 Z" fill="var(--accent)" />
                      </svg>
                    </div>
                  </div>

                  {/* Text column */}
                  <div className="p-4 md:p-8">
                    <span className="inline-block bg-accent text-white px-2 py-1 rounded text-sm font-semibold mb-4">
                      Service
                    </span>
                    <h3 className="text-2xl md:text-3xl font-serif text-primary font-bold mb-3">
                      {p.title}
                    </h3>
                    <p className="text-gray-700 mb-6">{p.description}</p>
                    <div className="flex gap-4 items-center">
                      <Link
                        to="/projects"
                        className="text-primary font-semibold hover:underline"
                      >
                        View case study →
                      </Link>
                      <Link to="/contact">
                        <Button size="sm" className="bg-accent text-white">
                          Request a Quote
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
