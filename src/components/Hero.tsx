import hero from "@/assets/hero-bridal.jpg";
import { MessageCircle, Sparkles } from "lucide-react";

const WHATSAPP =
  "https://wa.me/919928388987?text=Hello%20Star%20Fashion%20Ajmer%2C%20I%27m%20interested%20in%20bridal%20wholesale%20catalogue.";

const Hero = () => (
  <section
    id="home"
    className="relative min-h-[100vh] flex items-center overflow-hidden pt-[260px] md:pt-[280px]"
  >
    {/* Hero Background Image - warmer + richer premium look */}
    <img
      src={hero}
      alt="Bridal jewellery collection by Star Fashion Ajmer"
      width={1600}
      height={1200}
     className="absolute inset-0 w-full h-full object-cover object-center brightness-[1.08] contrast-[1.08] saturate-[1.12] sepia-[0.05] opacity-80"
    />

    {/* Luxury warm golden overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#fff8ef]/35 via-[#f8ead0]/15 to-transparent lg:via-[#f4d28a]/8 lg:to-transparent" />

    {/* Bottom premium soft fade */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#f8efe0]/10" />

    <div className="container relative z-10 py-16 md:py-24">
      <div className="max-w-3xl animate-fade-up">
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-12 bg-gold" />

          <span className="text-[11px] tracking-[0.35em] uppercase text-maroon font-semibold flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            Premium Bridal Collection · Ajmer
          </span>

          <span className="h-px w-12 bg-gold" />
        </div>

        <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-maroon-deep mb-8 drop-shadow-[0_2px_8px_hsl(var(--ivory)/0.6)]">
          Crafted for the
          <br />
         <span className="italic font-display text-gold-shine font-bold drop-shadow-[0_3px_8px_rgba(0,0,0,0.22)] brightness-110">
            MODERN BRIDE
          </span>
        </h1>

        <div className="flex items-center gap-4 mb-10">
  <span className="h-[2px] w-10 bg-gold" />

  <p className="text-lg md:text-2xl text-maroon font-bold tracking-[0.06em] uppercase drop-shadow-[0_2px_6px_rgba(0,0,0,0.18)]">
    Premium Quality
    <span className="text-gold mx-2">|</span>
    Latest Designs
    <span className="text-gold mx-2">|</span>
    Trusted by Retailers
  </p>
</div>

        <div className="flex flex-wrap gap-4">
          <a
            href="#collections"
            className="group inline-flex items-center gap-3 px-10 py-4 bg-maroon-gradient text-gold-light border border-gold/60 text-xs uppercase tracking-[0.3em] font-bold shadow-luxury hover:shadow-gold transition-all duration-500 hover:translate-y-[-2px]"
          >
            View Catalogue
          </a>

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-3 px-10 py-4 bg-gold-gradient text-maroon-deep text-xs uppercase tracking-[0.3em] font-bold hover:shadow-gold transition-all duration-500"
          >
            <MessageCircle className="w-4 h-4" />
            Enquire on WhatsApp
          </a>
        </div>

        <div className="mt-14 grid grid-cols-3 gap-6 max-w-md">
          {[
            { n: "5K+", l: "Retailers" },
            { n: "100+", l: "Designs" },
            { n: "PAN", l: "India Delivery" },
          ].map((s) => (
            <div key={s.l} className="border-l-2 border-gold pl-4">
              <div className="font-display font-bold text-3xl md:text-4xl text-maroon-deep">
                {s.n}
              </div>

              <div className="text-[10px] uppercase tracking-[0.25em] text-maroon-light mt-1 font-semibold">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 animate-float">
      <span className="text-[10px] tracking-[0.3em] uppercase text-maroon-light">
        Scroll
      </span>

      <div className="h-12 w-px bg-gold/60" />
    </div>
  </section>
);

export default Hero;
