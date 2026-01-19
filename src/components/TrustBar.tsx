import { Award, Calendar, Shield, Users } from "lucide-react";

const TrustBar = () => {
  const stats = [
    { icon: Calendar, label: "Years in Business", value: "15+" },
    { icon: Users, label: "Projects Completed", value: "500+" },
    { icon: Shield, label: "Safety Record", value: "Zero LTI" },
    // { icon: Award, label: "Certifications", value: "ISO 9001" },
  ];

  return (
    <section className="bg-secondary py-12 border-y border-border">
      <div className="container">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <stat.icon className="h-10 w-10 text-accent mb-3" strokeWidth={1.5} />
              <div className="font-heading text-3xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
