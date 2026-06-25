import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { LoadingScreen } from "./components/LoadingScreen";
import { Hero } from "./components/Hero";
import { TrustBar } from "./components/TrustBar";
import { Reviews } from "./components/Reviews";
import { BeforeAfter } from "./components/BeforeAfter";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Process } from "./components/Process";
import { StainRemoval } from "./components/StainRemoval";
import { CeramicCoating } from "./components/CeramicCoating";
import { Gallery } from "./components/Gallery";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Booking } from "./components/Booking";
import { FAQ } from "./components/FAQ";
import { FinalCTA, Footer } from "./components/FinalCTA";
import { Phone, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-charcoal min-h-screen text-warm-white selection:bg-sunset/30 selection:text-white font-sans overflow-x-hidden">
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <Header />

      <main className={loading ? "h-screen overflow-hidden" : ""}>
        <Hero />
        <TrustBar />
        <Reviews />
        <BeforeAfter />
        <Services />
        <About />
        <Process />
        <StainRemoval />
        <CeramicCoating />
        <Gallery />
        <WhyChooseUs />
        <Booking />
        <FAQ />
        <FinalCTA />
        <Footer />
      </main>

      {/* Sticky Mobile CTA */}
      <AnimatePresence>
        {scrolled && (
          <motion.div 
            className="fixed bottom-6 left-0 right-0 z-50 flex justify-center gap-4 px-6 md:hidden pointer-events-none"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
          >
            <a 
              href="https://heygoldie.com" 
              target="_blank" 
              rel="noreferrer"
              className="flex-1 bg-gradient-to-r from-sunset to-coral py-3 px-4 rounded-full font-bold text-center shadow-lg pointer-events-auto flex items-center justify-center gap-2 text-sm"
            >
              <Calendar size={16} /> Book
            </a>
            <a 
              href="tel:9567061732" 
              className="w-12 h-12 bg-graphite border border-white/20 rounded-full shadow-lg pointer-events-auto flex items-center justify-center text-warm-white shrink-0"
            >
              <Phone size={20} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Background ambient layer */}
      <div className="fixed inset-0 pointer-events-none z-[-1] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02]" />
    </div>
  );
}
