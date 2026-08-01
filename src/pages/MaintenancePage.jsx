import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { SITE, waLink } from "../lib/site";

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-[#F7F7F5] flex flex-col font-body text-[#2B2B2B]">
      <main className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="max-w-lg w-full text-center">
          {/* Logo / Brand */}
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl tracking-tight">
            Shiloki
            <span className="text-[#C58B2A]"> Steel </span>
            Solution
          </h1>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#C58B2A]" />

          {/* Status Badge */}
          <div className="mt-10 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C58B2A]/10 border border-[#C58B2A]/20">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C58B2A] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#C58B2A]" />
            </span>
            <span className="text-sm font-semibold text-[#C58B2A]">
              Site under maintenance
            </span>
          </div>

          {/* Message */}
          <h2 className="mt-6 font-heading font-bold text-2xl sm:text-3xl leading-tight">
            We're building<br />something new.
          </h2>
          <p className="mt-4 text-[#2B2B2B]/65 text-base leading-relaxed">
            Our website is currently undergoing maintenance. We'll be back
            shortly with a fresh new look. In the meantime, reach us directly
            — we're still open for business.
          </p>

          {/* Contact Details */}
          <div className="mt-10 bg-white rounded-2xl border border-[#B0B7C3]/20 p-6 text-left">
            <h3 className="font-heading font-bold text-lg mb-4">
              Get in touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="h-9 w-9 rounded-lg bg-[#2B2B2B] flex items-center justify-center text-[#C58B2A] flex-shrink-0">
                  <Phone size={16} />
                </span>
                <div>
                  <div className="text-xs text-[#2B2B2B]/50 uppercase tracking-wider">
                    Phone
                  </div>
                  <a
                    href={`tel:${SITE.phoneRaw}`}
                    className="font-semibold hover:text-[#C58B2A] transition-colors"
                  >
                    {SITE.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="h-9 w-9 rounded-lg bg-[#2B2B2B] flex items-center justify-center text-[#C58B2A] flex-shrink-0">
                  <MapPin size={16} />
                </span>
                <div>
                  <div className="text-xs text-[#2B2B2B]/50 uppercase tracking-wider">
                    Location
                  </div>
                  <div className="font-semibold">{SITE.address}</div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="h-9 w-9 rounded-lg bg-[#2B2B2B] flex items-center justify-center text-[#C58B2A] flex-shrink-0">
                  <Clock size={16} />
                </span>
                <div>
                  <div className="text-xs text-[#2B2B2B]/50 uppercase tracking-wider">
                    Hours
                  </div>
                  <div className="font-semibold">{SITE.hours}</div>
                </div>
              </li>
            </ul>

            {/* WhatsApp CTA */}
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1fb555] text-white px-6 py-3.5 font-semibold transition-all hover:-translate-y-0.5 shadow-md"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-[#2B2B2B]/50">
        &copy; {new Date().getFullYear()} Shiloki Steel Solution. All rights
        reserved.
      </footer>
    </div>
  );
}
