import { motion } from "motion/react";

const trustItems = [
  { label: "Google Rating", value: "4.9★" },
  { label: "Google Reviews", value: "35" },
  { label: "Detail-Focused", value: "100%" },
  { label: "Open Until", value: "8 PM" },
  { label: "Convenience", value: "Mobile" },
];

export function TrustBar() {
  return (
    <section className="relative z-20 -mt-10 mb-20 px-4 md:px-8">
      <div className="container mx-auto">
        <motion.div 
          className="glass-glow rounded-sm p-6 md:p-8 flex flex-wrap justify-between gap-8 md:gap-4 items-center bg-white/5 border border-white/10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {trustItems.map((item, i) => (
            <div key={i} className="flex-1 flex flex-col items-center text-center min-w-[120px]">
              <motion.span 
                className="font-display text-3xl md:text-5xl font-black italic text-transparent bg-clip-text bg-gradient-to-br from-warm-white to-warm-white/60 mb-2 drop-shadow-none"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
              >
                {item.value}
              </motion.span>
              <span className="text-[10px] font-bold text-warm-white/50 uppercase tracking-widest">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
