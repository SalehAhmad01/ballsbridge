// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import { Award, Shield, Users, TrendingUp } from "lucide-react";

// const About = () => {
//   return (
//     <div className="min-h-screen">
//       <Header />
//       <main>
//         {/* Hero Section */}
//         <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
//           <div className="container">
//             <div className="max-w-3xl">
//               <h1 className="font-heading text-4xl font-bold sm:text-5xl mb-6">
//                 Building Nigeria's Future, One Project at a Time
//               </h1>
//               <p className="text-lg text-white/90 leading-relaxed">
//                 For over 15 years, Ballsbrige Construction has been at the forefront of Nigeria's construction industry, delivering world-class commercial, residential, and civil engineering projects with unwavering commitment to safety, quality, and client satisfaction.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Mission & Values */}
//         <section className="py-20 bg-background">
//           <div className="container">
//             <div className="grid gap-12 lg:grid-cols-2">
//               <div>
//                 <h2 className="font-heading text-3xl font-bold mb-6">Our Mission</h2>
//                 <p className="text-muted-foreground leading-relaxed mb-4">
//                   To deliver exceptional construction solutions that exceed client expectations while maintaining the highest standards of safety, sustainability, and professional excellence.
//                 </p>
//                 <p className="text-muted-foreground leading-relaxed">
//                   We believe in building more than structures — we build lasting relationships, thriving communities, and a better Nigeria for future generations.
//                 </p>
//               </div>
//               <div>
//                 <h2 className="font-heading text-3xl font-bold mb-6">Core Values</h2>
//                 <ul className="space-y-3">
//                   {["Safety First", "Quality Excellence", "Client Focus", "Integrity & Transparency", "Innovation & Sustainability"].map((value, index) => (
//                     <li key={index} className="flex items-center">
//                       <div className="h-2 w-2 rounded-full bg-accent mr-3"></div>
//                       <span className="text-foreground font-medium">{value}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Stats */}
//         <section className="py-20 bg-secondary/50">
//           <div className="container">
//             <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
//               {[
//                 { icon: TrendingUp, label: "Years of Excellence", value: "15+" },
//                 { icon: Users, label: "Expert Team Members", value: "200+" },
//                 { icon: Award, label: "Projects Delivered", value: "500+" },
//                 { icon: Shield, label: "Safety Certifications", value: "ISO 9001" },
//               ].map((stat, index) => (
//                 <div key={index} className="text-center">
//                   <stat.icon className="h-12 w-12 text-accent mx-auto mb-4" strokeWidth={1.5} />
//                   <div className="font-heading text-4xl font-bold text-foreground mb-2">{stat.value}</div>
//                   <div className="text-muted-foreground">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default About;
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, Shield, Users, TrendingUp } from "lucide-react";
import Section from "../components/common/Section";
import overviewImage from "../assets/images/road-cons.jpg"; // road/construction image
import valuesImage from "../assets/images/solor-pic.jpg";     // team/construction image

export default function About() {
  return (
    <>
    <Header />
      {/* HERO / PAGE INTRO */}
      <section className="bg-primary text-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Company Overview
          </h1>
          <p className="mt-4 max-w-3xl text-gray-200 text-lg">
            Delivering high-quality contracting, supply, and engineering
            services with a strong commitment to excellence and customer
            satisfaction.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <Section title="Who We Are">
        <div className="grid md:grid-cols-2 gap-10 items-center bg-blue-50 p-8 rounded-lg">
          <div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ballsbridge Contractors Ltd is a leading company specializing in
              providing high-quality contracting and supply services across
              multiple industries.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With a strong commitment to excellence and customer satisfaction,
              we have built a reputation for delivering top-notch solutions
              tailored to meet the specific needs of our clients.
            </p>
          </div>

          <img
            src={overviewImage}
            alt="Road construction project"
            className="rounded-lg shadow-md object-cover w-full h-64 md:h-80"
          />
        </div>
      </Section>

      {/* VISION & MISSION */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-lg shadow-sm border-2 border-accent hover:border-accent-hover">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To be the preferred choice for contractors and suppliers, known
              for our reliability, quality workmanship, and innovative
              solutions.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border-2 border-accent hover:border-accent-hover">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To exceed client expectations by delivering exceptional services,
              fostering relationships built on trust, and contributing to the
              growth and development of every industry we work with.
            </p>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <Section title="Our Core Values">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              title: "Integrity",
              text: "We conduct business with honesty, transparency, and ethical practices.",
            },
            {
              title: "Quality",
              text: "We strive for excellence in every project, ensuring top-notch workmanship.",
            },
            {
              title: "Customer Satisfaction",
              text: "We prioritize client needs and exceed expectations through dedicated service.",
            },
            {
              title: "Innovation",
              text: "We embrace creativity and continuous improvement to deliver modern solutions.",
            },
          ].map((value) => (
            <div
              key={value.title}
              className="bg-white border-2 border-accent p-6 rounded-lg text-center hover:shadow-md transition"
            >
              <h4 className="font-semibold text-lg text-primary mb-2">
                {value.title}
              </h4>
              <p className="text-gray-600 text-sm">
                {value.text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* EXPERIENCE SNAPSHOT */}
      <section className="bg-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <img
            src={valuesImage}
            alt="Construction team at work"
            className="rounded-lg shadow-lg object-cover w-full h-72 md:h-96"
          />

          <div>
            <h3 className="text-3xl font-bold mb-4">
              Built on Experience & Excellence
            </h3>
            <p className="text-gray-100 leading-relaxed">
              Over the years, we have honed our skills, expanded our capabilities,
              and built strong relationships with clients, suppliers, and
              industry partners. With a rich history of delivering excellence,
              we continue to set new standards across different sectors.
            </p>
          </div>
        </div>
      </section>
       <Footer />
    </>
  );
}
