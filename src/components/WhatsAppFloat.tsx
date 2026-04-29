import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => (
  <a
    href="https://wa.me/919999999999?text=Hello%20Star%20Fashion%20Ajmer%2C%20I%27m%20interested%20in%20wholesale%20catalogue."
    target="_blank"
    rel="noopener"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-6 right-6 z-40 group"
  >
    <span className="absolute inset-0 rounded-full bg-gold animate-ping opacity-40" />
    <span className="relative w-14 h-14 rounded-full bg-gold-gradient text-primary-foreground flex items-center justify-center shadow-luxury hover:scale-110 transition-transform duration-300">
      <MessageCircle className="w-6 h-6" />
    </span>
  </a>
);

export default WhatsAppFloat;
