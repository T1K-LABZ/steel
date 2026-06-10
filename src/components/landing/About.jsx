import { CheckCircle2 } from "lucide-react";
import { WORKSHOP_IMAGE, SERVICES } from "../../lib/data";

export default function About() {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="py-20 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="lg:col-span-6 reveal">
            <div className="relative">
              <div className="relative overflow-hidden rounded-[2rem]">
                <img
                  src={WORKSHOP_IMAGE}
                  alt="Professional steel fabricator examining custom railing in a Nairobi workshop"
                  className="w-full h-[480px] md:h-[600px] object-cover"
                />
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -right-4 md:-right-8 bg-[#2B2B2B] text-white rounded-2xl px-6 py-5 shadow-2xl border border-white/5 max-w-[220px]">
                <div className="font-heading font-extrabold text-3xl md:text-4xl text-[#C58B2A]">
                  12+
                </div>
                <div className="text-white/75 text-sm mt-1">
                  Years crafting steel across Nairobi
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="lg:col-span-6 reveal reveal-delay-1">
            <span className="inline-block text-[#C58B2A] font-semibold text-sm uppercase tracking-[0.18em]">
              About Us
            </span>
            <h2 className="mt-3 font-heading font-extrabold text-[#2B2B2B] text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.05] tracking-tight">
              Steel built to last. <br />
              <span className="text-[#C58B2A]">Designed</span> to be admired.
            </h2>
            <p className="mt-6 text-[#1F1F1F]/75 text-base md:text-lg leading-relaxed">
              We are a Nairobi-based steel fabrication studio specialising in
              modern, architectural metalwork. From bold entrance gates and
              cantilever balconies to delicate stainless steel railings — every
              piece we build is engineered for Kenyan conditions and finished
              to a standard you'd expect from the world's best.
            </p>
            <p className="mt-4 text-[#1F1F1F]/75 text-base md:text-lg leading-relaxed">
              We work with homeowners, architects, developers and businesses
              across Nairobi and the surrounding counties. Our workshop in
              Industrial Area is open for site visits by appointment.
            </p>

            <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-3">
              {SERVICES.map((s) => (
                <li
                  key={s}
                  className="flex items-center gap-2.5 text-[#1F1F1F] text-sm md:text-base"
                  data-testid={`about-service-${s.toLowerCase().replace(/\s/g, "-")}`}
                >
                  <CheckCircle2
                    size={18}
                    className="text-[#C58B2A] flex-shrink-0"
                    strokeWidth={2.4}
                  />
                  <span className="font-medium">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
