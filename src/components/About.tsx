import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export function About() {
  const badges = [
    "Punctual", "Professional", "Attention to Detail", "Premium Products", "Customer Loved"
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <motion.div 
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-sm overflow-hidden aspect-[4/5] shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2070&auto=format&fit=crop" 
                alt="Detailing process" 
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-80" />
              
              {/* Animated light leak */}
              <motion.div 
                className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-br from-sunset/20 to-transparent pointer-events-none mix-blend-overlay"
                animate={{ rotate: [0, 90, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </div>
            
            {/* Floating badge */}
            <motion.div 
              className="absolute -bottom-8 -right-8 lg:bottom-12 lg:-right-12 glass-glow p-6 rounded-sm max-w-[200px]"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="font-display text-4xl font-black italic text-sunset mb-1">100%</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-warm-white/80 leading-tight">Detail-focused on every single vehicle.</div>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black uppercase italic tracking-tighter mb-6 leading-[0.9]">
              DETAILING WITH <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sunset to-coral">PRECISION, PASSION, AND PRIDE.</span>
            </h2>
            
            <p className="text-[10px] font-bold uppercase tracking-widest text-warm-white/70 mb-6 leading-relaxed">
              At Precision Edge Auto Detail, every vehicle is treated like it is our own. From deep interior cleaning to exterior polishing, paint protection, and ceramic coatings, the goal is simple: restore, protect, and deliver results customers are proud to show off.
            </p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-warm-white/70 mb-10 leading-relaxed">
              Led by Ricky, Precision Edge is known for punctuality, professionalism, communication, and serious attention to detail.
            </p>

            <div className="flex flex-wrap gap-4">
              {badges.map((badge, i) => (
                <motion.div 
                  key={i} 
                  className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-sm border border-white/10 text-[10px] font-bold uppercase tracking-widest"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.5 }}
                >
                  <CheckCircle2 className="w-4 h-4 text-tropical" />
                  {badge}
                </motion.div>
              ))}
            </div>
            
            <button className="mt-12 px-10 py-5 bg-gradient-to-r from-sunset to-coral rounded-sm font-black italic uppercase text-black overflow-hidden flex items-center gap-2 transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,99,33,0.4)]">
              Schedule Your Detail
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
