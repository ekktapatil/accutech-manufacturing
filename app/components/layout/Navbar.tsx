export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-orange-600">
          ACCUTECH
        </h1>

        <nav className="flex gap-8">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/projects">Projects</a>
          <a href="/gallery">Gallery</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}