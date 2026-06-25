import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ShieldCheck } from "lucide-react";

export function CeramicCoating() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Animations based on scroll
  const saturation = useTransform(scrollYProgress, [0.3, 0.6], ["grayscale(100%) brightness(0.7)", "grayscale(0%) brightness(1.1)"]);
  const reflectionOpacity = useTransform(scrollYProgress, [0.4, 0.7], [0, 0.8]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <section ref={containerRef} className="h-[150vh] relative bg-charcoal">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
        
        {/* Car Image with animated saturation */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1619682817481-e994891cd1f5?q=80&w=2070&auto=format&fit=crop")',
            filter: saturation 
          }}
        />

        {/* Orange Glow Reflection Overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-tr from-sunset/40 to-transparent mix-blend-overlay"
          style={{ opacity: reflectionOpacity }}
        />

        {/* Floating Water Beads (simulated with radial gradients) */}
        <motion.div 
           className="absolute inset-0 opacity-50"
           style={{ opacity: reflectionOpacity }}
        >
          {[...Array(30)].map((_, i) => (
             <motion.div
               key={i}
               className="absolute rounded-full bg-white/20 backdrop-blur-md border border-white/40 shadow-[0_4px_10px_rgba(0,0,0,0.5)]"
               style={{
                 width: Math.random() * 8 + 4 + 'px',
                 height: Math.random() * 8 + 4 + 'px',
                 left: `${Math.random() * 100}%`,
                 top: `${Math.random() * 100}%`,
               }}
               animate={{
                 y: [0, 100],
                 opacity: [0, 1, 0],
               }}
               transition={{
                 duration: Math.random() * 2 + 2,
                 repeat: Infinity,
                 ease: "linear",
                 delay: Math.random() * 2,
               }}
             />
          ))}
        </motion.div>

        {/* Gradient fade at bottom for transition */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-end pb-32">
          <motion.div 
            className="max-w-3xl"
            style={{ y: textY, opacity: textOpacity }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-white/5 border border-white/10 mb-6">
              <ShieldCheck className="text-sunset" size={20} />
              <span className="text-warm-white font-bold tracking-widest uppercase text-[10px]">Ceramic Coating</span>
            </div>
            
            <h2 className="font-display text-5xl md:text-8xl font-black italic uppercase tracking-tighter mb-6 leading-[0.85] drop-shadow-xl text-warm-white">
              PROTECTION THAT MAKES PAINT <span className="text-sunset text-glow">POP.</span>
            </h2>
            
            <p className="text-[10px] font-bold uppercase tracking-widest text-warm-white/90 max-w-2xl drop-shadow-lg mb-8 leading-relaxed">
              Hydrophobic finish. Long-lasting gloss. Easier maintenance. Shield your investment from the elements.
            </p>

            <button className="px-10 py-5 bg-gradient-to-r from-sunset to-coral rounded-sm font-black italic uppercase text-black transition-transform hover:scale-105 shadow-[0_0_30px_rgba(255,99,33,0.5)]">
              Get a Coating Quote
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
