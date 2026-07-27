import industries from "@/app/data/industries";
import Card from "../ui/Card";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
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
    <section className="py-24 bg-white">
      <Container>
        <SectionTitle
          subtitle="INDUSTRIES"
          title="Industries We Serve"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => {
            const Icon = icons[index];

            return (
              <Card key={industry.id}>
                <Icon className="mb-6 text-5xl text-orange-600" />

                <h3 className="mb-4 text-2xl font-bold">
                  {industry.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {industry.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}