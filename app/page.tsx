import Hero from "./components/home/Hero";
import Projects from "./components/home/Projects";
import Statistics from "./components/home/Statistics";
import Services from "./components/home/Services";
import WhyChooseUs from "./components/home/WhyChooseUs";
import About from "./components/home/About";
import Industries from "./components/home/Industries";
import Process from "./components/home/Process";
import Clients from "./components/home/Clients";
import ContactForm from "./components/home/ContactForm";


export default function Home() {
  return (
    <>
       <Hero />
      <Projects />
      <Statistics />
      <Services />
      <WhyChooseUs />
      <About />
      <Industries />
      <Process />
      <Clients />
      <ContactForm />
      </>
  );
}