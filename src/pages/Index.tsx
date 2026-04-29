import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Collections from "@/components/Collections";
import BridalShowcase from "@/components/BridalShowcase";
import WhyUs from "@/components/WhyUs";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  useEffect(() => {
    document.title = "Royal Spark · Premium  Jewellery";
    const meta = document.querySelector('meta[name="description"]');
    const content =
      "Premium Jewellery store in Jaipur — bridal sets, bangles, earrings, necklace sets, velvet chudi, cosmetics & more. PAN India delivery.";
    if (meta) meta.setAttribute("content", content);
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = content;
      document.head.appendChild(m);
    }
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Collections />
      <BridalShowcase />
      <WhyUs />
      <CTASection />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default Index;
