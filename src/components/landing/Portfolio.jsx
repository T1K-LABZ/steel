import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { CATEGORIES, PORTFOLIO } from "../../lib/data";

export default function Portfolio() {
  const [active, setActive] = useState("All");

  const items = useMemo(
    () => (active === "All" ? PORTFOLIO : PORTFOLIO.filter((p) => p.category === active)),
    [active]
  );

  return (
    <section
      id="portfolio"
      data-testid="portfolio-section"
      className="py-20 md:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div className="reveal max-w-2xl">
            <span className="inline-block text-[#C58B2A] font-semibold text-sm uppercase tracking-[0.18em]">
              Portfolio
            </span>
            <h2 className="mt-3 font-heading font-extrabold text-[#2B2B2B] text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.05] tracking-tight">
              A small selection of <br />
              <span className="text-[#C58B2A]">recent</span> work.
            </h2>
            <p className="mt-5 text-[#1F1F1F]/70 text-base md:text-lg leading-relaxed">
              Custom gates, balconies, staircases and commercial installations
              delivered across Ruiru, Juja & Nairobi.
            </p>
          </div>

          {/* Category filters */}
          <div
            className="reveal reveal-delay-1 flex gap-2 overflow-x-auto no-scrollbar -mx-6 px-6 md:mx-0 md:px-0 pb-1"
            role="tablist"
            data-testid="portfolio-filters"
          >
            {CATEGORIES.map((c) => {
              const isActive = c === active;
              return (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  data-testid={`portfolio-filter-${c.toLowerCase()}`}
                  className={`flex-shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-all border ${
                    isActive
                      ? "bg-[#2B2B2B] text-white border-[#2B2B2B]"
                      : "bg-transparent text-[#2B2B2B] border-[#B0B7C3]/60 hover:border-[#2B2B2B]"
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>

        {/* Bento grid */}
        <div className="portfolio-grid mt-12 grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6 auto-rows-[260px] md:auto-rows-[300px]">
          {items.map((p, i) => {
            // Asymmetric layout
            const span =
              p.size === "lg"
                ? "md:col-span-7 md:row-span-2"
                : i % 5 === 1
                ? "md:col-span-5"
                : i % 5 === 2
                ? "md:col-span-7"
                : i % 5 === 3
                ? "md:col-span-5"
                : "md:col-span-6";

            return (
              <article
                key={p.id}
                data-testid={`portfolio-item-${p.id}`}
                className={`portfolio-card group relative overflow-hidden rounded-2xl bg-[#2B2B2B] reveal ${span}`}
                style={{
                  animationDelay: `${(i % 6) * 60}ms`,
                  "--stack-index": i,
                }}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/90 via-[#1a1a1a]/15 to-transparent" />
                <div className="absolute inset-0 p-6 md:p-7 flex flex-col justify-between">
                  <span className="self-start inline-flex items-center rounded-full bg-white/12 backdrop-blur-md text-white text-xs font-medium px-3 py-1 border border-white/15">
                    {p.category}
                  </span>
                  <div className="flex items-end justify-between gap-4">
                    <h3 className="font-heading font-bold text-white text-xl md:text-2xl tracking-tight">
                      {p.title}
                    </h3>
                    <div className="h-10 w-10 rounded-full bg-[#C58B2A] text-white flex items-center justify-center transition-transform group-hover:rotate-45">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
