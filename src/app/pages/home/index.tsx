import Hero from "./sections/hero";
import About from "./sections/about";
import Skills from "./sections/skills";
import Portfolio from "./sections/portofolio";
import Experience from "./sections/experience";
import Testimonials from "./sections/testimonial";
import Contact from "./sections/contact";
import Navigation from "@/app/components/Navigation";

export default function HomeView() {
  return (
    <div>
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Experience />
      <Testimonials />
      <Contact />
    </div>
  );
}