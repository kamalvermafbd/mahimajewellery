import { Truck, ShieldCheck, Gem, Headset, Package, BadgePercent } from "lucide-react";

const features = [
  { icon: Gem, title: "Premium Quality", desc: "Hand-inspected pieces with consistent finish across every order." },
  { icon: BadgePercent, title: "Best Wholesale Rates", desc: "Direct factory pricing with attractive bulk discounts." },
  { icon: Truck, title: "PAN India Shipping", desc: "Safe, insured dispatch to every state in India." },
  { icon: Package, title: "Bulk Stock Ready", desc: "Large inventory always available — no waiting for production." },
  { icon: ShieldCheck, title: "Trusted by 5K+ Retailers", desc: "Long-term relationships with shops, boutiques & dealers." },
  { icon: Headset, title: "Personal Support", desc: "WhatsApp catalogue, image previews and dedicated assistance." },
];

const WhyUs = () => (
  <section id="about" className="py-24 md:py-32">
    <div className="container">
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <span className="text-xs tracking-[0.3em] uppercase text-gold-dark">Why Star Fashion</span>
        <div className="gold-divider w-24 mx-auto my-4" />
        <h2 className="font-serif text-4xl md:text-6xl text-foreground mb-5">
          The <span className="italic text-gold-gradient">Wholesale</span> Advantage
        </h2>
        <p className="text-muted-foreground text-lg font-light">
          A trusted partner for retailers, resellers and bridal stores across India.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border luxury-border">
        {features.map((f) => (
          <div
            key={f.title}
            className="bg-background p-8 lg:p-10 group hover:bg-secondary transition-colors duration-500"
          >
            <div className="w-14 h-14 rounded-full bg-gold-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <f.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-serif text-2xl text-foreground mb-3">{f.title}</h3>
            <p className="text-muted-foreground font-light leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUs;
