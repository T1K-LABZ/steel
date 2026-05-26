// Centralized site config
export const SITE = {
  brand: "Nairobi Steel Works",
  brandShort: "NSW",
  tagline: "Premium Steel Fabrication & Modern Metal Works in Nairobi",
  phone: "+254 712 345 678",
  phoneRaw: "+254712345678",
  whatsappRaw: "254712345678",
  email: "hello@nairobisteelworks.co.ke",
  address: "Industrial Area, Enterprise Road, Nairobi, Kenya",
  hours: "Mon – Sat · 8:00 – 18:00",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.35853317456!2d36.70730611787109!3d-1.3028617999999893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1700000000000",
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    tiktok: "https://tiktok.com",
  },
};

export const waLink = (msg = "Hello, I'd like a quote for steel fabrication work.") =>
  `https://wa.me/${SITE.whatsappRaw}?text=${encodeURIComponent(msg)}`;
