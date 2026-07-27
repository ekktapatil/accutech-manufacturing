import Image from "next/image";
import Link from "next/link";

export default function SheetMetal() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-6xl mx-auto px-6">

        <Image
          src="/projects/sheet-metal.jpg"
          alt="Sheet Metal"
          width={1200}
          height={650}
          className="rounded-2xl shadow-xl w-full object-cover"
        />

        <h1 className="text-5xl font-bold mt-10">
          Sheet Metal Fabrication
        </h1>

        <p className="mt-6 text-lg text-gray-600 leading-8">
          We manufacture custom sheet metal products for industrial,
          commercial and OEM applications using advanced fabrication
          equipment and experienced professionals.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-12">

          <div className="bg-white rounded-xl shadow p-8">

            <h2 className="text-2xl font-bold mb-5">
              Services
            </h2>

            <ul className="space-y-3 text-gray-600">
              <li>✔ Custom Fabrication</li>
              <li>✔ Industrial Cabinets</li>
              <li>✔ Machine Covers</li>
              <li>✔ Enclosures</li>
              <li>✔ Structural Frames</li>
              <li>✔ Assembly</li>
            </ul>

          </div>

          <div className="bg-white rounded-xl shadow p-8">

            <h2 className="text-2xl font-bold mb-5">
              Industries Served
            </h2>

            <ul className="space-y-3 text-gray-600">
              <li>• Automobile</li>
              <li>• Pharma</li>
              <li>• Construction</li>
              <li>• Electrical</li>
              <li>• Food Processing</li>
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