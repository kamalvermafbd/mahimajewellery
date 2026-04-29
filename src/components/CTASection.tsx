import { MessageCircle, Phone } from "lucide-react";

const WA = "https://wa.me/919928388987?text=Hello%20Star%20Fashion%20Ajmer%2C%20I%20want%20to%20become%20a%20wholesale%20dealer.";

const CTASection = () => (
  <section id="contact" className="py-24 md:py-32 bg-ivory-gradient">
    <div className="container">
      <div className="relative max-w-5xl mx-auto bg-foreground text-background p-12 md:p-20 text-center overflow-hidden shadow-luxury">
        <div className="absolute inset-0 bg-gold-gradient opacity-20" />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-gold rounded-full blur-3xl opacity-30" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gold-dark rounded-full blur-3xl opacity-30" />

        <div className="relative">
          <span className="text-xs tracking-[0.3em] uppercase text-gold-light">Wholesale Enquiry</span>
          <div className="gold-divider w-24 mx-auto my-5" />
          <h2 className="font-serif text-4xl md:text-6xl mb-6 leading-tight">
            Ready to grow your <br className="hidden md:block" />
            <span className="italic text-gold-gradient">jewellery business?</span>
          </h2>
          <p className="text-background/75 text-lg font-light max-w-2xl mx-auto mb-10">
            Send a quick WhatsApp message and our team will share the latest catalogue, prices and bulk
            offers — typically within minutes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WA}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold-gradient text-primary-foreground text-sm uppercase tracking-[0.2em] hover:shadow-gold transition-all duration-500 hover:translate-y-[-2px]"
            >
              <MessageCircle className="w-4 h-4" /> Send Enquiry on WhatsApp
            </a>
            <a
              href="tel:9928388987"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-gold/60 text-background text-sm uppercase tracking-[0.2em] hover:bg-gold hover:text-primary-foreground transition-all duration-500"
            >
              <Phone className="w-4 h-4" /> +91 99283 88987
            </a>
          </div>

          <p className="mt-8 text-xs tracking-[0.2em] uppercase text-background/50">
            Star Fashion Ajmer · Rajasthan, India
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default CTASection;
