import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Droplets, Sparkles, CarFront, Shield, PaintBucket, Sun, X } from "lucide-react";

const services = [
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Interior Deep Cleaning",
    desc: "Deep vacuuming, stain removal, surface cleaning, odor improvement, and a fresh cabin feel.",
    modalDesc: "We go beyond a simple wipe down. Our interior deep cleaning reaches into every crevice, extracting deeply embedded dirt and completely refreshing your cabin's atmosphere. Say goodbye to tough stains and lingering odors. Your interior will feel brand new again.",
    vibe: "from-blue-600/20 to-purple-600/20",
    borderVibe: "border-blue-500/50",
    iconColor: "text-blue-400"
  },
  {
    icon: <Droplets className="w-8 h-8" />,
    title: "Exterior Detail & Wash",
    desc: "Thorough hand wash, decontamination, wheel cleaning, and premium wax application for high gloss.",
    modalDesc: "A multi-stage exterior wash that safely removes road grime, bugs, and environmental fallout. We pamper your paint with safe, scratch-free washing techniques and finish with a premium wax that enhances gloss and provides a sacrificial layer of protection against the elements.",
    vibe: "from-cyan-600/20 to-blue-600/20",
    borderVibe: "border-cyan-500/50",
    iconColor: "text-cyan-400"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Ceramic Coating",
    desc: "Long-lasting hydrophobic protection that makes your paint pop and keeps it cleaner for longer.",
    modalDesc: "The ultimate armor for your vehicle. Ceramic coating forms a semi-permanent bond with your clear coat, offering unrivaled hydrophobic properties, chemical resistance, and a candy-like gloss that lasts for years, not weeks. Washing your car becomes effortless.",
    vibe: "from-sunset/20 to-coral/20",
    borderVibe: "border-sunset/50",
    iconColor: "text-sunset"
  },
  {
    icon: <PaintBucket className="w-8 h-8" />,
    title: "Paint Enhancement",
    desc: "Machine polishing to remove light swirls and scratches, restoring depth and clarity to your paint.",
    modalDesc: "Restore the true color and depth of your vehicle's paint. By safely and meticulously polishing away micro-marring, wash scratches, and oxidation, we bring back the brilliant reflection and clarity your car had on day one.",
    vibe: "from-emerald-600/20 to-teal-600/20",
    borderVibe: "border-emerald-500/50",
    iconColor: "text-emerald-400"
  },
  {
    icon: <CarFront className="w-8 h-8" />,
    title: "Complete Detail",
    desc: "The ultimate package. Interior reset and exterior enhancement for a true showroom finish.",
    modalDesc: "Experience the complete transformation. We combine our intensive deep interior cleaning and our rigorous exterior detailing into a single, comprehensive package. We leave absolutely no detail untouched. It's the ultimate reset button your car deserves.",
    vibe: "from-amber-600/20 to-orange-600/20",
    borderVibe: "border-amber-500/50",
    iconColor: "text-amber-400"
  },
  {
    icon: <Sun className="w-8 h-8" />,
    title: "Headlight Restoration",
    desc: "Remove yellowing and oxidation to restore clarity, improve nighttime visibility, and enhance the front-end look.",
    modalDesc: "Don't let foggy, yellowed headlights ruin your car's look or compromise your nighttime safety. We wet-sand, compound, and polish oxidized lenses back to crystal clear perfection, then seal them with a UV coating to prevent future degradation.",
    vibe: "from-yellow-600/20 to-amber-600/20",
    borderVibe: "border-yellow-500/50",
    iconColor: "text-yellow-400"
  },
];

export function Services() {
  const [activeModal, setActiveModal] = useState<number | null>(null);

  useEffect(() => {
    if (activeModal !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeModal]);

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <motion.h2 
              className="font-display text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              PREMIUM <span className="text-sunset">SERVICES</span>
            </motion.h2>
            <p className="text-warm-white/70 font-bold uppercase tracking-widest text-[10px]">Everything you need to restore, protect, and maintain your vehicle's value.</p>
          </div>
          <a href="https://book.heygoldie.com/Precision-Edge-Auto-Detail/checkout" target="_blank" rel="noreferrer" className="inline-flex mt-6 md:mt-0 px-6 py-3 rounded-sm font-black uppercase italic text-sunset border border-sunset hover:bg-sunset hover:text-black transition-colors">
            View All Services
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              className="group bg-white/5 border border-white/10 p-8 rounded-xl relative overflow-hidden hover:bg-white/10 transition-colors duration-500 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => setActiveModal(i)}
            >
              <div className="relative z-10">
                <div className={`w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 ${svc.iconColor || 'text-sunset'}`}>
                  {svc.icon}
                </div>
                <h3 className="font-display text-xl font-black uppercase italic tracking-tighter mb-3">{svc.title}</h3>
                <p className="text-warm-white/50 text-[10px] font-bold uppercase tracking-tight leading-relaxed mb-6">
                  {svc.desc}
                </p>
                <div className={`flex items-center font-bold uppercase tracking-widest text-[10px] opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 ${svc.iconColor || 'text-sunset'}`}>
                  Learn More <motion.span className="ml-2" animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>→</motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Modals */}
        <AnimatePresence>
          {activeModal !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 z-[100]"
            >
              <div 
                className="absolute inset-0 bg-black/95 backdrop-blur-xl"
                onClick={() => setActiveModal(null)}
              />
              
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className={`relative w-full max-w-2xl bg-carbon border ${services[activeModal].borderVibe} rounded-2xl overflow-hidden shadow-2xl z-10`}
              >
                {/* Modal Header with Vibe Gradient */}
                <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${services[activeModal].vibe} opacity-40`} />
                
                <div className="relative p-8">
                  <button
                    onClick={() => setActiveModal(null)}
                    className="absolute top-4 right-4 p-2 bg-white/5 rounded-full hover:bg-white/20 transition-colors text-warm-white z-20"
                  >
                    <X size={20} />
                  </button>

                  <div className={`w-16 h-16 flex items-center justify-center mb-6 rounded-full bg-white/5 border ${services[activeModal].borderVibe} ${services[activeModal].iconColor}`}>
                    {services[activeModal].icon}
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-display font-black italic uppercase text-warm-white tracking-tighter mb-4">
                    {services[activeModal].title}
                  </h3>
                  
                  <p className="text-warm-white/80 font-bold uppercase tracking-widest text-xs md:text-sm leading-relaxed mb-8">
                    {services[activeModal].modalDesc}
                  </p>
                  
                  <a 
                    href="https://book.heygoldie.com/Precision-Edge-Auto-Detail/checkout" 
                    target="_blank" 
                    rel="noreferrer"
                    className={`inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r ${services[activeModal].vibe.replace('/20', '').replace('/20', '')} border ${services[activeModal].borderVibe} rounded-sm font-black uppercase italic text-warm-white hover:opacity-80 transition-opacity`}
                  >
                    Book This Service
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
