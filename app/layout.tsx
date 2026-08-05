import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import BackToTop from "./components/layout/BackToTop";
import WhatsAppButton from "./components/layout/WhatsAppButton";
import CallButton from "./components/layout/CallButton";

export const metadata = {
  title: "Accutech Manufacturing",
  description: "Industrial Fabrication & Turnkey Engineering Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        <Navbar />

        {children}

        <Footer />

        {/* Floating Buttons */}

        <CallButton />

        <WhatsAppButton />

        <BackToTop />

      </body>
    </html>
  );
}