import { ArrowRight, ShieldCheck } from "lucide-react";
import { HERO_IMAGE } from "../../lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative pt-24 md:pt-28 pb-16 md:pb-24"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] min-h-[560px] md:min-h-[680px]">
          {/* Background image */}
          <img
            src={HERO_IMAGE}
            alt="Modern luxury home with premium black steel balconies and windows in Ruiru, Kenya"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/90 via-[#2B2B2B]/65 to-[#2B2B2B]/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/70 via-transparent to-transparent md:hidden" />

          {/* Content */}
          <div className="relative h-full px-6 md:px-14 lg:px-20 py-14 md:py-20 flex flex-col justify-between min-h-[560px] md:min-h-[680px]">
            <div className="reveal max-w-2xl">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/25 bg-white/5 backdrop-blur-sm text-white/90 text-xs md:text-sm font-medium">
                <ShieldCheck size={14} className="text-[#C58B2A]" />
                Trusted Ruiru & Juja Fabricators · Est. 2013
              </span>
            </div>

            <div className="reveal reveal-delay-1 max-w-3xl">
              <h1 className="font-heading font-extrabold text-white text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.05] tracking-tight">
                Premium Steel<br />
                Fabrication & Modern{" "}
                <span className="text-[#C58B2A]">Metal Works</span><br />
                in Ruiru & Juja.
              </h1>
              <p className="mt-6 md:mt-8 text-white/85 text-base md:text-lg max-w-xl leading-relaxed">
                Bespoke gates, balconies, staircases and stainless steel works
                — engineered for durability and finished to a premium standard.
              </p>

              <div className="mt-8 md:mt-10 flex flex-wrap items-center gap-3 md:gap-4">
                <a
                  href="#portfolio"
                  data-testid="hero-view-work-btn"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#C58B2A] hover:bg-[#b07a22] text-white px-7 py-3.5 text-sm md:text-base font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
                >
                  View Our Work
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </a>
                <a
                  href="#contact"
                  data-testid="hero-get-quote-btn"
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-7 py-3.5 text-sm md:text-base font-semibold transition-all"
                >
                  Get a Quote
                </a>
              </div>
            </div>

            {/* Bottom stats strip */}
            <div className="reveal reveal-delay-2 mt-12 md:mt-16">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/15 rounded-2xl overflow-hidden border border-white/15 backdrop-blur-md">
                {[
                  ["12+", "Years of craft"],
                  ["480+", "Projects delivered"],
                  ["Ruiru", "Kiambu County"],
                  ["5★", "Client rating"],
                ].map(([v, l]) => (
                  <div
                    key={l}
                    className="bg-[#2B2B2B]/55 px-5 py-5 md:py-6"
                  >
                    <div className="font-heading font-bold text-white text-2xl md:text-3xl">
                      {v}
                    </div>
                    <div className="text-white/70 text-xs md:text-sm mt-1">
                      {l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
