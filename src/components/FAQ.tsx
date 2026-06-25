import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "Do you offer mobile detailing?", a: "Yes, we are a fully mobile detailing service. We come to your home, office, or preferred location with all the equipment needed to perform a premium detail." },
  { q: "How long does a full detail take?", a: "A complete detail typically takes between 3 to 5 hours depending on the size and condition of the vehicle. We prioritize quality over speed to ensure showroom-level results." },
  { q: "Can you remove seat stains?", a: "Absolutely. We use professional-grade extractors and stain removers to treat and lift even the toughest stains from fabric seats and carpets." },
  { q: "Do you clean trucks and SUVs?", a: "Yes, we handle vehicles of all sizes, including heavy-duty trucks, lifted SUVs, and family minivans." },
  { q: "Do you offer ceramic coatings?", a: "Yes! We offer professional ceramic coating packages that provide long-lasting hydrophobic protection, incredible gloss, and easier maintenance." },
  { q: "How do I book an appointment?", a: "You can book directly through our scheduling link at heygoldie.com, fill out the quote form on this site, or call us at (956) 706-1732." },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 relative bg-charcoal">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2 
            className="font-display text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            FREQUENTLY ASKED <span className="text-sunset">QUESTIONS</span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div 
                key={i}
                className={`bg-white/5 border rounded-sm overflow-hidden transition-colors ${isOpen ? 'border-sunset' : 'border-white/10 hover:border-white/20'}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span className="font-display font-black italic uppercase tracking-tighter text-lg md:text-xl pr-8">{faq.q}</span>
                  <ChevronDown 
                    className={`shrink-0 text-sunset transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-warm-white/70 font-bold uppercase tracking-widest text-[10px] leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
