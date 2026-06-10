import {
  ShieldCheck,
  Hammer,
  Compass,
  CalendarClock,
  MapPin,
  Wrench,
} from "lucide-react";
import { FEATURES } from "../../lib/data";

const ICONS = {
  "shield-check": ShieldCheck,
  hammer: Hammer,
  compass: Compass,
  "calendar-clock": CalendarClock,
  "map-pin": MapPin,
  wrench: Wrench,
};

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      data-testid="why-us-section"
      className="py-20 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl reveal">
          <span className="inline-block text-[#C58B2A] font-semibold text-sm uppercase tracking-[0.18em]">
            Why Choose Us
          </span>
          <h2 className="mt-3 font-heading font-extrabold text-[#2B2B2B] text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.05] tracking-tight">
            The details that make <br />
            our work <span className="text-[#C58B2A]">stand apart.</span>
          </h2>
        </div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {FEATURES.map((f, i) => {
            const Icon = ICONS[f.icon] || ShieldCheck;
            return (
              <div
                key={f.title}
                data-testid={`feature-card-${i}`}
                className={`reveal group relative overflow-hidden rounded-2xl bg-white border border-[#B0B7C3]/30 p-7 md:p-8 hover:border-[#C58B2A]/60 hover:shadow-[0_12px_40px_-12px_rgba(43,43,43,0.18)] transition-all`}
                style={{ animationDelay: `${(i % 6) * 70}ms` }}
              >
                <div className="h-12 w-12 rounded-xl bg-[#2B2B2B] text-[#C58B2A] flex items-center justify-center mb-5 transition-colors group-hover:bg-[#C58B2A] group-hover:text-white">
                  <Icon size={22} strokeWidth={2.2} />
                </div>
                <h3 className="font-heading font-bold text-[#2B2B2B] text-xl md:text-[1.375rem] tracking-tight">
                  {f.title}
                </h3>
                <p className="mt-3 text-[#1F1F1F]/70 text-sm md:text-[0.95rem] leading-relaxed">
                  {f.body}
                </p>

                {/* Number badge */}
                <span className="absolute top-6 right-6 font-heading font-bold text-[#B0B7C3]/40 text-2xl">
                  0{i + 1}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
