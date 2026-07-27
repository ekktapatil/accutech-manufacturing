import services from "@/app/data/services";
import Card from "../ui/Card";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { FaIndustry } from "react-icons/fa";

export default function Services() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <SectionTitle
          subtitle="OUR SERVICES"
          title="Engineering Solutions We Provide"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service.id}>
              <FaIndustry className="mb-6 text-5xl text-orange-600" />

              <h3 className="mb-4 text-xl font-bold text-slate-900">
                {service.title}
              </h3>

              <p className="text-gray-600">
                Professional engineering and turnkey execution
                tailored to your industrial and commercial needs.
              </p>

              <button className="mt-6 font-semibold text-orange-600 hover:text-orange-700">
                Learn More →
              </button>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}