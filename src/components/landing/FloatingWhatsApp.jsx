import { MessageCircle } from "lucide-react";
import { waLink } from "../../lib/site";

export default function FloatingWhatsApp() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      data-testid="whatsapp-fab"
      className="whatsapp-fab fixed bottom-5 right-5 md:bottom-7 md:right-7 z-50 inline-flex items-center justify-center h-14 w-14 md:h-16 md:w-16 rounded-full bg-[#25D366] hover:bg-[#1fb555] text-white shadow-2xl hover:scale-110 transition-transform"
    >
      <MessageCircle size={26} strokeWidth={2.2} />
    </a>
  );
}
