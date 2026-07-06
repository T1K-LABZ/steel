import { Instagram, Facebook, Music2 } from "lucide-react";
import { SITE } from "../../lib/site";

export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="bg-[#1a1a1a] text-white pt-16 md:pt-20 pb-8"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#C58B2A] text-white font-heading font-bold text-sm tracking-tight">
                SSS
              </span>
              <span className="font-heading font-bold text-lg tracking-tight">
                {SITE.brand}
              </span>
            </div>
            <p className="mt-5 text-white/60 text-sm md:text-base leading-relaxed max-w-md">
              Premium steel fabrication for homes, estates and businesses
              across Ruiru, Juja & Nairobi. Bespoke design, engineered durability, finished
              with care.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[
                { href: SITE.socials.instagram, Icon: Instagram, name: "instagram" },
                { href: SITE.socials.facebook, Icon: Facebook, name: "facebook" },
                { href: SITE.socials.tiktok, Icon: Music2, name: "tiktok" },
              ].map(({ href, Icon, name }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`footer-social-${name}`}
                  className="h-10 w-10 rounded-full bg-white/5 border border-white/10 hover:bg-[#C58B2A] hover:border-[#C58B2A] transition-colors flex items-center justify-center"
                  aria-label={name}
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-heading font-bold text-white/90 text-sm uppercase tracking-[0.18em]">
              Explore
            </h4>
            <ul className="mt-5 space-y-3">
              {[
                ["Work", "#portfolio"],
                ["About", "#about"],
                ["Why Us", "#why-us"],
                ["Testimonials", "#testimonials"],
                ["Contact", "#contact"],
              ].map(([l, h]) => (
                <li key={h}>
                  <a
                    href={h}
                    data-testid={`footer-link-${l.toLowerCase().replace(/\s/g, "-")}`}
                    className="text-white/65 hover:text-[#C58B2A] transition-colors text-sm md:text-base"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-heading font-bold text-white/90 text-sm uppercase tracking-[0.18em]">
              Reach Us
            </h4>
            <ul className="mt-5 space-y-3 text-white/65 text-sm md:text-base">
              <li>{SITE.address}</li>
              <li>
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="hover:text-[#C58B2A] transition-colors"
                >
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="hover:text-[#C58B2A] transition-colors break-all"
                >
                  {SITE.email}
                </a>
              </li>
              <li>{SITE.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-7 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="text-white/45 text-xs md:text-sm">
            © {new Date().getFullYear()} {SITE.brand}. All rights reserved.
          </p>
          <p className="text-white/35 text-xs md:text-sm">
            Crafted with care in Nairobi, Kenya.
          </p>
        </div>
      </div>
    </footer>
  );
}
