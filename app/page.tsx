import Hero from "./components/home/Hero";
import Projects from "./components/home/Projects";
import About from "./components/home/About";
import Services from "./components/home/Services";
import WhyChooseUs from "./components/home/WhyChooseUs";
import Industries from "./components/home/Industries";
import Process from "./components/home/Process";
import Clients from "./components/home/Clients";
import ContactForm from "./components/home/ContactForm";



export default function Home() {
  return (
    <>
     <main className="premium-bg">
       <Hero />
      <Projects />
      <About />
      <Services />
      <WhyChooseUs />
      <Industries />
      <Process />
      <Clients />
      <ContactForm />
      </main>
    </>
  );
}