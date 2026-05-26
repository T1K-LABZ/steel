import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "../../lib/data";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      data-testid="testimonials-section"
      className="py-20 md:py-32 bg-[#2B2B2B] text-white relative overflow-hidden"
    >
      {/* subtle accents */}
      <div className="absolute -top-32 -right-24 h-72 w-72 rounded-full bg-[#C58B2A]/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-[#B0B7C3]/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className="max-w-3xl reveal">
          <span className="inline-block text-[#C58B2A] font-semibold text-sm uppercase tracking-[0.18em]">
            Testimonials
          </span>
          <h2 className="mt-3 font-heading font-extrabold text-white text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.05] tracking-tight">
            Words from clients <br />
            we're <span className="text-[#C58B2A]">proud</span> to serve.
          </h2>
        </div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={t.name}
              data-testid={`testimonial-card-${i}`}
              className="reveal relative bg-white/[0.04] border border-white/10 rounded-2xl p-7 md:p-9 backdrop-blur-sm hover:bg-white/[0.07] transition-colors"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <Quote
                size={36}
                className="text-[#C58B2A]/70 mb-4"
                strokeWidth={1.5}
              />
              <blockquote className="font-heading text-white text-lg md:text-[1.375rem] leading-snug tracking-tight">
                “{t.body}”
              </blockquote>
              <figcaption className="mt-7 flex items-center justify-between gap-4">
                <div>
                  <div className="font-semibold text-white">{t.name}</div>
                  <div className="text-white/55 text-sm">{t.role}</div>
                </div>
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: t.rating }).map((_, k) => (
                    <Star
                      key={k}
                      size={16}
                      fill="#C58B2A"
                      className="text-[#C58B2A]"
                      strokeWidth={0}
                    />
                  ))}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
