import Image from "next/image";
import Link from "next/link";

export default function LaserCutting() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-6xl mx-auto px-6">

        <Image
          src="/projects/laser-cutting.jpg"
          alt="Laser Cutting"
          width={1200}
          height={650}
          className="rounded-2xl shadow-xl w-full object-cover"
        />

        <h1 className="text-5xl font-bold mt-10 text-slate-900">
          CNC Laser Cutting
        </h1>

        <p className="mt-6 text-lg text-gray-600 leading-8">
          Accutech Manufacturing provides high precision CNC laser cutting
          services for industrial applications. We manufacture components
          with excellent dimensional accuracy and smooth edge finishing.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-12">

          <div className="bg-white rounded-xl shadow p-8">
            <h2 className="text-2xl font-bold mb-5">Features</h2>

            <ul className="space-y-3 text-gray-600">
              <li>✔ High Precision</li>
              <li>✔ Burr Free Cutting</li>
              <li>✔ Fast Production</li>
              <li>✔ CAD Based Programming</li>
              <li>✔ Custom Designs</li>
              <li>✔ Bulk Manufacturing</li>
            </ul>

          </div>

          <div className="bg-white rounded-xl shadow p-8">
            <h2 className="text-2xl font-bold mb-5">Materials</h2>

            <ul className="space-y-3 text-gray-600">
              <li>• Mild Steel</li>
              <li>• Stainless Steel</li>
              <li>• Aluminium</li>
              <li>• Brass</li>
              <li>• Copper</li>
            </ul>

          </div>

        </div>

        <div className="mt-12 flex gap-4">

          <Link
            href="/#contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700"
          >
            Get Quote
          </Link>

          <Link
            href="/"
            className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white"
          >
            Back
          </Link>

        </div>

      </div>
    </section>
  );
}