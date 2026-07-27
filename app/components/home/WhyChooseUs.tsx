import features from "@/app/data/features";
import Card from "../ui/Card";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import {
  FaAward,
  FaClock,
  FaHandshake,
  FaIndustry,
  FaShieldAlt,
  FaTools,
} from "react-icons/fa";

const icons = [
  FaIndustry,
  FaAward,
  FaClock,
  FaTools,
  FaShieldAlt,
  FaHandshake,
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <SectionTitle
          subtitle="WHY CHOOSE US"
          title="Why Businesses Trust Accutech Manufacturing"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = icons[index];

            return (
              <Card key={feature.id}>
                <Icon className="mb-6 text-5xl text-orange-600" />

                <h3 className="mb-4 text-2xl font-bold">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}