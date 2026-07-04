import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { SITE, waLink } from "../../lib/site";
import { SERVICES } from "../../lib/data";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: SERVICES[0],
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const onChange = (e) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    try {
      await axios.post(`${API}/quote`, form);
      toast.success("Thanks! We'll be in touch shortly.", {
        description: "Your request has been received.",
      });
      setForm({
        name: "",
        email: "",
        phone: "",
        service: SERVICES[0],
        message: "",
      });
    } catch (err) {
      const detail =
        err?.response?.data?.detail ||
        "Couldn't send your request. Please try WhatsApp instead.";
      toast.error("Something went wrong", { description: String(detail).slice(0, 160) });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="py-20 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl reveal">
          <span className="inline-block text-[#C58B2A] font-semibold text-sm uppercase tracking-[0.18em]">
            Get in Touch
          </span>
          <h2 className="mt-3 font-heading font-extrabold text-[#2B2B2B] text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.05] tracking-tight">
            Let's build something <br />
            <span className="text-[#C58B2A]">remarkable</span> together.
          </h2>
          <p className="mt-5 text-[#1F1F1F]/70 text-base md:text-lg leading-relaxed">
            Tell us about your project — gates, balconies, staircases or
            something fully custom. We respond within one business day.
          </p>
        </div>

        <div className="mt-12 md:mt-16 grid lg:grid-cols-12 gap-8">
          {/* Contact info */}
          <aside className="lg:col-span-5 reveal">
            <div className="bg-[#2B2B2B] text-white rounded-2xl p-7 md:p-9">
              <h3 className="font-heading font-bold text-xl md:text-2xl">
                Contact details
              </h3>
              <p className="mt-2 text-white/65 text-sm md:text-base">
                Visit our workshop or reach out — we love a good design conversation.
              </p>

              <ul className="mt-7 space-y-5">
                <li className="flex items-start gap-4">
                  <span className="h-10 w-10 rounded-lg bg-white/8 border border-white/10 flex items-center justify-center text-[#C58B2A] flex-shrink-0">
                    <Phone size={18} />
                  </span>
                  <div>
                    <div className="text-white/55 text-xs uppercase tracking-wider">Phone</div>
                    <a
                      href={`tel:${SITE.phoneRaw}`}
                      data-testid="contact-phone-link"
                      className="font-medium hover:text-[#C58B2A] transition-colors"
                    >
                      {SITE.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="h-10 w-10 rounded-lg bg-white/8 border border-white/10 flex items-center justify-center text-[#C58B2A] flex-shrink-0">
                    <Mail size={18} />
                  </span>
                  <div>
                    <div className="text-white/55 text-xs uppercase tracking-wider">Email</div>
                    <a
                      href={`mailto:${SITE.email}`}
                      data-testid="contact-email-link"
                      className="font-medium hover:text-[#C58B2A] transition-colors break-all"
                    >
                      {SITE.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="h-10 w-10 rounded-lg bg-white/8 border border-white/10 flex items-center justify-center text-[#C58B2A] flex-shrink-0">
                    <MapPin size={18} />
                  </span>
                  <div>
                    <div className="text-white/55 text-xs uppercase tracking-wider">Workshop</div>
                    <div className="font-medium">{SITE.address}</div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="h-10 w-10 rounded-lg bg-white/8 border border-white/10 flex items-center justify-center text-[#C58B2A] flex-shrink-0">
                    <Clock size={18} />
                  </span>
                  <div>
                    <div className="text-white/55 text-xs uppercase tracking-wider">Hours</div>
                    <div className="font-medium">{SITE.hours}</div>
                  </div>
                </li>
              </ul>

              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-whatsapp-cta"
                className="mt-8 inline-flex w-full justify-center items-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1fb555] text-white px-6 py-3.5 font-semibold transition-all hover:-translate-y-0.5 shadow-md"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
            </div>

            {/* Map */}
            <div
              data-testid="contact-map"
              className="mt-6 rounded-2xl overflow-hidden border border-[#B0B7C3]/30 h-[280px]"
            >
              <iframe
                title="Shiloki Steel Solution location"
                src={SITE.mapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </aside>

          {/* Form */}
          <form
            onSubmit={onSubmit}
            data-testid="contact-form"
            className="lg:col-span-7 reveal reveal-delay-1 bg-white rounded-2xl border border-[#B0B7C3]/30 p-7 md:p-10"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Full name" htmlFor="name">
                <input
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  value={form.name}
                  onChange={onChange}
                  data-testid="form-name"
                  className="input-field w-full rounded-xl border border-[#B0B7C3]/40 bg-[#F7F7F5] px-4 py-3 text-[#1F1F1F] placeholder:text-[#1F1F1F]/40"
                  placeholder="e.g. Wanjiku Mwangi"
                />
              </Field>

              <Field label="Phone" htmlFor="phone">
                <input
                  id="phone"
                  name="phone"
                  required
                  type="tel"
                  value={form.phone}
                  onChange={onChange}
                  data-testid="form-phone"
                  className="input-field w-full rounded-xl border border-[#B0B7C3]/40 bg-[#F7F7F5] px-4 py-3 text-[#1F1F1F] placeholder:text-[#1F1F1F]/40"
                  placeholder="+254 7XX XXX XXX"
                />
              </Field>

              <Field label="Email" htmlFor="email">
                <input
                  id="email"
                  name="email"
                  required
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  data-testid="form-email"
                  className="input-field w-full rounded-xl border border-[#B0B7C3]/40 bg-[#F7F7F5] px-4 py-3 text-[#1F1F1F] placeholder:text-[#1F1F1F]/40"
                  placeholder="you@email.com"
                />
              </Field>

              <Field label="Service" htmlFor="service">
                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={onChange}
                  data-testid="form-service"
                  className="input-field w-full rounded-xl border border-[#B0B7C3]/40 bg-[#F7F7F5] px-4 py-3 text-[#1F1F1F] appearance-none"
                >
                  {SERVICES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <div className="mt-5">
              <Field label="Tell us about your project" htmlFor="message">
                <textarea
                  id="message"
                  name="message"
                  required
                  minLength={5}
                  rows={5}
                  value={form.message}
                  onChange={onChange}
                  data-testid="form-message"
                  className="input-field w-full rounded-xl border border-[#B0B7C3]/40 bg-[#F7F7F5] px-4 py-3 text-[#1F1F1F] placeholder:text-[#1F1F1F]/40 resize-none"
                  placeholder="Dimensions, design preferences, location, timeline…"
                />
              </Field>
            </div>

            <div className="mt-7 flex flex-col sm:flex-row sm:items-center gap-4">
              <button
                type="submit"
                disabled={submitting}
                data-testid="form-submit"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#C58B2A] hover:bg-[#b07a22] disabled:opacity-60 disabled:cursor-not-allowed text-white px-7 py-3.5 font-semibold transition-all hover:-translate-y-0.5 shadow-md hover:shadow-lg"
              >
                {submitting ? "Sending…" : "Send Request"}
                {!submitting && (
                  <Send size={17} className="transition-transform group-hover:translate-x-0.5" />
                )}
              </button>
              <p className="text-sm text-[#1F1F1F]/60">
                Or call us directly —{" "}
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="font-semibold text-[#2B2B2B] hover:text-[#C58B2A]"
                >
                  {SITE.phone}
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="text-sm font-medium text-[#2B2B2B] mb-2 block">
        {label}
      </span>
      {children}
    </label>
  );
}
