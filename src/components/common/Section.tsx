import { ReactNode } from "react";

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
}

export default function Section({ title, subtitle, children }: SectionProps) {
  return (
    <section className="py-20 w-full">
      <div className="max-w-7xl mx-auto px-4">
        {title && (
          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              {title}
            </h2>

            {subtitle && (
              <p className="mt-3 max-w-3xl text-gray-600 text-lg">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {children}
      </div>
    </section>
  );
}
