import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import { MouseEvent } from "react";
import { Sparkles } from "lucide-react";

export function StainRemoval() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const maskImage = useMotionTemplate`radial-gradient(250px circle at ${mouseX}px ${mouseY}px, black 0%, transparent 100%)`;

  return (
    <section className="py-24 relative overflow-hidden bg-graphite/20">
      <div className="container mx-auto px-6 mb-12 text-center">
        <motion.div 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-white/5 border border-sunset/20 text-sunset mb-6 font-bold uppercase tracking-widest text-[10px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Sparkles size={16} /> Interactive Reveal
        </motion.div>
        <motion.h2 
          className="font-display text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          STAINS DON’T STAND A <span className="text-sunset">CHANCE.</span>
        </motion.h2>
        <motion.p 
          className="text-warm-white/70 font-bold uppercase tracking-widest text-[10px] max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          From everyday spills to tough seat stains, Precision Edge brings interiors back to life with deep cleaning and careful stain removal.
          <br/>
          <span className="text-sunset font-black italic mt-2 block tracking-widest">Hover to clean the seat.</span>
        </motion.p>
      </div>

      <div className="container mx-auto px-6 max-w-5xl">
        <div 
          className="relative h-[400px] md:h-[600px] rounded-sm overflow-hidden cursor-crosshair border border-warm-white/10 group shadow-2xl"
          onMouseMove={handleMouseMove}
        >
          {/* Dirty Background */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop")' }}
          >
            {/* Filter to make it look extra dirty/stained if needed */}
            <div className="absolute inset-0 bg-yellow-900/30 mix-blend-multiply" />
          </div>

          {/* Clean Overlay (Spotlight) */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: 'url("https://images.unsplash.com/photo-1600049216744-86dc8f828a2b?q=80&w=2070&auto=format&fit=crop")',
              maskImage: maskImage,
              WebkitMaskImage: maskImage,
            }}
          />

          {/* Overlay Text / Particles */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-500 bg-black/40">
             <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-sm border border-white/20 text-warm-white font-black italic uppercase tracking-tighter text-xl flex items-center gap-2">
               Reveal The Edge
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
