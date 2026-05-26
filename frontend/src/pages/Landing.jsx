import { useEffect } from "react";
import useReveal from "../hooks/useReveal";
import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import About from "../components/landing/About";
import Portfolio from "../components/landing/Portfolio";
import WhyChooseUs from "../components/landing/WhyChooseUs";
import Testimonials from "../components/landing/Testimonials";
import Contact from "../components/landing/Contact";
import Footer from "../components/landing/Footer";
import FloatingWhatsApp from "../components/landing/FloatingWhatsApp";
import { SITE } from "../lib/site";

export default function Landing() {
  const ref = useReveal();

  useEffect(() => {
    document.title = `${SITE.brand} — ${SITE.tagline}`;
    // Basic meta description for SEO
    const desc = document.querySelector('meta[name="description"]');
    const content =
      "Premium steel fabrication in Nairobi — bespoke gates, balconies, staircases, windows, doors, stainless steel works and custom metal fabrication. Quality craftsmanship, timely delivery.";
    if (desc) {
      desc.setAttribute("content", content);
    } else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = content;
      document.head.appendChild(m);
    }
  }, []);

  return (
    <div ref={ref} className="bg-[#F7F7F5] text-[#1F1F1F]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
