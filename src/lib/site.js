// Centralized site config
export const SITE = {
  brand: "Shiloki Steel Solution",
  brandShort: "SSS",
  tagline: "Premium Steel Fabrication & Modern Metal Works in Nairobi",
  phone: "+254 721 825 911",
  phoneRaw: "+254721825911",
  whatsappRaw: "254721825911",
  email: "Kiloshk016@gmail.com",
  address: "Ruiru, Kiambu County, Kenya",
  hours: "Mon – Sat · 7:30 – 18:00",
  mapsEmbed:
    "https://www.google.com/maps?q=-1.157423,36.934788&z=15&output=embed",
  mapsLink:
    "https://www.google.com/maps/?q=-1.157423,36.934788",
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    tiktok: "https://tiktok.com",
  },
};

export const waLink = (msg = "Hello, I'd like a quote for steel fabrication work.") =>
  `https://wa.me/${SITE.whatsappRaw}?text=${encodeURIComponent(msg)}`;
