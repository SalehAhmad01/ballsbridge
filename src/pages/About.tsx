import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, Shield, Users, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="font-heading text-4xl font-bold sm:text-5xl mb-6">
                Building Nigeria's Future, One Project at a Time
              </h1>
              <p className="text-lg text-white/90 leading-relaxed">
                For over 15 years, Ballsbrige Construction has been at the forefront of Nigeria's construction industry, delivering world-class commercial, residential, and civil engineering projects with unwavering commitment to safety, quality, and client satisfaction.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="font-heading text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  To deliver exceptional construction solutions that exceed client expectations while maintaining the highest standards of safety, sustainability, and professional excellence.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We believe in building more than structures — we build lasting relationships, thriving communities, and a better Nigeria for future generations.
                </p>
              </div>
              <div>
                <h2 className="font-heading text-3xl font-bold mb-6">Core Values</h2>
                <ul className="space-y-3">
                  {["Safety First", "Quality Excellence", "Client Focus", "Integrity & Transparency", "Innovation & Sustainability"].map((value, index) => (
                    <li key={index} className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-accent mr-3"></div>
                      <span className="text-foreground font-medium">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-secondary/50">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: TrendingUp, label: "Years of Excellence", value: "15+" },
                { icon: Users, label: "Expert Team Members", value: "200+" },
                { icon: Award, label: "Projects Delivered", value: "500+" },
                { icon: Shield, label: "Safety Certifications", value: "ISO 9001" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="h-12 w-12 text-accent mx-auto mb-4" strokeWidth={1.5} />
                  <div className="font-heading text-4xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
