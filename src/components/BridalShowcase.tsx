import bridal from "@/assets/cat-bridal.jpg";
import { Crown, MessageCircle } from "lucide-react";

const WA = "https://wa.me/919928388987?text=Hello%20Star%20Fashion%20Ajmer%2C%20please%20share%20bridal%20%26%20wedding%20wholesale%20catalogue.";

const BridalShowcase = () => (
  <section id="bridal" className="relative py-24 md:py-32 bg-foreground text-background overflow-hidden">
    <div className="absolute inset-0 opacity-10 bg-gold-gradient" />
    <div className="container relative grid lg:grid-cols-2 gap-16 items-center">
      <div className="relative">
        <div className="absolute -inset-4 bg-gold-gradient opacity-30 blur-3xl" />
        <img
          src={bridal}
          alt="Bridal jewellery wholesale collection"
          width={900}
          height={1100}
          loading="lazy"
          className="relative w-full aspect-[4/5] object-cover shadow-luxury"
        />
        <div className="absolute -bottom-6 -right-6 hidden md:block bg-background text-foreground p-6 max-w-[220px] shadow-luxury">
          <Crown className="w-6 h-6 text-gold mb-2" />
          <p className="font-serif text-lg leading-tight">Wedding Season Ready</p>
          <p className="text-xs text-muted-foreground mt-1">Bulk orders shipped within 48 hrs</p>
        </div>
      </div>

      <div>
        <span className="text-xs tracking-[0.3em] uppercase text-gold-light">Hero Collection</span>
        <div className="gold-divider w-24 my-4" />
        <h2 className="font-serif text-4xl md:text-6xl mb-6 leading-[1.05]">
          Bridal & <span className="italic text-gold-gradient">Wedding</span> Collection
        </h2>
        <p className="text-background/70 text-lg font-light leading-relaxed mb-8">
          Our flagship range — meticulously crafted heavy bridal sets, choker combinations, kundan
          masterpieces and complete wedding jewellery solutions. Trusted by hundreds of bridal stores
          across India for the season's most in-demand designs.
        </p>

        <ul className="grid grid-cols-2 gap-4 mb-10">
          {[
            "Heavy Bridal Sets",
            "Choker Combos",
            "Kundan Collections",
            "Maang Tikka & Naths",
            "Hathphool & Kamarbandh",
            "Complete Wedding Sets",
          ].map((f) => (
            <li key={f} className="flex items-center gap-3 text-sm text-background/85">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" /> {f}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-4">
          <a
            href={WA}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gold-gradient text-primary-foreground text-sm uppercase tracking-[0.2em] hover:shadow-gold transition-all duration-500"
          >
            <MessageCircle className="w-4 h-4" /> Get Wholesale Price
          </a>
          <a
            href={WA}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-3 px-8 py-4 border border-gold/60 text-background text-sm uppercase tracking-[0.2em] hover:bg-gold hover:text-primary-foreground transition-all duration-500"
          >
            Become a Dealer
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default BridalShowcase;
