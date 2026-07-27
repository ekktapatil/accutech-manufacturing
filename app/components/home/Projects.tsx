import Image from "next/image";
import projects from "@/app/data/projects";
import Card from "../ui/Card";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

export default function Projects() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <SectionTitle
          subtitle="OUR PROJECTS"
          title="Featured Projects"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.id}>
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="h-60 w-full rounded-xl object-cover"
              />

              <p className="mt-5 text-sm font-semibold uppercase text-orange-600">
                {project.category}
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                {project.title}
              </h3>

              <button className="mt-6 rounded-lg bg-orange-600 px-5 py-3 font-semibold text-white hover:bg-orange-700">
                View Project
              </button>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}