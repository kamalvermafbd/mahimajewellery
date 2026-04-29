import { useState, useEffect } from "react";
import { Menu, X, Phone, MapPin, MessageCircle } from "lucide-react";
import logo from "@/assets/logo-star.png";

const links = [
  { href: "#home", label: "Home" },
  { href: "#collections", label: "Collections" },
  { href: "#contact", label: "Contact Us" },
];

const WHATSAPP =
  "https://wa.me/919999999999?text=Hello%20Star%20Fashion%20Ajmer%2C%20I%27m%20interested%20in%20wholesale%20enquiry.";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* Decorative gold top border */}
      <div className="gold-top-border" />

      {/* Premium top branding band */}
      <div
        className={`bg-ivory-gradient border-b border-gold/30 transition-all duration-500 overflow-hidden ${
          scrolled ? "max-h-0 opacity-0 border-b-0" : "max-h-[530px] md:max-h-[260px] opacity-100"
        }`}
      >
        <div className="container py-5 md:py-7">
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] items-center gap-6">
            {/* LEFT: Logo */}
            <a href="#home" className="flex items-center justify-center md:justify-start shrink-0">
              <img
                src={logo}
                alt="Star Fashion Ajmer Logo"
                className="h-28 md:h-32 lg:h-36 w-auto drop-shadow-[0_6px_10px_hsl(var(--gold-dark)/0.35)]"
              />
            </a>

            {/* CENTER: Brand */}
            <div className="text-center px-2">
             <h1 className="font-cinzel font-black text-4xl md:text-6xl lg:text-7xl tracking-[0.11em] text-gold-shine leading-tight drop-shadow-[0_3px_10px_rgba(0,0,0,0.15)]">
  ROYAL SPARK
</h1>

<p className="font-serif italic text-maroon font-semibold text-lg md:text-2xl lg:text-3xl mt-4">
  Most Elegant Ornament for A Lady
</p>
              <div className="ornament-divider my-2 max-w-md mx-auto">
                <span className="text-gold text-lg">❖</span>
              </div>
              <p className="text-sm md:text-base uppercase tracking-[0.18em] text-maroon font-semibold">
                Wholesaler of Artificial Jewellery, Hair Accessories & Many More
              </p>
            </div>

            {/* RIGHT: Address */}
            <div className="flex flex-col items-center text-center md:items-end md:text-right text-base md:text-base font-semibold text-maroon/90 leading-relaxed w-full max-w-[340px] md:max-w-[260px] mx-auto md:mx-0 mt-3 md:mt-0">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-gold mt-0.5 shrink-0" />
                <div>
                  Bombay Market
                  <br />
                 JAIPUR
                </div>
              </div>
              <a
                href="tel:9999999999"
                className="flex items-center gap-2 mt-3 text-maroon hover:text-gold-dark transition-colors font-semibold"
              >
                <Phone className="w-3.5 h-3.5 text-gold" /> +91 99999 99999
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* NAV BAR — dark maroon with gold accents */}
      <div
        className={`bg-maroon-gradient border-y border-gold/40 transition-shadow duration-500 ${
          scrolled ? "shadow-luxury" : ""
        }`}
      >
        <div className="container flex items-center justify-between h-14 md:h-16">
          {scrolled && (
            <a href="#home" className="flex items-center gap-3">
              <img src={logo} alt="Star Fashion" className="h-9 w-auto" />
              <span className="hidden sm:inline font-cinzel font-bold tracking-[0.2em] text-gold-light text-sm">
                STAR FASHION
              </span>
            </a>
          )}

          <nav className="hidden lg:flex items-center gap-12 mx-auto">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[11px] uppercase tracking-[0.3em] text-ivory hover:text-gold-light transition-colors relative after:absolute after:inset-x-0 after:-bottom-2 after:h-px after:bg-gold-light after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-4 py-2 border border-gold/60 text-gold-light text-[10px] uppercase tracking-[0.25em] hover:bg-gold hover:text-maroon-deep transition-all duration-500"
            >
              <MessageCircle className="w-3.5 h-3.5" /> WhatsApp Enquiry
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener"
              className="px-5 py-2.5 bg-gold-gradient text-maroon-deep text-[10px] font-bold uppercase tracking-[0.25em] hover:shadow-gold transition-all duration-500"
            >
              Enquire Now
            </a>
          </div>

          <button
            className="lg:hidden p-2 text-gold-light ml-auto"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-maroon-deep border-t border-gold/30 animate-fade-in">
          <div className="container py-6 flex flex-col gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-ivory hover:text-gold-light tracking-[0.2em] uppercase text-xs"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener"
              className="mt-2 px-5 py-3 bg-gold-gradient text-maroon-deep text-xs uppercase tracking-[0.25em] text-center font-bold"
            >
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
