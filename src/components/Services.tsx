import { motion } from "motion/react";
import { Droplets, Sparkles, CarFront, Shield, PaintBucket, Sun } from "lucide-react";

const services = [
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Interior Deep Cleaning",
    desc: "Deep vacuuming, stain removal, surface cleaning, odor improvement, and a fresh cabin feel.",
  },
  {
    icon: <Droplets className="w-8 h-8" />,
    title: "Exterior Detail & Wash",
    desc: "Thorough hand wash, decontamination, wheel cleaning, and premium wax application for high gloss.",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Ceramic Coating",
    desc: "Long-lasting hydrophobic protection that makes your paint pop and keeps it cleaner for longer.",
  },
  {
    icon: <PaintBucket className="w-8 h-8" />,
    title: "Paint Enhancement",
    desc: "Machine polishing to remove light swirls and scratches, restoring depth and clarity to your paint.",
  },
  {
    icon: <CarFront className="w-8 h-8" />,
    title: "Complete Detail",
    desc: "The ultimate package. Interior reset and exterior enhancement for a true showroom finish.",
  },
  {
    icon: <Sun className="w-8 h-8" />,
    title: "Headlight Restoration",
    desc: "Remove yellowing and oxidation to restore clarity, improve nighttime visibility, and enhance the front-end look.",
  },
];

export function Services() {
  return (
    <section className="py-24 relative overflow-hidden">
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
          <button className="mt-6 md:mt-0 px-6 py-3 rounded-sm font-black uppercase italic text-sunset border border-sunset hover:bg-sunset hover:text-black transition-colors">
            View All Services
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              className="group bg-white/5 border border-white/10 p-8 rounded-xl relative overflow-hidden hover:bg-white/10 transition-colors duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="relative z-10">
                <div className="w-12 h-12 flex items-center justify-center text-sunset mb-4 group-hover:scale-110 transition-transform duration-500">
                  {svc.icon}
                </div>
                <h3 className="font-display text-xl font-black uppercase italic tracking-tighter mb-3">{svc.title}</h3>
                <p className="text-warm-white/50 text-[10px] font-bold uppercase tracking-tight leading-relaxed mb-6">
                  {svc.desc}
                </p>
                <div className="flex items-center text-sunset font-bold uppercase tracking-widest text-[10px] opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Learn More <motion.span className="ml-2" animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>→</motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
