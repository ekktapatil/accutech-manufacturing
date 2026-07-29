import industries from "@/app/data/industries";
import Card from "../ui/Card";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import EngineeringBackground from "../ui/EngineeringBackground";
import {
  FaBuilding,
  FaIndustry,
  FaWarehouse,
  FaCity,
  FaTools,
  FaCogs,
} from "react-icons/fa";

const icons = [
  FaBuilding,
  FaIndustry,
  FaWarehouse,
  FaCity,
  FaTools,
  FaCogs,
];

export default function Industries() {
  return (
    <section className="relative overflow-hidden py-28"
     style={{
    backgroundImage: "url('/images/backgrounds/section-blueprint.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}>
      <EngineeringBackground />

      {/* Engineering Background */}

      <div className="absolute inset-0 -z-10">

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(15,23,42,.18) 1px, transparent 1px),
              linear-gradient(90deg, rgba(15,23,42,.18) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="absolute right-0 top-0 h-[380px] w-[380px] rounded-full bg-orange-500/5 blur-[120px]" />

      </div>

      <Container>

        <SectionTitle
          subtitle="INDUSTRIES"
          title="Industries We Serve"
        />

               <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {industries.map((industry, index) => {
            const Icon = icons[index];

            return (
              <div
                key={industry.id}
                className="group rounded-[30px] border border-slate-200 bg-white/80 backdrop-blur-md shadow-lg transition-all duration-500 hover:-translate-y-3 hover:border-orange-300 hover:shadow-[0_25px_60px_rgba(15,23,42,.18)]"
              >

                <Card>

                  {/* Icon */}

                  <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl border border-orange-200 bg-orange-50 transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-600">

                    <Icon className="text-4xl text-orange-600 transition-all duration-300 group-hover:text-white" />

                  </div>

                  {/* Title */}

                  <h3 className="mb-4 text-2xl font-bold text-slate-900 transition group-hover:text-orange-600">
                    {industry.title}
                  </h3>

                  {/* Description */}

                  <p className="leading-8 text-slate-600">
                    {industry.description}
                  </p>

                  {/* Footer */}

                  </Card>

              </div>
            );
          })}

        </div>

      </Container>

    </section>
  );
}