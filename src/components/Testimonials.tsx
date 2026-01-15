import { Card, CardContent } from "@/components/ui/card";
import MDProfileImage from "../assets/images/md.jpeg";

const Testimonials = () => {
  return (
    <section className="py-20 bg-background/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl mb-4">
            Leadership & Vision
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Driving excellence in construction and development with integrity and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* MD Image and Bio */}
          <div className="flex flex-col items-center lg:items-start space-y-6">
            <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src={MDProfileImage}
                alt="Engr. Halifa - Managing Director"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 will-change-transform"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold font-heading">Engr. Halifa Rabi'u</h3>
                <p className="text-white/90 font-medium">Managing Director</p>
              </div>
            </div>

            <div className="max-w-md text-center lg:text-left">
              <p className="text-lg text-muted-foreground leading-relaxed italic">
                "Our mission is to build more than just structures; we build trust, community, and the future. Every project is a testament to our commitment to excellence."
              </p>
            </div>
          </div>

          {/* Mission and Vision */}
          <div className="space-y-8">
            <Card className="border-l-4 border-l-primary shadow-lg bg-card hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="mb-4 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl">
                    🎯
                  </div>
                  <h3 className="text-2xl font-bold font-heading">Our Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Our mission is to exceed
                  client expectations by delivering
                  exceptional services, fostering
                  relationships built on trust, and
                  contributing to the growth and
                  development of any industry
                  we work with.

                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent shadow-lg bg-card hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="mb-4 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center text-2xl">
                    👁️
                  </div>
                  <h3 className="text-2xl font-bold font-heading">Our Vision</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Our vision is to be the preferred
                  choice for contractors and
                  suppliers, known for our reliability,
                  quality workmanship, and innovative
                  solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
