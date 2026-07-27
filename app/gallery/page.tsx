import Image from "next/image";
import gallery from "@/app/data/gallery";

export default function GalleryPage() {
  return (
    <main>
      <section className="bg-slate-900 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-5xl font-bold">Project Gallery</h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
            Explore our completed fabrication, infrastructure and interior projects.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-2xl shadow-lg"
            >
              <Image
                src={item.image}
                alt={item.category}
                width={700}
                height={500}
                className="h-72 w-full object-cover transition duration-300 hover:scale-110"
              />

              <div className="bg-white p-5">
                <p className="font-semibold text-orange-600">
                  {item.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}