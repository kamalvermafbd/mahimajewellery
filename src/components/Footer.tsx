
import { Phone, MapPin, MessageCircle, Instagram, Facebook } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background pt-20 pb-8">
    <div className="container grid md:grid-cols-4 gap-12 mb-16">
      <div className="md:col-span-2">
        
        <p className="text-background/65 font-light leading-relaxed max-w-md">
          Premium jewellery from the heart of Jaipur. Specialising in bridal, wedding,
          fashion and traditional collections for retailers across India.
        </p>
        <div className="flex gap-3 mt-6">
          {[Instagram, Facebook, MessageCircle].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="w-10 h-10 border border-gold/40 flex items-center justify-center hover:bg-gold transition-colors"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-serif text-xl mb-5 text-gold-light">Catalogue</h4>
        <ul className="space-y-3 text-sm text-background/70 font-light">
          {["Bridal Sets", "Necklace Sets", "Earrings", "Bangles", "Velvet Chudi", "Cosmetics"].map((x) => (
            <li key={x}><a href="#collections" className="hover:text-gold transition-colors">{x}</a></li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-serif text-xl mb-5 text-gold-light">Contact</h4>
        <ul className="space-y-4 text-sm text-background/70 font-light">
          <li className="flex gap-3"><Phone className="w-4 h-4 text-gold mt-0.5" /> +91 99999 99999</li>
          <li className="flex gap-3"><MapPin className="w-4 h-4 text-gold mt-0.5" /> Jaipur, India</li>
          <li>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 mt-2 text-gold hover:text-gold-light transition-colors"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Enquiry
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div className="container pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-background/50 tracking-wider">
      <p>© {new Date().getFullYear()} Royal Spark Jewels. All rights reserved.</p>
      <p className="uppercase">Premium Jewellery · Ajmer</p>
    </div>
  </footer>
);

export default Footer;
