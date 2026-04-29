import bangles from "@/assets/cat-bangles.jpg";
import earrings from "@/assets/cat-earrings.jpg";
import necklace from "@/assets/cat-necklace.jpg";
import bridal from "@/assets/cat-bridal.jpg";
import cosmetics from "@/assets/cat-cosmetics.jpg";
import hair from "@/assets/cat-hair.jpg";
import velvet from "@/assets/cat-velvet.jpg";
import { ArrowUpRight } from "lucide-react";

const items = [
  { img: bridal, name: "Bridal Sets", desc: "Heavy kundan & gold polish bridal collections", tag: "Bestseller" },
  { img: necklace, name: "Necklace Sets", desc: "Premium AD, kundan & temple sets", tag: "New" },
  { img: earrings, name: "Earrings", desc: "Jhumkas, chandbalis & contemporary studs", tag: "" },
  { img: bangles, name: "Bangles & Kadas", desc: "Gold polish, copper & traditional designs", tag: "" },
  { img: velvet, name: "Velvet Chudi", desc: "Wedding-ready velvet bangle stacks", tag: "Trending" },
  { img: hair, name: "Hair Accessories", desc: "Juda pins, clips & floral ornaments", tag: "" },
  { img: cosmetics, name: "Cosmetics", desc: "Bindi, sindoor, kajal & lip range", tag: "" },
];

const wa = (cat: string) =>
  `https://wa.me/919928388987?text=${encodeURIComponent(
    `Hello Star Fashion Ajmer, please share wholesale catalogue and price for ${cat}.`
  )}`;

const Collections = () => (
  <section id="collections" className="py-24 md:py-32 bg-ivory-gradient relative">
    <div className="absolute inset-x-0 top-0 gold-top-border opacity-60" />
    <div className="container">
      <div className="text-center mb-20 max-w-3xl mx-auto">
        <span className="text-[11px] tracking-[0.4em] uppercase text-maroon font-bold">
          Our Range
        </span>
        <div className="ornament-divider my-5 max-w-sm mx-auto">
          <span className="text-gold text-xl">❖</span>
        </div>
        <h2 className="font-display font-black text-5xl md:text-7xl text-maroon-deep mb-6 tracking-tight">
          THE <span className="italic text-gold-shine font-display">Catalogue</span>
        </h2>
        <p className="text-maroon-light text-lg font-serif italic">
          Hand-picked designs across every category retailers love. Wholesale prices,
          premium quality, consistent supply.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {items.map((item, i) => (
          <a
            key={item.name}
            href={wa(item.name)}
            target="_blank"
            rel="noopener"
            className="group relative bg-card overflow-hidden shadow-card-soft hover:shadow-luxury transition-all duration-700 luxury-border hover:border-gold hover:-translate-y-1"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            {/* Decorative top gold strip on hover */}
            <div className="absolute top-0 inset-x-0 h-[3px] bg-gold-gradient scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left z-10" />

            <div className="relative aspect-[4/5] overflow-hidden bg-muted">
              <img
                src={item.img}
                alt={item.name}
                width={900}
                height={1100}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
              />
              {item.tag && (
                <span className="absolute top-4 left-4 px-3 py-1.5 bg-maroon-deep text-[10px] tracking-[0.25em] uppercase text-gold-light font-bold border border-gold/50">
                  {item.tag}
                </span>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep/70 via-maroon-deep/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="p-7 flex items-start justify-between gap-4 bg-card border-t border-gold/20">
              <div>
                <h3 className="font-display font-bold text-2xl text-maroon-deep mb-2 group-hover:text-gold-dark transition-colors">
                  {item.name}
                </h3>
                <p className="text-sm text-maroon-light font-serif italic">{item.desc}</p>
              </div>
              <div className="shrink-0 w-11 h-11 rounded-full border border-gold/50 flex items-center justify-center text-gold-dark group-hover:bg-gold-gradient group-hover:text-maroon-deep group-hover:rotate-45 group-hover:border-gold transition-all duration-500">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Collections;
