import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import residentialImage from "@/assets/residential-project.jpg";
import craftsmanshipImage from "@/assets/craftsmanship.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Lagos Riverfront Residential Complex",
      image: residentialImage,
      category: "Residential",
      description: "120-unit residential complex delivered in 18 months, 5% under budget.",
      stats: { units: "120", duration: "18 months", status: "Completed" },
    },
    {
      title: "Commercial Office Tower",
      image: craftsmanshipImage,
      category: "Commercial",
      description: "15-storey office building with state-of-the-art facilities and green certification.",
      stats: { floors: "15", area: "45,000 sqm", status: "In Progress" },
    },
  ];

  return (
    <section className="py-20 bg-secondary/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Delivering excellence across Nigeria — see our recent work
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 mb-12">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border-border hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block rounded-full bg-accent px-3 py-1 text-sm font-semibold text-accent-foreground">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-4 mb-4 text-sm">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key}>
                      <span className="font-semibold text-foreground">{value}</span>
                      <span className="text-muted-foreground ml-1 capitalize">{key}</span>
                    </div>
                  ))}
                </div>
                <Button variant="link" className="text-accent hover:text-accent-hover p-0 h-auto font-semibold">
                  View case study →
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
