import Hero from "./components/home/Hero";
import About from "./components/home/About";
import Statistics from "./components/home/Statistics";
import Services from "./components/home/Services";
import WhyChooseUs from "./components/home/WhyChooseUs";
import Projects from "./components/home/Projects";
import Industries from "./components/home/Industries";
import Process from "./components/home/Process";
import Clients from "./components/home/Clients";
import ContactCTA from "./components/home/ContactCTA";
import ContactForm from "./components/home/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Statistics />
      <Services />
      <WhyChooseUs />
      <Projects />
      <Industries />
      <Process />
      <Clients />
      <ContactCTA />
      <ContactForm />
    </>
  );
}