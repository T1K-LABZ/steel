import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { SITE } from "../../lib/site";

const NAV = [
  { label: "Work", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#F7F7F5]/85 backdrop-blur-xl border-b border-[#B0B7C3]/30"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between">
        <a
          href="#top"
          data-testid="brand-logo"
          className="flex items-center gap-2.5 group"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#2B2B2B] text-[#C58B2A] font-heading font-bold text-sm tracking-tight">
            NSW
          </span>
          <span className="font-heading font-bold text-[#2B2B2B] text-base md:text-lg tracking-tight hidden sm:inline">
            {SITE.brand}
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-9">
          {NAV.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                data-testid={`nav-link-${n.label.toLowerCase().replace(/\s/g, "-")}`}
                className="text-sm font-medium text-[#1F1F1F]/80 hover:text-[#C58B2A] transition-colors"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          data-testid="navbar-quote-btn"
          className="hidden md:inline-flex items-center rounded-full bg-[#C58B2A] hover:bg-[#b07a22] text-white px-5 py-2.5 text-sm font-semibold shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
        >
          Get a Quote
        </a>

        <button
          data-testid="mobile-menu-toggle"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg text-[#2B2B2B] hover:bg-[#2B2B2B]/5"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          data-testid="mobile-menu"
          className="md:hidden bg-[#F7F7F5]/95 backdrop-blur-xl border-t border-[#B0B7C3]/30"
        >
          <ul className="px-6 py-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-[#1F1F1F] font-medium border-b border-[#B0B7C3]/20"
                  data-testid={`mobile-nav-${n.label.toLowerCase().replace(/\s/g, "-")}`}
                >
                  {n.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block text-center rounded-full bg-[#C58B2A] text-white px-5 py-3 font-semibold"
                data-testid="mobile-quote-btn"
              >
                Get a Quote
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
