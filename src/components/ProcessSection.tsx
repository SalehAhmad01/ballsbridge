import { ClipboardCheck, Hammer, Building, Key } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: ClipboardCheck,
      number: "01",
      title: "Plan",
      description: "Detailed project assessment, budgeting, and timeline development.",
    },
    {
      icon: Hammer,
      number: "02",
      title: "Build",
      description: "Expert construction with daily progress tracking and quality checks.",
    },
    {
      icon: Building,
      number: "03",
      title: "Manage",
      description: "Continuous oversight ensuring safety, schedule, and budget compliance.",
    },
    {
      icon: Key,
      number: "04",
      title: "Handover",
      description: "Final inspections, documentation, and seamless project transfer.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl mb-4">
            Our Process
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A proven approach that delivers results every time
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <step.icon className="h-10 w-10" strokeWidth={1.5} />
                </div>
                <div className="absolute top-8 -left-8 font-heading text-7xl font-bold text-secondary opacity-50 -z-10">
                  {step.number}
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 -right-12 w-24 h-0.5 bg-border"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
